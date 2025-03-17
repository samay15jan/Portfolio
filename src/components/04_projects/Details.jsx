import React from "react";
import { ButtonGithub } from "./Buttons";

const Details = ({ filteredUrl }) => {
  return (
    <>
      <div className="w-1 bg-gray-500 ml-2 mr-4" />
      <div>
        <h1 className="text-2xl font-medium text-left">{filteredUrl.Name}</h1>
        <div className="grid grid-cols-3 gap-4 mt-8">
          {filteredUrl.tools &&
            filteredUrl.tools.map((name, index) => (
              <h1
                className="text-sm font-medium text-center rounded-full ring-2 ring-gray-500 hover:ring-white hover:bg-[#F5F5F5] cursor-pointer hover:text-[#121212] w-auto px-2 py-2 transition ease-in-out delay-100"
                key={index}
              >
                {name}
              </h1>
            ))}
        </div>
        <label className="text-xl lg:text-sm flex opacity-60 text-left mt-10">
          {filteredUrl.Desc1}
        </label>
        <label className="text-xl lg:text-sm flex opacity-60 text-left mt-4 pb-10">
          {filteredUrl.Desc2}
        </label>
        <ButtonGithub filteredUrl={filteredUrl}/>
      </div>
    </>
  );
};

export default Details;
