import React from 'react'
import Card from './Card'
import Bingelord from '../../assets/projects/Bingelord.png'
import Porsche_Replicant from '../../assets/projects/Porsche_Replicant.png'
import Quantum_Quest from '../../assets/projects/Quantum_Quest.png'
import ThoughtScape from '../../assets/projects/ThoughtScape.png'
import Graph from './Graph'

const Projects = ({ targetRef }) => {

  const projects = [
    {
      id: '01',
      name: 'Bingelord',
      src: Bingelord,
    },
    {
      id: '02',
      name: 'Porsche-Replicant',
      src: Porsche_Replicant,
    },
    {
      id: '03',
      name: 'Quantum-Quest',
      src: Quantum_Quest,
    },
    {
      id: '04',
      name: 'ThoughtScape',
      src: ThoughtScape,
    }
  ]

  return (
    <div className='pt-40' ref={targetRef}>

      <label className='text-4xl flex justify-center mb-5'>
        My Recent
      <div className='text-[#23C562] ml-2'>
        Works
      </div>
      </label>

      <label className='text-lg flex text-center justify-center mb-12 lg:mb-10 lg:mx-0 mx-10'>
        Here are a few of my projects i've worked on recently.
      </label>

      <div className='grid lg:grid-cols-4'>
            {projects.map((project) => (
              <div layoutId={project.id}>
                <Card name={project.name} src={project.src}/>
              </div>
            ))}
      </div>
      <Graph />
    </div>
  )
}

export default Projects