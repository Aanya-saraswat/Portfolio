"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function update(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${form.firstName} ${form.lastName}`.trim()
    );
    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.firstName} ${form.lastName}\nEmail: ${form.email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="border border-line bg-paper-dim p-8">
      <p className="font-display text-xl text-ink">Send a message</p>
      <p className="mt-1 text-sm text-graphite-soft">
        This opens your email client with the message ready to send.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label className="font-mono text-[11px] uppercase tracking-widest text-graphite-soft">
            First Name
          </label>
          <input
            required
            value={form.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            placeholder="Your first name"
            className="mt-2 w-full border border-line bg-paper px-3 py-2.5 text-sm text-ink placeholder:text-graphite-soft/50 focus:border-brass focus:outline-none"
          />
        </div>
        <div>
          <label className="font-mono text-[11px] uppercase tracking-widest text-graphite-soft">
            Last Name
          </label>
          <input
            value={form.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            placeholder="Your last name"
            className="mt-2 w-full border border-line bg-paper px-3 py-2.5 text-sm text-ink placeholder:text-graphite-soft/50 focus:border-brass focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-5">
        <label className="font-mono text-[11px] uppercase tracking-widest text-graphite-soft">
          Email
        </label>
        <input
          required
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="your.email@example.com"
          className="mt-2 w-full border border-line bg-paper px-3 py-2.5 text-sm text-ink placeholder:text-graphite-soft/50 focus:border-brass focus:outline-none"
        />
      </div>

      <div className="mt-5">
        <label className="font-mono text-[11px] uppercase tracking-widest text-graphite-soft">
          Message
        </label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Your message here..."
          className="mt-2 w-full resize-none border border-line bg-paper px-3 py-2.5 text-sm text-ink placeholder:text-graphite-soft/50 focus:border-brass focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="mt-6 w-full border border-brass bg-brass px-6 py-3 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:bg-transparent hover:text-brass"
      >
        {sent ? "Opening your email client..." : "Send Message"}
      </button>
    </form>
  );
}
