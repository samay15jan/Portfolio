'use client';
import { useEffect, useState } from "react";
import Header from "@/components/common/Header";
import Masonry from "@/components/reactBits/Masonry/Masonry";
import TextType from "@/components/reactBits/TextType/TextType";
import Footer from "@/components/common/Footer";

export default function Gallery() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const res = await fetch(
        "https://pixabay.com/api/?key=51945299-f6316a1c46ee496d728d2d960&q=software&image_type=photo"
      );
      const data = await res.json();
      const formatted = data.hits.map((hit, index) => ({
        id: hit.id.toString(),
        img: hit.webformatURL,
        url: hit.pageURL,
        height: Math.floor(Math.random() * 300) + 300,
      }));
      setItems(formatted);
    }

    fetchImages();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="mt-20" />
      <TextType
        text={["Gallery"]}
        typingSpeed={100}
        textColors="#000000"
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
        className="letter text-6xl font-semibold xs:text-[90px] md:text-[100px] my-[-50px] ml-10"
      />
      <div className="w-screen py-10">
        <div className="mt-20" />
        <div className="w-screen h-screen px-20">
          {items.length > 0 && (
            <Masonry
              items={items}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.95}
              blurToFocus={true}
              colorShiftOnHover={false}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
