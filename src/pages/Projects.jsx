import React, { useState } from "react";
import { Image, Link, X } from "lucide-react";
import {
  imageHeightClasses,
  projects,
  sizeClasses,
} from "../utils/constants/project";
import deBarfProject from "../assets/debarf.png";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "../components/ProjectModal";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-3 gap-4 md:h-[800px]">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} setSelectedProject={setSelectedProject} />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {console.log('selectedProject', selectedProject)}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
