import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Art from './Art'
import Text from './Text'
import ContactButton from './ContactButton'
import ScrollDown from './ScrollDown'

const Container = styled.div`${tw`grid grid-cols-2 justify-between`}`

const Home = () => {
  return (
    <Container>
      <div className='grid-rows-1 ml-16'>
        <Text Top_Text1='Samay' Top_Text2='Kumar' Bottom_Text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam animi cumque pariatur, unde distinctio eum incidunt hic' align='left'/>
        <ContactButton align='left'/>
      </div>
        <Art/>
      <div className='grid-cols-1 mr-16'>
        <Text Top_Text1='Web - ' Top_Text2='Developer' Bottom_Text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam animi cumque pariatur, unde distinctio eum incidunt hic' align='right'/>
        <ScrollDown align='right'/>
      </div>
    </Container>
  )
}

export default Home