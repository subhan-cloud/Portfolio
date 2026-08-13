"use client";

import { useSettings } from "@/context/SettingsContext";

export default function ThemeToggle({ mobile = false }) {
  const { theme, setTheme } = useSettings();

  return (
    <div
      className={
        mobile
          ? "flex items-center gap-2 border-t border-surface-border/60 pt-4"
          : "flex items-center gap-1 rounded-md border border-surface-border p-0.5"
      }
    >
      {mobile && <span className="font-mono-tag mr-auto text-xs text-ink-muted">Theme</span>}
      {["dark", "light"].map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          aria-pressed={theme === t}
          className={`font-mono-tag rounded px-2.5 py-1 text-xs capitalize transition-colors ${
            theme === t ? "bg-accent text-onaccent" : "text-ink-muted hover:text-ink"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
