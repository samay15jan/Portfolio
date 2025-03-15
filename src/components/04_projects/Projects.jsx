import React from 'react'
import Card from './Card'
import Graph from './Graph'

const Projects = ({ targetRef }) => {

  const projects = ["Bingelord", "Porsche-Replicant", "Quantum-Quest", "Thoughtscape" ]

  return (
    <div className='pt-40' ref={targetRef}>

      <label className='text-4xl flex justify-center mb-5'>
        My Recent
        <div className='text-[#23C562] ml-2'>
          Works
        </div>
      </label>

      <Card name={projects[0]} />

      {/* <div>
        {projects.map((project, index) => (
          <div id={index}>
            <Card name={project.name} />
          </div>
        ))}
      </div> */}
      
      <Graph />
    </div>
  )
}

export default Projects