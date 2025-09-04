'use client';
import React from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import TextType from "@/components/reactBits/TextType/TextType";
import { Timeline } from "@/components/common/Timeline";
import TiltedCard from "@/components/reactBits/TiltedCard/TiltedCard";

export default function TimelinePage() {
  // Timeline dataset with placeholder images
  const timelineData = {
    2025: {
      October: [
        { text: "Sparklines-backend docs build", img: "https://picsum.photos/300/200?random=6" },
        { text: "Portfolio Site 2.0", img: "https://picsum.photos/300/200?random=7" },
      ],
      July: [
        { text: "Hacking Embedded System", img: "https://picsum.photos/300/200?random=5" },
      ],
      March: [
        { text: "Sparklines Mobile", img: "https://picsum.photos/300/200?random=3" },
        { text: "Altux", img: "https://picsum.photos/300/200?random=4" },
      ],
      January: [
        { text: "Firebase Email Handler", img: "https://picsum.photos/300/200?random=1" },
        { text: "AWS + Cloud computing shift", img: "https://picsum.photos/300/200?random=2" },
      ],
    },
    2024: {
      November: [
        { text: "Sparklines TUI", img: "https://picsum.photos/300/200?random=12" },
        { text: "Blogging Site", img: "https://picsum.photos/300/200?random=13" },
      ],
      June: [
        { text: "obsidian vault sync", img: "https://picsum.photos/300/200?random=10" },
        { text: "Nextflix", img: "https://picsum.photos/300/200?random=11" },
      ],
      February: [
        { text: "Portfolio Site 1.0", img: "https://picsum.photos/300/200?random=8" },
        { text: "Sparklines Web", img: "https://picsum.photos/300/200?random=9" },
      ],
    },
    2023: {
      December: [
        { text: "Porsche Replicant", img: "https://picsum.photos/300/200?random=20" },
        { text: "Bingelord", img: "https://picsum.photos/300/200?random=21" },
        { text: "Backend-Playground", img: "https://picsum.photos/300/200?random=22" },
      ],
      August: [
        { text: "ThoughtScape", img: "https://picsum.photos/300/200?random=18" },
        { text: "Quantum Quest", img: "https://picsum.photos/300/200?random=19" },
      ],
      April: [
        { text: "Storage-Box", img: "https://picsum.photos/300/200?random=16" },
        { text: "Chatgpt-Assistant", img: "https://picsum.photos/300/200?random=17" },
      ],
      January: [
        { text: "HeimOS", img: "https://picsum.photos/300/200?random=14" },
        { text: "Homepage", img: "https://picsum.photos/300/200?random=15" },
      ],
    },
    2022: {
      October: [
        { text: "Mining", img: "https://picsum.photos/300/200?random=27" },
        { text: "personal website (basic)", img: "https://picsum.photos/300/200?random=28" },
        { text: "Started experimenting with cpu crypto mining, but not deep yet.", img: "https://picsum.photos/300/200?random=29" },
      ],
      July: [
        { text: "More confident with Linux – Arch now feels like home.", img: "https://picsum.photos/300/200?random=25" },
        { text: "Emotionally unstable year, messed up by school and social dynamics.", img: "https://picsum.photos/300/200?random=26" },
      ],
      March: [
        { text: "Still involved in home server setups and Docker containers.", img: "https://picsum.photos/300/200?random=23" },
        { text: "Got into Bash, and lightweight scripting for I3WM customizations.", img: "https://picsum.photos/300/200?random=24" },
      ],
    },
    2021: {
      September: [
        { text: "Discovered self-hosting tools → Docker, PiHole, Jellyfin, Portainer, Yacht.", img: "https://picsum.photos/300/200?random=34" },
      ],
      May: [
        { text: "Explored theming, grub fixing, and manual installs.", img: "https://picsum.photos/300/200?random=32" },
        { text: "First deep dive into home server setup (reused old computer).", img: "https://picsum.photos/300/200?random=33" },
      ],
      February: [
        { text: "Deep into Linux customization, moved to Arch Linux.", img: "https://picsum.photos/300/200?random=30" },
        { text: "Broke system multiple times, kept a bootable USB always ready.", img: "https://picsum.photos/300/200?random=31" },
      ],
    },
    2020: {
      November: [
        { text: "Tried Hackintosh on old computer (late 2020, winters).", img: "https://picsum.photos/300/200?random=39" },
        { text: "Started understanding Linux terminal and TUI/GUIs.", img: "https://picsum.photos/300/200?random=40" },
      ],
      June: [
        { text: "Got into dual-booting, Pop OS, Linux Mint, and distro-hopping.", img: "https://picsum.photos/300/200?random=37" },
        { text: "Found NetworkChuck on YouTube → introduced to basic tech & security.", img: "https://picsum.photos/300/200?random=38" },
      ],
      March: [
        { text: "Bought your laptop in March 2020.", img: "https://picsum.photos/300/200?random=35" },
        { text: "Started OS exploration → Installed Amahi server (June–July).", img: "https://picsum.photos/300/200?random=36" },
      ],
    },
    2019: {
      May: [
        { text: "Gaming (very basic)", img: "https://picsum.photos/300/200?random=43" },
        { text: "wake up greet script with .bat", img: "https://picsum.photos/300/200?random=44" },
        { text: "And random shit", img: "https://picsum.photos/300/200?random=45" },
      ],
      January: [
        { text: "Rainmeters (customization)", img: "https://picsum.photos/300/200?random=41" },
        { text: "Windows Stuff", img: "https://picsum.photos/300/200?random=42" },
      ],
    },
  };

  const convertedData = Object.entries(timelineData)
    .sort(([a], [b]) => Number(b) - Number(a))
    .map(([year, months]) => ({
      title: year,
      content: (
        <div>
          {Object.entries(months).map(([month, items]) => (
            <div key={month} className="mb-6 mt-10">
              <h4 className="mb-2 ml-[-40px] text-xl font-semibold text-black">
                {month}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, i) => (
                  <TiltedCard
                    key={i}
                    imageSrc={item.img}
                    altText={item.text}
                    captionText={item.text}
                    containerHeight="200px"
                    containerWidth="250px"
                    imageHeight="200px"
                    imageWidth="250px"
                    rotateAmplitude={10}
                    scaleOnHover={1.1}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={true}
                    overlayContent={
                      <div className="p-2 text-center flex border-2 border-black rounded-xl">
                        <p className="text-sm font-medium">{item.text}</p>
                      </div>
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ),
    }));

  return (
    <div className="overflow-x-hidden">
      <Header />

      <TextType
        text={["Timeline"]}
        typingSpeed={100}
        textColors="#000000"
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
        className="letter text-6xl font-semibold xs:text-[90px] md:text-[100px] mt-10 mb-5 ml-10"
      />

      <div className="relative w-full overflow-clip mt-10">
        <Timeline data={convertedData} />
      </div>

      <Footer />
    </div>
  );
}
