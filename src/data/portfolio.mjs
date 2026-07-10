// Single source of truth for portfolio content.
// Imported by both React components (src/components/*) and the chat tool layer (api/_lib/portfolio-data.js).
// Keep this file framework-agnostic: plain serializable data only, no JSX, no React imports.
// React components map iconKey/imageKey strings to JSX via local lookup tables.

export const ownerName = "Venkata Sai Rahul Unnam";
export const ownerEmail = "venkataunnam05@gmail.com";

export const aboutMeRoles = [
  "Agentic AI Developer",
  "ML Engineer",
  "Senior Systems Engineer",
  "Data Engineer",
];

export const aboutMeStatusTagline = "Building agentic AI in production";

export const aboutMeBio =
  "I am an AI Software Engineer and Data Scientist with 4 years of enterprise experience building production-grade applications and LLM-powered systems. I Build agentic AI platforms in production, from autonomous execution frameworks and state-aware enterprise graph agents to scalable RAG and serverless ETL/ELT pipelines. Backed by a strong foundation in backend engineering, MLOps, and shipping apps end to end on AWS, Azure and GCP. I work AI-native to move fast while maintaining a rigorous bar for algorithmic optimization, scalability, and DevSecOps reliability across cloud and enterprise environments.";

export const resumeUrl = "/assets/Venkata_Resume.pdf";

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
    role: "Research Assistant",
    company:
      "University of North Texas - Data Driven Decisions Lab | Denton, TX",
    dates: "May 2025 - May 2026",
    // status: "Current",
    bullets: [
      "Authored a first-author IEEE research paper on 'Scientific Machine Learning for Analyzing Air Quality of North Texas' by using Physics-Informed Neural Network (PINN) and embedding partial differential equations (PDEs) directly into the custom deep learning loss function, mitigating gradient explosion and increasing long-term forecast stability.",
      "Developed a robust spatial-temporal data pipeline to process multi-year, high-dimensional environmental grid data by conducting extensive feature engineering, normalization, and dimensionality reduction on unstructured spatial-grid datasets for sequence modeling.",
      "Evaluated and benchmarked deep learning architectures (LSTM, PINN) against classical statistical baselines (SARIMAX) and optimized hyperparameters to achieve an 18% reduction in Root Mean Squared Error (RMSE), significantly outperforming traditional time-series models in forecasting accuracy.",
    ],
  },
  {
    role: "Senior Systems Engineer",
    company: "Infosys Ltd. | Delhi, India",
    dates: "Dec 2020 – Jul 2024",
    bullets: [
      "Architected serverless ETL/ELT workflows using AWS Lambda and Airflow to ingest and orchestrate multi-source enterprise data streams, resulting in reduced data latency by 40% and enabling real-time KPI tracking for executive-level Power BI dashboards.",
      "Developed an end-to-end predictive modeling workflow using XGBoost and LSTM architectures for industrial underflow density forecasting and integrated Optuna, GridSearchCV for automated hyperparameter tuning to achieve 1.8% MAPE (vs Random Forest 3.4%, ANN 7.3%) while reducing training time by 40%.",
      "Spearheaded the migration of legacy on-premises data to Amazon Redshift, implementing dimensional modeling (Star Schema) that accelerated query execution time by ~3x and empowered the BI team to run complex analytics reports without timeouts.",
      "Engineered a scalable NLP pipeline integrating OpenAI API to parse high-volume (30GB+) unstructured log data into structured metrics for trend analysis, guiding client resource allocation decisions and eliminating 6 hours of manual review per week.",
      "Designed custom search and observability configurations using the ELK Stack (Elasticsearch, Logstash, Kibana) to parse real-time network telemetry, uncovering operational bottlenecks and resulting in a 30% reduction in software release cycle times.",
      "Engineered automated data quality anomaly checks (Python) within CI/CD pipelines, reducing downstream BI reporting errors by 24% and ensuring strict data governance for client regulatory compliance audits.",
    ],
    // projects: [
    //   {
    //     title: "SVN to GitHub Repository Migration",
    //     description:
    //       "Migrated an extensive SVN repository to GitHub, improving developer collaboration and modernizing version control workflows.",
    //   },
    //   {
    //     title: "Build Process Migration to GitHub Actions",
    //     description:
    //       "Moved 50+ build processes from Jenkins to GitHub Actions, improving automation, reliability, and deployment speed.",
    //   },
    //   {
    //     title: "Database Update Automation",
    //     description:
    //       "Built PowerShell and console tooling to automate database updates, reducing manual intervention by 90%.",
    //   },
    //   {
    //     title: "Motion Detection Integration",
    //     description:
    //       "Integrated motion detection into KeyTrak Guardian using Accord.Net to support enhanced security workflows.",
    //   },
    // ],
  },
];

