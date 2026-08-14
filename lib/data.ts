// ============================================================
// PORTFOLIO DATA — edit this file to update all content
// ============================================================

export const PERSONAL = {
  name: 'Kavier Jogie',
  firstName: 'Kavier',
  role: 'Computer Science Honours Graduate',
  university: 'Nelson Mandela University',
  degree: 'BSc Honours in Computer Science and Information Systems',
  email: 'kavier.jogie@gmail.com',
  github: 'https://github.com/kavierjogie',
  linkedin: 'https://linkedin.com/in/kavier-jogie-2a9614319',
  cvUrl: '/CV.pdf',                  // ← Place your CV at public/cv.pdf
};

export const SKILLS = [
  // Programming Languages
  { name: 'Java', category: 'Programming Languages', icon: '☕' },
  { name: 'C#', category: 'Programming Languages', icon: '#' },
  { name: 'Delphi', category: 'Programming Languages', icon: '#' },
  { name: 'F#', category: 'Programming Languages', icon: '#' },
  { name: 'Unity (C#)', category: 'Programming Languages', icon: '🎮' },
  { name: 'Android Development', category: 'Programming Languages', icon: '📱' },

  // IDEs
  { name: 'IntelliJ IDEA', category: 'IDEs', icon: '💡' },
  { name: 'Android Studio', category: 'IDEs', icon: '📱' },
  { name: 'Visual Studio', category: 'IDEs', icon: '🖥️' },
  { name: 'RStudio', category: 'IDEs', icon: '📊' },
  { name: 'Embarcadero RAD Studio', category: 'IDEs', icon: '🧰' },
  { name: 'Unity', category: 'IDEs', icon: '🎮' },

  // Data Analysis / Engineering
  { name: 'R', category: 'Data Analysis', icon: '📈' },
  { name: 'MATLAB', category: 'Data Analysis', icon: '📊' },

  // Productivity Tools
  { name: 'Microsoft Word', category: 'Productivity', icon: '📄' },
  { name: 'Microsoft Excel', category: 'Productivity', icon: '📊' },
  { name: 'Microsoft PowerPoint', category: 'Productivity', icon: '📽️' },
  { name: 'Microsoft Visio', category: 'Productivity', icon: '📐' },

  // Databases
  { name: 'SQL Server', category: 'Databases', icon: '🗄️' },
  { name: 'Microsoft Access', category: 'Databases', icon: '🗃️' },
  { name: 'Supabase', category: 'Databases', icon: '⚡' },

  // Version Control
  { name: 'Git', category: 'Version Control', icon: '🔀' },
  { name: 'GitHub', category: 'Version Control', icon: '🐙' },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Madibaz Netball Statistics App',
    description:
      'A mobile app developed for netball coaches to capture real-time player statistics during matches and provide post-match performance analysis using interactive charts and analytics dashboards.',
    tags: ['Java', 'Android Studio', 'Supabase', 'MPAndroidChart'],
    category: 'Mobile App',
    accent: '#00E5FF',
    github: '#',
    demo: '#',
    featured: true,
    image: '/projects/Netball App.png',
    details: {
      overview: 'Designed to help coaching staffs transition from paper-based tracking to real-time digitised dashboards, optimizing player evaluation and strategy during active tournaments.',
      architecture: 'Utilises Java on Android Studio, communicating with Supabase via REST clients. Local caching matches SQLite. Includes MPAndroidChart for drawing dynamic trends.',
      challenges: 'Handling concurrent state edits by multiple assistant coaches and compiling data into simple, performant graphs on small mobile displays.',
    }
  },

  {
    id: 2,
    title: 'AI Workplace Productivity Assistant',
    description:
      'An AI-powered web application designed to automate repetitive workplace tasks such as writing emails, summarizing meeting notes, planning schedules, and assisting with research. Built to improve productivity through intelligent task automation and structured AI tools.',
    tags: ['React', 'AI', 'TypeScript', 'Prompt Engineering', 'Vite'],
    category: 'Web App',
    accent: '#7C3AED',
    github: 'https://github.com/kavierjogie007/intelligent-aid-desk',
    demo: 'https://kavier-jogie-ai-productivity-assistant.lovable.app',
    featured: true,
    image: '/projects/AI Workplace Productivity Assistant.png',
    details: {
      overview: 'An advanced productivity suite designed to act as a personal assistant, minimizing the friction of standard administrative tasks using tailored AI models.',
      architecture: 'Built using React, TypeScript, and Vite. Leverages advanced prompt engineering techniques and client-side orchestration to fetch API-driven LLM insights.',
      challenges: 'Optimizing context windows for long-form meeting note summaries, and engineering highly reliable prompts for deterministic outputs across various daily work tasks.',
    }
  },

  {
    id: 3,
    title: 'CareerBuddy SA',
    description:
      'An AI-powered career mentor chatbot designed specifically for South African high-school pupils. It helps learners explore career options, understand subject and qualification requirements, discover study opportunities, and make informed career decisions.',
    tags: ['React', 'TypeScript', 'AI', 'Chatbot', 'Tailwind CSS', 'South African Education'],
    category: 'AI / Web Application',
    accent: '#10B981',
    github: 'https://github.com/kavierjogie/CareerBuddySA',
    demo: 'https://grade-genius-mentor.lovable.app',
    featured: true,
    image: '/projects/CareerBuddy SA.png',
    details: {
      overview: 'Designed specifically for South African Grade 9-12 high-school pupils to lower career exploration anxiety. Instead of rigid testing, it uses a conversational "I Have No Idea" mode alongside structured knowledge database guidance on CAPS subjects, APS requirements, funding pathways like NSFAS, and university or TVET college admissions.',
      architecture: 'Built using React, TypeScript, and Vite on the server-side TanStack Start framework, integrated with Tailwind CSS. Utilizes Supabase for user profile synchronisation and database migrations, paired with @lovable.dev/cloud-auth-js for secure authentication. Integrates the Vercel AI SDK with an OpenAI-compatible API endpoint for dynamic conversational mentoring, and custom speech hooks (useSpeechInput & useReadAloud) leveraging the Web Speech API for voice interactions.',
      challenges: 'Overcoming the misalignment of standard global LLMs with the South African context (CAPS curriculum, APS scores, NSFAS funding) via specialized context mapping in src/lib/careerbuddy.server.ts. Additionally, solved device-compatibility hurdles for text-to-speech rendering and speech-to-text inputs by structuring robust event wrappers around mobile browser speech synthesis APIs.'
    }
  },
];

