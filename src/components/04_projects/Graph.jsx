import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import GitHubCalendar from 'react-github-calendar';

const Container = styled.div`${tw`text-white text-2xl grid grid-cols-1 lg:mx-56 mt-24 py-10 px-5 rounded-3xl shadow-2xl justify-center bg-[#0d1117]`}`
const Heading = styled.div`${tw`text-white text-4xl flex justify-center mb-10`}`

const Graph = () => {
    const [show, setShow] = useState(false)

    setTimeout(() => {
        setShow(true)
    }, 5000);

  return (
    <>
    <Container>
        <Heading>Days I Code</Heading>
        <div className='flex justify-center'>
            {show 
                ? <GitHubCalendar username="samay15jan" colorScheme="dark"/>
                : <GitHubCalendar loading username="samay15jan" colorScheme="dark"/>
            }
        </div>
    </Container>
    </>

  )
}

export default Graph