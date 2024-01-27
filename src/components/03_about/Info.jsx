import React from 'react'
import Art from '../../assets/home/art.png'
import { Image } from '@nextui-org/react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { LiaHandPointRightSolid } from "react-icons/lia";

const Container = styled.div`${tw`grid grid-cols-2 pt-32 mx-24 ml-36`}`
const Heading = styled.h2`${tw`text-3xl text-center flex justify-center`}`
const Paragraph = styled.p`${tw`text-lg text-left mt-10`}`
const SubHeading = styled.h6`${tw`text-lg text-left mt-5`}`
const Quote = styled.h3`${tw`grid grid-cols-1 text-center justify-center text-xl mt-8 text-[#edf8ff] opacity-60`}`

const Info = () => {
  return (
    <Container>
      <div>
        <Heading>Know Who <div className='text-[#23C562] ml-2'>I'M</div></Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore dolorum dolor libero maiores saepe quae provident eum, nisi ab ad reiciendis voluptates aut facere voluptas? Ducimus beatae magni odit molestias.
        </Paragraph>
        
        <SubHeading>Apart from coding, some other activites that i love to do!</SubHeading>
        <ul className='ml-10 mt-5 text-lg'>
          <li className='flex my-2'> <LiaHandPointRightSolid className='mr-2' size={25} color='#23C562'/> Watching Movies/Series </li>
          <li className='flex my-2'> <LiaHandPointRightSolid className='mr-2' size={25} color='#23C562'/> Playing Around With Linux </li>
          <li className='flex my-2'> <LiaHandPointRightSolid className='mr-2' size={25} color='#23C562'/> Sleeping...Ofcourse </li>
        </ul>
        <Quote>
          <div>"Opportunities don't happen, you create them.”</div>
          <div className=''>- Samay</div>
        </Quote>
      </div>
      <Image className='ml-20 mt-20' width={500} src={Art} alt="Artwork" />
    </Container>
  )
}

export default Info