import { FolderOpen } from "lucide-react";
import React from "react";
import { projects, skillIcons } from "@/data/info";
const Newprojects = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
          <FolderOpen className="mr-3 text-indigo-400" />
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-xl overflow-hidden border border-gray-600/50 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-contain xl:object-cover"
                />
                {/* {project.featured && (
                        <div className="absolute top-4 right-4">
                          <Star className="w-6 h-6 text-yellow-400 fill-current" />
                        </div>
                      )} */}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="flex items-center space-x-1 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-indigo-300 px-2 py-1 rounded text-sm border border-indigo-600/30"
                    >
                      <span>{skillIcons[tech] || "🔧"}</span>
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>

                {/* <div className="flex space-x-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            className="flex items-center space-x-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-4 py-2 rounded-lg transition-all duration-300"
                          >
                            <Github className="w-4 h-4" />
                            <span>Code</span>
                          </a>
                        )}
                      </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newprojects;
