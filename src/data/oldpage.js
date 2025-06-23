// "use client";
// import React, { useState, useEffect } from "react";
// import { Badge } from "../components/ui/badge.jsx";
// import { Button } from "../components/ui/button.jsx";
// import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs.jsx";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Github,
//   Linkedin,
//   Code,
//   Server,
//   Settings2,
// } from "lucide-react";
// import {
//   personalInfo,
//   skillIcons,
//   workExperience,
//   projects,
// } from "../data/info";
// import ClientOnly from "@/components/ClientOnly.jsx";
// import AboutTab from "@/components/About.jsx";
// import SkillsTab from "@/components/skills.jsx";
// import ExperienceTab from "@/components/Experience.jsx";
// import ProjectsTab from "@/components/projects.jsx";
// import Image from "next/image.js";

// const Portfolio = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [activeTab, setActiveTab] = useState("about");
//   const [isVisible, setIsVisible] = useState({});

//   console.log(isVisible);
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const elements = document.querySelectorAll("[data-animate]");
//     elements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   const FloatingParticles = () => (
//     <div className="fixed inset-0 overflow-hidden pointer-events-none">
//       {[...Array(50)].map((_, i) => (
//         <div
//           key={i}
//           className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             animationDelay: `${Math.random() * 10}s`,
//             animationDuration: `${10 + Math.random() * 20}s`,
//           }}
//         />
//       ))}
//     </div>
//   );

//   const skills = [
//     {
//       category: "Frontend Development",
//       items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
//       icon: <Code className="w-8 h-8 text-cyan-400" />,
//       gradient: "from-cyan-500 via-blue-500 to-purple-600",
//       delay: "0ms",
//     },
//     {
//       category: "Backend Development",
//       items: ["Node.js", "Express", "Sql", "Mysql"],
//       icon: <Server className="w-8 h-8 text-emerald-400" />,
//       gradient: "from-emerald-500 via-teal-500 to-cyan-600",
//       delay: "200ms",
//     },
//     {
//       category: "State Mangement &  Development Tools & Libraries",
//       items: [
//         "React Redux",
//         "Redux Toolkit",
//         "React Query",
//         "Zustand",
//         "React Hook Form",
//         "Zod",
//         "RTK Query",
//       ],
//       icon: <Settings2 className="w-8 h-8 text-purple-400" />,
//       gradient: "from-green-500 via-lime-500 to-yellow-400",
//       delay: "200ms",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative">

//       {/* Floating Particles */}
//       <ClientOnly>
//         <FloatingParticles />
//       </ClientOnly>

//       {/* Animated Grid */}
//       <div className="fixed inset-0 opacity-[0.02]">
//         <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto p-6">
//         {/* Header */}
//         <div
//           className="text-center mb-20 animate-fade-in-up"
//           data-animate
//           id="header"
//         >
//           <div className="relative inline-block mb-10">
//             <div className="w-48 h-48 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center text-white text-6xl font-bold shadow-2xl border-4 border-white/20 hover:scale-110 transition-all duration-500 animate-float">
//               {/* {personalInfo.name
//                 .split(" ")
//                 .map((n) => n[0])
//                 .join("")} */}
//               <Image
//                 src="https://media.licdn.com/dms/image/v2/D5603AQENjpHzpGedNA/profile-displayphoto-shrink_800_800/B56ZeIrv4lGQAo-/0/1750344860993?e=1755734400&v=beta&t=dM88rD-8Te5Ccvo_APYjQGHO_rVcREN1YaOHevHrquw"
//                 alt="FN"
//                 width={80}
//                 height={80}
//                 className="w-full rounded-full"
//               />
//             </div>
//             <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-4 border-gray-900 animate-pulse shadow-lg">
//               <div className="w-full h-full rounded-full bg-green-400 animate-ping" />
//             </div>
//             {/* Floating icons around avatar */}
//             <div className="absolute -top-8 -left-8 text-3xl animate-bounce animation-delay-1000">
//               ⚡
//             </div>
//             <div className="absolute -top-8 -right-8 text-3xl animate-bounce animation-delay-2000">
//               🚀
//             </div>
//             <div className="absolute -bottom-8 -left-8 text-3xl animate-bounce animation-delay-3000">
//               💎
//             </div>
//           </div>

//           <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 animate-gradient-x">
//             {personalInfo.name}
//           </h1>
//           <p className="text-3xl text-blue-300 mb-8 font-light animate-fade-in-up animation-delay-500">
//             {personalInfo.title}
//           </p>

