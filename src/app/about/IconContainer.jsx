import React from 'react'
import Icon from './Icon'

const IconContainer = ({ startingText, endingText, type }) => {
  return (
    <div>
      <div className="text-2xl text-center flex justify-center ">{startingText} <div className='text-[#E53935] ml-2'>{endingText}</div></div>
      <div className='grid grid-cols-4 mx-10 lg:mx-0 lg:flex justify-center'>
        {Object.values(type).map((skill, index) => (
          <a key={index} href={skill.src} target="_blank" rel="noopener noreferrer">
            <Icon Type={skill.icon} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default IconContainer