"use client";

import { useEffect, useRef, useState } from "react";
import { getBotResponse, suggestedPrompts } from "@/lib/chatbot";
import { profile } from "@/lib/data";

type Message = { role: "user" | "bot"; text: string };

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: `Hi, I'm a quick assistant trained on ${profile.name}'s resume. Ask me anything about her work, skills, or how to get in touch.`,
    },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    const reply = getBotResponse(trimmed);
    setMessages((prev) => [
      ...prev,
      { role: "user", text: trimmed },
      { role: "bot", text: reply },
    ]);
    setInput("");
  }

  return (
    <>
      {/* Floating action button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open chat assistant"
        className={`chat-fab fixed bottom-6 right-6 z-[70] flex h-14 w-14 items-center justify-center rounded-full border border-brass bg-paper-dim text-graphite shadow-lg transition-transform hover:scale-105 ${open ? "rotate-0" : ""}`}
      >
        {open ? (
          <span className="font-mono text-lg">✕</span>
        ) : (
          <span className="font-mono text-xs uppercase tracking-widest">Ask</span>
        )}
      </button>

      {open && (
        <div className="chat-panel fixed bottom-24 right-6 z-[70] flex h-[28rem] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-md border border-line bg-paper-dim shadow-2xl">
          <div className="border-b border-white/10 px-5 py-4">
            <p className="font-display text-lg text-graphite">Ask about Aanya</p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-brass-soft">
              Instant answers · no scheduling needed
            </p>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-md px-3.5 py-2.5 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "ml-auto bg-brass text-paper"
                    : "bg-white/5 text-graphite/85"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          {messages.length < 3 && (
            <div className="flex flex-wrap gap-2 px-5 pb-3">
              {suggestedPrompts.slice(0, 3).map((p) => (
                <button
                  key={p}
                  onClick={() => send(p)}
                  className="rounded-sm border border-white/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-graphite/60 hover:border-brass hover:text-brass"
                >
                  {p}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex gap-2 border-t border-white/10 p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 bg-transparent px-2 py-2 text-sm text-graphite placeholder:text-graphite/30 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-sm border border-brass px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-brass hover:bg-brass hover:text-ink"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