export const EXPERIENCE = [
  {
    title: 'Student Assistant (Lab Security)',
    company: 'Nelson Mandela University',
    period: 'Jul 2025 — Oct 2025',
    type: 'Part-time · On-site',
    description:
      'Responsible for securing and locking university labs weekly to ensure facility safety and compliance with university policies.',
    skills: ['Responsibility', 'Attention to Detail', 'Security Procedures', 'Reliability'],
    icon: '🔐',
  },

  {
    title: 'Student Assistant (Tech Lead)',
    company: 'Nelson Mandela University',
    period: 'Apr 2025 — Oct 2025',
    type: 'Part-time · On-site',
    description:
      'Served as a Tech Lead for third-year students, assisting in the planning, design, and development phases of their Computer Science projects.',
    skills: ['Leadership', 'Software Design', 'Project Planning', 'Mentoring', 'Team Collaboration'],
    icon: '🧠',
  },

  {
    title: 'Student Assistant (Programming & Assessment)',
    company: 'Nelson Mandela University',
    period: 'Feb 2025 — Jun 2025',
    type: 'Part-time · On-site',
    description:
      'Assisted second-year students with programming practicals, monitored and prevented academic dishonesty, graded assignments, and provided constructive feedback to support student improvement.',
    skills: ['Java', 'C#', 'Visual Studio', 'Assessment', 'Academic Integrity', 'Mentoring'],
    icon: '💻',
  },

  {
    title: 'Student Assistant (Programming Support)',
    company: 'Nelson Mandela University',
    period: 'Feb 2024 — Jun 2024',
    type: 'Part-time · On-site',
    description:
      'Assisted second-year students with programming practical sessions, helping them understand core programming concepts and complete assignments.',
    skills: ['Programming Fundamentals', 'Debugging', 'Mentoring', 'Communication'],
    icon: '🧑‍🏫',
  },
];

