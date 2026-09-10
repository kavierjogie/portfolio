// ============================================================
// PORTFOLIO DATA — edit this file to update all content
// ============================================================

export const PERSONAL = {
  name: 'Kavier Jogie',
  firstName: 'Kavier',
  role: 'Software Developer',
  university: 'Nelson Mandela University',
  degree: 'BSc Honours in Computer Science and Information Systems',
  email: 'kavier.jogie@gmail.com',
  github: 'https://github.com/kavierjogie',
  linkedin: 'https://linkedin.com/in/kavier-jogie-2a9614319',
  cvUrl: '/Kavier Jogie CV.pdf',                  // ← Place your CV at public/cv.pdf
};

export const SKILLS = [
  { name: 'TypeScript', category: 'Languages & Frameworks', icon: 'TS' },
  { name: 'JavaScript', category: 'Languages & Frameworks', icon: 'JS' },
  { name: 'React', category: 'Languages & Frameworks', icon: '⚛' },
  { name: 'Next.js', category: 'Languages & Frameworks', icon: '▲' },
  { name: 'Java', category: 'Languages & Frameworks', icon: '☕' },
  { name: 'C#', category: 'Languages & Frameworks', icon: '#' },
  { name: 'AI Integration', category: 'AI & Data', icon: '✦' },
  { name: 'Supabase', category: 'AI & Data', icon: '⚡' },
  { name: 'R', category: 'AI & Data', icon: '📈' },
  { name: 'MATLAB', category: 'AI & Data', icon: '📊' },
  { name: 'SQL Server', category: 'Databases', icon: '🗄️' },
  { name: 'Microsoft Access', category: 'Databases', icon: '🗃️' },
  { name: 'Supabase', category: 'Databases', icon: '⚡' },
  { name: 'Git', category: 'Tools & Version Control', icon: '🔀' },
  { name: 'GitHub', category: 'Tools & Version Control', icon: '🐙' },
  { name: 'Android Studio', category: 'Tools & Version Control', icon: '📱' },
  { name: 'Visual Studio', category: 'Tools & Version Control', icon: '🖥️' },
  { name: 'IntelliJ IDEA', category: 'Tools & Version Control', icon: '💡' },
];

export const SECONDARY_SKILLS = [
  { name: 'Delphi', icon: '#' },
  { name: 'F#', icon: '#' },
  { name: 'Embarcadero RAD Studio', icon: '🧰' },
  { name: 'RStudio', icon: '📊' },
  { name: 'Unity', icon: '🎮' },
];