// iconKey values map to react-icons exports via the lookup table in src/components/Skill.js.
// Backend tools ignore iconKey entirely.
export const skillsData = [
  {
    name: "Python",
    iconKey: "FaPython",
    category: "AI & Data",
    description:
      "Core language for AI agent development, LLM-powered apps, data workflows, model experimentation, and backend services.",
  },
  {
    name: "FastAPI",
    iconKey: "SiFastapi",
    category: "Backend",
    description:
      "Used to build Python API services for AI products, model-backed workflows, and reliable backend interfaces.",
  },
  {
    name: "C#",
    iconKey: "TbBrandCSharp",
    category: "Backend",
    description:
      "Developed enterprise-grade applications at Reynolds & Reynolds using C# and .NET, including 30+ RESTful APIs and full-stack systems used by 5,000+ users.",
  },
  {
    name: "React / React Native",
    iconKey: "FaReact",
    category: "Frontend",
    description:
      "Built dynamic web and mobile experiences across AI products, enterprise applications, collaborative tools, and real-time messaging.",
  },
  {
    name: "Next.js",
    iconKey: "SiNextdotjs",
    category: "Frontend",
    description:
      "Used for modern frontend development in current AI product work, pairing a Next.js interface with Python-backed services.",
  },
  {
    name: "TypeScript",
    iconKey: "SiTypescript",
    category: "Frontend",
    description:
      "Applied typed JavaScript across modern React, Firebase, and Electron projects to improve maintainability and reduce runtime bugs.",
  },
  {
    name: "PostgreSQL",
    iconKey: "BiLogoPostgresql",
    category: "Backend",
    description:
      "Designed and optimized relational data models for scalable applications, efficient queries, and secure data handling.",
  },
  {
    name: "ElectronJs",
    iconKey: "SiElectron",
    category: "Frontend",
    description:
      "Delivered cross-platform desktop apps (e.g., KeyTrak system) by combining Electron.js with C#/.NET and React.js for enterprise clients.",
  },
  {
    name: "Capacitor.js",
    iconKey: "SiCapacitor",
    category: "Frontend",
    description:
      "Used to package web application experiences into mobile apps while sharing frontend code across platforms.",
  },
  {
    name: "AWS",
    iconKey: "FaAws",
    category: "Cloud & Delivery",
    description:
      "Worked with AWS services including EC2, S3, Lambda, Amplify, and CloudWatch for deployment, serverless workflows, and monitoring.",
  },
  {
    name: "Firebase",
    iconKey: "SiFirebase",
    category: "Cloud & Delivery",
    description:
      "Used Firebase and Firestore for real-time collaboration, authentication, hosting, and rapid deployment of AI-enabled products.",
  },
  {
    name: "Vercel",
    iconKey: "SiVercel",
    category: "Cloud & Delivery",
    description:
      "Used Vercel for fast frontend deployment workflows and modern product iteration across React-based applications.",
  },
  {
    name: "GCP",
    iconKey: "SiGooglecloud",
    category: "Cloud & Delivery",
    description:
      "Familiar with Google Cloud production ML concepts and cloud deployment patterns for AI-focused systems.",
  },
  {
    name: "GitHub",
    iconKey: "FaGithub",
    category: "Cloud & Delivery",
    description:
      "Led SVN-to-Git migration at Reynolds & Reynolds and automated CI/CD with GitHub Actions. Also used across all personal projects for version control and collaboration.",
  },
  {
    name: "Jenkins",
    iconKey: "FaJenkins",
    category: "Cloud & Delivery",
    description:
      "Created and maintained CI/CD pipelines, and migrated 50+ Jenkins pipelines to GitHub Actions, reducing deployment time by 30%.",
  },
  {
    name: "Docker",
    iconKey: "FaDocker",
    category: "Cloud & Delivery",
    description:
      "Containerized ML models and full-stack apps for consistent deployment; used in MLOps pipelines with AWS EC2 and FastAPI.",
  },
  {
    name: "Terraform",
    iconKey: "SiTerraform",
    category: "Cloud & Delivery",
    description:
      "Used infrastructure-as-code to provision and manage cloud resources reproducibly across environments.",
  },
  {
    name: "Supabase",
    iconKey: "SiSupabase",
    category: "Backend",
    description:
      "Used for database-backed product development, authentication-friendly workflows, and fast backend iteration.",
  },
  {
    name: "Redis",
    iconKey: "SiRedis",
    category: "Backend",
    description:
      "Used for caching, background job queues, and low-latency data access in production backend services.",
  },
  {
    name: "Stripe",
    iconKey: "SiStripe",
    category: "APIs & Integrations",
    description:
      "Built Stripe payments with a webhook-driven ledger to power billing across the parent enrollment platform.",
  },
  {
    name: "HubSpot CRM",
    iconKey: "SiHubspot",
    category: "APIs & Integrations",
    description:
      "Engineered a bidirectional HubSpot CRM sync engine to keep platform and CRM records consistent in real time.",
  },
  {
    name: "Slack API",
    iconKey: "SiSlack",
    category: "APIs & Integrations",
    description:
      "Built a two-way Slack relay for staff messaging, bridging platform events and human conversations.",
  },
  {
    name: "Cursor + Claude Code",
    iconKey: "FiCode",
    category: "AI-Assisted Development",
    description:
      "Used as part of an AI-assisted development workflow for faster implementation, debugging, refactoring, and agentic coding.",
  },
  {
    name: "MCP + Agent Skills",
    iconKey: "FiCode",
    category: "AI-Assisted Development",
    description:
      "Built and used Model Context Protocol servers, agent skills, and multi-agent workflows for spec-driven, AI-native development.",
  },
  {
    name: "Streamlit",
    iconKey: "SiStreamlit",
    category: "AI & Data",
    description:
      "Built and deployed AI prototypes like AI Image Assistant on Streamlit Cloud for interactive data science and vision-language apps.",
  },
  {
    name: "LangChain",
    iconKey: "SiLangchain",
    category: "AI & Data",
    description:
      "Used in RAG-based chatbots with ChromaDB and Hugging Face to enable document-aware, persistent LLM responses.",
  },
  {
    name: "LangGraph",
    iconKey: "SiLangchain",
    category: "AI & Data",
    description:
      "Applied graph-based agent workflow patterns for more reliable multi-step LLM orchestration and stateful AI systems.",
  },
  {
    name: "Pydantic AI",
    iconKey: "SiPydantic",
    category: "AI & Data",
    description:
      "Built structured AI agent workflows with validation, deterministic orchestration, quality gates, and error-driven self-correction.",
  },
  {
    name: "OpenAI API",
    iconKey: "SiOpenai",
    category: "AI & Data",
    description:
      "Integrated OpenAI models into NLP workflows for text generation, summarization, and study-assistant features.",
  },
  {
    name: "Anthropic Claude API",
    iconKey: "SiAnthropic",
    category: "AI & Data",
    description:
      "Integrated Claude models into production agentic systems for content generation, orchestration, and reasoning-heavy workflows.",
  },
  {
    name: "Google Gemini API",
    iconKey: "SiGooglegemini",
    category: "AI & Data",
    description:
      "Developed apps like SmartPrep AI and AI Image Assistant using Gemini 1.5 Flash for text generation and vision-language tasks.",
  },
  {
    name: "Amazon Bedrock",
    iconKey: "FaAws",
    category: "AI & Data",
    description:
      "Used Amazon Bedrock to access and orchestrate foundation models within AWS-hosted AI workflows.",
  },
  {
    name: "Transformer",
    iconKey: "SiHuggingface",
    category: "AI & Data",
    description:
      "Implemented Hugging Face Transformers in RAG pipelines and chatbots for embeddings, inference optimization, and fine-tuning.",
  },
  {
    name: "NumPy",
    iconKey: "SiNumpy",
    category: "AI & Data",
    description:
      "Used extensively for scientific computing, feature engineering, and preprocessing in ML projects.",
  },
  {
    name: "Pandas",
    iconKey: "SiPandas",
    category: "AI & Data",
    description:
      "Applied to clean, transform, and analyze datasets for ML pipelines and predictive modeling.",
  },
  {
    name: "SciPy",
    iconKey: "SiScipy",
    category: "AI & Data",
    description:
      "Leveraged for advanced math functions and algorithms supporting ML model experimentation.",
  },
  {
    name: "TensorFlow",
    iconKey: "SiTensorflow",
    category: "AI & Data",
    description:
      "Trained and deployed deep learning models (vision, NLP) in ML coursework and projects like predictive modeling.",
  },
  {
    name: "Jupyter Notebook",
    iconKey: "SiJupyter",
    category: "AI & Data",
    description:
      "Used extensively for prototyping machine learning models, data preprocessing, and visualizing results in an interactive workflow.",
  },
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
    description:
      "A chatbot with a custom knowledge base using LangChain and RAG.",
  },
  {
    title: "Housing Price Predictor",
    href: "https://github.com/ankitrijal2054/House_Price_Prediction",
    imageKey: "housing",
    alt: "Housing Price Prediction",
    category: "Machine Learning",
    status: "Code",
    tags: ["ML", "Prediction", "Data"],
    description:
      "A machine learning model predicting house prices based on features.",
  },
];

