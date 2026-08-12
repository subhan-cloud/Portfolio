import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-6 py-32 text-center">
      <p className="font-mono-tag text-xs uppercase tracking-widest text-accent">404</p>
      <h1 className="font-display mt-3 text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-ink-muted">
        The page you&apos;re looking for doesn&apos;t exist or moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-accent px-6 py-3 font-mono-tag text-sm font-medium text-onaccent"
      >
        Back home
      </Link>
    </section>
  );
}
