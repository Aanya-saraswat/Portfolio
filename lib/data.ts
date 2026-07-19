export const profile = {
  name: "Aanya Saraswat",
  role: "Electronics and Communication Engineer turned Software Engineer",
  location: "New Delhi, India",
  email: "aanya.10june@gmail.com",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/",
  tagline: "I engineer software that performs when it matters most.",
  taglineAccent: "Trained on circuits. Shipped in code.",
  roles: [
    "Software Engineer",
    "ECE Engineer",
    "Machine Learning Builder",
    "Full Stack Developer",
  ],
  heroSub:
    "B.E. in Electronics and Communication Engineering at Thapar Institute, currently interning in enterprise observability at IBM. I design and ship full stack products, machine learning pipelines, and dependable backend systems.",
  robotGreeting:
    "Welcome to Aanya's portfolio. She is an electronics and communication engineer with equally strong command of software and machine learning. Ask me anything about her work.",
};

export const stats = [
  { label: "CGPA", value: "9.01" },
  { label: "LeetCode Solved", value: "250+" },
  { label: "Shipped Projects", value: "3" },
  { label: "Students Mentored", value: "500+" },
];

export const skills = [
  "Python", "JavaScript", "TypeScript", "SQL", "C++",
  "React.js", "Next.js", "Tailwind CSS", "Node.js", "Express.js",
  "Flask", "FastAPI", "REST APIs", "JWT Auth",
  "PostgreSQL", "MySQL", "MongoDB", "Firebase", "Prisma",
  "Docker", "Kubernetes", "Red Hat OpenShift", "AWS S3", "GitHub Actions",
  "TensorFlow", "Keras", "OpenCV", "Pandas", "NumPy",
];

export const projects = [
  {
    slug: "copd-prediction-ml",
    title: "COPD Prediction using ML",
    year: "2025",
    summary:
      "A hybrid CNN, LSTM, and GRU model that classifies respiratory disease from raw audio, turning a stethoscope recording into a reliable screening signal.",
    stack: ["Python", "TensorFlow", "Keras", "Librosa", "NumPy"],
    highlights: [
      "Built a hybrid CNN, LSTM, and GRU architecture to classify respiratory disease from audio signals, combining convolutional feature extraction with sequential modeling.",
      "Designed an audio preprocessing pipeline in Librosa and NumPy to extract MFCCs and spectral features from raw recordings.",
      "Applied Adamax optimization, EarlyStopping, and ModelCheckpoint to control overfitting and stabilize training across runs.",
    ],
    problem:
      "Chronic Obstructive Pulmonary Disease remains widely underdiagnosed because screening typically requires specialist equipment and time. This project set out to measure how far a model could get toward flagging risky breathing patterns using nothing more than an audio recording.",
    approach:
      "Raw respiratory audio is cleaned and converted into MFCC and spectral feature representations, then passed through a hybrid CNN, LSTM, and GRU network. Convolutional layers capture local texture in the spectrogram, while the recurrent layers track how the signal evolves across a breath cycle.",
    outcome:
      "The pipeline reliably separates disease classes on unseen recordings, and the training setup of Adamax, EarlyStopping, and ModelCheckpoint keeps the model from overfitting to a small clinical dataset, a common failure point in medical audio machine learning.",
    github: "https://github.com/",
    demo: null,
  },
  {
    slug: "investwallet",
    title: "InvestWallet",
    year: "2025",
    summary:
      "A savings and investment platform that routes simulated cashback into a paper trading portfolio, turning investing into a habit rather than a decision.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth", "Firebase"],
    highlights: [
      "Built an automated savings and investment platform with simulated cashback routing and paper trading.",
      "Implemented secure onboarding, wallet tracking, and transaction history with configurable allocation limits.",
      "Created dashboards surfacing technical indicators, backtesting reports, and portfolio analytics.",
    ],
    problem:
      "Most people who want to start investing are held back by decision fatigue rather than a lack of money. InvestWallet removes that barrier by automatically routing small simulated cashback into a portfolio users can watch grow, without asking them to decide what to invest in.",
    approach:
      "Next.js and TypeScript power the frontend and API routes, with Prisma over PostgreSQL modeling wallets, allocations, and transaction history. NextAuth handles secure onboarding, and Firebase supports live state updates for the portfolio. Allocation limits and trading rules are enforced on the backend to keep the simulated logic consistent.",
    outcome:
      "The result is a dashboard that reads like a real brokerage, complete with technical indicators, backtesting reports, and portfolio analytics, built on a data model designed to extend cleanly into real transaction routing.",
    github: "https://github.com/",
    demo: null,
  },
  {
    slug: "mock-interview-webapp",
    title: "Mock Interview WebApp",
    year: "2025",
    summary:
      "Upload a resume, receive interview questions tailored to it, and walk away with an AI generated feedback report and a clear improvement roadmap.",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Gemini", "Firebase"],
    highlights: [
      "Built a personalized interview preparation platform that analyzes uploaded resumes and generates tailored questions.",
      "Implemented answer submission, AI powered scoring, and feedback reports with concrete improvement roadmaps.",
      "Designed a modular workflow with authentication, interview history, and secure storage for resumes and responses.",
    ],
    problem:
      "Generic interview question banks rarely reflect a candidate's actual background. This app closes that gap by generating questions directly from the resume, then delivering feedback specific enough to act on.",
    approach:
      "A FastAPI backend parses uploaded resumes and calls Gemini to generate tailored questions and score submitted answers. Next.js handles the interview flow and history views, PostgreSQL stores structured interview data, and Firebase secures resume and response storage from start to finish.",
    outcome:
      "Candidates get a complete loop: tailored questions, an AI scored transcript, and a written roadmap of what to improve, in place of a static list of common interview questions.",
    github: "https://github.com/",
    demo: null,
  },
];

