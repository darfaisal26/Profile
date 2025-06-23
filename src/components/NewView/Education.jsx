import { education } from "@/data/info";
import { GraduationCap } from "lucide-react";
import React from "react";

const Education = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
          <GraduationCap className="mr-3 text-orange-400" />
          Education
        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-xl p-6 border border-gray-600/50 hover:border-orange-500/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-orange-400 font-semibold">
                    {edu.institution}
                  </p>
                  {/* <p className="text-gray-400">{edu.grade}</p> */}
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 px-4 py-2 rounded-full text-sm border border-orange-500/30">
                    {edu.period}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {edu.achievements.map((achievement, achIndex) => (
                  <span
                    key={achIndex}
                    className="bg-gradient-to-r from-orange-600/20 to-red-600/20 text-orange-300 px-3 py-1 rounded-lg text-sm border border-orange-600/30"
                  >
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
