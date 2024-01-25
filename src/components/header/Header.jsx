import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Icon from './Icon'
import Socials from './Socials'
import Menus from './Menus'

const Container = styled.div`${tw`w-screen relative flex justify-between py-8 px-16`}`

const Header = () => {
  return (
    <Container>
        <Icon/>
        <div className='mt-1 w-screen flex justify-center space-x-6'>
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