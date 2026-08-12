import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionReveal from "@/components/SectionReveal";
import { projects } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.oneLiner,
  };
}

export default function ProjectDetailPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <article className="mx-auto max-w-4xl px-6 py-20">
      <Link href="/projects" className="font-mono-tag text-xs text-ink-muted hover:text-accent">
        ← All Projects
      </Link>

      <SectionReveal className="mt-6">
        <div className="flex items-center gap-3">
          <span className="font-mono-tag rounded-full border border-accent px-3 py-1 text-xs uppercase tracking-wide text-accent">
            {project.tag}
          </span>
          <span className="font-mono-tag text-xs text-ink-muted">{project.year}</span>
        </div>
        <h1 className="font-display mt-4 text-4xl font-bold">{project.title}</h1>
        <p className="mt-3 text-lg text-ink-muted">{project.oneLiner}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-accent px-5 py-2.5 font-mono-tag text-sm font-medium text-onaccent"
          >
            Live Demo ↗
          </a>
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-surface-border px-5 py-2.5 font-mono-tag text-sm font-medium hover:border-accent"
          >
            GitHub Repo
          </a>
        </div>
      </SectionReveal>

      {project.images.length > 0 && (
        <SectionReveal delay={0.1} className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {project.images.map((src) => (
            <div
              key={src}
              className="overflow-hidden rounded-lg border border-surface-border bg-surface-soft"
            >
              <Image
                src={src}
                alt={`${project.title} screenshot`}
                width={800}
                height={500}
                className="h-auto w-full"
              />
            </div>
          ))}
        </SectionReveal>
      )}

      {project.images.length === 0 && (
        <SectionReveal delay={0.1} className="mt-10 rounded-lg border border-dashed border-surface-border p-8 text-center text-sm text-ink-muted">
          Screenshots pending — drop 2–4 images in{" "}
          <code className="font-mono-tag">/public/projects/</code> and add their paths to{" "}
          <code className="font-mono-tag">lib/site.js</code>.
        </SectionReveal>
      )}

      <SectionReveal delay={0.15} className="mt-12">
        <h2 className="font-display text-2xl font-bold">The Problem</h2>
        <p className="mt-3 text-ink-muted">{project.problem}</p>
      </SectionReveal>

      <SectionReveal delay={0.2} className="mt-10">
        <h2 className="font-display text-2xl font-bold">What I Built</h2>
        <ul className="mt-3 space-y-2">
          {project.built.map((item) => (
            <li key={item} className="flex gap-3 text-ink-muted">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </SectionReveal>

      <SectionReveal delay={0.25} className="mt-10">
        <h2 className="font-display text-2xl font-bold">Tech Stack</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span
              key={t}
              className="font-mono-tag rounded border border-surface-border px-3 py-1 text-xs text-ink-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal delay={0.3} className="mt-10 rounded-lg border border-surface-border bg-surface-panel p-6">
        <h2 className="font-display text-2xl font-bold">Result</h2>
        <p className="mt-3 text-ink-muted">{project.result}</p>
      </SectionReveal>
    </article>
  );
}
