// Single source of truth for portfolio content.
// Imported by both React components (src/components/*) and the chat tool layer (api/_lib/portfolio-data.js).
// Keep this file framework-agnostic: plain serializable data only, no JSX, no React imports.
// React components map iconKey/imageKey strings to JSX via local lookup tables.

export const ownerName = "Ankit Rijal";
export const ownerEmail = "ankitrijal2054@gmail.com";

export const aboutMeRoles = [
  "AI Software Engineer",
  "Agentic AI Developer",
  "Full-Stack Engineer",
];

export const aboutMeStatusTagline = "Building agentic AI in production";

export const aboutMeBio =
  "I am an AI Software Engineer with 3+ years of experience building production-grade applications and LLM-powered systems. I build agentic AI in production, from autonomous content-generation agents and multi-agent orchestration to RAG pipelines, backed by a strong full-stack foundation shipping web, iOS, and Android apps end to end on AWS and Vercel. I work AI-native with Claude Code, Cursor, and multi-agent workflows to move fast while holding a high bar for security and reliability.";

export const resumeUrl = "/assets/Resume-Ankit_Rijal.pdf";

// Section IDs used for scroll-to-section navigation. Must match the id="" props in App.js.
export const sectionIds = {
  aboutme: "aboutme",
  experience: "experience",
  education: "education",
  skill: "skill",
  project: "project",
  certification: "certification",
  social: "social",
  contact: "contact",
};

export const experienceData = [
  {
    role: "AI Software Engineer",
    company: "Flourish Schools, Remote",
    dates: "Feb 2026 - Current",
    status: "Current",
    bullets: [
      "Developed an AI agent using the Pydantic deep agents framework that generates symbolic math modules with deterministic orchestration, quality gates, crash-safe persistence, and error-driven self-correction, reducing build time from months to days.",
      "Built an end-to-end AI grading pipeline with OCR-first ingestion of handwritten student work, automating scoring and feedback and sharply reducing teachers' manual grading time.",
      "Architected and launched a full-stack parent platform covering the complete admissions-to-enrollment funnel, shipping native iOS and Android apps from the same codebase through App Store and Play Store submission.",
      "Built the platform's integration layer: a bidirectional HubSpot CRM sync engine, Stripe payments with a webhook-driven ledger, a two-way Slack relay for staff messaging, and real-time multilingual messaging powered by an async LLM translation pipeline.",
      "Leveraged an AI-assisted engineering workflow with multi-agent code generation, AI-driven code audits, and automated verification to ship production features at high velocity without compromising security or reliability.",
    ],
    projects: [
      {
        title: "Symbolic Math Module Generator",
        description:
          "AI agent workflow for generating structured math modules with persistence, quality gates, and self-correction loops that cut build time from months to days.",
      },
      {
        title: "AI Grading Pipeline",
        description:
          "End-to-end grading system with OCR-first ingestion of handwritten work, automating scoring and feedback to save teachers hours of manual grading.",
      },
      {
        title: "Parent Admissions Platform",
        description:
          "Full-stack platform covering the admissions-to-enrollment funnel, with native iOS and Android apps shipped from a shared codebase to the App Store and Play Store.",
      },
      {
        title: "Integrations & Payments Layer",
        description:
          "Bidirectional HubSpot CRM sync, Stripe payments with a webhook-driven ledger, a two-way Slack relay, and async LLM-powered multilingual messaging.",
      },
    ],
  },
  {
    role: "Software Developer",
    company: "The Reynolds and Reynolds Company, College Station, TX",
    dates: "Jan 2022 - Jul 2024",
    bullets: [
      "Developed full-stack KeyTrak applications across desktop, web, and mobile using C#/.NET, React.js, and Electron.js, serving 5,000+ enterprise customers.",
      "Designed 30+ RESTful APIs using ASP.NET Core with SOLID principles, improving system performance, modularity, and long-term maintainability.",
      "Migrated 50+ CI/CD pipelines from Jenkins to GitHub Actions, reducing deployment time by 30%.",
      "Led version control migration from SVN to Git across Agile teams, enabling modern collaboration workflows.",
    ],
    projects: [
      {
        title: "SVN to GitHub Repository Migration",
        description:
          "Migrated an extensive SVN repository to GitHub, improving developer collaboration and modernizing version control workflows.",
      },
      {
        title: "Build Process Migration to GitHub Actions",
        description:
          "Moved 50+ build processes from Jenkins to GitHub Actions, improving automation, reliability, and deployment speed.",
      },
      {
        title: "Database Update Automation",
        description:
          "Built PowerShell and console tooling to automate database updates, reducing manual intervention by 90%.",
      },
      {
        title: "Motion Detection Integration",
        description:
          "Integrated motion detection into KeyTrak Guardian using Accord.Net to support enhanced security workflows.",
      },
    ],
  },
];

