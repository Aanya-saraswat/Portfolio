"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { profile, projects } from "@/lib/data";

type Command = {
  id: string;
  label: string;
  hint: string;
  action: () => void;
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const commands: Command[] = useMemo(
    () => [
      { id: "home", label: "Home", hint: "Page", action: () => router.push("/") },
      { id: "about", label: "About", hint: "Page", action: () => router.push("/about") },
      { id: "projects", label: "Projects", hint: "Page", action: () => router.push("/projects") },
      { id: "experience", label: "Experience", hint: "Page", action: () => router.push("/experience") },
      { id: "certifications", label: "Certifications", hint: "Page", action: () => router.push("/certifications") },
      { id: "contact", label: "Contact", hint: "Page", action: () => router.push("/contact") },
      ...projects.map((p) => ({
        id: p.slug,
        label: p.title,
        hint: "Project",
        action: () => router.push(`/projects/${p.slug}`),
      })),
      {
        id: "terminal",
        label: "Open terminal mode",
        hint: "Action",
        action: () => window.dispatchEvent(new CustomEvent("open-terminal")),
      },
      {
        id: "email",
        label: `Email ${profile.name.split(" ")[0]}`,
        hint: "Action",
        action: () => (window.location.href = `mailto:${profile.email}`),
      },
      {
        id: "resume",
        label: "Download résumé",
        hint: "Action",
        action: () => window.open("/resume.pdf", "_blank"),
      },
      {
        id: "github",
        label: "View GitHub",
        hint: "Action",
        action: () => window.open(profile.github, "_blank"),
      },
      {
        id: "linkedin",
        label: "View LinkedIn",
        hint: "Action",
        action: () => window.open(profile.linkedin, "_blank"),
      },
    ],
    [router]
  );

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return commands;
    return commands.filter((c) => c.label.toLowerCase().includes(q));
  }, [query, commands]);

  useEffect(() => {
    setSelected(0);
  }, [query, open]);

  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      const target = e.target as HTMLElement;
      const isTyping =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable;

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
        return;
      }

      if (e.key === "/" && !isTyping && !open) {
        e.preventDefault();
        setOpen(true);
        return;
      }

      if (e.key === "Escape" && open) {
        setOpen(false);
        return;
      }

      if (open && e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((s) => Math.min(s + 1, filtered.length - 1));
      }
      if (open && e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((s) => Math.max(s - 1, 0));
      }
      if (open && e.key === "Enter" && filtered[selected]) {
        e.preventDefault();
        filtered[selected].action();
        setOpen(false);
        setQuery("");
      }
    }

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [open, filtered, selected]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 10);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden items-center gap-2 rounded-md border border-line bg-paper-dim px-3 py-1.5 font-mono text-xs text-graphite-soft transition-colors hover:border-trace hover:text-trace md:flex"
        aria-label="Open command palette"
      >
        <span>Search</span>
        <span className="rounded border border-line px-1.5 py-0.5 text-[10px]">/</span>
      </button>

      {open && (
        <div
          className="chat-panel fixed inset-0 z-[80] flex items-start justify-center bg-black/70 px-4 pt-24"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-lg border border-line bg-paper-dim shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-line px-4 py-3">
              <span className="text-trace">→</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to a page, project, or action..."
                className="w-full bg-transparent text-sm text-ink placeholder:text-graphite-soft/50 focus:outline-none"
              />
              <span className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-graphite-soft">
                esc
              </span>
            </div>

            <div className="max-h-80 overflow-y-auto py-2">
              {filtered.length === 0 && (
                <p className="px-4 py-6 text-center text-sm text-graphite-soft">
                  No matches found.
                </p>
              )}
              {filtered.map((cmd, i) => (
                <button
                  key={cmd.id}
                  onClick={() => {
                    cmd.action();
                    setOpen(false);
                    setQuery("");
                  }}
                  onMouseEnter={() => setSelected(i)}
                  className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors ${
                    i === selected
                      ? "bg-trace/15 text-ink"
                      : "text-graphite-soft hover:bg-trace/10"
                  }`}
                >
                  <span>{cmd.label}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-graphite-soft/60">
                    {cmd.hint}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
