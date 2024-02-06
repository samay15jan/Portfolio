import React, { useState } from 'react'
import TextArea from './TextArea'
import SendButton from './SendButton'

const SendMessage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')

  const sendEmail = () => {
    if(name.length > 0 && email.length > 0 && message.length > 0){
      const config = {
        Host : "smtp.elasticemail.com",
        Username : "zeus15jan@gmail.com",
        Password : "7CCB6AB173D8BB2D49CAE9731B956F464BB5",
        To : "samay15jan@gmail.com",
        From : "zeus15jan@gmail.com",
        Subject : "Portfolio 🌟 🔥",
        Body : "name: " + name + " <br> Email: " + email + " <br> Message: " + message,
      }
      if(window.Email){
        window.Email.send(config)
        setResponse("Send Successfully 🚀 Get back to you ASAP")
      }
    } else {
      setResponse("An error occured !")
    }
  }
  
  const handleName = (event) => {
    setName(event.target.value)
  }
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handleMessage = (event) => {
    setMessage(event.target.value)
  }
  
  return (
    <div className='mt-32 relative z-50'>
      <label className='text-5xl flex justify-center mb-5'>
        Send me a message
      </label>
      <div className='grid grid-cols-2 space-x-5'>
        <TextArea change={handleName} label='Name' type='text' placeholder='Arsen Lupen...'/>
        <TextArea change={handleEmail} label='Email' type='email' placeholder='webdeveloper@gmail.com'/>
      </div>
    <TextArea change={handleMessage} label='Message' type='text' placeholder="Hey, let's collaborate..."/>
    <SendButton sendEmail={sendEmail}/>
    <div className={response ===  "An error occured !" ? 'text-center text-red-500 mt-5' : 'text-center text-green-500 mt-5'}>
      {response.length > 0 ? <div>{response}</div> : '' }
    </div>
    </div>
  )
}

export default SendMessage