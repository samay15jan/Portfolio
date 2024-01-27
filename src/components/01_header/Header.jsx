import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Icon from './Icon'
import Socials from './Socials'
import Menus from './Menus'
import { IoHomeSharp, IoHomeOutline, IoDocumentTextSharp, IoDocumentTextOutline } from "react-icons/io5";
import { FaUser, FaRegUser } from "react-icons/fa";
import { RiBrush4Line, RiBrush4Fill } from "react-icons/ri";

const Container = styled.div`${tw`w-screen fixed z-50 flex justify-between py-8 px-16 bg-[#333448] bg-opacity-90`}`

const Header = () => {
  return (
    <Container>
        <Icon/>
        <div className='mt-1 fixed w-screen flex justify-center space-x-6'>
          <Menus Text="Home"/>
          <Menus Text="About"/>
          <Menus Text="Projects"/>
          <Menus Text="Resume"/>
        </div>
        <Socials/>
    </Container>
  )
}

export default Header