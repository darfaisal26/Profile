import { Code } from "lucide-react";
import React from "react";
import { skills, skillIcons } from "@/data/info";
const Skills = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
          <Code className="mr-3 text-purple-400" />
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-white border-b border-gray-600 pb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillList.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-2 bg-gradient-to-r from-gray-700/50 to-gray-800/50 px-4 py-2 rounded-xl border border-gray-600/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <span className="text-lg">{skillIcons[skill] || "🔧"}</span>
                    <span className="text-gray-300 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
