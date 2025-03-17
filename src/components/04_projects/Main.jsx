import React, { useRef, useState, useEffect } from "react";
import { Image } from "@nextui-org/react";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import Projects from "../../utils/Projects";
import { motion } from "framer-motion";
import { NumberBar } from "./Buttons";
import SVG from "./SVG";
import Details from "./Details";
import { Card1, Card2 } from "./Cards";
import Video from "./Video";

const Main = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const filteredUrl = Projects[selectedProject];
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [fullscreen, setFullscreen] = useState("laptopFalse");
  const [hoveredDemo, setHoveredDemo] = useState(false);
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);

  useEffect(() => {
    if (video1Ref.current && video2Ref.current) {
      video1Ref.current.load();
      video2Ref.current.load();
    }
  }, [filteredUrl.video2]);

  const handleMouse = (type, action) => {
    const isEntering = action === "enter";

    if (type === "laptop") {
      setHovered1(isEntering);
      isEntering ? video1Ref.current?.play() : video1Ref.current?.pause();
    } else if (type === "mobile") {
      setHovered2(isEntering);
      isEntering ? video2Ref.current?.play() : video2Ref.current?.pause();
    }
  };

  return (
    <div className="relative w-screen grid grid-cols-3 pt-14 pb-32">
      <div className="flex flex-row relative z-20 mx-5">
        <NumberBar
          Projects={Projects}
          setSelectedProject={(data) => setSelectedProject(data)}
        />
        <Details filteredUrl={filteredUrl} />
      </div>
      <div className="col-span-2">
        <div
          className={`flex ${
            filteredUrl.Name === "Sparklines" ? "mx-10" : "mx-10 gap-4"
          }
          ${
            filteredUrl.Name === "Porsche Replicant"
              ? "flex-row-reverse pr-10"
              : "mx-10"
          }`}
        >
          <div className="relative">
            <Card2
              setHoveredDemo={(bool) => setHoveredDemo(bool)}
              hoveredDemo={hoveredDemo}
              filteredUrl={filteredUrl}
              hovered1={hovered1}
            />

            {/*---MAIN+VIDEO1---*/}
            <div
              className={`${
                fullscreen === "laptopTrue"
                  ? "fixed top-0 left-0 w-screen h-screen z-50 bg-black inset-0 overflow-y-hidden object-cover items-center flex justify-center"
                  : ""
              }`}object-cover
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
              <Video video1Ref={video1Ref} filteredUrl={filteredUrl} />
              <Image
                className="shadow-2xl drop-shadow-2xl"
                style={{ opacity: hovered1 ? 0 : 1 }}
                onMouseEnter={() => handleMouse("laptop", "enter")}
                onMouseLeave={() => handleMouse("laptop", "leave")}
                src={filteredUrl.main}
              />
            </div>
            {/*---MAIN+VIDEO1---*/}

            {filteredUrl.Name != "Sparklines" && (
              <Card1 filteredUrl={filteredUrl} />
            )}
          </div>

          {filteredUrl.Name === "Sparklines" && (
            <Card1 filteredUrl={filteredUrl} />
          )}

          {/*---SEMI+Video2---*/}
          <div
            className={`
            ${
              filteredUrl.Name === "Sparklines" &&
              fullscreen != "mobileTrue" &&
              "relative top-64"
            }
            ${
              fullscreen === "mobileTrue"
                ? "fixed top-0 left-0 w-screen h-screen z-50 bg-black overflow-y-hidden"
                : ""
            }`}
          >
            {filteredUrl.Name === "Sparklines" && (
              <button
                style={{ opacity: !hovered2 ? 0 : 1 }}
                onMouseEnter={() => handleMouse("mobile", "enter")}
                onMouseLeave={() => handleMouse("mobile", "leave")}
                className="absolute z-20 top-5 right-5 text-white"
              >
                {fullscreen === "mobileTrue" ? (
                  <MdFullscreenExit
                    size={40}
                    onClick={() => setFullscreen("mobileFalse")}
                  />
                ) : (
                  <MdFullscreen
                    size={40}
                    onClick={() => setFullscreen("mobileTrue")}
                  />
                )}
              </button>
            )}
            {filteredUrl.Name === "Porsche Replicant" && (
              <div
                className="mt-20 mr-40"
                onMouseEnter={() => handleMouse("mobile", "enter")}
                onMouseLeave={() => handleMouse("mobile", "leave")}
              >
                <Video
                  video2Ref={video2Ref}
                  filteredUrl={filteredUrl}
                  haveWidth
                />
              </div>
            )}
            {filteredUrl.Name === "Bingelord" && <div className="mt-20" />}
            {filteredUrl.Name != "Porsche Replicant" && (
              <>
                <Video
                  video2Ref={video2Ref}
                  filteredUrl={filteredUrl}
                  haveWidth
                />
                <Image
                  className="shadow-2xl drop-shadow-2xl"
                  style={{ opacity: hovered2 ? 0 : 1 }}
                  onMouseEnter={() => handleMouse("mobile", "enter")}
                  onMouseLeave={() => handleMouse("mobile", "leave")}
                  src={filteredUrl.semi}
                />
              </>
            )}
          </div>
          {/*---SEMI+Video2---*/}
        </div>
      </div>
      <SVG filteredUrl={filteredUrl} />
    </div>
  );
};

export default Main;
