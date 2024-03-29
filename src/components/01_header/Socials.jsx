import React from 'react'
import { FaGithub } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`${tw`flex lg:mt-0 space-x-6 lg:space-x-4`}`

const Socials = () => {
  return (
    <Container>
        <a className='h-0' href="https://github.com/samay15jan" target="_blank" rel="noopener noreferrer">
            <FaGithub size={35} color='white' className='lg:scale-75 hover:animate-pulse hover:scale-100 transition ease-in-out'/>
        </a>

        <a className='h-0' href="mailto:samay15jan@gmail.com" target="_blank" rel="noopener noreferrer">
            <TfiEmail size={35} color='white' className='lg:scale-75 hover:animate-pulse hover:scale-100 transition ease-in-out'/>
        </a>
    </Container>
  )
}

export default Socials