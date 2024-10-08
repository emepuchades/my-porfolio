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

function ProjectCard({ project, index, setSelectedProject }) {
  const isSmallCard = project.size === "small";

  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 w-full h-full flex flex-col ${
        sizeClasses[project.size]
      }`}
    >
      <div
        className={`relative ${isSmallCard ? "h-3/5" : "h-2/3"} ${
          imageHeightClasses[project.size]
        }`}
      >
        <img
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="bg-white flex-grow flex flex-col justify-between">
        <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
        <button
          onClick={() => setSelectedProject(project)}
          className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full transition duration-150 ease-in-out text-sm text-center mt-auto"
        >
          View Project
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
