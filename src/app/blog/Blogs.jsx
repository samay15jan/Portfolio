import TiltedCard from "@/components/reactBits/TiltedCard/TiltedCard";
import { useEffect, useState } from "react";

export default function BlogCards() {
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch blog posts
    fetch("https://blog.samay15jan.xyz/index.xml")
      .then((res) => res.text())
      .then((xmlText) => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlText, "application/xml");

        const items = Array.from(xml.querySelectorAll("item")).map((item) => ({
          title: item.querySelector("title")?.textContent ?? "Untitled",
          link: item.querySelector("link")?.textContent ?? "#",
          description: item.querySelector("description")?.textContent ?? "",
          pubDate: item.querySelector("pubDate")?.textContent ?? "",
        }));

        setPosts(items);
      })
      .catch((err) => console.error("Failed to fetch RSS:", err));
  }, []);

  useEffect(() => {
    if (posts.length === 0) return;

    const fetchImages = async () => {
      const fetchedImages = await Promise.all(
        posts.map(async (_, idx) => {
          try {
            const res = await fetch(
              `https://pixabay.com/api/?key=51945299-f6316a1c46ee496d728d2d960&q=software&image_type=photo&per_page=3&page=${idx + 1}`
            );
            const data = await res.json();
            return data.hits[0]?.webformatURL ?? "https://singlecolorimage.com/get/2d2d2d/500x500";
          } catch (err) {
            console.error("Failed to fetch image", err);
            return "https://singlecolorimage.com/get/2d2d2d/500x500";
          }
        })
      );

      setImages(fetchedImages);
    };

    fetchImages();
  }, [posts]);

  function formatRelativeTime(date) {
    const now = new Date();
    const diffInMs = date - now;
    const diffInSec = Math.round(diffInMs / 1000);
    const diffInMin = Math.round(diffInSec / 60);
    const diffInHours = Math.round(diffInMin / 60);
    const diffInDays = Math.round(diffInHours / 24);
    const diffInMonths = Math.round(diffInDays / 30);
    const diffInYears = Math.round(diffInDays / 365);

    const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

    if (Math.abs(diffInYears) >= 1) return rtf.format(diffInYears, "year");
    if (Math.abs(diffInMonths) >= 1) return rtf.format(diffInMonths, "month");
    if (Math.abs(diffInDays) >= 1) return rtf.format(diffInDays, "day");
    if (Math.abs(diffInHours) >= 1) return rtf.format(diffInHours, "hour");
    if (Math.abs(diffInMin) >= 1) return rtf.format(diffInMin, "minute");

    return rtf.format(diffInSec, "second");
  }

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {posts.map((post, idx) => (
          <a
            key={idx}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <TiltedCard
              imageSrc={images[idx] || "https://singlecolorimage.com/get/2d2d2d/500x500"}
              altText={post.title}
              captionText={post.title}
              containerHeight="400px"
              containerWidth="400px"
              imageHeight="350px"
              imageWidth="350px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={
                <div className="text-center px-2">
                  {post.pubDate && (
                    <p className="text-sm text-gray-400">
                      {formatRelativeTime(new Date(post.pubDate))}
                    </p>
                  )}
                  <h3 className="mt-1 text-lg font-semibold">{post.title}</h3>
                  <p className="text-sm line-clamp-3">{post.description}</p>
                </div>
              }
            />
          </a>
        ))}
      </div>
    </div>
  );
}
