import React from 'react'
import Art from '../../assets/about/art.png'
import { Image } from '@nextui-org/react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Skills from './Skills'

const Container = styled.div`${tw`grid grid-cols-2 pt-32 mx-24 ml-36 text-center`}`
const Heading = styled.h2`${tw`text-2xl flex mb-5 justify-center`}`
const Paragraph = styled.p`${tw`text-lg opacity-70`}`

const About = ({ targetRef }) => {
  return (
    <Container ref={targetRef}>
      <div>
        <Heading>Know Who<div className='text-[#23C562] ml-2'>I'M</div></Heading>
        <Paragraph>
I'm a 19-year-old web developer with a passion for creating innovative and user-friendly experiences. While I may be young, my coding skills are sharp and I'm constantly pushing myself to learn more.        </Paragraph>    
        <Skills/>
      </div>
      <Image className='relative ml-24 mt-24' width={500} src={Art} alt="Artwork" />
    </Container>
  )
}

export default About