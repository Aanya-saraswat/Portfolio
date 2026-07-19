"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  profile,
  about,
  skills,
  projects,
  experience,
  education,
  certifications,
} from "@/lib/data";

type Line = { type: "input" | "output" | "boot"; text: string };

const BOOT_SEQUENCE = [
  "booting aanya_os v2.6.1 ...",
  "loading resume.bin ... done",
  "mounting /projects ... done",
  "mounting /skills ... done",
  "connection secure. welcome.",
  "",
  "type 'help' to see available commands.",
];

export default function Terminal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [booted, setBooted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!open) {
      setBooted(false);
      setLines([]);
      return;
    }
    let i = 0;
    setLines([]);
    const interval = setInterval(() => {
      if (i >= BOOT_SEQUENCE.length) {
        clearInterval(interval);
        setBooted(true);
        setTimeout(() => inputRef.current?.focus(), 10);
        return;
      }
      setLines((prev) => [...prev, { type: "boot", text: BOOT_SEQUENCE[i] }]);
      i++;
    }, 160);
    return () => clearInterval(interval);
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  function run(raw: string) {
    const cmd = raw.trim().toLowerCase();
    const push = (text: string) => setLines((p) => [...p, { type: "output", text }]);

    if (!cmd) return;

    if (cmd === "help") {
      push("available commands:");
      push("  whoami          basic identity");
      push("  about           short background");
      push("  skills          technical stack");
      push("  projects        list of projects");
      push("  project <name>  details on one project");
      push("  experience      work history");
      push("  education       degree and school");
      push("  certifications  list of certifications");
      push("  contact         how to reach her");
      push("  resume          open the résumé pdf");
      push("  sudo hire aanya ...try it");
      push("  clear           clear the screen");
      push("  exit            close this terminal");
    } else if (cmd === "whoami") {
      push(`${profile.name}`);
      push(profile.role);
      push(profile.location);
    } else if (cmd === "about") {
      push(about.intro);
    } else if (cmd === "skills") {
      push(skills.join(", "));
    } else if (cmd === "projects") {
      projects.forEach((p) => push(`${p.slug.padEnd(24)} ${p.title}`));
      push("");
      push("type 'project <name>' for details, e.g. project investwallet");
    } else if (cmd.startsWith("project ")) {
      const slug = cmd.replace("project ", "").trim();
      const match = projects.find(
        (p) => p.slug === slug || p.slug.includes(slug) || p.title.toLowerCase().includes(slug)
      );
      if (match) {
        push(match.title);
        push(match.summary);
        push(`stack: ${match.stack.join(", ")}`);
      } else {
        push(`no project matching "${slug}". type 'projects' to see all.`);
      }
    } else if (cmd === "experience") {
      experience.forEach((e) => push(`${e.period.padEnd(22)} ${e.role} at ${e.org}`));
    } else if (cmd === "education") {
      push(`${education.degree}`);
      push(`${education.school}, ${education.location}`);
      push(`${education.period} · CGPA ${education.cgpa}`);
    } else if (cmd === "certifications") {
      certifications.forEach((c) => push(`${c.date.padEnd(14)} ${c.title} (${c.issuer})`));
    } else if (cmd === "contact") {
      push(`email: ${profile.email}`);
      push(`github: ${profile.github}`);
      push(`linkedin: ${profile.linkedin}`);
    } else if (cmd === "resume") {
      push("opening resume.pdf ...");
      window.open("/resume.pdf", "_blank");
    } else if (cmd === "sudo hire aanya") {
      push("permission granted.");
      push("redirecting to /contact ...");
      setTimeout(() => {
        router.push("/contact");
        onClose();
      }, 900);
    } else if (cmd === "clear") {
      setLines([]);
      return;
    } else if (cmd === "exit") {
      onClose();
      return;
    } else {
      push(`command not found: ${cmd}`);
      push("type 'help' for a list of commands.");
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLines((p) => [...p, { type: "input", text: input }]);
    run(input);
    setInput("");
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90] bg-black/95" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-scanlines pointer-events-none absolute inset-0" />

      <div className="relative mx-auto flex h-full max-w-3xl flex-col p-6 font-mono text-sm text-trace">
        <div className="mb-3 flex items-center justify-between border-b border-trace/20 pb-3">
          <span className="text-trace/70">aanya@portfolio: ~</span>
          <button
            onClick={onClose}
            className="rounded border border-trace/30 px-2 py-1 text-xs text-trace/70 hover:border-trace hover:text-trace"
          >
            close [esc]
          </button>
        </div>

        <div className="flex-1 overflow-y-auto pb-4">
          {lines.map((line, i) => (
            <div key={i} className={line.type === "input" ? "text-brass-soft" : "text-trace/90"}>
              {line.type === "input" ? `> ${line.text}` : line.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {booted && (
          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-trace/20 pt-3">
            <span className="text-brass-soft">{">"}</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
              spellCheck={false}
              className="flex-1 bg-transparent text-brass-soft caret-trace focus:outline-none"
            />
          </form>
        )}
      </div>
    </div>
  );
}
