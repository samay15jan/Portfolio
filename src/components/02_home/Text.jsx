import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Top = styled.div`${tw`absolute right-5 z-50 lg:static text-5xl lg:text-7xl`}`
const TopText = styled.div`${tw`lg:mr-0 opacity-40 lg:opacity-100 mb-4`}`
const Bottom1 = styled.div`${tw`hidden lg:block opacity-40 mt-10 text-lg max-w-80`}`
const Bottom2 = styled.div`${tw`absolute bottom-52 lg:hidden opacity-60 lg:ml-0 ml-10 text-xl lg:text-lg max-w-80`}`

const Text = ({ Top_Text1, Top_Text2, Bottom_Text, align }) => {
  return (
    <div align={align} >
      <Top>
        <TopText className={align === 'right' ? 'mr-5' : 'mr-0'}>{Top_Text1}</TopText>
        <div className={align === 'left' ? 'lg:ml-4 ml-16' : 'lg:mr-0 mr-0'}>{Top_Text2}</div>
      </Top>
      <Bottom1>{Bottom_Text}</Bottom1>
      <Bottom2>{align === 'left' && Bottom_Text}</Bottom2>
    </div>
  )
}

export default Text