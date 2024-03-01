import React from 'react'
import SVG from '../../assets/resume/roundedText.png'
import Art from '../../assets/resume/connect.png'
import { Image } from '@nextui-org/react'

const Connect = () => {
  return (
    <div className='lg:block hidden'>
      <img className='absolute mt-2 left-0 opacity-50' src={SVG} alt="svg" />
      <Image src={Art} className='w-full mt-40 ml-[-130px] hover:animate-pulse' alt='connect'/>
    </div>
  )
}

export default Connect