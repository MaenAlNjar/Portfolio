import React from "react";
import ProjectCard from "./motion/ProjectCard.jsx";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 z-50 "
      id="projects"
    >
      <h1 className="text-[40px] font-code  uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Projects
      </h1>
      <div className="flex gap-12 z-50">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
