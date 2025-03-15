import React, { useRef, useState } from "react";
import { Image } from "@nextui-org/react";
import { FaGithub } from "react-icons/fa6";
import { BsArrowUpRight } from "react-icons/bs";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";
import { MdFullscreen, MdFullscreenExit, MdEmojiObjects } from "react-icons/md";
import Bingelord1 from "../../assets/projects/bingelord/1.png";
import Bingelord2 from "../../assets/projects/bingelord/2.png";
import Bingelord3 from "../../assets/projects/bingelord/3.png";
import Bingelord4 from "../../assets/projects/bingelord/4.png";
import BingelordLaptop from "../../assets/projects/bingelord/laptop.mp4";
import BingelordMobile from "../../assets/projects/bingelord/mobile.mp4";
import { motion } from "framer-motion";

const Card = ({ name }) => {
  const urlRoutes = {
    Bingelord: {
      Name: "Bingelord",
      Desc1:
        "Bingelord is a full-stack movie/series browsing & streaming platform with secure authentication, offering a seamless and immersive viewing experience.",
      Desc2:
        "It provides a personalized way to discover, search and filter content while ensuring effortless navigation.",
      Github: "https://github.com/samay15jan/bingelord",
      Demo: "https://bingelord.onrender.com",
      tools: ["React", "TailwindCSS", "Express", "Firebase", "Tmdb api"],
      Bingelord1: Bingelord1,
      Bingelord2: Bingelord2,
      Bingelord3: Bingelord3,
      Bingelord4: Bingelord4,
      BingelordLaptop: BingelordLaptop,
      BingelordMobile: BingelordMobile,
    },
    "Porsche-Replicant": {
      Name: "Porsche-Replicant",
      Desc: "A Clone of Porsche's Web App",
      Github: "https://github.com/samay15jan/porsche-replicant",
      Demo: "https://porsche-replicant.web.app",
      tools: ["React", "TailwindCSS", "Express", "Firebase", "TMDB API"],
    },
    "Quantum-Quest": {
      Name: "Quantum-Quest",
      Desc: "A RealTime Task Tracker",
      Github: "https://github.com/samay15jan/quantum-quest",
      Demo: "https://quantum-quest.web.app",
      tools: ["React", "TailwindCSS", "Express", "Firebase", "TMDB API"],
    },
    ThoughtScape: {
      Name: "ThoughtScape",
      Desc: "A Online Journaling Platform",
      Github: "https://github.com/samay15jan/thoughtscape",
      Demo: "https://thoughtscape.web.app",
      tools: ["React", "TailwindCSS", "Express", "Firebase", "TMDB API"],
    },
  };

  const filteredUrl = Object.values(urlRoutes).filter(
    (project) => project.Name === name
  );
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [fullscreen, setFullscreen] = useState("laptopFalse");
  const [hoveredDemo, setHoveredDemo] = useState(false);
  const laptopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  const handleMouse = (type, action) => {
    const isEntering = action === "enter";

    if (type === "laptop") {
      setHovered1(isEntering);
      isEntering
        ? laptopVideoRef.current?.play()
        : laptopVideoRef.current?.pause();
    } else if (type === "mobile") {
      setHovered2(isEntering);
      isEntering
        ? mobileVideoRef.current?.play()
        : mobileVideoRef.current?.pause();
    }
  };

  return (
    <div className="relative w-screen grid grid-cols-3 pt-14 pb-32">
      <div className="flex relative z-20 mx-5">
        <div className="">
          <button className="bg-[#F5F5F5] text-[#121212] p-3 ring ring-gray-500 rounded-full">
            <RiNumber1 />
          </button>
          <button className="mt-3 text-white p-3 rounded-full ring ring-gray-500">
            <RiNumber2 />
          </button>
          <button className="mt-3 text-white p-3 rounded-full ring ring-gray-500">
            <RiNumber3 />
          </button>
          <button className="mt-3 text-white p-3 rounded-full ring ring-gray-500">
            <RiNumber4 />
          </button>
        </div>
        <div className="w-1 bg-gray-500 ml-2 mr-4" />
        <div>
          <h1 className="text-2xl font-medium text-left">{name}</h1>
          <div className="grid grid-cols-3 gap-4 mt-8">
            {filteredUrl[0].tools &&
              filteredUrl[0].tools.map((name, index) => (
                <h1
                  className="text-sm font-medium text-center rounded-full ring-2 ring-gray-500 hover:ring-white hover:bg-[#F5F5F5] cursor-pointer hover:text-[#121212] w-auto px-2 py-2 transition ease-in-out delay-100"
                  key={index}
                >
                  {name}
                </h1>
              ))}
          </div>
          <label className="text-xl lg:text-sm flex opacity-60 text-left mt-10">
            {filteredUrl[0].Desc1}
          </label>
          <label className="text-xl lg:text-sm flex opacity-60 text-left mt-4 pb-5">
            {filteredUrl[0].Desc2}
          </label>
          <div className="mt-5">
            <a
              href="https://github.com/samay15jan/bingelord"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="ring-2 ring-gray-500 text-white p-4 ml-2 rounded-full">
                <FaGithub size={25} />
              </button>
              <button className="ring-2 ring-gray-500 bg-[#F5F5F5] text-[#121212] p-4 ml-[-15px] rounded-full transition ease-in-out delay-50 hover:ring hover:ring-white hover:shadow-lg hover:shadow-white hover:bg-[#F5F5F5]">
                <BsArrowUpRight size={25} />
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="grid col-span-2">
        <div className="flex mx-10 gap-4">
          <div className="relative">
            <div
              style={{ opacity: hovered1 ? 0 : 1 }}
              className="absolute bottom-0 right-[-8px] z-20 backdrop-blur-xl p-4 rounded-2xl mb-5"
            >
              <div
                onMouseEnter={() => setHoveredDemo(true)}
                onMouseLeave={() => setHoveredDemo(false)}
                className={
                  !hoveredDemo
                    ? "absolute bg-black bg-opacity-60 pb-12 pt-14 pl-5 pr-8 rounded-2xl"
                    : "absolute transition ease-in-out delay-100 bg-black bg-opacity-80 pb-12 pt-14 pl-5 pr-8 rounded-2xl"
                }
              >
                <a
                  href="https://bingelord.samay15jan.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="ring-2 ring-gray-300 text-white p-4 ml-2 rounded-full">
                    <MdEmojiObjects size={25} />
                  </button>
                  <button
                    className={
                      !hoveredDemo
                        ? "ring-2 ring-gray-300 bg-[#F5F5F5] text-[#121212] p-4 ml-[-15px] rounded-full"
                        : "ring-2 ring-gray-300 bg-[#F5F5F5] text-[#121212] p-4 ml-[-15px] rounded-full transition ease-in-out delay-50 ring ring-white shadow-lg shadow-white bg-[#F5F5F5]"
                    }
                  >
                    <BsArrowUpRight size={25} />
                  </button>
                </a>
              </div>
              <img
                className="rounded-2xl w-40"
                src={filteredUrl[0].Bingelord4}
              />
            </div>
            <div
              className={`${
                fullscreen === "laptopTrue"
                  ? "fixed top-0 left-0 w-screen h-screen z-50 bg-black overflow-y-hidden"
                  : ""
              }`}
            >
              <button
                style={{ opacity: !hovered1 ? 0 : 1 }}
                onMouseEnter={() => handleMouse("laptop", "enter")}
                onMouseLeave={() => handleMouse("laptop", "leave")}
                className="absolute z-20 top-5 right-5 text-white"
              >
                {fullscreen === "laptopTrue" ? (
                  <MdFullscreenExit
                    size={40}
                    onClick={() => setFullscreen("laptopFalse")}
                  />
                ) : (
                  <MdFullscreen
                    size={40}
                    onClick={() => setFullscreen("laptopTrue")}
                  />
                )}
              </button>
              <video
                ref={laptopVideoRef}
                autoplay
                playsInline
                loop
                muted
                className="absolute z-10 rounded-2xl shadow-2xl drop-shadow-2xl"
              >
                <source src={filteredUrl[0].BingelordLaptop} type="video/mp4" />
              </video>
              <Image
                className="shadow-2xl drop-shadow-2xl"
                style={{ opacity: hovered1 ? 0 : 1 }}
                onMouseEnter={() => handleMouse("laptop", "enter")}
                onMouseLeave={() => handleMouse("laptop", "leave")}
                src={filteredUrl[0].Bingelord1}
              />
            </div>
            <div className="absolute left-60 z-20 bg-gradient-to-r from-[#091c29] to-[#863142] mt-4 p-4 rounded-2xl mb-5">
              <motion.div
                whileHover={{ scale: 0.8, rotate: 360 }}
                whileTap={{
                  scale: 1,
                  rotate: -360,
                  borderRadius: "100%",
                }}
              >
                <img
                  className="rounded-2xl w-40 shadow-2xl drop-shadow-2xl"
                  src={filteredUrl[0].Bingelord2}
                />
              </motion.div>
            </div>
          </div>
          <div className="mt-[-12px]">
            <video
              width={200}
              ref={mobileVideoRef}
              autoplay
              playsInline
              loop
              muted
              className="absolute pb-5 bg-black z-10 rounded-2xl shadow-2xl drop-shadow-2xl"
            >
              <source src={filteredUrl[0].BingelordMobile} type="video/mp4" />
            </video>
            <Image
              className="shadow-2xl drop-shadow-2xl"
              style={{ opacity: hovered2 ? 0 : 1 }}
              onMouseEnter={() => handleMouse("mobile", "enter")}
              onMouseLeave={() => handleMouse("mobile", "leave")}
              src={filteredUrl[0].Bingelord3}
            />
          </div>
        </div>
      </div>

      {/*---SVG---*/}
      <svg
        className="absolute"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="90"
          cy="20"
          r="20"
          stroke="gray"
          stroke-width="0.2"
          fill="none"
        />
        <svg
          className="rocket"
          width="3"
          height="69"
          x="75"
          y="5"
          viewBox="0 0 64 64"
        >
          <path
            fill="#091c29"
            d="M63.029,42.285l-13.08-7.848c-0.175,4.299-0.787,8.26-1.494,11.562H64v-2
		C64,43.297,63.632,42.646,63.029,42.285z"
          />
          <path
            fill="#091c29"
            d="M46.905,52H62c1.104,0,2-0.896,2-2v-2H47.999C47.625,49.537,47.245,50.889,46.905,52z"
          />
          <path
            fill="#091c29"
            d="M14.051,34.438l-13.08,7.848C0.368,42.646,0,43.297,0,44v2h15.545
		C14.839,42.697,14.226,38.737,14.051,34.438z"
          />
          <path
            fill="#091c29"
            d="M0,48v2c0,1.104,0.896,2,2,2h15.095c-0.34-1.111-0.72-2.463-1.093-4H0z"
          />
          <path
            fill="#091c29"
            d="M32,64c2.06,0,4.239-2.343,4.837-6h-9.672C27.763,61.656,29.94,64,32,64z"
          />
          <path
            fill="#863142"
            d="M33.109,0.336C32.773,0.112,32.387,0,32,0s-0.773,0.112-1.109,0.336C23.692,5.135,16,15.974,16,32
		c0,4.399,0.516,8.508,1.181,12h29.639C47.484,40.508,48,36.399,48,32C48,15.974,40.308,5.135,33.109,0.336z M32,30
		c-3.313,0-6-2.687-6-6s2.687-6,6-6s6,2.687,6,6S35.313,30,32,30z"
          />
          <circle fill="#091c29" cx="32" cy="24" r="4" />
          <path
            fill="#863142"
            d="M20.143,54.742C20.447,55.502,21.183,56,22,56h20c0.817,0,1.553-0.498,1.857-1.258
		c0.097-0.24,1.427-3.62,2.554-8.742H17.589C18.716,51.122,20.046,54.502,20.143,54.742z"
          />
        </svg>
      </svg>
      <style>
        {`
          .rocket {
            transform-origin: 90px 20px;
            animation: orbit 15s linear infinite;
          }
          @keyframes orbit {
            0% { transform: rotate(0deg) translate(20px); }
            100% { transform: rotate(360deg) translate(20px); }
          }
        `}
      </style>
      {/*---SVG---*/}
    </div>
  );
};

export default Card;
