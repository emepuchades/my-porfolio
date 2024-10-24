import React from "react";
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
        className={`relative bg-black ${isSmallCard ? "h-40 sm:h-48" : "h-48 sm:h-64"} ${
          imageHeightClasses[project.size]
        }`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain"
          style={{
            objectFit: 'scale-down',
            maxHeight: '100%',
            maxWidth: '100%',
          }}
        />
      </div>
      <div className="bg-white flex-grow flex flex-col justify-between p-3 sm:p-5">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{project.title}</h3>
        <Link
          to={`/project/${project.id}`}
          className="inline-block bg-purple-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full transition duration-150 ease-in-out text-xs sm:text-sm text-center mt-auto hover:bg-purple-700"
        >
          Ver el proyecto
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;