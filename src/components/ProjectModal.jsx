import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Image, X } from "lucide-react";

function ProjectModal({ project, onClose }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-0"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="bg-white text-gray-800 w-full max-w-4xl overflow-hidden rounded-none sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full sm:h-[90vh]">
          <div className="flex-grow overflow-y-auto p-4 sm:p-6 md:p-8">
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={onClose}
                className="text-gray-600 hover:text-gray-800"
              >
                <X className="w-6 h-6" />
                <span className="sr-only">Close</span>
              </button>
              <span className="text-gray-600">Back To Projects</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              {project.title}
            </h2>
            <p className="text-gray-600 mb-6">{project.description}</p>

            <div className="bg-gray-100 rounded-xl overflow-hidden mb-6">
              <div className="relative h-48 sm:h-64 md:h-[450px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold mb-2">About</h3>
            <p className="text-gray-600 mb-6">{project.about}</p>

            <h3 className="text-xl sm:text-2xl font-semibold mb-2">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Website</h3>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline break-words"
            >
              {project.link}
            </a>
          </div>

          <div className="border-t border-gray-200 p-4 sm:p-6">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-600 text-white text-center py-3 rounded-full hover:bg-blue-700 transition duration-300 text-lg font-semibold"
            >
              Open Project
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectModal;
