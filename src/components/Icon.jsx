import React from "react";

const Icon = (props) => {
  return (
    <div className="icons">
      <a target="_blank" rel="noreferrer" href={props.link}>
        <i class={props.name}></i>
      </a>
    </div>
  );
};

export default Icon;
