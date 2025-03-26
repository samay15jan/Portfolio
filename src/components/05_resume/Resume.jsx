import React from "react";
import Connect from "./Connect";
import SendMessage from "./SendMessage";

const Resume = ({ targetRef }) => {
  return (
    <div
      ref={targetRef}
      className="grid lg:grid-cols-2 mx-5 lg:mx-20 lg:mt-20 my-28 lg:mb-24"
    >
      <Connect />
      <SendMessage />
    </div>
  );
};

export default Resume;
