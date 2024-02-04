import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Button = styled.button`${tw`w-full mt-3 text-white text-xl font-bold bg-transparent border-2 border-[#23C562] p-3 rounded-md transition ease-in-out delay-150`}
&:hover {
  outline: none;
  background-color: white;
  color: black;
  opacity: 0.8;
  box-shadow: 10px 10px #23C562;
}
`

const SendButton = ({ sendEmail }) => {
  return (
    <div className='my-4'>
      <Button onClick={sendEmail}>Send</Button>
    </div>
    )
}

export default SendButton