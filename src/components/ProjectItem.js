import React from "react";

function ProjectItem({ name, about, technologies }) {
  const projectTech = technologies.map((tecnhology, index) => {
    //console.log(technologies)
      return <span key={index}>{tecnhology}</span>
      
  })
  //console.log(projectTech)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {projectTech}
      </div>
    </div>
  );
}

export default ProjectItem;
