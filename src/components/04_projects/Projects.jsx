import React, { useState } from 'react'
import Graph from './Graph'
import Card from './Card'
import Bingelord from '../../assets/projects/Bingelord.png'
import Porsche_Replicant from '../../assets/projects/Porsche_Replicant.png'
import Quantum_Quest from '../../assets/projects/Quantum_Quest.png'
import ThoughtScape from '../../assets/projects/ThoughtScape.png'
import { motion, AnimatePresence } from 'framer-motion'

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null)

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
    <div className='mt-40'>

      <label className='text-4xl flex justify-center mb-5'>
        My Recent
      <div className='text-[#23C562] ml-2'>
        Works
      </div>
      </label>

      <label className='text-lg flex justify-center mb-10'>
        Here are a few of my projects i've worked on recently.
      </label>

      {selectedId
        ? <AnimatePresence>
            {selectedId && (
            <motion.div layoutId={selectedId}>
            {projects.filter((item) => item.id === selectedId).map((project)=> (
              <div onClick={() => setSelectedId(null)} >
                <Card name={project.name} src={project.src}/>
                <motion.button/>
              </div>
            ))}
            </motion.div>
            )}
          </AnimatePresence>
        : <div className='grid grid-cols-2'>
            {projects.map((project) => (
              <motion.div layoutId={project.id} onClick={() => setSelectedId(project.id)}>
                <Card name={project.name} src={project.src}/>
              </motion.div>
            ))}
        </div>
      }
      <Graph/>
    </div>
  )
}

export default Projects