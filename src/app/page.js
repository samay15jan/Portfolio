'use client';
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { LetterCollision } from "@/components/LetterCollision";
import Hyperspeed from "@/components/reactBits/Hyperspeed/Hyperspeed";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hyperspeed
        effectOptions={{
          onSpeedUp: () => { },
          onSlowDown: () => { },
          distortion: 'turbulentDistortion',
          length: 400,
          roadWidth: 20,
          islandWidth: 2,
          lanesPerRoad: 4,
          fov: 60,
          fovSpeedUp: 150,
          speedUp: 2,
          carLightsFade: 0.4,
          totalSideLightSticks: 20,
          lightPairsPerRoadWay: 40,
          shoulderLinesWidthPercentage: 0.05,
          brokenLinesWidthPercentage: 0.1,
          brokenLinesLengthPercentage: 0.5,
          lightStickWidth: [0.12, 0.5],
          lightStickHeight: [1.3, 1.7],
          movingAwaySpeed: [60, 80],
          movingCloserSpeed: [-120, -160],
          carLightsLength: [400 * 0.03, 400 * 0.2],
          carLightsRadius: [0.05, 0.14],
          carWidthPercentage: [0.3, 0.5],
          carShiftX: [-0.8, 0.8],
          carFloorSeparation: [0, 5],
          colors: {
            roadColor: 0xFFFFFF,
            islandColor: 0xFFFFFF,
            background: 0x220000,
            shoulderLines: 0xFFFFFF,
            brokenLines: 0xFFFFFF,
            leftCars: [0x111111, 0xFF0000],
            rightCars: [0xFF0000, 0x111111],
            sticks: 0xFF0000,
          }
        }}
      />
      <LetterCollision />
      {/* <Image
        className="w-full h-screen"
        src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f"
        alt="Next.js logo"
        width={1000}
        height={1000}
        priority
      /> */}
      <Footer />
    </div>
  );
}
