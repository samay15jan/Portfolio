import React from 'react'
import Graph from './Graph'
import Card from './Card'
import Bingelord from '../../assets/projects/Bingelord.png'
import Porsche_Replicant from '../../assets/projects/Porsche_Replicant.png'
import Quantum_Quest from '../../assets/projects/Quantum_Quest.png'
import ThoughtScape from '../../assets/projects/ThoughtScape.png'

const Projects = () => {
  return (
    <div className='mt-40'>

      <label className='text-4xl flex justify-center mb-5'>
        My Recent
      <div className='text-[#23C562] ml-2'>
        Works
      </div>
      </label>

      <label className='text-lg flex justify-center mb-20'>
        Here are a few of my projects i've worked on recently.
      </label>

      <div className='grid grid-cols-2'>
        <Card src={Bingelord} name="Bingelord"/>
        <Card src={Porsche_Replicant} name="Porsche-Replicant"/>
        <Card src={Quantum_Quest} name="Quantum-Quest"/>
        <Card src={ThoughtScape} name="ThoughtScape"/>
      </div>
      <Graph/>
    </div>
  )
}

export default Projects