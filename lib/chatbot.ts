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
      `Hi! I'm a quick assistant trained on ${profile.name}'s resume. Ask me about her projects, experience, skills, or how to reach her.`,
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
      `Right now ${profile.name} is a Customer Success Engineering Intern at IBM, working with IBM Concert on enterprise observability, dependency mapping, and hybrid-cloud operational health.`,
  },
  {
    id: "ibm",
    patterns: ["ibm", "customer success", "internship"],
    answer: () => {
      const ibm = experience[0];
      return `At IBM (${ibm.period}), she's ${ibm.points[0].toLowerCase()} She's also building fluency in Docker, Kubernetes, and Red Hat OpenShift along the way.`;
    },
  },
  {
    id: "skills",
    patterns: ["skills", "tech stack", "technologies", "stack", "languages", "what can you do"],
    answer: () =>
      `Her core stack spans ${list(skills.slice(0, 10))}, plus cloud tools like Docker, Kubernetes, and AWS, and ML tooling like TensorFlow and OpenCV. Full list is on the home page ticker.`,
  },
  {
    id: "projects",
    patterns: ["projects", "built", "portfolio", "work", "shipped"],
    answer: () =>
      `She's built ${projects.length} projects worth a look: ${projects
        .map((p) => p.title)
        .join(", ")}. Ask me about any one of them by name.`,
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
      `She's pursuing a ${education.degree} at ${education.school} (${education.period}), currently holding a ${education.cgpa} CGPA.`,
  },
  {
    id: "leadership",
    patterns: ["leadership", "mentor", "iete", "placement representative", "extracurricular"],
    answer: () =>
      `Beyond coursework, she's a Web Development Mentor at IETE (${leadership[0].points[0].toLowerCase()}) and a Student Placement Representative, coordinating between students, recruiters, and the placement cell.`,
  },
  {
    id: "certifications",
    patterns: ["certifications", "certificates", "certified", "aws certification", "hackathon"],
    answer: () =>
      `She holds ${certifications.length} certifications, including ${list(
        certifications.slice(0, 3).map((c) => c.title)
      )}, and was a finalist at the India–Israel Hackathon.`,
  },
  {
    id: "contact",
    patterns: ["contact", "email", "reach", "hire", "linkedin", "github", "connect"],
    answer: () =>
      `Best way to reach her is email: ${profile.email}. You'll also find LinkedIn and GitHub links in the footer, or head to the Contact page for everything in one place.`,
  },
  {
    id: "availability",
    patterns: ["available", "open to work", "hiring", "job", "internship opportunity", "opportunities"],
    answer: () =>
      `Yes — she's open to new-grad and internship roles in software engineering, backend systems, and applied ML. Reach out at ${profile.email}.`,
  },
  {
    id: "location",
    patterns: ["where", "based", "location", "live", "city"],
    answer: () => `She's based in ${profile.location}.`,
  },
  {
    id: "thanks",
    patterns: ["thanks", "thank you", "cool", "nice", "great"],
    answer: () => "Anytime! Anything else you'd like to know?",
  },
];

const fallback =
  "I don't have a specific answer for that yet — try asking about her projects, skills, experience, or how to get in touch. For anything deeper, the Contact page reaches her directly.";

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
