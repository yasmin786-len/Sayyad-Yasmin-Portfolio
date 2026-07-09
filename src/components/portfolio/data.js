// Central content/data for the portfolio. Edit values here to personalize.


import {
  SiSpringboot,
  SiReact,
  SiJavascript,
  SiMysql,
  SiDocker,
  SiGit,
  SiPostman,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiHibernate,
  SiPython,
  SiC,
  SiJsonwebtokens,
  SiApachemaven,
  SiIntellijidea,
  SiRedis,
  SiThymeleaf,
} from "react-icons/si";
import { FiCloud } from "react-icons/fi";
import { FaJava } from "react-icons/fa6";
import { FaIndustry,FaCode } from "react-icons/fa6";
import {
  FaHtml5,
  FaCss3Alt,
  FaTrophy,
  FaAward,
  FaLaptopCode,
} from "react-icons/fa";

export const PROFILE = {
  name: "Sayyad Yasmin",
  shortName: "Yasmin",
  title: "Java Full Stack Developer",
  roles: [
    "Java Full Stack Developer",
    "Spring Boot Developer",
    "React Developer",
    "Backend Engineer",
    "Software Engineer",
  ],
  intro:
    "I build robust, scalable web applications end to end — from clean REST APIs with Spring Boot to polished React interfaces. Passionate about clean architecture, problem solving, and shipping production-grade software.",
  email: "syedyasmin2005@gmail.com",
  phone: "+91 87907 34986",
  location: "Tirupati, India",
  resumeUrl: "/resume.pdf",
  socials: {
    linkedin: "https://www.linkedin.com/in/yasmin-sayyad-457229270?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    leetcode: "https://leetcode.com/u/Sd_Yasmin/",
    hackerrank: "https://www.hackerrank.com/profile/syedyasmin2005",
    github: "https://github.com/yasmin786-len"
  },
};

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export const HERO_BADGES = [
  { label: "Java", icon: FaJava, color: "#e76f00", pos: { top: "6%", left: "-6%" } },
  { label: "Spring Boot", icon: SiSpringboot, color: "#6db33f", pos: { top: "26%", right: "-12%" } },
  { label: "React", icon: SiReact, color: "#61dafb", pos: { bottom: "22%", left: "-12%" } },
  { label: "JavaScript", icon: SiJavascript, color: "#f7df1e", pos: { bottom: "4%", right: "-4%" } },
  { label: "MySQL", icon: SiMysql, color: "#4479a1", pos: { top: "48%", left: "-16%" } },
  { label: "Docker", icon: SiDocker, color: "#2496ed", pos: { top: "2%", right: "8%" } },
];

export const ABOUT = {
  lead: "Java Full Stack Developer focused on building reliable backends and elegant frontends.",
  paragraphs: [
    "I'm a software engineer who enjoys turning complex problems into clean, maintainable solutions. My core strength is the Java ecosystem — Spring Boot, REST APIs, and relational databases — paired with modern React on the frontend.",
    "My career objective is to join a product-driven engineering team where I can grow as a full stack developer, contribute to high-impact features, and write code that scales.",
  ],
  tags: [
    "Problem Solving",
    "Backend Development",
    "Frontend Development",
    "Machine Learning Interest",
    "Clean Code",
    "Team Collaboration",
  ],
  timeline: [
    {
      title: "B.Tech in Computer Science",
      meta: "2023 — 2027",
      desc: "UnderGraduate with a strong foundation in Data Structures, Algorithms, OOP, DBMS, and Operating Systems.",
    },
    {
      title: "Backend Development Focus",
      meta: "2025 — Present",
      desc: "Deep specialization in Java, Spring Boot, REST APIs, JWT authentication, and database design.",
    },
    {
      title: "Full Stack & Machine Learning",
      meta: "2025 — Present",
      desc: "Expanded into React for end-to-end development and started exploring practical Machine Learning with Python.",
    },
  ],
};

