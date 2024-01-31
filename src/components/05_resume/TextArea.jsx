import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Label = styled.label`${tw`absolute bg-[#333448] text-lg text-[#23C562] ml-2 px-2`}`
const Input = styled.input`${tw`w-full mt-3 text-white bg-transparent border-2 border-gray-400 p-4 rounded-md`}
&:focus {
  outline: none;
  border-color: #23C562;
}
`

const TextArea = ({ label, type, placeholder }) => {
  return (
    <div className='my-4'>
      <Label>{label}</Label>
      <Input type={type} placeholder={placeholder}/>
    </div>
    )
}

export default TextArea