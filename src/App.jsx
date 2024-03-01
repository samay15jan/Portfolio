import React, { useRef } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Header from './components/01_header/Header'
import Home from './components/02_home/Home'
import About from './components/03_about/About'
import Projects from './components/04_projects/Projects'
import Resume from './components/05_resume/Resume'
import Footer from './components/06_footer/Footer'

const Container = styled.div`${tw`w-screen h-full bg-[#333448] text-white`}`

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);

  const scrollToTarget = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Container style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}>
      <Header
        scrollToHome={() => scrollToTarget(homeRef)}
        scrollToAbout={() => scrollToTarget(aboutRef)}
        scrollToProjects={() => scrollToTarget(projectsRef)}
        scrollToResume={() => scrollToTarget(resumeRef)} 
      />
      <Home targetRef={homeRef} scrollToAbout={() => scrollToTarget(aboutRef)}/>
      <About targetRef={aboutRef}/>
      <Projects targetRef={projectsRef}/>
      <Resume targetRef={resumeRef}/>
      <Footer />
    </Container>
  )
}

export default App