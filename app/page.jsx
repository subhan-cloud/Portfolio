import HeroSection from "@/components/HeroSection";
import SectionReveal from "@/components/SectionReveal";
import ProjectCard from "@/components/ProjectCard";
import { projects, site } from "@/lib/site";
import Link from "next/link";

export default function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <HeroSection />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionReveal className="mb-10 flex items-end justify-between">
          <div>
            <p className="font-mono-tag text-xs uppercase tracking-widest text-accent">
              Selected Work
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold">Recent projects</h2>
          </div>
          <Link
            href="/projects"
            className="font-mono-tag hidden text-sm text-ink-muted hover:text-accent sm:block"
          >
            View all →
          </Link>
        </SectionReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((p, i) => (
            <SectionReveal key={p.slug} delay={i * 0.08}>
              <ProjectCard project={p} />
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="border-t border-surface-border/60 bg-surface-soft">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionReveal>
            <p className="font-mono-tag text-xs uppercase tracking-widest text-accent">Stack</p>
            <h2 className="font-display mt-2 text-2xl font-bold">What I build with</h2>
          </SectionReveal>
          <SectionReveal delay={0.1} className="mt-8 flex flex-wrap gap-3">
            {Object.values(site.skills)
              .flat()
              .map((skill) => (
                <span
                  key={skill}
                  className="font-mono-tag rounded-full border border-surface-border px-4 py-1.5 text-xs text-ink-muted"
                >
                  {skill}
                </span>
              ))}
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
