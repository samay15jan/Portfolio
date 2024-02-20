import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import TwinMacroIcon from '../../assets/about/twin.png'
import { motion } from 'framer-motion'

const Container = styled.div`
  ${tw`relative z-1 p-1 m-1 bg-gradient-to-r from-[#c566a5] via-[#7711f0] to-[#3c18b8] rounded-lg hover:shadow-2xl hover:shadow-[#f1f1f1]`},
`

const Icon = ({ Type }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: 90 }}
    >
    <Container>
      {Type === 'TwinMacroIcon'
        ? <div className='w-8'><img src={TwinMacroIcon}/></div>
        : <motion.div
            whileHover={{ scale: 1.1, rotate: -90 }}
          >
            <Type size={30} />
          </motion.div>
      }
    </Container>
    </motion.div>
  )
}

export default Icon