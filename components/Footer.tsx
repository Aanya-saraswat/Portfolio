import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-xl">{profile.name}</p>
            <p className="mt-2 max-w-xs text-sm text-paper/60">
              {profile.role}
            </p>
          </div>

          <div className="font-mono text-xs uppercase tracking-widest text-paper/50">
            <p className="mb-3 text-paper/30">Reach me</p>
            <a href={`mailto:${profile.email}`} className="block py-1 hover:text-brass">
              {profile.email}
            </a>
            <a href={profile.github} className="block py-1 hover:text-brass">
              GitHub
            </a>
            <a href={profile.linkedin} className="block py-1 hover:text-brass">
              LinkedIn
            </a>
          </div>

          <div className="font-mono text-xs uppercase tracking-widest text-paper/50">
            <p className="mb-3 text-paper/30">Based in</p>
            <p className="text-paper/70">{profile.location}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-paper/10 pt-6 text-xs text-paper/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js.</p>
          <p>Designed with intent, not a template.</p>
        </div>
      </div>
    </footer>
  );
}
