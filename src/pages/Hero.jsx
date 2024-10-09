import React from "react";
import logo from "../assets/1.png";
import { skills } from "../utils/constants/skills.jsx";
import { SkillTower } from "../components/SkillTower.jsx";

function Hero() {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 lg:pr-8 mb-12 lg:mb-0">
            <div className="flex justify-center lg:justify-start mb-4">
              <img
                src={logo}
                alt="Maria Puchades"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl justify-center lg:justify-start font-bold mb-4 text-gray-800">
              Maria Puchades
            </h1>
            <h2 className="text-xl sm:text-2xl justify-center lg:justify-start font-semibold mb-4 text-purple-600">
              Senior Frontend Engineer
            </h2>
            <p className="text-base sm:text-lg lg:justify-start text-gray-600 mb-6">
              Resolving design problems, building smart user interfaces and
              useful interactions, developing rich web applications and seamless
              web experiences.
            </p>
            <button className="bg-purple-500 text-white font-bold py-2 px-6 rounded-full hover:bg-purple-600 transition duration-300">
              About me
            </button>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 md:hidden">
            Skills
          </h2>
          <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-4">
            {skills.map((skill) => (
              <SkillTower key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