export const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    icon: FaJava,
    skills: [
      { name: "Java", level: "Expert", icon: FaJava },
      { name: "JavaScript", level: "Advanced", icon: SiJavascript },
      { name: "Python", level: "Advanced", icon: SiPython },
      { name: "C", level: "Intermediate", icon: SiC },
    ],
  },
  {
    title: "Frontend",
    icon: SiReact,
    skills: [
      { name: "React", level: "Advanced", icon: SiReact },
      { name: "JavaScript", level: "Advanced", icon: SiJavascript },
      { name: "HTML5", level: "Advanced", icon: SiHtml5 },
      { name: "CSS3", level: "Advanced", icon: SiCss },
      { name: "Tailwind", level: "Intermediate", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    icon: SiSpringboot,
    skills: [
      { name: "Spring Boot", level: "Advanced", icon: SiSpringboot },
      { name: "REST APIs", level: "Advanced", icon: null },
      { name: "Hibernate", level: "Intermediate", icon: SiHibernate },
      { name: "Thymeleaf", level: "Intermediate", icon: SiThymeleaf },
    ],
  },
  {
    title: "Databases",
    icon: SiMysql,
    skills: [
      { name: "MySQL", level: "Advanced", icon: SiMysql },
      { name: "Redis", level: "Beginner", icon: SiRedis },
    ],
  },
  {
    title: "Tools",
    icon: SiGit,
    skills: [
      { name: "Git", level: "Advanced", icon: SiGit },
      { name: "Postman", level: "Advanced", icon: SiPostman },
      { name: "Maven", level: "Advanced", icon: SiApachemaven },
      { name: "IntelliJ IDEA", level: "Advanced", icon: SiIntellijidea },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: SiDocker,
    skills: [
      { name: "Docker", level: "Beginner", icon: SiDocker },
      { name: "AWS", level: "Beginner", icon: FiCloud },
    ],
  },
  {
    title: "Concepts",
    icon: SiJsonwebtokens,
    skills: [
      { name: "OOP", level: "Expert", icon: null },
      { name: "DSA", level: "Advanced", icon: null },
      { name: "JWT", level: "Advanced", icon: SiJsonwebtokens },
      { name: "Microservices", level: "Beginner", icon: null },
    ],
  },
];

export const STATUS_CARDS = [
  {
    title: "Open to Full-Time Roles",
    desc: "Actively seeking Software Engineer opportunities where I can build impactful products.",
    icon: "briefcase",
  },
  {
    title: "Available for Internships",
    desc: "Ready to contribute, learn fast, and add value to your engineering team.",
    icon: "rocket",
  },
  {
    title: "Backend Development Focus",
    desc: "Especially excited about backend and full stack roles in the Java ecosystem.",
    icon: "server",
  },
];

export const PROJECTS = [
  // {
  //   title: "URL Shortener",
  //   emoji: "🔗",
  //   gradient: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
  //   desc: "A high-performance URL shortening service with analytics and custom aliases.",
  //   tech: ["Spring Boot", "MySQL", "Redis", "React"],
  //   features: [
  //     "Custom short links with collision-safe hashing",
  //     "Click analytics and tracking dashboard",
  //     "Redis caching for sub-millisecond redirects",
  //     "REST API secured with rate limiting",
  //   ],
  //   demo: "#",
  //   code: "#",
  // },
  // {
  //   title: "Student Dashboard",
  //   emoji: "🎓",
  //   gradient: "linear-gradient(135deg, #14b8a6, #3b82f6)",
  //   desc: "An academic management dashboard for tracking grades, attendance and courses.",
  //   tech: ["Spring Boot", "React", "MySQL", "JWT"],
  //   features: [
  //     "Role-based access for students and faculty",
  //     "Interactive charts for performance trends",
  //     "Attendance and grade management modules",
  //     "Secure JWT authentication",
  //   ],
  //   demo: "#",
  //   code: "#",
  // },
  // {
  //   title: "E-Commerce Website",
  //   emoji: "🛒",
  //   gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)",
  //   desc: "Full-featured online store with cart, checkout and an admin panel.",
  //   tech: ["Spring Boot", "React", "MySQL", "REST API"],
  //   features: [
  //     "Product catalog with search and filters",
  //     "Cart, wishlist and order management",
  //     "Admin dashboard for inventory control",
  //     "Payment-ready checkout flow",
  //   ],
  //   demo: "#",
  //   code: "#",
  // },
  {
    title: "ShopNest – E-Commerce Platform",
    emoji: "🛒",
    gradient: "linear-gradient(135deg, #f97316, #ec4899)",
    desc: "A production-ready full-stack e-commerce platform built with Spring Boot 3, React 18, and MySQL, offering secure authentication, product management, shopping cart, order tracking, and an admin dashboard.",
    tech: [
      "Java 21",
      "Spring Boot 3",
      "React 18",
      "Vite",
      "Spring Security",
      "JWT",
      "Spring Data JPA",
      "MySQL",
      "Axios",
    ],
    features: [
      "JWT authentication with role-based access for Admin and Customer",
      "Product catalog with search, filtering, and sorting",
      "Shopping cart, wishlist, and secure checkout workflow",
      "Order management, tracking, and admin dashboard",
      "Swagger API documentation and global exception handling",
      "Responsive React user interface with modern design",
    ],
    //demo: "#", // Replace with your deployed URL
    code: "https://github.com/yasmin786-len/ShopNest",
  },
  {
    title: "EmployeeHub",
    emoji: "👨‍💼",
    gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    desc: "A full-stack Employee Management System built with Spring Boot 3, React 18, and MySQL, providing efficient employee management through a secure, responsive, and user-friendly interface.",
    tech: [
      "Java 21",
      "Spring Boot 3",
      "React 18",
      "Vite",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "Axios"
    ],
    features: [
      "Employee CRUD operations with persistent database storage",
      "Search employees by name and other details",
      "RESTful APIs for seamless frontend-backend communication",
      "Form validation and global exception handling",
      "Responsive and modern user interface",
      "Scalable architecture using Spring Boot and React"
    ],
    //demo: "#", // Replace with your deployed URL
    code: "https://github.com/yasmin786-len/EmployeeHub"
  },
  {
    title: "Mess Management System",
    emoji: "🍽️",
    gradient: "linear-gradient(135deg, #10b981, #3b82f6)",
    desc: "A full-stack Mess Management System built with Spring Boot 3, React 18, and MySQL, designed to streamline hostel mess operations with efficient member management, meal tracking, and secure RESTful APIs.",
    tech: [
      "Java 21",
      "Spring Boot 3",
      "React 18",
      "Vite",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "Axios"
    ],
    features: [
      "Member registration and management with CRUD operations",
      "Meal management and attendance tracking",
      "RESTful APIs for seamless frontend-backend communication",
      "Global exception handling and robust backend architecture",
      "Responsive React-based user interface",
      "Persistent data storage using MySQL and Spring Data JPA"
    ],
    //demo: "#", // Replace with your deployed URL if available
    code: "https://github.com/yasmin786-len/Mess_ManagementSystem"
  },
  {
    title: "Task Reminder Application",
    emoji: "⏰",
    gradient: "linear-gradient(135deg, #2563eb, #06b6d4)",
    desc: "A Java-based task management application that enables users to organize tasks, schedule reminders, track completion status, and generate CSV reports through secure RESTful APIs.",
    tech: ["Java", "Spring Boot", "REST API", "JDBC", "MySQL", "JavaMail", "Maven"],
    features: [
      "Task creation, update, and management with persistent database storage",
      "Scheduled reminders using Java Concurrency (ScheduledExecutorService)",
      "Email notifications and CSV report generation",
      "RESTful APIs for task management, scheduling, reporting, and completion tracking",
    ],
    // demo: "#",
    code: "https://github.com/yasmin786-len/Task-Reminder-App",
  },

  {
    title: "Portfolio Website",
    emoji: "💼",
    gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    desc: "A premium, responsive developer portfolio built with React and Framer Motion.",
    tech: ["React", "Framer Motion", "CSS"],
    features: [
      "Smooth scroll-reveal animations",
      "Fully responsive, accessible design",
      "Glassmorphism premium UI",
      "SEO-friendly and optimized",
    ],
    //demo: "#",
    code: "https://github.com/yasmin786-len/Sayyad-Yasmin-Portfolio/",
  },
  {
    title: "Weather Dashboard",
    emoji: "🌦️",
    gradient: "linear-gradient(135deg, #0ea5e9, #6366f1)",
    desc: "A modern weather dashboard that provides real-time weather conditions, hourly forecasts, and 5-day forecasts using the OpenWeatherMap API.",
    tech: ["React", "JavaScript", "CSS Modules", "OpenWeatherMap API", "Vite"],
    features: [
      "Search weather by city name",
      "Current location weather",
      "Real-time weather information",
      "5-day weather forecast",
      "Hourly weather forecast",
      "Sunrise and sunset timings",
      "Humidity, pressure, visibility, and feels-like temperature",
      "Responsive modern UI",
    ],
    demo: "https://weather-application-two-flax.vercel.app/",
    code: "https://github.com/yasmin786-len/Weather-Application",
  },
];


//
// export const EXPERIENCE = [
//   {
//     company: "Infosys Springboard",
//     role: "Java Development Intern",
//     duration: "Nov 2025 – Jan 2026",
//     image: infosysCertificate,
//     description:
//       "Completed Internship 6.0 by developing an Automated Task Reminder & Tracking Application using Java and Spring Boot.",
//   },
// ];

export const CERTIFICATES = [
  {
    title: "Front End Development - HTML",
    issuer: "Great Learning Academy",
    date: "July 2022",
    icon: FaHtml5,
    gradient: "linear-gradient(135deg, #E44D26, #F16529)",
    verify: "https://www.mygreatlearning.com/certificate/DBLGYLZY?referrer_code=GL69AABUXRGIU",
  },
  {
    title: "MetaCode | COMPOSIT 31st Edition",
    issuer: "Society of Metallurgical Engineers, IIT Kharagpur",
    date: "2026",
    icon: FaTrophy,
    gradient: "linear-gradient(135deg, #B91C1C, #DC2626)",
    verify: "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/9fcadc5c-a79b-4dd4-897d-e9cc70e59108.pdf",
  },
  {
    title: "100K Milestone Honor",
    issuer: "CampusCrew",
    date: "Jun 2026",
    icon: FaAward,
    gradient: "linear-gradient(135deg, #6D28D9, #9333EA)",
    verify: "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/certificate-images/6a0d94ee-b059-4246-922c-2cc73b05b6a2.pdf",
  },
  {
    title: "HTML & CSS for Beginners",
    issuer: "Udemy",
    date: "April 2025",
    icon: FaCss3Alt,
    gradient: "linear-gradient(135deg, #E44D26, #1572B6)",
    verify: "https://ude.my/UC-3e4b1f9c-2f2f-4541-8fb2-bed88dbc60c1",
  },
  {
    title: "Operators in MySQL",
    issuer: "Great Learning Academy",
    date: "Jun 2023",
    icon: SiMysql,
    gradient: "linear-gradient(135deg, #4479a1, #06b6d4)",
    verify: "https://www.mygreatlearning.com/certificate/WXVNEZVK?referrer_code=GL69AABUXRGIU",
  },
  {
    title: "Programming Essentials",
    issuer: "Great Learning Academy",
    date: "Apr 2023",
    icon: FaLaptopCode,
    gradient: "linear-gradient(135deg, #2563eb, #06b6d4)",
    verify: "https://www.mygreatlearning.com/certificate/IYBBLZJG?referrer_code=GL69AABUXRGIU",
  },
  {
  title: "Operations Industrial Engineer Job Simulation",
  issuer: "Siemens x Forage",
  date: "Jul 2026",
  icon: FaIndustry,
  gradient: "linear-gradient(135deg, #00b3a4, #0f172a)",
  verify: "https://www.theforage.com/completion-certificates/YtWaumzWHmKiqP63y/pH8NRjPQN55KWunfb_YtWaumzWHmKiqP63y_HRDd9PQeaKnpdgpDH_1782881275505_completion_certificate.pdf"
},
{
  title: "Advanced Software Engineering Job Simulation",
  issuer: "Walmart Global Tech x Forage",
  date: "Jul 2026",
  icon: FaCode,
  gradient: "linear-gradient(135deg, #0071ce, #00c853)",
  verify: "https://www.theforage.com/completion-certificates/prBZoAihniNijyD6d/oX6f9BbCL9kJDJzfg_prBZoAihniNijyD6d_HRDd9PQeaKnpdgpDH_1782879640872_completion_certificate.pdf"
},
];



export const STATS = [
  { number: "10+", label: "Projects Completed", icon: "code" },
  { number: "350+", label: "DSA Problems Solved", icon: "puzzle" },
  {number: "1",label: "Decodex Hackathon Finalist",icon: "award"},
  { number: "10+", label: "Technologies Learned", icon: "layers" },
];

export const RESUME_HIGHLIGHTS = [
  "Java Full Stack Developer",
  "Spring Boot & REST API expertise",
  "React frontend development",
  "350+ DSA problems solved",
  "10+ projects done ",
];
