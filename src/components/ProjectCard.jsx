import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="projectCard">
      <i class="fas fa-check-double fa-3x"></i>
      <h3>{props.name}</h3>
      <p>{props.desc}</p>
      <br />
      <a target="_blank" rel="noreferrer" href={props.link}>
        VISIT
      </a>
    </div>
  );
};

export default ProjectCard;
