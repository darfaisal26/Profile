import lb from "../../public/lb.png";
import memo from "../../public/memo.png";
import tt from "../../public/tt.png";
import ptm from "../../public/ptm.png";

export const personalInfo = {
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

export const skillIcons = {
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

export const skills = {
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

export const workExperience = [
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

export const education = [
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

export const projects = [
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
    image: memo.src,
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
    image: lb.src,
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
    image: ptm.src,
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
    image: tt.src,
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
      "https://cdn.dribbble.com/userupload/17603308/file/original-744935f2c4583e789a9feddbf02df1e9.png?format=webp&resize=400x300&vertical=center",
    githubUrl: "#",
    featured: false,
    gradient: "from-purple-500 to-indigo-600",
  },
];
