import React from "react";

function ProjectItem({ id, name, about, technologies }) {

  console.log(name, about, technologies);

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((technology) => {
        return (<span key={id}>{technologies}</span>)
        })}
      </div>
    </div>
  );
}

export default ProjectItem;
