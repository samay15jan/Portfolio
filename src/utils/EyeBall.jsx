import React, { useState, useEffect } from 'react';

const EyeBall = ({ opacity }) => {
  const [eyePosition1, setEyePosition1] = useState({ x: 0, y: 0 });
  const [eyePosition2, setEyePosition2] = useState({ x: 0, y: 0 });
  const [center, setCenter] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [scale, setScale] = useState(window.innerWidth / 2000);

  useEffect(() => {
    const updateCenter = () => {
      setCenter({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
      setIsDesktop(window.innerWidth > 1024);
      setScale(window.innerWidth / 2000);
    };

    window.addEventListener("resize", updateCenter);
    return () => window.removeEventListener("resize", updateCenter);
  }, []);

  useEffect(() => {
    if (!isDesktop) return

    const updateEyePosition = (event) => {
      const eye1 = document.getElementById("eye1");
      const eye2 = document.getElementById("eye2");
      if (!eye1 || !eye2) return;

      // Function to calculate eye movement
      const getEyeMovement = (eye) => {
        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const dx = event.clientX - eyeCenterX;
        const dy = event.clientY - eyeCenterY;

        const distance = Math.min(Math.sqrt(dx * dx + dy * dy), 10); // Limit movement
        const angle = Math.atan2(dy, dx);

        return {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        };
      };

      setEyePosition1(getEyeMovement(eye1));
      setEyePosition2(getEyeMovement(eye2));
    };

    window.addEventListener("mousemove", updateEyePosition);
    return () => window.removeEventListener("mousemove", updateEyePosition);
  }, [center, isDesktop, scale]);

  if (!isDesktop) return null

  return (
    <div className="absolute z-20 w-screen h-screen" style={{ opacity }}>
      <svg className='absolute z-20 w-screen h-screen' version="1.1" xmlns="http://www.w3.org/2000/svg">
        {/* Left Eye */}
        <path
          id="eye1"
          d="M0 0 C23.60241266 18.64732783 38.52749154 45.38190509 43.20703125 74.98779297 C46.80499636 106.72437953 39.69197329 139.08475308 19.74829102 164.42895508 C-0.81537472 189.52379393 -28.51692293 205.60548679 -60.93603516 209.06982422 C-93.80118932 211.90767083 -124.78048065 202.24074065 -150.0234375 181.06201172 C-172.31443473 161.61303103 -187.03413547 134.61975904 -190.1328125 105.03857422 C-192.22053507 73.15938188 -184.67606052 42.09230843 -163.81640625 17.22607422 C-121.79829118 -30.40705155 -51.26499808 -39.6770958 0 0 Z M-158.37890625 15.28076172 C-180.43697874 39.74459004 -188.9736894 70.85922039 -187.37890625 103.28076172 C-184.56950376 134.60528527 -168.28562012 160.6401544 -145.37890625 181.28076172 C-142.18386989 183.92820686 -138.94261835 186.16343277 -135.37890625 188.28076172 C-134.33734375 188.93173828 -133.29578125 189.58271484 -132.22265625 190.25341797 C-106.47598496 205.97542336 -75.36308843 210.50664814 -46.03515625 203.54248047 C-15.90249543 195.69180169 9.89604808 176.58592998 25.74609375 149.67919922 C39.7802389 124.24231113 45.29874191 94.79788102 38.72265625 66.06591797 C29.18081727 33.27853511 10.43657481 8.12603813 -19.21875 -8.97314453 C-65.69651181 -34.46400409 -122.49300707 -22.16163429 -158.37890625 15.28076172 Z "
          fill="#a0a0a0"
          transform={`translate(${center.x - (0.167 * window.innerWidth) + eyePosition1.x}, ${center.y - (0.104 * window.innerHeight) + eyePosition1.y}) scale(${scale + 0.2})`}
        />
        <circle
          cx={center.x - (0.211 * window.innerWidth) + eyePosition1.x * 5}
          cy={center.y + eyePosition1.y * 5}
          r={30 * scale}
          fill="#a0a0a0"
        />
        {/* Right Eye */}
        <path
          id="eye2"
          d="M0 0 C22.41759062 19.25854233 36.16635019 43.67019825 41.34765625 72.91015625 C41.48042969 73.65136719 41.61320312 74.39257812 41.75 75.15625 C45.86678186 104.08651159 38.16823689 135.71314366 20.91015625 159.28515625 C0.65262603 184.919257 -25.1742369 201.80830569 -57.65234375 207.28515625 C-89.23948777 210.87712925 -121.68036793 203.98363645 -146.90698242 183.97998047 C-171.84670754 163.34047683 -187.6368733 136.20431802 -191.65234375 103.91015625 C-194.02827562 69.88922447 -185.53670683 39.15324829 -163.27734375 13.03515625 C-121.9680273 -33.76230288 -48.01935377 -40.00021716 0 0 Z M-103.65234375 -20.08984375 C-105.46605469 -19.579375 -105.46605469 -19.579375 -107.31640625 -19.05859375 C-137.94575726 -9.67320255 -161.95659367 10.78346227 -177.00830078 38.92016602 C-185.33759151 55.1856305 -189.04717257 71.91656786 -188.96484375 90.16015625 C-188.9599292 91.44486816 -188.95501465 92.72958008 -188.94995117 94.05322266 C-188.83854885 103.06024287 -188.22311984 111.23639951 -185.65234375 119.91015625 C-185.33523438 121.08320312 -185.018125 122.25625 -184.69140625 123.46484375 C-180.30125029 138.19210453 -173.00009353 152.5010988 -162.65234375 163.91015625 C-161.96785156 164.72355469 -161.28335937 165.53695312 -160.578125 166.375 C-142.06536996 187.94551709 -114.9567176 201.91789235 -86.65234375 204.91015625 C-54.66068086 206.52697038 -24.05015983 198.68032611 0.34960938 177.14306641 C22.49906153 156.86371146 37.5668529 129.65455631 39.51611328 99.28564453 C40.94108697 65.74808386 30.41394241 36.85095615 8.09765625 11.78515625 C-9.76596295 -7.60792542 -37.183858 -21.83494619 -63.66577148 -23.25097656 C-83.87911225 -23.69607451 -83.87911225 -23.69607451 -103.65234375 -20.08984375 Z "
          fill="#a0a0a0"
          transform={`translate(${center.x + (0.252 * window.innerWidth) + eyePosition2.x}, ${center.y - (0.104 * window.innerHeight) + eyePosition2.y}) scale(${scale + 0.2})`}
        />
        <circle
          cx={center.x + (0.209 * window.innerWidth) + eyePosition2.x * 5}
          cy={center.y + eyePosition2.y * 5}
          r={30 * scale}
          fill="#a0a0a0"
        />
      </svg>
    </div>
  );
};

export default EyeBall;
