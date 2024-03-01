import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`${tw`lg:h-auto h-screen lg:mt-24 lg:ml-2`}`
const Button = styled.button`${tw`lg:relative absolute bottom-20 z-40 bg-[#23C562] drop-shadow-2xl shadow-md shadow-[#23C562]/50 px-5 py-2 lg:py-3 text-black text-2xl lg:text-xl font-bold rounded-md transition ease-in-out delay-100`}
&:hover {
  background-color: white;
  transform: scale(1.1); 
  opacity: 0.8;
  box-shadow: 10px 10px #23C562;
}`

const ContactButton = ({ scrollToBottom }) => {
  return (
    <Container>
      <Button onClick={scrollToBottom}>Contact me</Button>
    </Container>
  )
}

export default ContactButton