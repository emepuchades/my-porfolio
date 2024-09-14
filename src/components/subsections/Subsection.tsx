import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowBigRight } from "lucide-react";
// @ts-ignore
import portada from "../../assets/portada.png";

interface HorizontalSectionProps {
  subsections: string[];
  currentSubsection: number;
}

export default function Subsection({
  subsections,
  currentSubsection,
}: HorizontalSectionProps) {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div
        className="h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateY(-${currentSubsection * 100}vh)` }}
      >
        {subsections.map((subsection, index) => (
          <div
            key={index}
            className="h-screen w-screen flex items-center justify-center"
          >
            {currentSubsection === index && (
              <div className=" text-black min-h-screen flex items-center justify-center p-4">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
                  <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
                    <h2 className="text-3xl font-bold mb-4">{subsection}</h2>
                    <div className="p-4 mb-4">
                      <h1 className="text-5xl font-bold">Crown Clothing</h1>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4 text-white">
                      {[
                        "React",
                        "Redux",
                        "Node",
                        "JavaScript",
                        "SASS",
                        "Firebase",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="mb-4">
                      Online store for selling apparel & foot wear.
                    </p>
                    <p className="mb-6">
                      <span className="font-semibold">Built with:</span> React,
                      Redux, Node, JavaScript, SASS, Custom Stripe Integration,
                      Firebase (NoSQL Database, Cloud Functions, Cloud Storage,
                      Hosting).
                    </p>
                    <div className="space-y-2">
                      <a
                        href="#"
                        className="flex items-center text-blue-400 hover:underline"
                      >
                        View the code <ArrowBigRight className="ml-2 h-4 w-4" />
                      </a>
                      <a
                        href="#"
                        className="flex items-center text-blue-400 hover:underline"
                      >
                        Visit the app <ArrowBigRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                  <AnimatePresence mode="wait">
                    <div className="lg:w-1/2">
                      <div className="md:w-1/2 relative">
                        <div className="w-[150%] h-[500px] bg-gradient-to-r from-violet-200 to-pink-200 blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]"></div>
                      </div>
                      <div className="relative">
                        <img src={portada} alt="Project" />
                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-gray-800 rounded-full"></div>
                        <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gray-800 rounded-full"></div>
                      </div>
                    </div>
                  </AnimatePresence>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
