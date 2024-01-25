import React from 'react'
import Header from './components/header/Header'
import styled from 'styled-components'
import tw from 'twin.macro'
import Graph from './components/Graph'

const Container = styled.div`${tw`w-screen h-screen bg-[#333447]`}`

const App = () => {
  return (
    <Container>
      <Header/>
      <Graph/>
    </Container>
  )
}

export default App