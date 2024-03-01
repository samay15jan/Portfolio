import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Art from './Art'
import Text from './Text'
import ContactButton from './ContactButton'
import ScrollDown from './ScrollDown'

const Container = styled.div`${tw`pt-24 lg:pt-44 grid lg:grid-cols-2 justify-between`}`

const Home = ({ targetRef, scrollToAbout, scrollToResume }) => {
  return (
    <Container ref={targetRef}>
      <div className='grid-rows-1 lg:ml-16 '>
        <Text Top_Text1='Samay' Top_Text2='Kumar' Bottom_Text='Coding Enthusiast & Recent High School Graduate, Transforming Ideas into Seamless Digital Experiences...' align='left'/>
        <div className='lg:ml-0 lg:pt-10 mt-0 ml-10'>
          <ContactButton align='center' scrollToBottom={scrollToResume}/>
        </div>
      </div>
        <Art/>
      <div className='lg:relative absolute right-0 mt-44 lg:mt-0 grid-cols-1 lg:mr-16'>
        <Text Top_Text1='Web - ' Top_Text2='Developer' Bottom_Text='Crafting sleek and dynamic websites with a blend of functionality, and UI design.' align='right'/>
        <ScrollDown align='right' scrollToAbout={scrollToAbout}/>
      </div>
    </Container>
  )
}

export default Home