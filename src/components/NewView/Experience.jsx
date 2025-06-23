import { skillIcons, workExperience } from "@/data/info";
import { Briefcase, ChevronRight } from "lucide-react";
import React from "react";

const Experience = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
          <Briefcase className="mr-3 text-emerald-400" />
          Work Experience
        </h2>

        {workExperience.map((job, index) => (
          <div key={index} className="relative">
            <div className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-xl p-6 border border-gray-600/50 hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {job.position}
                  </h3>
                  <p className="text-emerald-400 font-semibold text-lg">
                    {job.company}
                  </p>
                  <p className="text-gray-400">{job.location}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm border border-emerald-500/30">
                    {job.duration}
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {job.description.map((desc, descIndex) => (
                  <div key={descIndex} className="flex items-start space-x-3">
                    <ChevronRight className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="flex items-center space-x-1 bg-gradient-to-r from-gray-600/30 to-gray-700/30 px-3 py-1 rounded-lg text-sm text-gray-300 border border-gray-600/50"
                  >
                    <span>{skillIcons[tech] || "🔧"}</span>
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
