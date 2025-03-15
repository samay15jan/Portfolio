import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Divider } from '@nextui-org/react'

const Container = styled.div`${tw`relative z-40 bg-[#333448] w-screen text-center bg-[#333448]`}`
const Heading = styled.div`${tw`text-lg font-bold mb-5 flex justify-center`}`
const SubHeading = styled.div`${tw`text-sm pb-5 mr-2`}`

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <Container>
      <Divider className='my-4 bg-black opacity-20'/>
      <div>
        <Heading>
            <div>Crafted By</div>
            <a href='https://github.com/samay15jan' target="_blank" className='hover:text-[#23C562] ml-2'>
              Samay Kumar ! 😎 ⚡
            </a>
        </Heading>
        <SubHeading>
            {year} © All rights reserved
        </SubHeading>
      </div>
    </Container>
  )
}

export default Footer