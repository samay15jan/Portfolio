import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Art from './Art'
import Text from './Text'
import ContactButton from './ContactButton'
import ScrollDown from './ScrollDown'

const Container = styled.div`${tw`pt-44 grid grid-cols-2 justify-between`}`

const Home = ({ targetRef, scrollToAbout }) => {
  return (
    <Container ref={targetRef}>
      <div className='grid-rows-1 ml-16'>
        <Text Top_Text1='Samay' Top_Text2='Kumar' Bottom_Text='Coding Enthusiast & Recent High School Graduate, Transforming Ideas into Seamless Digital Experiences...' align='left'/>
        <ContactButton align='left'/>
      </div>
        <Art/>
      <div className='grid-cols-1 mr-16'>
        <Text Top_Text1='Web - ' Top_Text2='Developer' Bottom_Text='Crafting sleek and dynamic websites with a blend of functionality, and UI design."' align='right'/>
        <ScrollDown align='right' scrollToAbout={scrollToAbout}/>
      </div>
    </Container>
  )
}

export default Home