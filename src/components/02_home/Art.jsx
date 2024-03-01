import React from 'react'
import ImageArt from '../../assets/home/Main_art.png'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`${tw`absolute w-screen flex lg:mt-0 mt-10 lg:justify-center`}`
const Logo = styled.img`${tw`w-2/3 lg:w-2/5 lg:mr-12 h-auto bg-blend-multiply`}`

const Art = () => {
  return (
    <Container>
        <Logo src={ImageArt} alt='Coding on Laptop Art' />
    </Container>
  )
}

export default Art