export const experience = [
  {
    role: "Customer Success Engineering Intern",
    org: "IBM",
    location: "Gurugram, India",
    period: "Jun 2026 to Present",
    points: [
      "Worked with IBM Concert to analyze enterprise application observability, dependency mapping, and operational health across hybrid cloud environments.",
      "Learned Docker, Kubernetes, and Red Hat OpenShift fundamentals for containerized application deployment and orchestration.",
      "Studied enterprise application modernization, vulnerability management, and deployment practices through IBM Concert use cases and technical demonstrations.",
    ],
  },
  {
    role: "Marketing Intern",
    org: "Auraflo",
    location: "Patiala, India",
    period: "Mar 2025 to Sep 2025",
    points: [
      "Conducted market research and competitor analysis for Auraflo's smart yoga mat.",
      "Assisted with digital campaigns, social media, and content creation to improve brand visibility.",
      "Supported promotional material preparation and coordination across teams.",
    ],
  },
];

export const leadership = [
  {
    role: "Web Development Mentor",
    org: "IETE",
    period: "May 2024 to May 2025",
    points: [
      "Led 10+ technical events for 500+ students, mentoring on web development, project building, and problem solving.",
    ],
  },
  {
    role: "Student Placement Representative",
    org: "Thapar Institute of Engineering and Technology",
    period: "Aug 2025 to Present",
    points: [
      "Coordinated communication between students, recruiters, and the placement cell.",
      "Supported placement drives and candidate tracking, helping ensure smooth execution of recruitment activities.",
    ],
  },
];

export const education = {
  school: "Thapar Institute of Engineering and Technology",
  location: "Patiala, Punjab",
  degree: "B.E. in Electronics and Communication Engineering",
  period: "Aug 2023 to Aug 2027",
  cgpa: "9.01",
};

export const certifications = [
  {
    title: "Concert: Technical Overview",
    issuer: "IBM Training",
    date: "Jun 18, 2026",
    image: "/certificates/ibm-concert.png",
    file: "/certificates/ibm-concert.pdf",
  },
  {
    title: "Introduction to Containers",
    issuer: "AWS Training & Certification",
    date: "Jul 06, 2026",
    image: "/certificates/aws-containers.png",
    file: "/certificates/aws-containers.pdf",
  },
  {
    title: "Introduction to Serverless Development",
    issuer: "AWS Training & Certification",
    date: "Jul 06, 2026",
    image: "/certificates/aws-serverless.png",
    file: "/certificates/aws-serverless.pdf",
  },
  {
    title: "Advanced Software Engineering Job Simulation",
    issuer: "Forage × Walmart Global Tech",
    date: "Jul 23, 2025",
    image: "/certificates/forage.png",
    file: "/certificates/forage.pdf",
  },
  {
    title: "Sharpening Your Business Acumen",
    issuer: "Harvard Business Impact × IBM",
    date: "Jun 2026",
    image: "/certificates/hbi.png",
    file: "/certificates/hbi.pdf",
  },
  {
    title: "Marketing Internship Completion",
    issuer: "Auraflo (Thapar VentureLab)",
    date: "Sep 17, 2025",
    image: "/certificates/auraflo.png",
    file: "/certificates/auraflo.pdf",
  },
];

export const recognitions = [
  { title: "Finalist, India and Israel Hackathon", date: "Sep 2025" },
];

export const about = {
  intro:
    "I started in electronics because I wanted to understand systems from the ground up: signal, circuit, silicon. By my second year at Thapar, I realized the systems I actually wanted to build lived a layer up, in the software running on top of all that hardware.",
  body: [
    "That foundation still shapes how I write software today. I care about what happens underneath the framework: how a request actually moves through a system, why a model converges the way it does, and what happens when the happy path breaks. It is why my projects range from a CNN, LSTM, and GRU model classifying respiratory audio to a full stack investment platform with its own backtesting engine. I want to be useful at every layer of the stack.",
    "At IBM, this internship has placed me inside enterprise observability, watching how large hybrid cloud systems report their own health and what reliability actually means at that scale. It has sharpened my sense of what production ready software is expected to survive.",
    "Beyond internships and projects, I mentor other students through IETE's web development program and represent my batch to recruiters as a Student Placement Representative. Both roles come down to the same skill: translating something technical into something someone else can act on.",
  ],
  closing:
    "I am looking for roles where I can keep working across the stack, from backend systems to applied machine learning, on a team that values reliability as much as the feature built on top of it.",
};
