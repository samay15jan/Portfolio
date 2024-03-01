import React from 'react'
import Art from '../../assets/about/art.png'
import { Image } from '@nextui-org/react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Skills from './Skills'

const Container = styled.div`${tw`grid lg:grid-cols-2 lg:mx-24 lg:ml-36 text-center`}`
const Heading = styled.h2`${tw`lg:mt-32 w-screen lg:w-auto text-4xl lg:text-4xl flex mb-5 justify-center`}`
const Paragraph = styled.p`${tw`w-screen lg:w-auto text-lg opacity-70`}`

const About = ({ targetRef }) => {
  return (
    <Container ref={targetRef}>
      <div>
        <Heading>Know Who<div className='text-[#23C562] ml-2'>I'M</div></Heading>
        <Paragraph>
          I'm a 19-year-old web developer with a passion for creating innovative and user-friendly experiences. While I may be young, my coding skills are sharp and I'm constantly pushing myself to learn more.
        </Paragraph>    
        <Skills/>
      </div>
      <Image className='w-screen justify-center relative lg:ml-24 lg:mt-56' width={500} src={Art} alt="Artwork" />
    </Container>
  )
}

export default About