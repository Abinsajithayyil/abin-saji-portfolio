// All portfolio content lives here. Edit this file to customize the site.
// Every item below comes from the candidate's resume and LinkedIn profile.

export const profile = {
  name: "Abin Saji",
  title: "Software Development | AI/ML | Data Science",
  headline: "Computer Science student building AI-driven software.",
  tagline:
    "B.Tech Computer Science student with hands-on AI/ML experience, from a 3D-printing automation workflow to web platforms. Looking for an entry-level role in software development, AI/ML or data science.",
  location: "Kerala, India",
  email: "abinsthayyil@gmail.com",
  phone: "7012163030",
  linkedin: "https://www.linkedin.com/in/abin-saji-b8a0b3284",
  github: "https://github.com/Abinsajithayyil",
  resume: "/Abin_Saji_Resume.pdf"
  photo: "/photo.jpg",
};

export const about = [
  "I'm a Computer Science Engineering undergraduate who likes turning AI/ML concepts into working software. My main project connects an AI model, 3D modeling and an automated manufacturing pipeline into one workflow.",
  "Outside coursework I lead technical teams: I'm Technical Lead at IEDC (IIET) and at IIET Radio, and I coordinate NSS community programs. I'm looking for an entry-level role where I can apply problem-solving skills and keep growing.",
];

export const projects = [
  {
    name: "AI-Based 3D Model Generation and G-Code Generator",
    kind: "AI + automation",
    problem:
      "Automated 3D printing needs both a 3D model and matching G-code, and those steps are usually handled separately.",
    solution:
      "An AI-based workflow that generates 3D models and produces the corresponding G-code for automated 3D printing.",
    contribution:
      "Built the workflow and connected the AI-generated 3D model data to an automated manufacturing pipeline.",
    outcome:
      "Software, AI, 3D modeling and automation combined in a single working workflow.",
    tech: ["AI", "3D modeling", "G-code", "Automation"],
    link: null, // e.g. "https://github.com/Abinsajithayyil/your-repo"
  },
  {
    name: "Local Event & Ticket Booking System",
    kind: "Web platform",
    problem: "People need one place to discover local events and book tickets.",
    solution:
      "A web-based platform for discovering local events and managing ticket bookings.",
    contribution:
      "Designed the platform and built its user-friendly interface and core front-end functionality.",
    outcome: "A simple interface for event discovery and booking.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: null,
  },
];

export const experience = [
  {
    role: "AI, ML & Data Science Intern",
    org: "Retechnox Technologies (MSME Certified)",
    period: "Internship",
    points: [
      "Gained practical exposure to Artificial Intelligence, Machine Learning and Data Science concepts.",
      "Applied data-oriented problem-solving techniques to real-world scenarios.",
      "Worked across the data workflow: preparation, analysis, model development and evaluation.",
    ],
  },
  {
    role: "Technical Lead",
    org: "IEDC, IIET (IEDC Kerala)",
    period: "Apr 2025 - Present",
    points: [
      "Lead technology-focused initiatives and technical project development.",
      "Coordinate technical activities among student teams.",
    ],
  },
  {
    role: "Technical Lead",
    org: "IIET Radio",
    period: "Sep 2024 - Present",
    points: ["Coordinate technical operations and support development of the college radio initiative."],
  },
  {
    role: "NSS Member and KTU CARE Flagship Program Coordinator",
    org: "National Service Scheme",
    period: "May 2024 - Present",
    points: ["Coordinate NSS KTU CARE flagship program activities and support planning of community-oriented activities."],
  },
  {
    role: "Patrol Leader, Rajya Puraskar Scout",
    org: "The Bharat Scouts and Guides",
    period: "Jun 2018 - Apr 2023",
    points: ["Completed every scouting stage up to the Rajya Puraskar award."],
  },
];

export const skills = [
  { group: "Programming", items: ["Java", "C"] },
  { group: "Web", items: ["HTML", "CSS", "JavaScript"] },
  { group: "AI / Data", items: ["Artificial Intelligence", "Machine Learning", "Data Science workflow: preparation, analysis, modeling, evaluation"] },
  { group: "Tools", items: ["Git", "GitHub"] },
  { group: "Core", items: ["Problem solving", "Technical leadership", "Project development"] },
];

export const education = {
  degree: "B.Tech in Computer Science and Engineering",
  school: "Indira Gandhi Institute of Engineering and Technology (IIET), Kerala",
  period: "Expected 2027",
  // Add `cgpa: "x.xx"` here and it will be shown automatically.
};

export const certifications = [
  "Claude Academy: AI Fluency Framework and Foundations",
  "Claude Academy: Claude with Google Cloud's Vertex AI",
  "AI, ML & Data Science (Retechnox Technologies)",
  "Cyber Security and Ethical Hacking",
];
