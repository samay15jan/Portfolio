import React from 'react'
import Art from '../../assets/about/art.png'
import { Image } from '@nextui-org/react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { LiaHandPointRightSolid } from "react-icons/lia";
import Skills from './Skills'

const Container = styled.div`${tw`grid grid-cols-2 pt-32 mx-24 ml-36`}`
const Heading = styled.h2`${tw`text-2xl text-center flex mb-5 justify-center`}`
const Paragraph = styled.p`${tw`text-lg text-left`}`

const Info = () => {
  return (
    <Container>
      <div>
        <Heading>Know Who<div className='text-[#23C562] ml-2'>I'M</div></Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore dolorum dolor libero maiores saepe quae provident eum, nisi ab ad reiciendis voluptates aut facere voluptas? Ducimus beatae magni odit molestias.
        </Paragraph>    
        <Skills/>
      </div>
      <Image className='relative ml-24 mt-24' width={500} src={Art} alt="Artwork" />
    </Container>
  )
}

export default Info