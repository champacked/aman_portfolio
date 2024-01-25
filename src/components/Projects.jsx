import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h1>
        Project Works<span className="dot">.</span>
      </h1>
      <div className="projectWrapper">
        <ProjectCard
          name="URL Shortner"
          desc="The application offers users the ability to transform lengthy URLs into concise, shareable links, streamlining online content sharing. Tech Stack: Node.js and Mongo DB"
          link="https://github.com/champacked/url-shortner-app"
        />
        <ProjectCard
          name="Hospital API"
          desc="This application facilitates seamless integration of patient records, appointment scheduling, and resource allocation, optimizing overall operational efficiency in healthcare settings."
          link="https://github.com/champacked/hospital-api"
        />
        <ProjectCard
          name="Authentication App"
          desc="Developed an authentication system using Nodejs, Express.js,Passport.js, JWT, EJS, Mongodb. Features: Sign up with email, Reset password after sign in, Forgot password, Sign out, Google login/signup."
          link="https://node-auth-o7vv.onrender.com/"
        />
        <ProjectCard
          name="Placement Cell App"
          desc="Created an Placement cell web application using node.js, bootstrap, JSON web token, EJS,Mongodb . It will help to maintain a database of all the student interviews."
          link="https://github.com/soumya-verma/Couch-Potatoes"
        />
      </div>
    </div>
  );
};

export default Projects;
