import React, { useState } from 'react'
import { IoIosArrowRoundDown } from "react-icons/io";
import styled from 'styled-components'
import tw from 'twin.macro'
import { motion, useAnimation } from 'framer-motion';

const Container = styled.div`${tw`mb-32 mt-8 mr-10 relative`}`
const Button = styled.button(({ hideArrow }) => [
  hideArrow
    ? tw`mt-12 mr-9 w-14 h-14 rounded-full`
    : tw`mt-12 mr-9 w-14 h-14 ring ring-2 ring-opacity-50 ring-white rounded-full`
])

const ScrollDown = ({ align, scrollToAbout }) => {
  const [hideArrow, setHideArrow] = useState(false)
  const controls = useAnimation();

  const handleClick = () => {
    setHideArrow(true)
    controls.start({
      stroke:"#23C562", 
      pathLength: 1,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    })
    setTimeout(() => {scrollToAbout()},1000)
    setTimeout(() => {
      controls.start({
        stroke:"#23C562", 
        pathLength: 0,
        transition: {
          duration: 0,
          ease: "easeInOut"
        }
      })
      setHideArrow(false)
    }, 5000);
  }

  return (
    <Container align={align}>
      
      <svg className='absolute right-0' width="190" height="200">
        <path id="curve" d="M 100,100 A 35,35 0 1,1 120,110" fill="none"/>
        <text fill="white" opacity='0.5' fontSize="12px">
          <textPath xlinkHref="#curve" startOffset="0%">
            more about me more about me
          </textPath>
        </text>
      </svg>
    
    <Button hideArrow={hideArrow}>

      {hideArrow 
          ? ''
          : <div className='ml-1 mt-3 absolute z-10'>
              <IoIosArrowRoundDown className='animate-bounce' size={45} color='#23C562'/>
            </div>
      }

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className='relative z-50'
      >
        <motion.circle 
          cx="50" 
          cy="50" 
          r="47" 
          stroke="white" 
          strokeWidth="4"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={controls}
          onTap={handleClick}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-150 0 850 500"
        >
        <motion.polyline
          points="416 128 192 384 96 288" 
          fill="none"
          stroke="#23C562"
          strokeLinejoin="round"
          strokeWidth="50"
          initial={{ pathLength: 0 }}
          animate={controls}
          onTap={handleClick}
        />
        </svg>
      </svg>

    </Button>
    </Container>
  )
}

export default ScrollDown