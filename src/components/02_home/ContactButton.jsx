import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`${tw`mt-14 ml-2`}`
const Button = styled.button`${tw`absolute z-50 bg-[#23C562] drop-shadow-2xl shadow-md shadow-[#23C562]/50 px-5 py-3 text-black text-xl font-bold rounded-md transition ease-in-out delay-100`}
&:hover {
  background-color: white;
  transform: scale(1.1); 
  opacity: 0.8;
  box-shadow: 10px 10px #23C562;
}`

const ContactButton = () => {
  return (
    <Container>
      <Button>Contact me</Button>
    </Container>
  )
}

export default ContactButton