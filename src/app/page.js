"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  User,
  Code,
  Briefcase,
  FolderOpen,
  GraduationCap,
  // ExternalLink,
  Calendar,
  Award,
  ChevronRight,
  Star,
  BookOpen,
  Menu,
  X,
} from "lucide-react";

import {
  personalInfo,
  projects,
  skills,
  skillIcons,
  education,
  workExperience,
} from "@/data/info";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navItems = [
    {
      id: "about",
      label: "About Me",
      icon: User,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: "skills",
      label: "Skills",
      icon: Code,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: "experience",
      label: "Experience",
      icon: Briefcase,
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      id: "education",
      label: "Education",
      icon: GraduationCap,
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: "projects",
      label: "Projects",
      icon: FolderOpen,
      gradient: "from-indigo-500 to-purple-500",
    },
  ];
  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <User className="mr-3 text-blue-400" />
                About Me
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Quick Facts
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="w-5 h-5 mr-3 text-green-400" />
                    <span>2+ Years Experience</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Award className="w-5 h-5 mr-3 text-yellow-400" />
                    <span>Full Stack Developer</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <BookOpen className="w-5 h-5 mr-3 text-purple-400" />
                    <span>Continuous Learner</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Web Development",
                    "UI/UX Design",
                    "Problem Solving",
                    "Team Collaboration",
                  ].map((interest, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case "skills":
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
                          <span className="text-lg">
                            {skillIcons[skill] || "🔧"}
                          </span>
                          <span className="text-gray-300 font-medium">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "experience":
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
                        <div
                          key={descIndex}
                          className="flex items-start space-x-3"
                        >
                          <ChevronRight className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-300 leading-relaxed">
                            {desc}
                          </p>
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

      case "education":
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
                        <h3 className="text-xl font-bold text-white">
                          {edu.degree}
                        </h3>
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

      case "projects":
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

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>
      <div className="flex ">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden fixed top-4 left-4 z-30 p-2 rounded-md bg-gray-800 text-white"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Sidebar */}
        <div
          className={`fixed h-screen  left-0 top-0  w-80 bg-gradient-to-b from-gray-800/95 to-gray-900/95 backdrop-blur-lg border-r border-gray-700/50 p-6  z-20 transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:static lg:block`}
        >
          {/* Sidebar content (profile, nav, etc.) goes here */}
          <div className="text-center mb-8">
            <div className="relative inline-block mb-4">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-24 h-24 rounded-full border-4 border-gradient-to-r from-blue-500 to-purple-500 mx-auto"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900 animate-pulse" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              {personalInfo.name}
            </h1>
            <p className="text-gray-400 mb-4">{personalInfo.title}</p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4 text-green-400" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4 text-red-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
            <div className="flex justify-center space-x-4 mt-6">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? `bg-gradient-to-r ${item.gradient} text-white shadow-lg transform scale-105`
                      : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 ml-0 h-screen overflow-y-auto">
          <div className="max-w-6xl mx-auto">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