export const PROJECTS = [


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
    image: '/projects/ai-productivity-assistant.png',
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
    image: '/projects/careerbuddy-sa.png',
    details: {
      overview: 'Designed specifically for South African Grade 9-12 high-school pupils to lower career exploration anxiety. Instead of rigid testing, it uses a conversational "I Have No Idea" mode alongside structured knowledge database guidance on CAPS subjects, APS requirements, funding pathways like NSFAS, and university or TVET college admissions.',
      architecture: 'Built using React, TypeScript, and Vite on the server-side TanStack Start framework, integrated with Tailwind CSS. Utilizes Supabase for user profile synchronisation and database migrations, paired with @lovable.dev/cloud-auth-js for secure authentication. Integrates the Vercel AI SDK with an OpenAI-compatible API endpoint for dynamic conversational mentoring, and custom speech hooks (useSpeechInput & useReadAloud) leveraging the Web Speech API for voice interactions.',
      challenges: 'Overcoming the misalignment of standard global LLMs with the South African context (CAPS curriculum, APS scores, NSFAS funding) via specialized context mapping in src/lib/careerbuddy.server.ts. Additionally, solved device-compatibility hurdles for text-to-speech rendering and speech-to-text inputs by structuring robust event wrappers around mobile browser speech synthesis APIs.'
    }
  },

  {
    id: 4,
    title: 'Social Media Content Studio',
    description:
      'An AI-powered content creation suite that transforms single ideas into multi-platform formats including LinkedIn posts, Instagram captions, TikTok scripts, X posts, and content calendars.',
    tags: ['React', 'Next.js', 'TypeScript', 'Google Gemini', 'Groq AI', 'Tailwind CSS'],
    category: 'AI / Web Application',
    accent: '#EC4899',
    github: 'https://github.com/kavierjogie/social-media-content-studio',
    demo: 'https://social-media-content-studio-ys32.vercel.app/',
    featured: true,
    image: '/projects/social-media-content-studio.png',
    details: {
      overview: 'Empowers creators and marketers by turning one seed idea into tailored, platform-ready copy across LinkedIn, Instagram, TikTok, X, and blogs, complete with a built-in content calendar and prompt library.',
      architecture: 'Built with React, Next.js, and TypeScript styled with Tailwind CSS. Features a multi-provider AI engine leveraging Google Gemini (gemini-2.5-flash) as primary provider with automatic fallback to Groq LLMs (Llama 3.1) and client-side key storage.',
      challenges: 'Engineered automatic API failover logic between Gemini and Groq model endpoints, with dynamic model selection and prompt optimization for consistent tone across diverse social platforms.',
    }
  },

  {
    id: 5,
    title: 'Western Cape Public Hospital Feedback System',
    description:
      'A production-ready healthcare patient feedback platform built for the Western Cape Department of Health, featuring real-time AI sentiment analysis, hospital KPI dashboards, and automated PDF reporting.',
    tags: ['Next.js 14', 'TypeScript', 'Supabase', 'PostgreSQL', 'Groq AI', 'Recharts', 'jsPDF'],
    category: 'Healthcare IT / Web App',
    accent: '#0284C7',
    github: 'https://github.com/kavierjogie/wc-hospital-feedback',
    demo: 'https://wc-hospital-feedback.vercel.app/',
    featured: true,
    image: '/projects/wc-hospital-feedback.png',
    details: {
      overview: 'Developed for public healthcare administration to collect patient feedback, run automated AI sentiment analysis and key issue extraction, track facility KPIs, and generate POPIA-compliant monthly reports.',
      architecture: 'Built with Next.js 14 App Router, TypeScript, and Supabase PostgreSQL with strict Row Level Security (RLS). Integrates Groq SDK for real-time sentiment analysis, Recharts for analytics, jsPDF for report generation, and Vercel Cron for automated background processing.',
      challenges: 'Designing robust database RLS security policies preventing recursion loops, and creating graceful offline fallback queues so patient feedback is reliably captured even during AI provider downtime.',
    }
  },

  {
    id: 6,
    title: 'AI Budget Planner',
    description:
      'A full-stack personal finance and budgeting web application featuring AI-driven spending pattern analysis, a contextual financial chatbot assistant, savings goal tracking, and recurring expense automation.',
    tags: ['Next.js 14', 'TypeScript', 'Supabase', 'Groq AI', 'Recharts', 'jsPDF', 'Tailwind CSS'],
    category: 'FinTech / Web App',
    accent: '#F59E0B',
    github: 'https://github.com/kavierjogie/ai-budget-planner',
    demo: 'https://ai-budget-planner-wine.vercel.app/',
    featured: true,
    image: '/projects/ai-budget-planner.png',
    details: {
      overview: 'A full-stack financial companion designed for young adults to track income and expenses, receive automated AI insights on spending habits, converse with a financial chatbot assistant, and monitor savings goals.',
      architecture: 'Leverages Next.js 14 (App Router), TypeScript, and Supabase Auth & PostgreSQL. Uses Groq Cloud LLM APIs for spending insights and chat assistance, Recharts for visual trend forecasting, and jsPDF for monthly spending reports.',
      challenges: 'Structuring contextual prompts that feed financial history securely to the AI model while preventing hallucinations, and implementing automatic monthly carry-forward logic for recurring expenses.',
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
  organization?: string;
  period: string;
  type: string;
  location?: string;
  status?: string;
  description: string;
  bullets?: string[];
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
    tagline: 'Honours courses and 3rd-year design teams leadership',
    summary: 'Thrived in Honours level study covering distributed systems and advanced algorithms. Designed and delivered a real-time analytics app for coaches, while taking on multiple student assistant leadership roles.',
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
    experiences: [
      {
        title: 'AI Skills Acceleration Programme Participant',
        organization: 'CAPACITI',
        period: 'May 2026',
        type: 'Programme / Training · On-site',
        location: 'Cape Town, Western Cape, South Africa',
        status: 'Training',
        description: 'Completed CAPACITI\'s intensive AI Skills Acceleration Programme focused on practical AI adoption and workplace digital skills.',
        bullets: [
          'Developed hands-on experience with AI tools, prompt engineering, and AI-assisted productivity.',
          'Applied structured prompting techniques to solve practical workplace and productivity tasks.',
          'Strengthened digital fluency and workplace readiness by translating AI capabilities into practical use cases.',
        ],
        skills: ['Artificial Intelligence (AI)', 'Prompt Engineering', 'Digital Literacy', 'AI Tools'],
        icon: '🤖',
      },
      {
        title: 'Software Developer Candidate',
        organization: 'CAPACITI',
        period: 'Aug 2026 — Present',
        type: 'Contract · On-site',
        location: 'Cape Town, Western Cape, South Africa',
        status: 'Current',
        description: "CAPACITI's Demand Academy is a 12-month structured software development programme that combines technical training with industry mentorship and placement.",
        bullets: [
          'Developing practical software development skills through structured training, industry mentorship, and real-world project exposure.',
          'Building hands-on experience with modern software development tools, technologies, and industry best practices.',
          'Preparing for industry placement through technical training, collaborative projects, and workplace readiness.',
        ],
        skills: ['Software Development', 'Artificial Intelligence (AI)', 'Web Development', 'Git / GitHub', 'Programming'],
        icon: '💻',
      },
    ],
    tools: [
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '⚡' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Git', icon: '🔀' },
      { name: 'GitHub', icon: '🐙' },
    ],
  },
];

