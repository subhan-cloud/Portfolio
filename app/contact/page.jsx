import SectionReveal from "@/components/SectionReveal";
import { site } from "@/lib/site";

export const metadata = { title: "Contact" };

const LINKS = [
  { label: "Email", href: `mailto:${site.email}`, value: site.email },
  { label: "GitHub", href: site.social.github, value: "github.com/subhan-cloud" },
  { label: "LinkedIn", href: site.social.linkedin, value: "Coming soon" },
  { label: "Upwork", href: site.social.upwork, value: "Coming soon" },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <SectionReveal>
        <p className="font-mono-tag text-xs uppercase tracking-widest text-accent">Contact</p>
        <h1 className="font-display mt-2 text-4xl font-bold">Let&apos;s build something.</h1>
        <p className="mt-4 max-w-xl text-ink-muted">
          Have a project in mind — a store, a dashboard, a site that needs to actually work?
          Reach out and I&apos;ll get back to you.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-8 inline-block rounded-md bg-accent px-6 py-3 font-mono-tag text-sm font-medium text-onaccent"
        >
          Email {site.name}
        </a>
      </SectionReveal>

      <SectionReveal delay={0.1} className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {LINKS.map((l) => (
          <div
            key={l.label}
            className="rounded-lg border border-surface-border bg-surface-panel p-5"
          >
            <p className="font-mono-tag text-xs uppercase tracking-wide text-ink-muted">
              {l.label}
            </p>
            {l.href ? (
              <a
                href={l.href}
                target={l.label === "Email" ? undefined : "_blank"}
                rel="noreferrer"
                className="mt-1 block text-sm text-ink hover:text-accent"
              >
                {l.value}
              </a>
            ) : (
              <p className="mt-1 text-sm text-ink-muted">{l.value}</p>
            )}
          </div>
        ))}
      </SectionReveal>
    </section>
  );
}
