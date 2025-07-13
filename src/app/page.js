"use client";
// import React, { useState } from "react";
// import {
//   User,
//   Code,
//   Briefcase,
//   FolderOpen,
//   GraduationCap,
//   Menu,
//   X,
// } from "lucide-react";

// import AboutMe from "@/components/NewView/AboutMe";
// import Skills from "@/components/NewView/Skills";
// import Experience from "@/components/NewView/Experience";
// import Education from "@/components/NewView/Education";
// import Newprojects from "@/components/NewView/projects";
// import NewpersonalInfo from "@/components/NewView/personalInfo";

// const Portfolio = () => {
//   const [activeSection, setActiveSection] = useState("about");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const navItems = [
//     {
//       id: "about",
//       label: "About Me",
//       icon: User,
//       gradient: "from-blue-500 to-cyan-500",
//     },
//     {
//       id: "skills",
//       label: "Skills",
//       icon: Code,
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       id: "experience",
//       label: "Experience",
//       icon: Briefcase,
//       gradient: "from-emerald-500 to-teal-500",
//     },
//     {
//       id: "education",
//       label: "Education",
//       icon: GraduationCap,
//       gradient: "from-orange-500 to-red-500",
//     },
//     {
//       id: "projects",
//       label: "Projects",
//       icon: FolderOpen,
//       gradient: "from-indigo-500 to-purple-500",
//     },
//   ];
//   const renderContent = () => {
//     switch (activeSection) {
//       case "about":
//         return <AboutMe />;

//       case "skills":
//         return <Skills />;

//       case "experience":
//         return <Experience />;

//       case "education":
//         return <Education />;

//       case "projects":
//         return <Newprojects />;

//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
//       {/* Animated Background */}
//       <div className="fixed inset-0 opacity-[0.03]">
//         <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
//       </div>
//       <div className="flex ">
//         {/* Mobile Menu Button */}
//         <button
//           className="lg:hidden fixed top-4 left-4 z-30 p-2 rounded-md bg-gray-800 text-white"
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//         >
//           {isSidebarOpen ? (
//             <X className="w-6 h-6" />
//           ) : (
//             <>
//               <Menu className="w-6 h-6" />
//             </>
//           )}
//         </button>

//         {/* Sidebar */}
//         <div
//           className={`fixed h-screen  left-0 top-0  w-80 bg-gradient-to-b from-gray-800/95 to-gray-900/95 backdrop-blur-lg border-r border-gray-700/50 p-6  z-20 transition-transform duration-300
//           ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
//           lg:translate-x-0 lg:static lg:block`}
//         >
//           {/* Sidebar content (profile, nav, etc.) goes here */}

//           <NewpersonalInfo />

