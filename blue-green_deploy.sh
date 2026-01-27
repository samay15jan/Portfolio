#!/bin/bash
set -e

IMAGE="ghcr.io/samay15jan/portfolio:latest"

BLUE_NAME="portfolio-blue"
GREEN_NAME="portfolio-green"

BLUE_PORT=3001
GREEN_PORT=3002

NGINX_BACKEND="/etc/nginx/backend.conf"
NGINX_CONF_DIR="/etc/nginx/conf.d"
NGINX_SITE="$NGINX_CONF_DIR/portfolio.conf"

echo "Starting deployment..."

# Starting/configuring Nginx and Docker
check_service() {
    SERVICE=$1

    # check if service is installed
    if ! systemctl list-unit-files | grep -q "^${SERVICE}.service"; then
        echo "$SERVICE is not installed"
        exit 1
    fi

    # check if service is running
    if ! systemctl is-active --quiet "$SERVICE"; then
        echo "Starting $SERVICE..."
        sudo systemctl start "$SERVICE"
        sleep 1
        
        if [ "$SERVICE" = "nginx" ]; then    

            if [ ! -f "$NGINX_BACKEND" ]; then
                echo "server 127.0.0.1:3001;" | sudo tee $NGINX_BACKEND > /dev/null
                sudo rm /etc/nginx/conf.d/default.conf
            fi
            
            if [ ! -f "$NGINX_SITE" ]; then
                sudo bash -c 'cat > /etc/nginx/conf.d/portfolio.conf << "EOF"
                upstream portfolio_backend {
                    include /etc/nginx/backend.conf;
                }

                server {
                    listen 80 default_server;
                    server_name _;

                    location / {
                        proxy_pass http://portfolio_backend;
                        proxy_set_header Host $host;
                        proxy_set_header X-Real-IP $remote_addr;
                        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                    }
                }
                EOF'
            fi
        fi

        # verify it started
        if ! systemctl is-active --quiet "$SERVICE"; then
            sudo echo "$SERVICE failed to start"
            exit 1
        fi
    fi
    echo "$SERVICE is running"
}

check_service nginx
check_service docker

# Detect active container
if docker ps --format '{{.Names}}' | grep -q "$BLUE_NAME"; then
    ACTIVE="blue"
elif docker ps --format '{{.Names}}' | grep -q "$GREEN_NAME"; then
    ACTIVE="green"
else
    ACTIVE="none"
fi

echo "Active container: $ACTIVE"

# First deploy
if [ "$ACTIVE" = "none" ]; then
    echo "First deployment..."

    docker pull $IMAGE

    docker run -d \
      --name $BLUE_NAME \
      -p $BLUE_PORT:3000 \
      --restart unless-stopped \
      $IMAGE

    echo "server 127.0.0.1:$BLUE_PORT;" | sudo tee $NGINX_BACKEND > /dev/null
    sudo systemctl reload nginx

    echo "Deployment complete."
    exit 0
fi

# Determine new target
if [ "$ACTIVE" = "blue" ]; then
    NEW="green"
    NEW_PORT=$GREEN_PORT
    OLD_NAME=$BLUE_NAME
else
    NEW="blue"
    NEW_PORT=$BLUE_PORT
    OLD_NAME=$GREEN_NAME
fi

NEW_NAME="portfolio-$NEW"

echo "Deploying new container: $NEW_NAME"

# Pull image
docker pull $IMAGE

# Run new container
docker rm -f $NEW_NAME 2>/dev/null || true
docker run -d \
  --name $NEW_NAME \
  -p $NEW_PORT:3000 \
  --restart unless-stopped \
  $IMAGE

# Health check loop
sleep 5
echo "Waiting for health check..."

for i in {1..20}; do
    if curl -sf http://localhost:$NEW_PORT | grep -q samay15jan; then
        echo "Health check passed."
        break
    fi
    sleep 2
done

if ! curl -sf http://localhost:$NEW_PORT | grep -q samay15jan; then
    echo "Health check failed. Rolling back."

    docker stop $NEW_NAME
    docker rm $NEW_NAME
    exit 1
fi

# Switch traffic
echo "Switching traffic to $NEW"

echo "server 127.0.0.1:$NEW_PORT;" | sudo tee $NGINX_BACKEND > /dev/null
sudo systemctl reload nginx

# Stop old container
echo "Stopping old container: $OLD_NAME"

docker stop $OLD_NAME
docker rm $OLD_NAME

echo "Deployment successful."