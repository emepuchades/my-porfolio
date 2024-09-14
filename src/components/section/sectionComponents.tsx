import React from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { Section } from "../../types/types";
// @ts-ignore
import portada from "../../assets/portada.png";

interface SectionComponentProps {
  section: Section;
}

export const DefaultSection: React.FC<SectionComponentProps> = ({
  section,
}) => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-full px-16 flex flex-col md:flex-row items-center justify-between">
      <header className="mt-12 px-8">
        <div className="container mx-auto grid h-full min-h-[65vh] w-full grid-cols-1 place-items-center gap-y-10 lg:grid-cols-2">
          <div className="lg:row-auto lg:-mt-40 order-1 lg:order-1">
            <div className="md:w-1/2 relative">
              <div className="w-[150%] h-[500px] bg-gradient-to-r from-violet-200 to-pink-200 blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
              {section.title} <br />
              <span className="text-3xl text-purple-600">
                {section.subtitle}
              </span>{" "}
            </h1>
            <p className="text-xl text-gray-600 mb-6">{section.description}</p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition duration-300">
              {section.buttonText}
            </button>
          </div>
          <div className="mt-40 gap-6 lg:mt-0 order-2 lg:order-2">
            <div className="w-4/5 mx-auto">
              <img src={portada} alt="Portfolio" />
            </div>
            <div className="md:w-1/2 relative">
              <div className="w-[150%] h-[500px] bg-gradient-to-r from-violet-200 to-pink-200 blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]"></div>
            </div>
          </div>
        </div>
      </header>
    </div>
  </div>
);

export const ContactSection: React.FC<SectionComponentProps> = ({
  section,
}) => (
    <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-full px-16 flex flex-col md:flex-row items-center justify-between">
      <div className="mt-12 px-8">
        <div className="container mx-auto grid h-full min-h-[65vh] w-full grid-cols-1 place-items-center gap-y-10 lg:grid-cols-2">
          <div className="lg:row-auto lg:-mt-40 order-2 lg:order-1">
            <div className="md:w-1/2 relative">
              <div className="w-[150%] h-[500px] bg-gradient-to-r from-violet-200 to-pink-200 blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]"></div>
            </div>
            <motion.h2
          className="text-5xl font-bold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {section.title}
        </motion.h2>
        <motion.p
          className="text-xl text-purple-400"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {section.subtitle}
        </motion.p>
        <motion.p
          className="text-gray-300"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {section.description}
        </motion.p>
        <motion.button
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {section.buttonText}
        </motion.button>
          </div>
          <div className="mt-40 gap-6 lg:mt-0 order-1 lg:order-2 spline-container">
            <Spline scene="https://prod.spline.design/GUW-ZZ1BAq7HRGzT/scene.splinecode" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const PortfolioSection: React.FC<SectionComponentProps> = ({
  }) => (
  <></>
  );
  
