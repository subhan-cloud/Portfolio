import SectionReveal from "@/components/SectionReveal";
import { testimonials } from "@/lib/site";

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-surface-border/60 bg-surface-soft">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionReveal>
          <p className="font-mono-tag text-xs uppercase tracking-widest text-accent">
            Feedback
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold">What clients say</h2>
        </SectionReveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <SectionReveal
              key={t.name}
              delay={i * 0.08}
              className="flex h-full flex-col rounded-xl border border-surface-border bg-surface-panel p-6"
            >
              <p className="text-sm leading-relaxed text-ink-muted">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6">
                <p className="font-mono-tag text-xs font-medium text-ink">{t.name}</p>
                <p className="font-mono-tag text-xs text-ink-muted">{t.role}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
