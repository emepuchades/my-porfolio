import React from "react";
import { useParams, Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { Image, X, ArrowLeft, ArrowUpRight, Globe, Code, Database } from "lucide-react";
import { projects } from "../utils/constants/project";

function ProjectModal() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  console.log('projects', projects)
  console.log('project', project)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
<div className="min-h-screen bg-white text-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back To Projects
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-2">{project.title}</h1>
        <p className="text-xl mb-8">{project.description}</p>

        <div className="mb-8 rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={600}
            layout="responsive"
            objectFit="cover"
          />
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
          <p>{project.about}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-gray-800 text-white rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Website</h2>
          <a href={project.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
            {project.website}
          </a>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Github</h2>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
            {project.github}
          </a>
        </section>

        <a
          href={project.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full bg-blue-600 text-gray-900 text-center py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Open Project
        </a>
      </div>
    </div>)
}

export default ProjectModal;