export const educationData = [
  {
    degree: "Master's in Data Science",
    school: "University of North Texas | Denton, TX",
    year: "May 2026",
    status: "Completed",
  },
  // {
  //   degree: "Bache",
  //   school: "University of the Cumberlands",
  //   year: "2025",
  //   status: "Completed",
  // },
  {
    degree: "Bachelor's in Mechanical Engineering",
    school: "Vellore Institute of Technology | Vellore, India",
    year: "May 2020",
    status: "Completed",
  },
];

export const certificationsData = [
  {
    title: "DevOps Foundation",
    provider: "DevOps Institute",
    link: "https://drive.google.com/file/d/1GJ84baDAhmd53wWAqsx5gkGJHRRDZx2B/view?usp=drive_link",
  },
  {
    title: "ADVANCED CERTIFICATION IN DATA SCIENCE & AI ",
    provider: "Indian Institue of Technology Madras",
    link: "https://drive.google.com/file/d/1bdmISFPxZCc0JLgLusWYaKTD6suJAxhK/view?usp=drive_link",
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
    link: "https://github.com/uvsrahul1234",
    color: "#333",
  },
  {
    name: "LinkedIn",
    iconKey: "FaLinkedin",
    link: "https://www.linkedin.com/in/rahul-unnam/",
    color: "#0077b5",
  },
  // {
  //   name: "X/Twitter",
  //   iconKey: "FaXTwitter",
  //   link: "https://x.com/ankit_rijal2054",
  //   color: "#1da1f2",
  // },
  // {
  //   name: "Instagram",
  //   iconKey: "FaInstagramSquare",
  //   link: "https://www.instagram.com/ankit_rjl",
  //   color: "#e4405f",
  // },
];
