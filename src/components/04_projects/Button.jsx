import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { FaGithub } from "react-icons/fa";
import { SiDocsdotrs } from "react-icons/si";

const ButtonContainer = styled.button`${tw`flex bg-[#23C562] drop-shadow-2xl shadow-md shadow-[#23C562]/50 px-2 py-1 text-black text-lg font-bold rounded-md transition ease-in-out delay-100`}
&:hover {
  background-color: white;
  transform: scale(1.1); 
  opacity: 0.8;
  box-shadow: 5px 5px #23C562;
}`

const Button = ({ type, link }) => {
  return (
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <ButtonContainer>
          {type === 'Github'
              ? <FaGithub size={20} color='black' className=' mt-1 scale-75 hover:animate-pulse hover:scale-100 transition ease-in-out mr-1'/>
              : <SiDocsdotrs size={20} color='black' className='mt-1 scale-75 hover:animate-pulse hover:scale-100 transition ease-in-out mr-1'/>
          }
          {type}
      </ButtonContainer>
     </a>
    </div>
  )
}

export default Button