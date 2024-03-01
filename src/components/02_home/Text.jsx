import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Top = styled.div`${tw`text-7xl`}`
const Bottom = styled.div`${tw`opacity-60 mt-10 text-lg max-w-80`}`

const Text = ({ Top_Text1, Top_Text2, Bottom_Text, align }) => {
  return (
    <div align={align} >
      <Top>
        <div className='mb-4'>{Top_Text1}</div>
        <div className={align === 'left' ? 'ml-4' : ''}>{Top_Text2}</div>
      </Top>
      <Bottom >{Bottom_Text}</Bottom>
    </div>
  )
}

export default Text