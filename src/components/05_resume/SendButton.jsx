import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Button = styled.button`${tw`w-full mt-3 text-white text-xl font-bold bg-transparent border-2 border-gray-400 p-3 rounded-md`}
&:hover {
  outline: none;
  border-color: #23C562;
}`

const SendButton = () => {
  return (
    <div className='my-4'>
      <Button>Send</Button>
    </div>
    )
}

export default SendButton