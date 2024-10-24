import React, { useState } from 'react';
import { ServerRack } from "./ServerRack";
import { motion } from "framer-motion";

export const SkillTower = ({ skill }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
      <div className="flex flex-col items-center">
        <div className="h-60 sm:h-80 w-full sm:w-24 relative">
          {[...Array(10)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-full sm:h-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: index < skill.level ? 1 : 0.3, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                bottom: `${index * 10}%`,
                left: 0,
                right: 0,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <ServerRack level={index + 1} color={skill.color} />
            </motion.div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <div className={`${skill.color} flex justify-center items-center mb-2`}>{skill.icon}</div>
          <span className="text-sm font-medium text-gray-800">{skill.name}</span>
          <span className="text-xs text-gray-600 block">
            Level {skill.level}/10
          </span>
        </div>
        {hoveredIndex !== null && (
          <div className="absolute mt-2 bg-gray-800 text-white text-xs p-2 rounded">
            {hoveredIndex < skill.level ? "Active server: skills deployed" : "Inactive server: skills in progress"}
          </div>
        )}
      </div>
    );
  };