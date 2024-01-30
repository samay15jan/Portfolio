import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import TwinMacroIcon from '../../assets/about/twin.png'

const Container = styled.div`
    ${tw`relative z-1 p-1 m-1 bg-gradient-to-r from-[#c566a5] via-[#7711f0] to-[#3c18b8] rounded-lg hover:shadow-2xl hover:shadow-[#f1f1f1]`},
    &:hover {
        transform: scale(1.2); 
        transition: transform 0.1s ease-in-out;
    }
`

const Icon = ({ Type }) => {
  return (
    <Container>
      {Type === 'TwinMacroIcon'
        ? <div className='w-10'><img src={TwinMacroIcon}/></div>
        : <Type size={40} />
      }
    </Container>
  )
}

export default Icon