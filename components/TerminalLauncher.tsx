"use client";

import { useEffect, useState } from "react";
import Terminal from "./Terminal";

export default function TerminalLauncher() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      const target = e.target as HTMLElement;
      const isTyping =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable;

      if (e.key === "`" && !isTyping) {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    }
    function handleOpenEvent() {
      setOpen(true);
    }

    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("open-terminal", handleOpenEvent);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("open-terminal", handleOpenEvent);
    };
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open terminal"
        className="fixed bottom-6 left-6 z-[70] flex h-14 w-14 items-center justify-center rounded-full border border-trace bg-paper-dim font-mono text-trace shadow-lg transition-transform hover:scale-105"
        title="Open terminal (or press `)"
      >
        {">_"}
      </button>
      <Terminal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
