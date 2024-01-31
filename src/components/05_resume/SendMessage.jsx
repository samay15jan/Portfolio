import React from 'react'
import TextArea from './TextArea'
import SendButton from './SendButton'

const SendMessage = () => {
  return (
    <div>
      <label className='text-4xl flex justify-center my-5'>
        Send me a message
      </label>
      <div className='grid grid-cols-2 space-x-5'>
        <TextArea label='Name' type='text' placeholder='Arsen Lupen...'/>
        <TextArea label='Email' type='email' placeholder='webdeveloper@gmail.com'/>
      </div>
    <TextArea label='Message' type='text' placeholder="Hey, let's collaborate..."/>
    <SendButton />
    </div>
  )
}

export default SendMessage