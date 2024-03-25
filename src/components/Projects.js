import React from "react";
import ProjectCard from "./motion/ProjectCard.tsx";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
  <ProjectCard
    src="https://res.cloudinary.com/dmhvb05w3/image/upload/v1698863053/Untitled_design_tf1k3r.png"
    title="project 4"
    description="Social media application with management features, user account,
    comment with photo, add friend, profile, change user data, chat
    between users."
  />
  <ProjectCard
    src="https://res.cloudinary.com/dmhvb05w3/image/upload/v1698863053/Untitled_design_1_vfhg6s.png"
    title="project 5"
    description="Card game app with management features, Source for cards, Shop
    to buy cards, ability to see online users, make card fight with
    another user, admin page, the profile can user customize it with
    design he wants."
  />
  <ProjectCard
    src="https://res.cloudinary.com/dmhvb05w3/image/upload/v1698860235/1000_F_579688567_hmuT3hnFxTeDBXsyUUsmvB6Kvt0UF8Bd_u825oe.jpg"
    title="project 6"
    description="Coming soon will be new Idea with Next.js"
  />
</div>
    </div>
  );
};

export default Projects;