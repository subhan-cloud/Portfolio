"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import SettingsPanel from "./SettingsPanel";

const LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-40 border-b border-surface-border/60 bg-surface/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-lg font-bold tracking-tight">
          {site.name}
          <span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono-tag text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <SettingsPanel />
        </div>

        <button
          className="flex items-center gap-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className="font-mono-tag text-xs">{open ? "CLOSE" : "MENU"}</span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-surface-border/60 px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono-tag text-sm text-ink-muted hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
            <SettingsPanel mobile />
          </div>
        </div>
      )}
    </header>
  );
}
