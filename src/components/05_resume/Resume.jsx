import React from 'react'
import Connect from './Connect'
import SendMessage from './SendMessage'

const Resume = () => {
  return (
    <div className='grid grid-cols-2 mx-20 mt-32 mb-24'>
      <Connect />
      <SendMessage />
    </div>
  )
}

export default Resume