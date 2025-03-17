import React from "react";
import { FaGithub } from "react-icons/fa6";
import { BsArrowUpRight } from "react-icons/bs";
import { MdEmojiObjects } from "react-icons/md";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";

const ButtonGithub = ({filteredUrl}) => {
  return (
    <a
    href={filteredUrl.Github}
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
const NumberBar = ({ Projects, setSelectedProject }) => {
  return (
    <div className="grid grid-col-1">
      {Projects.map((project, index) => (
        <button
          key={index}
          onClick={() => setSelectedProject(index)}
          className="mt-2 text-white p-3 rounded-full ring ring-gray-500 hover:bg-white hover:text-[#121212] transition ease-in-out delay-50"
        >
          {React.createElement(eval(`RiNumber${index + 1}`))}
        </button>
      ))}
    </div>
  );
};

export { ButtonGithub, ButtonDemo, NumberBar };
