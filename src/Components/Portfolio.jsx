import React from 'react'
import ProjectCard from './ProjectCard'

const Portfolio = () => {
  return (
    <div className='px-4 md:px-32 lg:px-60 md:py-4' id='portfolio'>
        <div>
        <h2 className='headline-2 font-semibold'>Recent Projects</h2>
        <p className='text-sm md:text-lg'>Check our variaties of our recent projects</p>
        </div>
        <div>
            <ProjectCard/>
        </div>
    </div>
  )
}

export default Portfolio