import React from "react";
import { ButtonDemo } from "./Buttons";
import { motion } from "framer-motion";

const Card1 = ({ filteredUrl }) => {
  return (
    <div
      style={{
        background:
          filteredUrl.primaryColor && filteredUrl.secondaryColor
            ? `linear-gradient(to right, ${filteredUrl.primaryColor}, ${filteredUrl.secondaryColor})`
            : "transparent",
      }}
      className={`absolute z-20 mt-4 p-4 rounded-2xl mb-5 ${
        filteredUrl.Name === "Sparklines" ? "top-20 right-44" : "left-60"
      }`}
    >
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
          src={filteredUrl.card1}
        />
      </motion.div>
    </div>
  );
};

const Card2 = ({ filteredUrl, hoveredDemo, setHoveredDemo, hovered1 }) => {
  return (
    <div
      style={{ opacity: hovered1 ? 0 : 1 }}
      className={`absolute ${
        filteredUrl.Name === "Sparklines"
          ? "-bottom-40 right-20"
          : "bottom-0 right-[-8px]"
      } z-20 backdrop-blur-xl p-4 rounded-2xl mb-5
    ${filteredUrl.Name === "Porsche Replicant" && "-bottom-20 -right-16"}
`}
    >
      <ButtonDemo
        setHoveredDemo={(bool) => setHoveredDemo(bool)}
        hoveredDemo={hoveredDemo}
        filteredUrl={filteredUrl}
      />
      <img className="rounded-2xl w-40" src={filteredUrl.card2} />
    </div>
  );
};

export { Card1, Card2 };
