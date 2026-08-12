"use client";

import { useState } from "react";
import SectionReveal from "@/components/SectionReveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/site";

const FILTERS = ["All", "Full-Stack", "Frontend"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.tag === filter);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionReveal>
        <p className="font-mono-tag text-xs uppercase tracking-widest text-accent">Work</p>
        <h1 className="font-display mt-2 text-4xl font-bold">All projects</h1>
        <p className="mt-3 max-w-xl text-ink-muted">
          Four live, deployed builds — each with a full case study covering the problem, the
          build, and the result.
        </p>
      </SectionReveal>

      <div className="mt-8 flex gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`font-mono-tag rounded-full border px-4 py-1.5 text-xs uppercase tracking-wide transition-colors ${
              filter === f
                ? "border-accent bg-accent text-onaccent"
                : "border-surface-border text-ink-muted hover:text-ink"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {visible.map((p, i) => (
          <SectionReveal key={p.slug} delay={i * 0.06}>
            <ProjectCard project={p} />
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
