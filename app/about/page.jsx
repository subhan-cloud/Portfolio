import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";
import SkillBadge from "@/components/SkillBadge";
import { site } from "@/lib/site";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
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
          <h1 className="font-display mt-2 text-4xl font-bold">
            Hi, I&apos;m {site.name}.
          </h1>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.05}>
        <p className="mt-8 text-lg leading-relaxed text-ink-muted">{site.bioShort}</p>
        <p className="mt-4 leading-relaxed text-ink-muted">{site.bioLong}</p>
      </SectionReveal>

      <SectionReveal delay={0.1} className="mt-14">
        <h2 className="font-display text-2xl font-bold">Skills</h2>
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

      <SectionReveal delay={0.15} className="mt-14 rounded-lg border border-surface-border bg-surface-panel p-6">
        <h2 className="font-display text-xl font-bold">How I work</h2>
        <p className="mt-3 text-ink-muted">
          I take on freelance projects end-to-end — from a client&apos;s first brief through to a
          tested, deployed product. I&apos;d rather own the full build than hand off a slice of
          it, and every project I ship is live and checkable, not a local-only demo.
        </p>
      </SectionReveal>
    </section>
  );
}
