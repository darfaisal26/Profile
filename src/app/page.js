"use client";
import React, { useState } from "react";
import {
  User,
  Code,
  Briefcase,
  FolderOpen,
  GraduationCap,
  Menu,
  X,
} from "lucide-react";

import AboutMe from "@/components/NewView/AboutMe";
import Skills from "@/components/NewView/Skills";
import Experience from "@/components/NewView/Experience";
import Education from "@/components/NewView/Education";
import Newprojects from "@/components/NewView/projects";
import NewpersonalInfo from "@/components/NewView/personalInfo";

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
        return <AboutMe />;

      case "skills":
        return <Skills />;

      case "experience":
        return <Experience />;

      case "education":
        return <Education />;

      case "projects":
        return <Newprojects />;

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
            <>
              <Menu className="w-6 h-6" />
            </>
          )}
        </button>

        {/* Sidebar */}
        <div
          className={`fixed h-screen  left-0 top-0  w-80 bg-gradient-to-b from-gray-800/95 to-gray-900/95 backdrop-blur-lg border-r border-gray-700/50 p-6  z-20 transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:static lg:block`}
        >
          {/* Sidebar content (profile, nav, etc.) goes here */}

          <NewpersonalInfo />

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
          <div className="lg:hidden">
            <NewpersonalInfo />
          </div>
          <div className="max-w-6xl mx-auto">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
