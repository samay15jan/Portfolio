'use client';
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ImageTrail from "@/components/reactBits/ImageTrail/ImageTrail";
import TextType from "@/components/reactBits/TextType/TextType";

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
      <div className="w-screen py-10">
        <div className="mt-10" />


        <div style={{ height: '500px', position: 'relative', overflow: 'hidden' }}>
          <ImageTrail
            items={[
              'https://picsum.photos/id/287/300/300',
            ]}
            variant={2}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
