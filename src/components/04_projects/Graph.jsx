import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import GitHubCalendar from "react-github-calendar";
import EyeBall from "../../utils/EyeBall";
import Eyecon from "/eyecon.png";

const Container = styled.div`
  ${tw`relative z-20 text-white text-2xl py-10 px-5 rounded-3xl shadow-2xl bg-[#0d1117] transition-opacity duration-700`}
  text-align: center;
`;

const Heading = styled.div`
  ${tw`text-white text-4xl mb-10`}
`;

const Graph = () => {
  const [show, setShow] = useState(false);
  const itemRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className="relative w-screen h-screen flex items-center justify-center"
    >
      <img
        className={`absolute top-0 left-0 w-full h-full object-cover opacity-60 transition-transform duration-700 ${
          isVisible ? "scale-110" : "scale-80"
        }`}
        src={Eyecon}
        alt="Background"
      />

      <EyeBall opacity={100} />

      <div className="absolute flex flex-col items-center justify-center">
        <Container className={isVisible ? "opacity-90" : "opacity-0"}>
          <Heading>Days I Code</Heading>
          <div className="flex bg justify-center">
            {show ? (
              <GitHubCalendar username="samay15jan" colorScheme="dark" />
            ) : (
              <GitHubCalendar
                loading
                username="samay15jan"
                colorScheme="dark"
              />
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Graph;
