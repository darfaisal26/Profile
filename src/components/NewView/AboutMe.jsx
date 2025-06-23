import React from "react";
import { personalInfo } from "@/data/info";
import { Award, BookOpen, Calendar, User } from "lucide-react";
const AboutMe = () => {
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
          <h3 className="text-xl font-semibold text-white mb-4">Quick Facts</h3>
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
          <h3 className="text-xl font-semibold text-white mb-4">Interests</h3>
          <div className="flex flex-wrap gap-2">
            {["Web Development", "Problem Solving", "Team Collaboration"].map(
              (interest, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                >
                  {interest}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
