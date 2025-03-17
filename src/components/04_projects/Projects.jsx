import React from 'react'
import Main from './Main'
import Graph from './Graph'

const Projects = ({ targetRef }) => {
  return (
    <div className='pt-40' ref={targetRef}>
      <label className='text-4xl flex justify-center mb-5'>
        My Recent
        <div className='text-[#23C562] ml-2'>
          Works
        </div>
      </label>
      <Main />
      <Graph />
    </div>
  )
}

export default Projects