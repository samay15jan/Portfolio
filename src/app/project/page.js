'use client';
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import TextType from "@/components/reactBits/TextType/TextType";
import Cards from "./Card";

export default function Projects() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="mt-20" />
      <TextType
        text={["My Work"]}
        typingSpeed={100}
        textColors="#000000"
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
        className="letter text-6xl font-semibold xs:text-[90px] md:text-[100px] my-[-50px] ml-10"
      />
      <Cards text="Sparklines" />
      <Footer />
    </div>
  );
}