// iconKey values map to react-icons exports via the lookup table in src/components/Skill.js.
// Backend tools ignore iconKey entirely.
export const skillsData = [
  { name: "Python", iconKey: "FaPython", category: "AI & Data", description: "Core language for AI agent development, LLM-powered apps, data workflows, model experimentation, and backend services." },
  { name: "FastAPI", iconKey: "SiFastapi", category: "Backend", description: "Used to build Python API services for AI products, model-backed workflows, and reliable backend interfaces." },
  { name: "C#", iconKey: "TbBrandCSharp", category: "Backend", description: "Developed enterprise-grade applications at Reynolds & Reynolds using C# and .NET, including 30+ RESTful APIs and full-stack systems used by 5,000+ users." },
  { name: "React / React Native", iconKey: "FaReact", category: "Frontend", description: "Built dynamic web and mobile experiences across AI products, enterprise applications, collaborative tools, and real-time messaging." },
  { name: "Next.js", iconKey: "SiNextdotjs", category: "Frontend", description: "Used for modern frontend development in current AI product work, pairing a Next.js interface with Python-backed services." },
  { name: "TypeScript", iconKey: "SiTypescript", category: "Frontend", description: "Applied typed JavaScript across modern React, Firebase, and Electron projects to improve maintainability and reduce runtime bugs." },
  { name: "PostgreSQL", iconKey: "BiLogoPostgresql", category: "Backend", description: "Designed and optimized relational data models for scalable applications, efficient queries, and secure data handling." },
  { name: "ElectronJs", iconKey: "SiElectron", category: "Frontend", description: "Delivered cross-platform desktop apps (e.g., KeyTrak system) by combining Electron.js with C#/.NET and React.js for enterprise clients." },
  { name: "Capacitor.js", iconKey: "SiCapacitor", category: "Frontend", description: "Used to package web application experiences into mobile apps while sharing frontend code across platforms." },
  { name: "AWS", iconKey: "FaAws", category: "Cloud & Delivery", description: "Worked with AWS services including EC2, S3, Lambda, Amplify, and CloudWatch for deployment, serverless workflows, and monitoring." },
  { name: "Firebase", iconKey: "SiFirebase", category: "Cloud & Delivery", description: "Used Firebase and Firestore for real-time collaboration, authentication, hosting, and rapid deployment of AI-enabled products." },
  { name: "Vercel", iconKey: "SiVercel", category: "Cloud & Delivery", description: "Used Vercel for fast frontend deployment workflows and modern product iteration across React-based applications." },
  { name: "GCP", iconKey: "SiGooglecloud", category: "Cloud & Delivery", description: "Familiar with Google Cloud production ML concepts and cloud deployment patterns for AI-focused systems." },
  { name: "GitHub", iconKey: "FaGithub", category: "Cloud & Delivery", description: "Led SVN-to-Git migration at Reynolds & Reynolds and automated CI/CD with GitHub Actions. Also used across all personal projects for version control and collaboration." },
  { name: "Jenkins", iconKey: "FaJenkins", category: "Cloud & Delivery", description: "Created and maintained CI/CD pipelines, and migrated 50+ Jenkins pipelines to GitHub Actions, reducing deployment time by 30%." },
  { name: "Docker", iconKey: "FaDocker", category: "Cloud & Delivery", description: "Containerized ML models and full-stack apps for consistent deployment; used in MLOps pipelines with AWS EC2 and FastAPI." },
  { name: "Terraform", iconKey: "SiTerraform", category: "Cloud & Delivery", description: "Used infrastructure-as-code to provision and manage cloud resources reproducibly across environments." },
  { name: "Supabase", iconKey: "SiSupabase", category: "Backend", description: "Used for database-backed product development, authentication-friendly workflows, and fast backend iteration." },
  { name: "Redis", iconKey: "SiRedis", category: "Backend", description: "Used for caching, background job queues, and low-latency data access in production backend services." },
  { name: "Stripe", iconKey: "SiStripe", category: "APIs & Integrations", description: "Built Stripe payments with a webhook-driven ledger to power billing across the parent enrollment platform." },
  { name: "HubSpot CRM", iconKey: "SiHubspot", category: "APIs & Integrations", description: "Engineered a bidirectional HubSpot CRM sync engine to keep platform and CRM records consistent in real time." },
  { name: "Slack API", iconKey: "SiSlack", category: "APIs & Integrations", description: "Built a two-way Slack relay for staff messaging, bridging platform events and human conversations." },
  { name: "Cursor + Claude Code", iconKey: "FiCode", category: "AI-Assisted Development", description: "Used as part of an AI-assisted development workflow for faster implementation, debugging, refactoring, and agentic coding." },
  { name: "MCP + Agent Skills", iconKey: "FiCode", category: "AI-Assisted Development", description: "Built and used Model Context Protocol servers, agent skills, and multi-agent workflows for spec-driven, AI-native development." },
  { name: "Streamlit", iconKey: "SiStreamlit", category: "AI & Data", description: "Built and deployed AI prototypes like AI Image Assistant on Streamlit Cloud for interactive data science and vision-language apps." },
  { name: "LangChain", iconKey: "SiLangchain", category: "AI & Data", description: "Used in RAG-based chatbots with ChromaDB and Hugging Face to enable document-aware, persistent LLM responses." },
  { name: "LangGraph", iconKey: "SiLangchain", category: "AI & Data", description: "Applied graph-based agent workflow patterns for more reliable multi-step LLM orchestration and stateful AI systems." },
  { name: "Pydantic AI", iconKey: "SiPydantic", category: "AI & Data", description: "Built structured AI agent workflows with validation, deterministic orchestration, quality gates, and error-driven self-correction." },
  { name: "OpenAI API", iconKey: "SiOpenai", category: "AI & Data", description: "Integrated OpenAI models into NLP workflows for text generation, summarization, and study-assistant features." },
  { name: "Anthropic Claude API", iconKey: "SiAnthropic", category: "AI & Data", description: "Integrated Claude models into production agentic systems for content generation, orchestration, and reasoning-heavy workflows." },
  { name: "Google Gemini API", iconKey: "SiGooglegemini", category: "AI & Data", description: "Developed apps like SmartPrep AI and AI Image Assistant using Gemini 1.5 Flash for text generation and vision-language tasks." },
  { name: "Amazon Bedrock", iconKey: "FaAws", category: "AI & Data", description: "Used Amazon Bedrock to access and orchestrate foundation models within AWS-hosted AI workflows." },
  { name: "Transformer", iconKey: "SiHuggingface", category: "AI & Data", description: "Implemented Hugging Face Transformers in RAG pipelines and chatbots for embeddings, inference optimization, and fine-tuning." },
  { name: "NumPy", iconKey: "SiNumpy", category: "AI & Data", description: "Used extensively for scientific computing, feature engineering, and preprocessing in ML projects." },
  { name: "Pandas", iconKey: "SiPandas", category: "AI & Data", description: "Applied to clean, transform, and analyze datasets for ML pipelines and predictive modeling." },
  { name: "SciPy", iconKey: "SiScipy", category: "AI & Data", description: "Leveraged for advanced math functions and algorithms supporting ML model experimentation." },
  { name: "TensorFlow", iconKey: "SiTensorflow", category: "AI & Data", description: "Trained and deployed deep learning models (vision, NLP) in ML coursework and projects like predictive modeling." },
  { name: "Jupyter Notebook", iconKey: "SiJupyter", category: "AI & Data", description: "Used extensively for prototyping machine learning models, data preprocessing, and visualizing results in an interactive workflow." },
];

