"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const ENDPOINT = `https://formsubmit.co/ajax/${site.email}`;

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
          _subject: `Portfolio contact from ${values.name}`,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setValues({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-lg border border-surface-border bg-surface-panel p-6 text-center">
        <p className="font-display text-lg font-bold">Message sent ✓</p>
        <p className="mt-2 text-sm text-ink-muted">
          Thanks for reaching out — I&apos;ll reply as soon as I can.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="font-mono-tag mt-4 text-xs text-accent hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-mono-tag text-xs uppercase tracking-wide text-ink-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={values.name}
            onChange={handleChange}
            className="mt-1.5 w-full rounded-md border border-surface-border bg-surface-soft px-3 py-2 text-sm text-ink outline-none focus:border-accent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="font-mono-tag text-xs uppercase tracking-wide text-ink-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={handleChange}
            className="mt-1.5 w-full rounded-md border border-surface-border bg-surface-soft px-3 py-2 text-sm text-ink outline-none focus:border-accent"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="font-mono-tag text-xs uppercase tracking-wide text-ink-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={handleChange}
          className="mt-1.5 w-full rounded-md border border-surface-border bg-surface-soft px-3 py-2 text-sm text-ink outline-none focus:border-accent"
          placeholder="What are you looking to build?"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-md bg-accent px-6 py-3 font-mono-tag text-sm font-medium text-onaccent disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong — try again, or email me directly below.
        </p>
      )}
    </form>
  );
}
