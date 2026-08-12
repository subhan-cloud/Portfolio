"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { useSettings } from "@/context/SettingsContext";

const Hero3D = dynamic(() => import("./Hero3D"), {
  ssr: false,
  loading: () => null,
});

function StaticWireframe() {
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full opacity-70" aria-hidden="true">
      <polygon
        points="100,20 170,60 170,140 100,180 30,140 30,60"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1"
      />
      <polygon
        points="100,55 140,80 140,120 100,145 60,120 60,80"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1"
        opacity="0.6"
      />
      <line x1="100" y1="20" x2="100" y2="180" stroke="var(--accent)" strokeWidth="0.5" opacity="0.4" />
      <line x1="30" y1="60" x2="170" y2="140" stroke="var(--accent)" strokeWidth="0.5" opacity="0.4" />
      <line x1="170" y1="60" x2="30" y2="140" stroke="var(--accent)" strokeWidth="0.5" opacity="0.4" />
    </svg>
  );
}

export default function HeroSection() {
  const { reduceMotion, ready } = useSettings();

  return (
    <section className="grid-bg relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-mono-tag mb-4 text-xs uppercase tracking-widest text-accent">
            {site.role}
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Hi, I&apos;m {site.name}.
            <br />I build products that actually run.
          </h1>
          <p className="mt-6 max-w-md text-base text-ink-muted">{site.heroOneLiner}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-md bg-accent px-6 py-3 font-mono-tag text-sm font-medium text-onaccent transition-transform active:translate-y-0.5"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-surface-border px-6 py-3 font-mono-tag text-sm font-medium text-ink transition-colors hover:border-accent"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        <div className="relative h-72 md:h-[420px]">
          {!ready ? null : reduceMotion ? (
            <StaticWireframe />
          ) : (
            <Hero3D reduceMotion={reduceMotion} />
          )}
        </div>
      </div>
    </section>
  );
}