// imageKey values map to imported image modules via the lookup table in src/components/Project.js.
export const projectsData = [
  {
    title: "Study Buddy",
    href: "https://study-buddy-28043.web.app/login",
    imageKey: "studybuddy",
    alt: "Study Buddy",
    category: "AI Learning",
    status: "Live",
    tags: ["React", "AI", "Adaptive Quizzes"],
    description:
      "A persistent AI learning companion that keeps students engaged through conversational learning, adaptive quizzes, personalized recommendations, and intelligent nudges.",
  },
  {
    title: "AI Math Tutor",
    href: "https://ai-math-tutor-b09db.web.app/",
    imageKey: "aimathtutor",
    alt: "AI Math Tutor",
    category: "AI Tutor",
    status: "Live",
    tags: ["Socratic AI", "Math", "Tutoring"],
    description:
      "AI Math Tutor is a web-based conversational AI tutoring platform that teaches mathematics through the Socratic method through step-by-step reasoning using leading questions, hints, and validation, building genuine understanding and critical thinking skills.",
  },
  {
    title: "Lawmint",
    href: "https://lawmint-c5a21.web.app/",
    imageKey: "lawmint",
    alt: "Lawmint",
    category: "Legal AI",
    status: "Live",
    tags: ["Automation", "Documents", "Collaboration"],
    description:
      "AI-Powered Demand Letters for Modern Law Firms. Draft, refine, and collaborate on demand letters securely and effortlessly. Transform how your firm creates legal documents with intelligent automation.",
  },
  {
    title: "AI Image Assistant",
    href: "https://multi-model-ai-assistant.streamlit.app/",
    imageKey: "imageassistant",
    alt: "AI Image Assistant",
    category: "Vision AI",
    status: "Live",
    tags: ["Streamlit", "Vision", "Captions"],
    description:
      "An AI assistant that that allows users to upload an image and either ask questions about it or generate a caption.",
  },
  {
    title: "CollabCanvas",
    href: "https://collabcanvas-1fd25.web.app/",
    imageKey: "collabcanvas",
    alt: "CollabCanvas",
    category: "Realtime App",
    status: "Live",
    tags: ["React", "Firebase", "GPT-4"],
    description:
      "A real-time AI-powered collaborative design canvas built with React, TypeScript, Firebase, and GPT-4 Turbo. Multiple users can draw, create, and edit objects simultaneously with live cursor tracking and presence awareness (<100 ms latency).",
  },
  {
    title: "Unilang",
    href: "https://drive.google.com/file/d/1wfykY2cKTEqkn2HE5oE3GwSgdObf8xBw/view",
    imageKey: "unilang",
    alt: "Unilang",
    category: "Communication",
    status: "Demo",
    tags: ["Translation", "AI Replies", "Messaging"],
    description:
      "Real-time messaging app with AI-powered translation, smart replies, tone adjustment, and slang detection for culturally aware communication across languages.",
  },
  {
    title: "ClipForge",
    href: "https://drive.google.com/file/d/1-A4oRd3rHFjfV6bA83ixF3hfGDsazxK4/view?usp=drive_link",
    imageKey: "clipforge",
    alt: "ClipForge",
    category: "Desktop App",
    status: "Demo",
    tags: ["Electron", "React", "Video"],
    description:
      "ClipForge is a modern, cross-platform desktop video editor built with Electron, React, and TypeScript. It provides an intuitive interface for video trimming, preview, and export with professional-grade performance.",
  },
  {
    title: "AI Chatbot",
    href: "https://github.com/ankitrijal2054/AI_Chatbot",
    imageKey: "chatbot",
    alt: "AI Chatbot",
    category: "RAG",
    status: "Code",
    tags: ["LangChain", "RAG", "Knowledge Base"],
    description: "A chatbot with a custom knowledge base using LangChain and RAG.",
  },
  {
    title: "Housing Price Predictor",
    href: "https://github.com/ankitrijal2054/House_Price_Prediction",
    imageKey: "housing",
    alt: "Housing Price Prediction",
    category: "Machine Learning",
    status: "Code",
    tags: ["ML", "Prediction", "Data"],
    description: "A machine learning model predicting house prices based on features.",
  },
];

