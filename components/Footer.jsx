import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-surface-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-base font-bold">
            {site.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-1 text-sm text-ink-muted">{site.role}</p>
        </div>

        <div className="flex flex-wrap gap-6 font-mono-tag text-xs uppercase tracking-wide text-ink-muted">
          <a href={`mailto:${site.email}`} className="hover:text-accent">
            {site.email}
          </a>
          <a href={site.social.github} target="_blank" rel="noreferrer" className="hover:text-accent">
            GitHub
          </a>
          {site.social.linkedin && (
            <a href={site.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
              LinkedIn
            </a>
          )}
        </div>
      </div>
      <div className="border-t border-surface-border/60 px-6 py-4 text-center text-xs text-ink-muted">
        © {new Date().getFullYear()} {site.name}. Built with Next.js, Tailwind & React Three Fiber.
      </div>
    </footer>
  );
}
