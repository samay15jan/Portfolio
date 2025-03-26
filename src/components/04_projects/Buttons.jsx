import React from "react";
import { FaGithub } from "react-icons/fa6";
import { BsArrowUpRight } from "react-icons/bs";
import { MdEmojiObjects } from "react-icons/md";

const ButtonGithub = ({ filteredUrl }) => {
  return (
    <a href={filteredUrl.Github} target="_blank" rel="noopener noreferrer">
      <button className="ring-2 ring-gray-500 text-white p-4 ml-2 rounded-full">
        <FaGithub size={25} />
      </button>
      <button className="ring-2 ring-gray-500 bg-[#F5F5F5] text-[#121212] p-4 ml-[-15px] rounded-full transition ease-in-out delay-50 hover:ring hover:ring-white hover:shadow-lg hover:shadow-white hover:bg-[#F5F5F5]">
        <BsArrowUpRight size={25} />
      </button>
    </a>
  );
};

const ButtonDemo = ({ setHoveredDemo, hoveredDemo, filteredUrl }) => {
  return (
    <a
      onMouseEnter={() => setHoveredDemo(true)}
      onMouseLeave={() => setHoveredDemo(false)}
      className={
        !hoveredDemo
          ? "absolute bg-black bg-opacity-60 pb-12 pt-14 pl-5 pr-8 rounded-2xl"
          : "absolute transition ease-in-out delay-100 bg-black bg-opacity-80 pb-12 pt-14 pl-5 pr-8 rounded-2xl"
      }
      href={filteredUrl.Demo}
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
  );
};

const NumberBar = ({ setSelectedProject, currentSelected }) => {
  return (
    <div className="grid grid-cols-1 h-full">
      <button
        onClick={() => setSelectedProject(0)}
        className={`h-full w-full flex items-center justify-center p-3 rounded-full transition ease-in-out delay-50 ring ring-gray-500
            ${
              currentSelected === 0
                ? "text-black bg-white"
                : "text-white hover:bg-white hover:text-[#121212]"
            }`}
      >
        1
      </button>
      <button
        onClick={() => setSelectedProject(1)}
        className={`mt-2 h-full w-full flex items-center justify-center p-3 rounded-full transition ease-in-out delay-50 ring ring-gray-500
            ${
              currentSelected === 1
                ? "text-black bg-white"
                : "text-white hover:bg-white hover:text-[#121212]"
            }`}
      >
        2
      </button>
      <button
        onClick={() => setSelectedProject(2)}
        className={`mt-5 h-full w-full flex items-center justify-center p-3 rounded-full transition ease-in-out delay-50 ring ring-gray-500
            ${
              currentSelected === 2
                ? "text-black bg-white"
                : "text-white hover:bg-white hover:text-[#121212]"
            }`}
      >
        3
      </button>
    </div>
  );
};

export { ButtonGithub, ButtonDemo, NumberBar };
