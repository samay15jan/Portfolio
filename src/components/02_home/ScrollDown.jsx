import React from 'react'
import { IoIosArrowRoundDown } from "react-icons/io";
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`${tw`mt-14 mr-10 relative`}`
const Button = styled.button`${tw`p-2 pb-0 pt-4 ring-1 ring-white ring-opacity-50 rounded-full`}
&:hover {
}`

const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CircleText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: center;
  transform: rotate(-90deg);
  white-space: nowrap;
`;


const ScrollDown = ({ align }) => {
  return (
    <Container align={align}>
      <Button>
        <IoIosArrowRoundDown className='animate-bounce' size={50} color='#23C562'/>
      </Button>
    </Container>
  )
}

export default ScrollDown