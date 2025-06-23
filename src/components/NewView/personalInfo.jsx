import { personalInfo } from "@/data/info";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const NewpersonalInfo = () => {
  return (
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
  );
};

export default NewpersonalInfo;
