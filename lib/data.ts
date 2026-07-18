export const profile = {
  name: "Aanya Saraswat",
  role: "Electronics & Communication Engineer → Software Engineer",
  location: "New Delhi, India",
  email: "aanya.10june@gmail.com",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/",
  tagline:
    "I build systems that hold up under real conditions — trained on circuits, shipped in code.",
  heroSub:
    "B.E. in Electronics & Communication Engineering at Thapar Institute, currently interning on enterprise observability at IBM. I design and ship full-stack products, machine learning pipelines, and the occasional very stubborn API.",
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
      "A hybrid CNN-LSTM-GRU model that classifies respiratory disease from raw audio — turning a stethoscope recording into a screening signal.",
    stack: ["Python", "TensorFlow", "Keras", "Librosa", "NumPy"],
    highlights: [
      "Built a hybrid CNN-LSTM-GRU architecture to classify respiratory disease from audio signals, combining convolutional feature extraction with sequential modeling.",
      "Designed an audio preprocessing pipeline in Librosa and NumPy to extract MFCCs and spectral features from raw recordings.",
      "Applied Adamax optimization, EarlyStopping, and ModelCheckpoint to control overfitting and stabilize training across runs.",
    ],
    problem:
      "Chronic Obstructive Pulmonary Disease is under-diagnosed largely because screening requires specialist equipment and time. The goal was to see how far a model could get toward flagging at-risk breathing patterns using nothing but an audio recording.",
    approach:
      "Raw respiratory audio is cleaned and converted into MFCC and spectral feature representations, then passed through a hybrid CNN-LSTM-GRU network: convolutional layers pick up local texture in the spectrogram, while the recurrent layers track how the signal evolves across a breath cycle.",
    outcome:
      "The pipeline reliably separates disease classes on held-out recordings, and the training setup (Adamax + EarlyStopping + ModelCheckpoint) keeps the model from overfitting to a small clinical dataset — a common failure mode in medical audio ML.",
    github: "https://github.com/",
    demo: null,
  },
  {
    slug: "investwallet",
    title: "InvestWallet",
    year: "2025",
    summary:
      "A savings-to-investment platform that routes simulated cashback into a paper-trading portfolio — investing made into a habit, not a decision.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth", "Firebase"],
    highlights: [
      "Built a smart savings-to-investment platform with simulated cashback routing and paper trading.",
      "Implemented secure onboarding, wallet tracking, and transaction history with configurable allocation limits.",
      "Created dashboards surfacing technical indicators, backtesting reports, and portfolio analytics.",
    ],
    problem:
      "Most people who want to start investing are blocked by decision fatigue, not lack of money. InvestWallet tests a different entry point: instead of asking users to decide what to invest, it automatically routes small simulated cashback into a portfolio they can watch grow.",
    approach:
      "Next.js and TypeScript power the frontend and API routes, with Prisma over PostgreSQL modeling wallets, allocations, and transaction history. NextAuth handles secure onboarding, and Firebase supports real-time state for portfolio updates. Allocation limits and rules are enforced server-side to keep the simulated trading logic consistent.",
    outcome:
      "The result is a dashboard that reads like a real brokerage — technical indicators, backtesting reports, and portfolio analytics — built on a data model designed to extend cleanly to real transaction routing.",
    github: "https://github.com/",
    demo: null,
  },
  {
    slug: "mock-interview-webapp",
    title: "Mock Interview WebApp",
    year: "2025",
    summary:
      "Upload a resume, get role-specific interview questions, and walk away with an AI-scored feedback report and an improvement roadmap.",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Gemini", "Firebase"],
    highlights: [
      "Built a personalized interview preparation platform that analyzes uploaded resumes and generates role-specific questions.",
      "Implemented answer submission, AI-based scoring, and feedback reports with concrete improvement roadmaps.",
      "Designed a modular workflow with authentication, interview history, and secure storage for resumes and responses.",
    ],
    problem:
      "Generic interview question banks don't reflect the candidate's actual background. This app closes that gap by generating questions from the resume itself, then giving feedback specific enough to act on.",
    approach:
      "A FastAPI backend parses uploaded resumes and calls Gemini to generate role-specific questions and score submitted answers. Next.js handles the interview flow and history views, PostgreSQL stores structured interview data, and Firebase secures resume and response storage end-to-end.",
    outcome:
      "Candidates get a full loop — tailored questions, an AI-scored transcript, and a written roadmap of what to improve — instead of a static list of 'common interview questions.'",
    github: "https://github.com/",
    demo: null,
  },
];

export const experience = [
  {
    role: "Customer Success Engineering Intern",
    org: "IBM",
    location: "Gurugram, India",
    period: "Jun 2026 – Present",
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
    period: "Mar 2025 – Sep 2025",
    points: [
      "Conducted market research and competitor analysis for Auraflo's smart yoga mat.",
      "Assisted with digital campaigns, social media, and content creation to improve brand visibility.",
      "Supported promotional material preparation and cross-team coordination.",
    ],
  },
];

export const leadership = [
  {
    role: "Web Development Mentor",
    org: "IETE",
    period: "May 2024 – May 2025",
    points: [
      "Led 10+ technical events for 500+ students, mentoring on web development, project building, and problem-solving.",
    ],
  },
  {
    role: "Student Placement Representative",
    org: "Thapar Institute of Engineering and Technology",
    period: "Aug 2025 – Present",
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
  period: "Aug 2023 – Aug 2027",
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
  { title: "Finalist, India–Israel Hackathon", date: "Sep 2025" },
];

export const about = {
  intro:
    "I started in electronics because I wanted to understand systems from the ground up — signal, circuit, silicon. Somewhere in my second year at Thapar, I realized the systems I actually wanted to build lived a layer up: in the software running on top of all that hardware.",
  body: [
    "That background still shapes how I write software. I care about what's happening underneath the framework — how a request actually moves through a system, why a model converges the way it does, what happens when the happy path breaks. It's part of why my projects range from a CNN-LSTM-GRU model classifying respiratory audio to a full-stack investment platform with its own backtesting engine — I like being useful at every layer of the stack.",
    "At IBM, I've spent this internship inside enterprise observability: watching how large hybrid-cloud systems report their own health, and what 'reliable' actually means at that scale. It's given me a sharper sense of what production-grade software is expected to survive.",
    "Outside of internships and projects, I mentor other students through IETE's web development program and represent my batch to recruiters as a Student Placement Representative — both of which come down to the same thing: translating something technical into something someone else can act on.",
  ],
  closing:
    "I'm looking for roles where I can keep working across the stack — backend systems, applied ML, and the occasional stubborn API — on a team that cares as much about the underlying reliability as the feature on top.",
};