export interface Certification {
  name: string;
  issuer: string; // e.g., "Google" or "DataCamp"
  platform: string; // issuing platform, for display purposes
  verification: string; // URL to the credential
  earned?: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Google AI Essentials',
    issuer: 'Google',
    platform: 'Coursera',
    verification: 'https://www.coursera.org/account/accomplishments/specialization/certificate/0EQOTSLVFCHC',
  },
  {
    name: 'Working with the OpenAI API',
    issuer: 'DataCamp',
    platform: 'DataCamp',
    verification: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/b1f1345dce8e32e465860be47c5b7b9ca87bc58e?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa',
  },
  {
    name: 'Introduction to Power BI',
    issuer: 'DataCamp',
    platform: 'DataCamp',
    verification: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/6ae18b0c348e498630c71d5d77786801f203ec5e?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa',
  },
  {
    name: 'Introduction to GitHub Concepts',
    issuer: 'DataCamp',
    platform: 'DataCamp',
    verification: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/108fb4971ddea5f61fabe29aaf20dcf394d51664?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa',
  },
  {
    name: 'AI for Project Managers',
    issuer: 'Techademy',
    platform: 'Techademy',
    verification: 'https://www.techademyonline.com/credentials/8a7fd9ae-3e70-4f18-84dc-5c570048c440',
  },
  {
    name: 'AI for Software Engineering',
    issuer: 'DataCamp',
    platform: 'DataCamp',
    verification: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/c679960d2766b06d9a827b31862bc2b2419b752b?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa',
  },
  {
    name: 'AI for Business Analysts',
    issuer: 'Techademy',
    platform: 'Techademy',
    verification: 'https://www.techademyonline.com/credentials/60e81de9-fd8f-41cf-a84a-0d07a1556884',
  },
  {
    name: 'AI Skills Fest 2026',
    issuer: 'Microsoft',
    platform: 'Credly',
    verification: 'https://www.credly.com/badges/0beeefac-e0a9-4b25-a5cd-75a4492719f0/linked_in_profile',
  },
];
