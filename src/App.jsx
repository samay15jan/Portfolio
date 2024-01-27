import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Graph from './components/Graph'

const Container = styled.div`${tw`w-screen h-screen bg-[#333448] text-white`}`

const App = () => {
  return (
    <Container style={{ fontFamily: 'Montserrat Alternates, sans-serif' }}>
      <Header />
      <Home />
    </Container>
  )
}

export default App