export const educationData = [
  {
    degree: "Fellowship in Applied AI",
    school: "Gauntlet AI",
    year: "2025",
    status: "Completed",
  },
  {
    degree: "Master's in Artificial Intelligence",
    school: "University of the Cumberlands",
    year: "2025",
    status: "Completed",
  },
  {
    degree: "Bachelor's in Computer Science",
    school: "East Central University",
    year: "2021",
    status: "Completed",
  },
];

export const certificationsData = [
  {
    title: "PRODUCTION MACHINE LEARNING SYSTEMS",
    provider: "GOOGLE CLOUD",
    link: "https://coursera.org/share/a99e399adbdd37619c3c8bca76e78628",
  },
  {
    title: "FUNDAMENTALS OF AI AGENTS USING RAG AND LANGCHAIN",
    provider: "IBM",
    link: "https://coursera.org/share/0fff88ddf2f284b36e74e8d39d4d2e06",
  },
  {
    title: "GENERATIVE AI ADVANCE FINE-TUNING FOR LLMs",
    provider: "IBM",
    link: "https://coursera.org/share/51a4557c1b141971fd226ad257798554",
  },
  {
    title: "GEN AI LANGUAGE MODELING WITH TRANSFORMERS",
    provider: "IBM",
    link: "https://coursera.org/share/c30ef75fbc0b626bccacb5616cfb9f02",
  },
  {
    title: "ADVANCED DEEP LEARNING SPECIALIST",
    provider: "IBM",
    link: "https://www.credly.com/badges/e52a1fe9-a116-4c8e-851b-e0ee92a1301e/public_url",
  },
  {
    title: "MACHINE LEARNING WITH PYTHON",
    provider: "COURSERA",
    link: "https://www.credly.com/badges/59cbe745-fc1c-4a53-89d2-00e389761d8a/public_url",
  },
];

export const socialsData = [
  {
    name: "GitHub",
    iconKey: "FaGithub",
    link: "https://github.com/ankitrijal2054",
    color: "#333",
  },
  {
    name: "LinkedIn",
    iconKey: "FaLinkedin",
    link: "https://www.linkedin.com/in/ankitrjl2054/",
    color: "#0077b5",
  },
  {
    name: "X/Twitter",
    iconKey: "FaXTwitter",
    link: "https://x.com/ankit_rijal2054",
    color: "#1da1f2",
  },
  {
    name: "Instagram",
    iconKey: "FaInstagramSquare",
    link: "https://www.instagram.com/ankit_rjl",
    color: "#e4405f",
  },
];
