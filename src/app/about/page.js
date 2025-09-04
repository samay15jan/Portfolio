'use client';
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import TextType from "@/components/reactBits/TextType/TextType";
import Graph from "./Graph";
import DotGrid from "@/components/reactBits/DotGrid/DotGrid";
import Image from "next/image";
import Skills from "./Skills";
import PixelTransition from "@/components/reactbits/PixelTransition/PixelTransition";

export default function About() {
  return (
    <div className="overflow-x-hidden w-screen">
      <Header />
      <div className="w-full h-full absolute z-0">
        <DotGrid
          dotSize={10}
          gap={15}
          baseColor="white"
          activeColor="#E53935"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <div className="relative z-2">
        <div>
          <TextType
            text={["I'm Samay"]}
            typingSpeed={100}
            textColors="#000000"
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="flex w-screen text-center mt-10 letter text-10xl font-semibold xs:text-[90px] md:text-[100px] my-[-50px] ml-10"
          />
          <div className="grid grid-cols-2 px-40 items-center text-center justify-center">
            <div>
              <PixelTransition
                firstContent={
                  <Image
                    src="https://avatars.githubusercontent.com/u/97271429?v=4"
                    alt="Profile"
                    width={250}
                    height={250}
                    className="rounded-t-full flex w-screen pt-20 px-20 items-center"
                  />
                }
                secondContent={
                  <div
                    style={{
                      width: "80%",
                      height: "80%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#111",
                      margin: "80px",
                    }}
                    className="rounded-xl"
                  >
                    <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Meow!</p>
                  </div>
                }
                gridSize={12}
                pixelColor='#ffffff'
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
              <div className="relative flex text-black justify-center bg-white">
                <Skills />
              </div>
            </div>
            <div className="text-left text-lg mt-10 bg-white">
              <div className="font-bold mb-5">
                I’m a developer, designer, and explorer of technology with a passion for building systems that are both creative and practical.
              </div>
              <div className="mb-5">
                I’m currently pursuing a <b>B.Tech in Information Technology</b> at <b>Amity University, Noida</b>. Over the past two years, I’ve explored the full stack—building web apps, mobile apps, and backend systems—before shifting my focus towards <b>cloud, DevOps, and Linux</b>.
              </div>
              <div className="mb-5">
                My flagship project is <b>Sparklines</b>, a full-scale music streaming platform inspired by Spotify. It features a complete frontend and backend, playlist management, high-quality audio, artist profiles, and more. I also built a unique <b>TUI (terminal-based) client</b>, which gained attention through a blog post with 500+ reads. As a side project, I’m working on a mobile app version to extend the ecosystem.
              </div>
              <div className="mb-5">
                Beyond Sparklines, I’ve built projects such as a <b>Firebase email handler</b> (a containerized service for account verification), <b>Bingelord</b> (a media streaming platform), and <b>Thoughtscape</b> (a journaling platform). I’ve also explored <b>custom Arch Linux distros</b>, self-hosting, iOS sideloading through my project <b>Altux</b>, and even tinkered with embedded firmware.
              </div>
              <div className="mb-5">
                I actively maintain my <b>GitHub</b>, where I document my work, share open-source projects, and contribute consistently. I also write <b>technical blogs</b> to share my process and insights—connecting with developers and readers around the world.
              </div>
            </div>
          </div>
          <div className="mt-20" />
          <Graph />
          <Footer />
        </div>
      </div>
    </div>
  );
}
