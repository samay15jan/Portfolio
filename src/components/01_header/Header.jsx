import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Icon from './Icon'
import Socials from './Socials'
import Menus from './Menus'

const Container = styled.div`${tw`w-screen lg:fixed z-50 flex justify-between pb-2 pt-8 lg:pb-4 lg:pt-6 px-4 lg:px-10 bg-[#333448] bg-opacity-90`}`

const Header = ({ scrollToHome, scrollToAbout, scrollToProjects, scrollToResume }) => {
  return (
    <Container>
        <Icon/>
        <div className='lg:flex hidden mt-1 absolute w-screen flex justify-center space-x-6'>
          <Menus Text="Home" scrollClick={scrollToHome}/>
          <Menus Text="About" scrollClick={scrollToAbout} />
          <Menus Text="Projects" scrollClick={scrollToProjects} />
          <Menus Text="Contact" scrollClick={scrollToResume} />
        </div>
        <Socials/>
    </Container>
  )
}

export default Header