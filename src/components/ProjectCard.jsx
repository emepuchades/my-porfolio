import React, { useState } from "react";
import { Link } from 'react-router-dom'
import {
  imageHeightClasses,
  sizeClasses,
} from "../utils/constants/project";

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
        <Link
          to={`/project/${project.id}`}
          className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full transition duration-150 ease-in-out text-sm text-center mt-auto hover:bg-purple-700"
        >
          View Project
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
