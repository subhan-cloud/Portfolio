import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import SectionReveal from "@/components/SectionReveal";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import Testimonials from "@/components/Testimonials";
import EmailButton from "@/components/EmailButton";
import ContactForm from "@/components/ContactForm";
import Education from "@/components/Education";
import { projects, site, highlights } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* ---------- Highlights strip ---------- */}
      <section className="border-t border-surface-border/60">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <SectionReveal className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.label} className="text-center sm:text-left">
                <p className="font-display text-2xl font-bold text-accent">{h.value}</p>
                <p className="font-mono-tag mt-1 text-xs uppercase tracking-wide text-ink-muted">
                  {h.label}
                </p>
              </div>
            ))}
          </SectionReveal>
        </div>
      </section>

      {/* ---------- About ---------- */}
      <section id="about" className="scroll-mt-24 border-t border-surface-border/60">
        <div className="mx-auto max-w-4xl px-6 py-20">
        <SectionReveal className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <Image
            src={site.avatar}
            alt={site.name}
            width={96}
            height={96}
            className="h-24 w-24 flex-shrink-0 rounded-full border border-surface-border object-cover"
          />
          <div>
            <p className="font-mono-tag text-xs uppercase tracking-widest text-accent">About</p>
            <h2 className="font-display mt-2 text-4xl font-bold">
              Hi, I&apos;m {site.name}.
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.05}>
          <p className="mt-8 text-lg leading-relaxed text-ink-muted">{site.bioShort}</p>
          <p className="mt-4 leading-relaxed text-ink-muted">{site.bioLong}</p>
        </SectionReveal>

        <SectionReveal delay={0.1} className="mt-14">
          <h3 className="font-display text-2xl font-bold">Skills</h3>
          <div className="mt-6 space-y-8">
            {Object.entries(site.skills).map(([group, list]) => (
              <div key={group}>
                <p className="font-mono-tag mb-3 text-xs uppercase tracking-wide text-ink-muted">
                  {group}
                </p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {list.map((skill) => (
                    <SkillBadge key={skill} label={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal
          delay={0.15}
          className="mt-14 rounded-lg border border-surface-border bg-surface-panel p-6"
        >
          <h3 className="font-display text-xl font-bold">How I work</h3>
          <p className="mt-3 text-ink-muted">
            I take on freelance projects end-to-end — from a client&apos;s first brief through to
            a tested, deployed product. I&apos;d rather own the full build than hand off a slice
            of it, and every project I ship is live and checkable, not a local-only demo.
          </p>
        </SectionReveal>
        </div>
      </section>

      {/* ---------- Education ---------- */}
      <Education />

      {/* ---------- Projects ---------- */}
      <section id="projects" className="scroll-mt-24 border-t border-surface-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionReveal className="mb-10 flex items-end justify-between">
          <div>
            <p className="font-mono-tag text-xs uppercase tracking-widest text-accent">
              Selected Work
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold">Recent projects</h2>
            <p className="mt-3 max-w-xl text-ink-muted">
              {projects.length} live, deployed builds — each with a full case study covering the
              problem, the build, and the result.
            </p>
          </div>
          <Link
            href="/projects"
            className="font-mono-tag hidden text-sm text-ink-muted hover:text-accent sm:block"
          >
            Filter all →
          </Link>
        </SectionReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <SectionReveal key={p.slug} delay={i * 0.06}>
              <ProjectCard project={p} />
            </SectionReveal>
          ))}
        </div>
        </div>
      </section>

      {/* ---------- Stack ---------- */}
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

      {/* ---------- Testimonials ---------- */}
      <Testimonials />

      {/* ---------- Contact ---------- */}
      <section
        id="contact"
        className="scroll-mt-24 border-t border-surface-border/60 bg-surface-soft"
      >
        <div className="mx-auto max-w-3xl px-6 py-20">
          <SectionReveal>
            <p className="font-mono-tag text-xs uppercase tracking-widest text-accent">
              Contact
            </p>
            <h2 className="font-display mt-2 text-4xl font-bold">Let&apos;s build something.</h2>
            <p className="mt-4 max-w-xl text-ink-muted">
              Have a project in mind — a store, a dashboard, a site that needs to actually work?
              Fill in the form below and I&apos;ll get back to you.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.08} className="mt-10 rounded-lg border border-surface-border bg-surface-panel p-6">
            <ContactForm />
          </SectionReveal>

          <SectionReveal delay={0.1} className="mt-10">
            <p className="font-mono-tag text-xs uppercase tracking-wide text-ink-muted">
              Prefer email directly?
            </p>
            <EmailButton
              email={site.email}
              className="mt-3 inline-block rounded-md border border-surface-border px-6 py-3 font-mono-tag text-sm font-medium text-ink hover:border-accent"
            >
              Email {site.name}
            </EmailButton>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
