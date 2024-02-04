import React from 'react'
import { Image } from '@nextui-org/react'
import Button from './Button'

const Card = ({ src, name }) => {
  
  const urlRoutes = {
    'Bingelord': {
      'Name': 'Bingelord',
      'Desc': 'A Movie/Series Streaming Platform',
      'Github': 'https://github.com/samay15jan/bingelord',
      'Demo': 'https://bingelord.onrender.com',
    },
    'Porsche-Replicant': {
      'Name': 'Porsche-Replicant',
      'Desc': "A Clone of Porsche's Web App",
      'Github': 'https://github.com/samay15jan/porsche-replicant',
      'Demo': 'https://porsche-replicant.web.app',
    },
    'Quantum-Quest': {
      'Name': 'Quantum-Quest',
      'Desc': 'A RealTime Task Tracker...but with fancy stuff',
      'Github': 'https://github.com/samay15jan/quantum-quest',
      'Demo': 'https://quantum-quest.web.app',
    },
    'ThoughtScape': {
      'Name': 'ThoughtScape',
      'Desc': 'A Online Journaling Platform',
      'Github': 'https://github.com/samay15jan/thoughtscape',
      'Demo': 'https://thoughtscape.web.app',
    },
  }

  const filteredUrl = Object.values(urlRoutes).filter((project) => project.Name === name)

  return (
    <div className='bg-[#8e20f1] transition ease-in-out delay-150 hover:ring hover:ring-[#23C562] hover:shadow-xl hover:cursor-pointer hover:shadow-[#23C562] shadow-2xl drop-shadow-2xl bg-opacity-5 m-10 p-5 rounded-3xl'>
        <Image className='px-20 shadow-2xl drop-shadow-2xl' src={src} alt={name}/>
        <label className='text-lg flex justify-center mt-5 mb-2 hover:cursor-pointer2'>
          {name}
        </label>
        <label className='text-lg flex justify-center opacity-60 hover:cursor-pointer'>
          {filteredUrl[0].Desc}
        </label>
        <div className='flex justify-between mx-40 my-5'>
          <Button type="Github" link={filteredUrl[0].Github}/>
          <Button type="Demo" link={filteredUrl[0].Demo}/>
        </div>
    </div>
  )
}

export default Card