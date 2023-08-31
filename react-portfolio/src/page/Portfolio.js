import React from 'react'
import {projects} from '../data';
import Project from '../components/Project'

const Portfolio = () => {
  return (
    <div>
      {projects.map((project, i) => (
        <Project project={project}
        key={i} />
        ))}
    </div>
  )
}

export default Portfolio