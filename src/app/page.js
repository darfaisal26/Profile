"use client";
import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Calendar,
  Award,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const personalInfo = {
    name: "Faisal Nazir",
    title: "Full Stack Developer",
    email: "iamfaisal779@gmail.com",
    phone: "9596438189",
    location: "Srinagar, J&K, India",
    github: "https://github.com/darfaisal26",
    linkedin: "https://www.linkedin.com/in/faisal-nazir-31ba22244/",
    bio: "Full-stack developer with near about 3 years of experience building robust, scalable web applications from concept to deployment. Proficient in modern frontend frameworks and backend technologies, with a strong focus on performance optimization and user experience.",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQENjpHzpGedNA/profile-displayphoto-shrink_800_800/B56ZeIrv4lGQAo-/0/1750344860993?e=1763596800&v=beta&t=q7BJcsFNeAjnaHmRC8XUdECJybF0FzcEpJDR-FfE-o0",
  };

  const skills = {
    Frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
    Backend: ["Node.js", "Express", "MySQL", "MongoDB"],
    "State Management": [
      "Redux Toolkit",
      "Zustand",
      "React Query",
      "RTK Query",
    ],
    Tools: ["Git", "Azure Boards", "React Hook Form", "Zod"],
  };

  const workExperience = [
    {
      company: "Aseef IT Holding Co.",
      position: "Full Stack Developer",
      duration: "March 2023 - Present",
      location: "Srinagar, J&K, India",
      highlights: [
        "Built and deployed full-stack applications using React.js, Next.js, Express.js, and MySQL",
        "Designed RESTful APIs with secure authentication and role-based access control",
        "Managed complex state using Redux Toolkit and RTK Query for seamless data flow",
        "Collaborated with cross-functional teams using Azure Boards for agile workflows",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "MySQL",
        "Redux Toolkit",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Islamia College of Science & Commerce",
      period: "2020 - 2022",
      grade: "First Class",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Amar Singh College",
      period: "2017 - 2020",
      grade: "First Class",
    },
  ];

  const projects = [
    {
      title: "Employee Attendance & Portal System",
      description:
        "Enterprise-grade attendance management system with employee self-service portal. Features real-time attendance tracking, leave management, shift scheduling, and comprehensive reporting dashboards for HR and management.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Redux Toolkit",
        "MySQL",
        "Tailwind CSS",
      ],
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    },
    {
      title: "Correspondence Management System",
      description:
        "Document flow management system automating creation, tracking, and approval of official correspondence with version control and workflow automation.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Redux Toolkit",
        "Tailwind CSS",
      ],
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop",
    },
    {
      title: "Land Bank Management System",
      description:
        "Comprehensive platform for managing land assets, acquisitions, and ownership records with legal document handling.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Redux Toolkit",
        "React Query",
      ],
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=500&fit=crop",
    },
    {
      title: "PTM Management System",
      description:
        "Web application facilitating efficient scheduling and management of parent-teacher meetings with booking capabilities.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=500&fit=crop",
    },
    {
      title: "Zaloon - Salon Services Platform",
      description:
        "Full-stack MERN salon booking platform enabling customers to discover salons, book appointments, and manage services. Features include real-time availability, service catalog management, booking calendar, payment processing, and comprehensive admin dashboard for salon management.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MySQL",
        "Redux",
        "Tailwind CSS",
      ],
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=500&fit=crop",
    },
    {
      title: "Treasury Today Magazine",
      description:
        "Digital magazine delivering finance and business insights with integrated CMS for seamless publishing.",
      technologies: ["HTML", "CSS", "MySQL"],
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=500&fit=crop",
    },
    {
      title: "Vetic Power Tracker",
      description:
        "Mobile app monitoring real-time power consumption with energy usage goals and notifications.",
      technologies: ["React Native", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        "hero",
        "about",
        "skills",
        "experience",
        "projects",
        "education",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all bg-white duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
            >
              FN
            </button>

            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                Full Stack Developer
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm <span className="text-blue-600">Faisal Nazir</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Building scalable web applications with modern technologies and
                best practices
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Get In Touch
                  <ChevronRight className="w-5 h-5 ml-2" />
                </a>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Mail className="w-5 h-5 text-gray-600" />
                  </a>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-blue-100 rounded-2xl transform rotate-6"></div>
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="relative rounded-2xl shadow-xl w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            About Me
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                {personalInfo.bio}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I thrive on solving complex problems through clean, maintainable
                code and enjoy collaborating across teams to deliver innovative
                digital solutions that drive business growth.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-600">{personalInfo.phone}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-600">{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div
                key={category}
                className="p-6 border border-gray-200 rounded-xl hover:border-blue-200 hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {category}
                </h3>
                <div className="space-y-2">
                  {skillList.map((skill) => (
                    <div key={skill} className="text-gray-600">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-zinc-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Work Experience
          </h2>
          {workExperience.map((job, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {job.position}
                  </h3>
                  <p className="text-lg text-blue-600 font-semibold mb-2">
                    {job.company}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {job.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                  </div>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {job.highlights.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-600"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-2">
                      {edu.institution}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <Award className="w-4 h-4 text-green-600" />
                    {edu.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-600">
              © 2024 Faisal Nazir. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Github className="w-5 h-5 text-gray-600" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5 text-gray-600" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5 text-gray-600" />
              </a>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Portfolio;
