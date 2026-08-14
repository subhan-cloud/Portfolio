import SectionReveal from "@/components/SectionReveal";
import { education } from "@/lib/site";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 border-t border-surface-border/60">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <SectionReveal>
          <p className="font-mono-tag text-xs uppercase tracking-widest text-accent">Education</p>
          <h2 className="font-display mt-2 text-3xl font-bold">Education</h2>
        </SectionReveal>

        <SectionReveal delay={0.06} className="mt-8 space-y-4">
          {education.length === 0 ? (
            <div className="rounded-lg border border-dashed border-surface-border p-6">
              <p className="font-display text-lg font-bold">Add your degree / program</p>
              <p className="mt-1 text-sm text-accent">Add your institution name</p>
              <p className="mt-1 text-sm text-ink-muted">Add years attended</p>
              <p className="mt-3 font-mono-tag text-xs text-ink-muted">
                Edit site.education in lib/site.js with your real details.
              </p>
            </div>
          ) : (
            education.map((e) => (
              <div
                key={e.degree}
                className="rounded-lg border border-surface-border bg-surface-panel p-6"
              >
                <p className="font-display text-lg font-bold">{e.degree}</p>
                <p className="mt-1 text-sm text-accent">{e.institution}</p>
                <p className="mt-1 text-sm text-ink-muted">{e.years}</p>
              </div>
            ))
          )}
        </SectionReveal>
      </div>
    </section>
  );
}
