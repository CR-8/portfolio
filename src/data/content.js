// Portfolio Content Data
export const portfolioData = {
  personal: {
    name: "Pratyush Tiwari",
    title: "Full-Stack Developer",
    location: {
      city: "Lucknow",
      state: "Uttar Pradesh",
      country: "India",
      displayText: "India"
    },
    contact: {
      email: "pratyushtiwari446@gmail.com",
      phone: "+91 73074 64595",
      linkedin: "https://linkedin.com/in/pratyush-tiwari-cr8",
      github: "https://github.com/CR-8"
    },
    description:
      "Full-stack web developer with 1+ year of hands-on experience building responsive, scalable, and AI-powered web applications. Passionate about delivering user-centric products with clean UI, strong backend architecture, and modern design aesthetics.",
    heroDescription:
      "Crafting exceptional digital experiences through clean code and innovative design. Specialized in modern web technologies and AI integration.",
    experience: {
      years: "1+",
      description: "Years Building"
    },
    status: {
      available: true,
      text: "For Hire"
    },
    stats: {
      coffee: 127,
      projects: 3
    }
  },

  skills: {
    primary: ["React", "Node.js", "Python", "MongoDB"],
    frontend: ["React.js", "Next.js", "HTML5", "CSS3", "Responsive Design"],
    backend: ["Node.js", "Express.js", "Django", "RESTful APIs"],
    database: ["MongoDB", "PostgreSQL (basic)", "Supabase", "Firebase (basic)"],
    styling: ["Tailwind CSS", "Bootstrap", "ShadCN UI"],
    tools: ["Git", "GitHub", "Postman", "Vercel", "VS Code", "Figma"]
  },

  projects: [
    {
      id: 1,
      name: "Manicus",
      fullName: "Manicus – AI-Powered Educational Video Generator",
      description:
        "Developed an end-to-end platform that generates educational videos from user prompts using AI-driven scene breakdowns and Manim animations.",
      techStack: [
        "Django",
        "React (Vite)",
        "Google Gemini API",
        "Manim",
        "FFmpeg",
        "Tailwind CSS"
      ],
      role: "Full-Stack Developer",
      status: "Live",
      statusColor: "bg-green-500",
      features: [
        "Integrated Google Gemini API to create structured scenes, rendered with Manim and stitched using FFmpeg",
        "Created RESTful APIs and a real-time React-based interface for session-based chat and batch video generation",
        "Implemented session management with localStorage, multi-video export, and a course planner UI"
      ]
    },
    {
      id: 2,
      name: "AI Financial Dashboard",
      fullName: "AI Financial Dashboard – Real-Time Stock Analysis with AI",
      description:
        "Built a modern financial dashboard that delivers AI-driven insights and real-time stock data with user-friendly UX.",
      techStack: [
        "Next.js 14",
        "Supabase",
        "Tailwind CSS",
        "Google Gemini API",
        "Recharts"
      ],
      role: "Full-Stack Developer",
      status: "Dev",
      statusColor: "bg-yellow-500",
      features: [
        "Integrated APIs like Alpha Vantage and Guardian for live data and news, and Gemini AI for company analysis",
        "Features include Supabase authentication, company search, interactive charts, dark mode, and personal watchlists"
      ]
    },
    {
      id: 3,
      name: "PsychEval",
      fullName: "PsychEval – Personality & Career Fit AI Tool",
      description:
        "Created a dynamic self-assessment tool that uses ChatGPT to generate psychology-based tests using Maslow and Freud's theories.",
      techStack: ["React.js", "Node.js", "MongoDB", "OpenAI API"],
      role: "Full-Stack Developer",
      status: "Plan",
      statusColor: "bg-blue-500",
      features: [
        "Built a dashboard to visualize user growth, self-awareness, and career fit",
        "Implemented secure backend, report generation, and a reusable component system for rapid form rendering"
      ]
    }
  ],

  experience: [
    {
      id: 1,
      position: "Software Development Intern",
      company: "Matrix Innovations",
      location: "Lucknow, UP",
      duration: "Dec 2024 – Present",
      type: "Internship",
      description: [
        "Worked on internal tool development using Node.js and modular REST APIs",
        "Gained hands-on experience with configuration management and agile delivery"
      ]
    },
    {
      id: 2,
      position: "Technical Team Member",
      company: "CSI, SRMCEM",
      location: "College",
      duration: "Oct 2024 – Present",
      type: "Leadership",
      description: [
        "Delivered full-stack systems for event-based platforms and internal tools",
        "Mentored junior developers and led live coding sessions"
      ]
    },
    {
      id: 3,
      position: "Assistant Coordinator",
      company: "Robotics Club, SRMCEM",
      location: "College",
      duration: "Oct 2023 – Present",
      type: "Leadership",
      description: [
        "Managed national robotics competition logistics and submissions",
        "Led budgeting, recruitment, and technical documentation efforts"
      ]
    }
  ],

  education: [
    {
      id: 1,
      degree: "B.Tech – Computer Science & Engineering (Data Science)",
      institution: "Dr. A.P.J. Abdul Kalam Technical University",
      status: "Expected Graduation: 2027",
      current: true
    },
    {
      id: 2,
      degree: "Senior Secondary (Class 12)",
      institution: "Central Academy, Lucknow",
      status: "Completed: 2023",
      current: false
    }
  ],

  highlights: [
    "Passion for minimal UI design with dark mode themes and Monofont aesthetics",
    "Comfortable with Git-based workflows and REST API integration",
    "Experienced in deploying on Vercel and working with component libraries (ShadCN UI)",
    "Interest in EdTech, FinTech, and AI-powered user interfaces"
  ],

  social: {
    github: "https://github.com/CR-8",
    linkedin: "https://linkedin.com/in/pratyush-tiwari-cr8",
    email: "mailto:pratyushtiwari446@gmail.com"
  },

  timeZone: "Asia/Kolkata"
};

export default portfolioData;
