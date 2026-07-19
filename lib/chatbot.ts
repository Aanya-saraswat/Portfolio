import {
  profile,
  about,
  skills,
  projects,
  experience,
  leadership,
  education,
  certifications,
} from "./data";

type Intent = {
  id: string;
  patterns: string[];
  answer: () => string;
};

const list = (items: string[]) => items.join(", ");

export const suggestedPrompts = [
  "What do you work on?",
  "What are your skills?",
  "Tell me about IBM",
  "What projects have you built?",
  "How can I contact you?",
];

const intents: Intent[] = [
  {
    id: "greeting",
    patterns: ["hi", "hello", "hey", "yo", "sup"],
    answer: () =>
      `Hello. I am an assistant trained on ${profile.name}'s background. Ask me about her projects, experience, skills, or how to reach her.`,
  },
  {
    id: "who",
    patterns: ["who are you", "who is aanya", "about you", "introduce", "background", "tell me about yourself"],
    answer: () => about.intro,
  },
  {
    id: "current",
    patterns: ["what do you work on", "currently working", "current role", "doing now", "what are you doing"],
    answer: () =>
      `${profile.name} currently works as a Customer Success Engineering Intern at IBM, focused on enterprise observability, dependency mapping, and operational health across hybrid cloud environments.`,
  },
  {
    id: "ibm",
    patterns: ["ibm", "customer success", "internship"],
    answer: () => {
      const ibm = experience[0];
      return `At IBM (${ibm.period}), she ${ibm.points[0].toLowerCase()} She is also building fluency in Docker, Kubernetes, and Red Hat OpenShift along the way.`;
    },
  },
  {
    id: "skills",
    patterns: ["skills", "tech stack", "technologies", "stack", "languages", "what can you do"],
    answer: () =>
      `Her core stack includes ${list(skills.slice(0, 10))}, along with cloud tools such as Docker, Kubernetes, and AWS, and machine learning tools such as TensorFlow and OpenCV. The full list is on the home page.`,
  },
  {
    id: "projects",
    patterns: ["projects", "built", "portfolio", "work", "shipped"],
    answer: () =>
      `She has built ${projects.length} projects worth exploring: ${projects
        .map((p) => p.title)
        .join(", ")}. Ask about any one of them by name for more detail.`,
  },
  {
    id: "copd",
    patterns: ["copd", "respiratory", "audio", "cnn", "lstm", "ml project", "machine learning project"],
    answer: () => projects.find((p) => p.slug === "copd-prediction-ml")!.summary + " " + projects.find((p) => p.slug === "copd-prediction-ml")!.approach,
  },
  {
    id: "investwallet",
    patterns: ["investwallet", "invest wallet", "investment", "fintech", "wallet"],
    answer: () => projects.find((p) => p.slug === "investwallet")!.summary + " " + projects.find((p) => p.slug === "investwallet")!.approach,
  },
  {
    id: "mockinterview",
    patterns: ["mock interview", "interview app", "interview webapp", "gemini"],
    answer: () => projects.find((p) => p.slug === "mock-interview-webapp")!.summary + " " + projects.find((p) => p.slug === "mock-interview-webapp")!.approach,
  },
  {
    id: "education",
    patterns: ["education", "college", "university", "cgpa", "degree", "thapar", "study", "studying"],
    answer: () =>
      `She is pursuing a ${education.degree} at ${education.school} (${education.period}), currently holding a ${education.cgpa} CGPA.`,
  },
  {
    id: "leadership",
    patterns: ["leadership", "mentor", "iete", "placement representative", "extracurricular"],
    answer: () =>
      `Beyond coursework, she serves as a Web Development Mentor at IETE, where she ${leadership[0].points[0].toLowerCase()} She is also a Student Placement Representative, coordinating between students, recruiters, and the placement cell.`,
  },
  {
    id: "certifications",
    patterns: ["certifications", "certificates", "certified", "aws certification", "hackathon"],
    answer: () =>
      `She holds ${certifications.length} certifications, including ${list(
        certifications.slice(0, 3).map((c) => c.title)
      )}, and was a finalist at the India and Israel Hackathon.`,
  },
  {
    id: "contact",
    patterns: ["contact", "email", "reach", "hire", "linkedin", "github", "connect"],
    answer: () =>
      `The best way to reach her is by email at ${profile.email}. LinkedIn and GitHub links are available in the footer, and the Contact page brings everything together in one place.`,
  },
  {
    id: "availability",
    patterns: ["available", "open to work", "hiring", "job", "internship opportunity", "opportunities"],
    answer: () =>
      `Yes, she is open to new graduate and internship roles in software engineering, backend systems, and applied machine learning. Reach out at ${profile.email}.`,
  },
  {
    id: "location",
    patterns: ["where", "based", "location", "live", "city"],
    answer: () => `She is based in ${profile.location}.`,
  },
  {
    id: "thanks",
    patterns: ["thanks", "thank you", "cool", "nice", "great"],
    answer: () => "You are welcome. Is there anything else you would like to know?",
  },
];

const fallback =
  "I do not have a specific answer for that yet. Try asking about her projects, skills, experience, or how to get in touch. For anything deeper, the Contact page reaches her directly.";

export function getBotResponse(input: string): string {
  const normalized = input.toLowerCase().trim();
  if (!normalized) return fallback;

  let best: { intent: Intent; score: number } | null = null;

  for (const intent of intents) {
    for (const pattern of intent.patterns) {
      if (normalized.includes(pattern)) {
        const score = pattern.length;
        if (!best || score > best.score) {
          best = { intent, score };
        }
      }
    }
  }

  return best ? best.intent.answer() : fallback;
}
