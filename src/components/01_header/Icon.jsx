import React from 'react'
import TopIcon from '../../assets/header/Icon.png'
import styled from 'styled-components'
import tw from 'twin.macro'
import {Image} from "@nextui-org/react";

const ImageContainer = styled.div`${tw`w-44 h-auto hover:animate-pulse`}`

const Icon = () => {
  return (
    <ImageContainer>
        <Image src={TopIcon} alt="Icon"/>
    </ImageContainer>
  )
}

export default Icon