//           {/* Navigation */}
//           <nav className="space-y-2">
//             {navItems.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <button
//                   key={item.id}
//                   onClick={() => setActiveSection(item.id)}
//                   className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
//                     activeSection === item.id
//                       ? `bg-gradient-to-r ${item.gradient} text-white shadow-lg transform scale-105`
//                       : "text-gray-400 hover:text-white hover:bg-gray-700/50"
//                   }`}
//                 >
//                   <Icon className="w-5 h-5" />
//                   <span className="font-medium">{item.label}</span>
//                 </button>
//               );
//             })}
//           </nav>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 p-8 ml-0 h-screen overflow-y-auto">
//           <div className="lg:hidden">
//             <NewpersonalInfo />
//           </div>
//           <div className="max-w-6xl mx-auto">{renderContent()}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Calendar,
  Award,
  Code,
  Briefcase,
  GraduationCap,
  User,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  // Data from your provided file
  const personalInfo = {
    name: "Faisal Nazir",
    title: "Full Stack Developer",
    email: "iamfaisal779@gmail.com",
    phone: "9596438189",
    location: "Srinagar J&K India",
    github: "https://github.com/darfaisal26",
    linkedin: "https://www.linkedin.com/in/faisal-nazir-31ba22244/",
    bio: "Full-stack developer with 2+ years of experience building robust, scalable web applications from concept to deployment. Proficient in modern frontend frameworks and backend technologies, with a strong focus on performance optimization and user experience. I thrive on solving complex problems through clean, maintainable code and enjoy collaborating across teams to deliver innovative digital solutions that drive business growth.",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQENjpHzpGedNA/profile-displayphoto-shrink_800_800/B56ZeIrv4lGQAo-/0/1750344860993?e=1755734400&v=beta&t=dM88rD-8Te5Ccvo_APYjQGHO_rVcREN1YaOHevHrquw",
  };

  const skillIcons = {
    "React Native": "⚛️",
    React: "⚛️",
    "Next.js": "▲",
    TypeScript: "📘",
    "Tailwind CSS": "🎨",
    "Node.js": "🟢",
    Express: "🚀",
    Git: "📋",
    MongoDB: "🍃",
    JavaScript: "💛",
    CSS3: "🎨",
    HTML5: "🔥",
    "React Redux": "🔄",
    "Redux Toolkit": "🛠️",
    Zustand: "🐻",
    "React Hook Form": "📝",
    Zod: "✅",
    "React Query": "🔄",
    "RTK Query": "⚡",
    Sql: "🗄️",
    Mysql: "🐬",
    "Azure Boards": "📋",
  };

  const skills = {
    "Frontend Development": [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
    "Backend Development": ["Node.js", "Express", "Mysql", "MongoDB", "Sql"],
    "State Management": [
      "React Redux",
      "Redux Toolkit",
      "Zustand",
      "React Query",
      "RTK Query",
    ],
    "Tools & Others": [
      "Git",
      "Azure Boards",
      "React Hook Form",
      "Zod",
      "React Native",
    ],
  };

  const workExperience = [
    {
      company: "Aseef It Holding Co.",
      position: "Full Stack Developer",
      duration: "March 2023 - Present",
      location: "Srinagar J&K India",
      description: [
        "Built and deployed full-stack web applications using React.js, Next.js (with SSR), Express.js, and MySQL, delivering scalable, production-ready solutions for real-world business needs",
        "Designed and integrated RESTful APIs with efficient MySQL queries, enabling seamless data exchange between frontend and backend, with secure authentication and role-based access",
        "Managed complex state and dynamic forms using Redux Toolkit and RTK Query, improving data flow, API integration, and user experience across multi-step form modules",
        "Worked on live project deployments and issue debugging, collaborating with cross-functional teams to ensure smooth feature rollouts, production stability, and rapid bug resolution",
        "Utilized Azure Boards for sprint planning, task tracking, and maintaining agile workflows, ensuring project transparency, accountability, and consistent delivery cycles",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "Next.js",
        "React",
        "Node.js",
        "Express",
        "Azure Boards",
        "Mysql",
        "Git",
      ],
      gradient: "from-blue-600 via-indigo-600 to-purple-700",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Amar Singh College ",
      period: "2017 May - 2020 Aug",
      grade: "First Class",
      achievements: [
        "Web Development Specialization",
        "Database Management Systems",
        "Software Engineering",
      ],
    },
    {
      degree: "Masters of Computer Applications (MCA)",
      institution: "Islamia College of Sceince & Commerce ",
      period: "2020 Dec - 2022 Feb",
      grade: "First Class",
      achievements: [
        "Web Development Specialization",
        "Database Management Systems",
        "Software Engineering",
      ],
    },
  ];

  const projects = [
    {
      title: "Correspondence Management System (CSM)",
      description:
        "A document flow management system designed to automate the creation, tracking, approval, and archival of official correspondence within an organization. Built using React.js, the system enables users to manage document lifecycles, from drafting to final approval, with version control and workflow automation.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Redux Toolkit",
        "React Query",
      ],
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop&auto=format",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Land Bank Management System",
      description:
        "A robust web-based platform for managing and tracking land assets, acquisitions, and ownership records. Developed using React.js with comprehensive features for handling land asset details, including ownership information, title deeds, and associated legal documents.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Redux Toolkit",
        "React Query",
      ],
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=500&fit=crop&auto=format",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Parent-Teacher Meeting (PTM) Management System",
      description:
        "A web application developed to facilitate efficient scheduling and management of parent-teacher meetings. Built using React.js with a responsive user interface, allowing parents and teachers to book, manage, and track meeting appointments.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Redux Toolkit",
        "React Query",
      ],
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=500&fit=crop&auto=format",
      githubUrl: "#",
      featured: false,
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      title: "Service Booking Platform",
      description:
        "A full-stack web application built with Node.js that enables users to discover, book, and manage various services online. The platform allows service providers to list their offerings with detailed descriptions, pricing, and availability schedules.",
      technologies: ["Node.js", "Express", "Sql", "Mysql"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop&auto=format",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "Treasury Today - Digital Magazine",
      description:
        "A digital magazine dedicated to delivering in-depth analysis and insights on finance, business, corporate strategies, and banking trends. Features expert interviews, opinion pieces, and timely articles with integrated CMS for seamless publishing.",
      technologies: ["HTML", "CSS", "Sql", "Mysql"],
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=500&fit=crop&auto=format",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      title: "Vetic - Power Consumption Tracker App",
      description:
        "A mobile application designed to monitor and track real-time power consumption for households and businesses. Developed using React Native, allowing users to view energy usage, set consumption goals, and receive power-saving notifications.",
      technologies: ["React Native", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&auto=format",
      githubUrl: "#",
      featured: false,
      gradient: "from-purple-500 to-indigo-600",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const AnimatedBackground = () => (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
    </div>
  );

  return (
    <div className=" bg-slate-900 text-white relative">
      <AnimatedBackground />

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { id: "hero", label: "Home", icon: User },
                  { id: "about", label: "About", icon: User },
                  { id: "skills", label: "Skills", icon: Code },
                  { id: "experience", label: "Experience", icon: Briefcase },
                  { id: "projects", label: "Projects", icon: Code },
                  { id: "education", label: "Education", icon: GraduationCap },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-1"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95 backdrop-blur-md">
              {[
                { id: "hero", label: "Home", icon: User },
                { id: "about", label: "About", icon: User },
                { id: "skills", label: "Skills", icon: Code },
                { id: "experience", label: "Experience", icon: Briefcase },
                { id: "projects", label: "Projects", icon: Code },
                { id: "education", label: "Education", icon: GraduationCap },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      {/* <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-cyan-400 shadow-xl animate-float"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-slide-up">
            {personalInfo.name}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 animate-slide-up animation-delay-200">
            {personalInfo.title}
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-slide-up animation-delay-400">
            {personalInfo.bio}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-up animation-delay-600">
            <a
              href={`mailto:${personalInfo.email}`}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
            </a>
            <div className="flex space-x-4">
              <a
                href={personalInfo.github}
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={personalInfo.linkedin}
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-16 animate-bounce">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </div>
        </div>
      </section> */}

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                {personalInfo.bio}
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">{personalInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">{personalInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">{personalInfo.location}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row  space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-up animation-delay-600">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Get In Touch</span>
                </a>
                <div className="flex space-x-4 justify-center items-center">
                  <a
                    href={personalInfo.github}
                    className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-75"></div>
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="relative rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div
                key={category}
                className="bg-slate-800/70 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-700/70 transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                  {category}
                </h3>
                <div className="space-y-3">
                  {skillList.map((skill) => (
                    <div key={skill} className="flex items-center space-x-3">
                      <span className="text-2xl">
                        {skillIcons[skill] || "🔧"}
                      </span>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          {workExperience.map((job, index) => (
            <div key={index} className="relative mb-12">
              <div className="bg-slate-800/70 backdrop-blur-sm rounded-lg p-8 hover:bg-slate-700/70 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {job.position}
                    </h3>
                    <p className="text-cyan-400 text-lg font-semibold">
                      {job.company}
                    </p>
                    <p className="text-gray-400 flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{job.duration}</span>
                    </p>
                    <p className="text-gray-400 flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </p>
                  </div>
                </div>
                <div className="mb-6">
                  <ul className="space-y-3">
                    {job.description.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-gray-300 flex items-start space-x-2"
                      >
                        <span className="text-cyan-400 mt-1.5 text-sm">▪</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-700 text-cyan-400 rounded-full text-sm font-medium hover:bg-slate-600 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/70 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-slate-700/70 transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-30`}
                  ></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-700 text-cyan-400 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-700 text-gray-400 rounded text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  {/* <div className="flex space-x-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">Live Demo</span>
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-slate-800/70 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-700/70 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-cyan-400 font-semibold">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </p>
                    <p className="text-green-400 flex items-center space-x-2">
                      <Award className="w-4 h-4" />
                      <span>{edu.grade}</span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((achievement, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-700 text-purple-400 rounded-full text-sm font-medium"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/90 backdrop-blur-sm py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            © 2024 {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <Link
              href={personalInfo.github}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href={personalInfo.linkedin}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};


export default Portfolio