//           <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300 mb-10">
//             {[
//               {
//                 icon: <Mail className="w-5 h-5 text-cyan-400" />,
//                 text: personalInfo.email,
//                 color: "from-cyan-500 to-blue-600",
//               },
//               {
//                 icon: <Phone className="w-5 h-5 text-green-400" />,
//                 text: personalInfo.phone,
//                 color: "from-green-500 to-emerald-600",
//               },
//               {
//                 icon: <MapPin className="w-5 h-5 text-pink-400" />,
//                 text: personalInfo.location,
//                 color: "from-pink-500 to-rose-600",
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className={`flex items-center space-x-3 bg-gradient-to-r ${item.color} p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up backdrop-blur-sm border border-white/10`}
//                 style={{ animationDelay: `${600 + index * 100}ms` }}
//               >
//                 {item.icon}
//                 <span className="text-white font-medium">{item.text}</span>
//               </div>
//             ))}
//           </div>

//           <div className="flex justify-center space-x-6 animate-fade-in-up animation-delay-1000">
//             <Button
//               size="lg"
//               className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg px-8 py-4 rounded-2xl"
//               asChild
//             >
//               <a
//                 href={personalInfo.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Github className="w-6 h-6 mr-3" />
//                 GitHub
//               </a>
//             </Button>
//             <Button
//               size="lg"
//               className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg px-8 py-4 rounded-2xl"
//               asChild
//             >
//               <a
//                 href={personalInfo.linkedin}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Linkedin className="w-6 h-6 mr-3" />
//                 LinkedIn
//               </a>
//             </Button>
//           </div>
//         </div>

//         {/* Main Content */}
//         <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
//           <TabsList className="grid grid-cols-2  lg:grid-cols-4 w-full max-w-2xl mx-auto mb-16 bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl  shadow-2xl">
//             {[
//               {
//                 value: "about",
//                 label: "About",
//                 gradient: "from-cyan-500 to-blue-600",
//               },
//               {
//                 value: "skills",
//                 label: "Skills",
//                 gradient: "from-purple-500 to-pink-600",
//               },
//               {
//                 value: "experience",
//                 label: "Experience",
//                 gradient: "from-emerald-500 to-teal-600",
//               },
//               {
//                 value: "work",
//                 label: "Live Projects Work",
//                 gradient: "from-orange-500 to-red-600",
//               },
//             ].map((tab) => (
//               <TabsTrigger
//                 key={tab.value}
//                 value={tab.value}
//                 className={`text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 ${
//                   activeTab === tab.value
//                     ? `bg-gradient-to-r ${tab.gradient} shadow-lg transform scale-105`
//                     : "hover:bg-gray-700/50"
//                 }`}
//               >
//                 {tab.label}
//               </TabsTrigger>
//             ))}
//           </TabsList>

//           <AboutTab personalInfo={personalInfo} />
//           <SkillsTab skills={skills} skillIcons={skillIcons} />
//           <ExperienceTab
//             workExperience={workExperience}
//             skillIcons={skillIcons}
//           />
//           <ProjectsTab
//             projects={projects}
//             skillIcons={skillIcons}
//             setSelectedImage={setSelectedImage}
//           />
//         </Tabs>

//         <Dialog
//           open={!!selectedImage}
//           onOpenChange={() => setSelectedImage(null)}
//         >
//           <DialogContent className="max-w-6xl bg-gray-800/95 backdrop-blur-md border border-gray-700 text-white animate-fade-in-scale">
//             <DialogHeader>
//               <DialogTitle className="text-3xl bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
//                 {selectedImage?.title}
//               </DialogTitle>
//               <DialogDescription className="text-xl text-gray-300">
//                 {selectedImage?.description}
//               </DialogDescription>
//             </DialogHeader>
//             {selectedImage && (
//               <div className="mt-8">
//                 <img
//                   src={selectedImage.image}
//                   alt={selectedImage.title}
//                   className="w-full h-auto rounded-2xl shadow-2xl"
//                 />
//                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mt-8">
//                   <div className="flex flex-wrap gap-3">
//                     {selectedImage.technologies.map((tech, index) => (
//                       <Badge
//                         key={index}
//                         className={`bg-gradient-to-r ${selectedImage.gradient} text-white border-0 text-base px-4 py-2`}
//                       >
//                         <span className="mr-2">{skillIcons[tech] || "🔧"}</span>
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>
//                   <div className="flex space-x-4">
//                     {/* Add your modal action buttons or content here if needed */}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </DialogContent>
//         </Dialog>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;