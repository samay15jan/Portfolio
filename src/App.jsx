import React from 'react'
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
  return (
    <Container style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}>
      <Header />
      <Home />
      <About />
      <Projects />
      <Resume />
      <Footer />
    </Container>
  )
}

export default App