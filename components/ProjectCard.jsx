"use client";

import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { useSettings } from "@/context/SettingsContext";

export default function ProjectCard({ project }) {
  const { reduceMotion } = useSettings();

  const card = (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-surface-border bg-surface-panel transition-shadow hover:shadow-2xl hover:shadow-accent/10">
      {project.images?.[0] && (
        <div className="relative aspect-video w-full overflow-hidden border-b border-surface-border bg-surface-soft">
          <Image
            src={project.images[0]}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono-tag text-xs uppercase tracking-wide text-accent">
          {project.tag}
        </span>
        <span className="font-mono-tag text-xs text-ink-muted">{project.year}</span>
      </div>

      <h3 className="font-display text-xl font-bold">{project.title}</h3>
      <p className="mt-2 text-sm text-ink-muted">{project.oneLiner}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.slice(0, 4).map((t) => (
          <span
            key={t}
            className="font-mono-tag rounded border border-surface-border px-2 py-0.5 text-[11px] text-ink-muted"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-4 font-mono-tag text-xs uppercase tracking-wide">
        <Link href={`/projects/${project.slug}`} className="text-accent hover:underline">
          View Case Study
        </Link>
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="text-ink-muted hover:text-ink"
        >
          Live Demo ↗
        </a>
      </div>
      </div>
    </div>
  );

  if (reduceMotion) return card;

  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      glareEnable={false}
      transitionSpeed={1200}
      className="h-full [transform-style:preserve-3d]"
    >
      {card}
    </Tilt>
  );
}
