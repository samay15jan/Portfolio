'use client';
import Header from "@/components/common/Header";
import GlareHover from "@/components/reactBits/GlareHover/GlareHover";
import TextType from "@/components/reactBits/TextType/TextType";
import BlogCards from "./Blogs";
import Footer from "@/components/common/Footer";

export default function BlogHome() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="mt-20" />
      <TextType
        text={["Blog"]}
        typingSpeed={100}
        textColors="#000000"
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
        className="letter text-6xl font-semibold xs:text-[90px] md:text-[100px] my-[-50px] ml-10"
      />
      <div className="w-screen py-10">
        <GlareHover
          glareColor="#e7000b"
          glareOpacity={0.5}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={1200}
          playOnce={false}
          background="#000000"
          className="h-60 mx-20"
        >
          <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#FFFFFF', marginTop: '60px' }}>
            Thoughts & Ideas
          </h2>
          <h3 style={{ fontSize: '1rem', fontWeight: '500', color: '#999999', marginBottom: '60px' }}>
            My collected thoughts on design, development, and everything in between.
          </h3>
        </GlareHover>
        <div className="mt-20" />
        <BlogCards />
      </div>
      <Footer />
    </div>
  );
}