export interface TimelineTool {
  name: string;
  icon: string;
}

export interface TimelineExperience {
  title: string;
  period: string;
  type: string;
  description: string;
  skills: string[];
  icon: string;
}

export interface TimelineEducation {
  institution: string;
  qualification: string;
  period: string;
  location: string;
  modules?: string[];
  activities?: string;
}

export interface TimelinePhase {
  year: string;
  label: string;
  focus: string;
  tagline: string;
  education?: TimelineEducation;
  experiences?: TimelineExperience[];
  tools: TimelineTool[];
  summary: string;
}

export const TIMELINE: TimelinePhase[] = [
  {
    year: '2021',
    label: 'Pre-University Foundations',
    focus: 'School Custodian & IT Beginnings',
    tagline: 'Pinelands High School Matric & IT Basics',
    summary: 'Completed National Senior Certificate (Matric) with high marks in key technical and mathematical subjects, laying down the groundwork for a Computer Science path.',
    education: {
      institution: 'Pinelands High School',
      qualification: 'National Senior Certificate (Matric)',
      period: 'Jan 2017 — Dec 2021',
      location: 'Cape Town, South Africa',
      activities: 'Custodian',
      modules: [
        'Information Technology',
        'Mathematics',
        'Physical Science',
        'Accounting',
        'Engineering Graphic Design',
        'English Home Language',
        'Afrikaans First Additional Language',
        'Life Orientation',
      ],
    },
    tools: [
      { name: 'Delphi', icon: '💻' },
      { name: 'Microsoft Excel', icon: '📊' },
      { name: 'Microsoft Word', icon: '📄' },
    ],
  },
  {
    year: '2022',
    label: 'BSc First Year',
    focus: 'Algorithms & Database Basics',
    tagline: 'Laying procedural foundations at Nelson Mandela University',
    summary: 'Began BSc studies, diving into basic programming syntax, procedural constructs, data visualization, and database operations.',
    education: {
      institution: 'Nelson Mandela University',
      qualification: 'Bachelor of Science (BSc), Computer Science and Mathematical Statistics',
      period: 'Feb 2022 — Dec 2024',
      location: 'Gqeberha, South Africa',
    },
    tools: [
      { name: 'Java', icon: '☕' },
      { name: 'Delphi', icon: '🧰' },
      { name: 'Microsoft Access', icon: '🗃' },
      { name: 'Microsoft PowerPoint', icon: '📽️' },
    ],
  },
  {
    year: '2023',
    label: 'BSc Second Year',
    focus: 'Object-Oriented & Systems Design',
    tagline: 'Exploring systems architecture and complex OOP systems',
    summary: 'Accelerated technical mastery through C# systems analysis and building complex relational database applications.',
    education: {
      institution: 'Nelson Mandela University',
      qualification: 'Bachelor of Science (BSc), Computer Science and Mathematical Statistics',
      period: 'Feb 2022 — Dec 2024',
      location: 'Gqeberha, South Africa',
    },
    tools: [
      { name: 'C#', icon: '#' },
      { name: 'SQL Server', icon: '🗄️' },
      { name: 'Microsoft Visio', icon: '📐' },
    ],
  },
  {
    year: '2024',
    label: '2024 (Undergrad Focus)',
    focus: 'Tutoring & Mathematics Complete',
    tagline: 'Undergraduate courses, programming basics, and tutoring role',
    summary: 'Completed undergraduate curriculum focusing on advanced programming paradigms and statistics, while starting to support junior students in their programming journey.',
    education: {
      institution: 'Nelson Mandela University',
      qualification: 'Bachelor of Science (BSc), Computer Science and Mathematical Statistics',
      period: 'Feb 2022 — Dec 2024',
      location: 'Gqeberha, South Africa',
    },
    experiences: [
      {
        title: 'Student Assistant (Programming Support)',
        period: 'Feb 2024 — Jun 2024',
        type: 'Part-time · On-site',
        description: 'Assisted second-year students with programming practical sessions, helping them understand core programming concepts, debug code, and complete coursework.',
        skills: ['Programming Fundamentals', 'Debugging', 'Mentoring', 'Communication'],
        icon: '🧑‍🏫',
      },
    ],
    tools: [
      { name: 'Java', icon: '☕' },
      { name: 'C#', icon: '#' },
      { name: 'SQL Server', icon: '🗄️' },
      { name: 'MATLAB', icon: '📊' },
    ],
  },
  {
    year: '2025',
    label: '2025 (Honours & Tech Lead)',
    focus: 'Distributed Systems & Leadership',
    tagline: 'Honours courses, Netball app, and 3rd-year design teams leadership',
    summary: 'Thrived in Honours level study covering distributed systems and advanced algorithms. Designed and delivered a real-time analytics app for Netball coaches, while taking on multiple student assistant leadership roles.',
    education: {
      institution: 'Nelson Mandela University',
      qualification: 'Bachelor of Science Honours (BScHons), Computer Science and Information Systems',
      period: 'Feb 2025 — Dec 2025',
      location: 'Gqeberha, South Africa',
      modules: [
        'Data Warehousing',
        'Usability Engineering',
        'Project Management',
        'Advanced Functional Programming',
        'Artificial Intelligence',
        'E-Commerce',
        'Evolutionary Computing',
        'Virtual Reality',
      ],
    },
    experiences: [
      {
        title: 'Student Assistant (Tech Lead)',
        period: 'Apr 2025 — Oct 2025',
        type: 'Part-time · On-site',
        description: 'Served as a Tech Lead for third-year students, assisting in the planning, design, and development phases of their Computer Science capstone projects.',
        skills: ['Leadership', 'Software Design', 'Project Planning', 'Mentoring', 'Team Collaboration'],
        icon: '🧠',
      },
      {
        title: 'Student Assistant (Programming & Assessment)',
        period: 'Feb 2025 — Jun 2025',
        type: 'Part-time · On-site',
        description: 'Assisted second-year students with programming practicals, monitored and prevented academic dishonesty, graded assignments, and provided constructive feedback to support student improvement.',
        skills: ['Java', 'C#', 'Visual Studio', 'Assessment', 'Academic Integrity', 'Mentoring'],
        icon: '💻',
      },
      {
        title: 'Student Assistant (Lab Security)',
        period: 'Jul 2025 — Oct 2025',
        type: 'Part-time · On-site',
        description: 'Responsible for securing and locking university labs weekly to ensure facility safety and compliance with university policies.',
        skills: ['Responsibility', 'Attention to Detail', 'Security Procedures', 'Reliability'],
        icon: '🔐',
      },
    ],
    tools: [
      { name: 'R', icon: '📈' },
      { name: 'F#', icon: '#' },
      { name: 'Supabase', icon: '⚡' },
      { name: 'Java', icon: '☕' },
      { name: 'Android Studio', icon: '📱' },
    ],
  },
  {
    year: '2026',
    label: 'Professional Integration',
    focus: 'BSc Honours Graduate',
    tagline: 'Deploying advanced systems and AI workplace products',
    summary: 'Leveraged Honours academic findings to build premium software products including AI assistants and data platforms, moving into full-stack software engineering.',
    tools: [
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '⚡' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Git', icon: '🔀' },
      { name: 'GitHub', icon: '🐙' },
    ],
  },
];

