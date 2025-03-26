import React, { useRef, useState } from "react";
import { ReactLenis } from "lenis/react";
import styled from "styled-components";
import tw from "twin.macro";
import Header from "./components/01_header/Header";
import Home from "./components/02_home/Home";
import About from "./components/03_about/About";
import Projects from "./components/04_projects/Projects";
import Resume from "./components/05_resume/Resume";
import Footer from "./components/06_footer/Footer";

const Container = styled.div`
  ${tw`w-screen overflow-x-hidden h-full bg-[#333448] text-white`}
`;

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);
  const [componentMount, setComponetMount] = useState(false);
  const scrollToTarget = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ReactLenis root options={{ lerp: 0.15 }}>
      <Container style={{ fontFamily: "Montserrat Alternates, sans-serif" }}>
        <Header
          scrollToHome={() => scrollToTarget(homeRef)}
          scrollToAbout={() => scrollToTarget(aboutRef)}
          scrollToProjects={() => scrollToTarget(projectsRef)}
          scrollToResume={() => scrollToTarget(resumeRef)}
        />
        <Home
          targetRef={homeRef}
          scrollToAbout={() => scrollToTarget(aboutRef)}
          scrollToResume={() => scrollToTarget(resumeRef)}
        />
        <About targetRef={aboutRef} />
        <Projects
          targetRef={projectsRef}
          setComponetMount={(bool) => setComponetMount(bool)}
        />
        {componentMount && (
          <>
            <Resume targetRef={resumeRef} />
            <Footer />
          </>
        )}
      </Container>
    </ReactLenis>
  );
};

export default App;
