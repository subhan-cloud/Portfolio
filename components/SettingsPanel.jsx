"use client";

import { useState } from "react";
import { useSettings } from "@/context/SettingsContext";

export default function SettingsPanel({ mobile = false }) {
  const [open, setOpen] = useState(mobile);
  const {
    theme,
    setTheme,
    accent,
    setAccent,
    accents,
    reduceMotion,
    setReduceMotion,
    customCursor,
    setCustomCursor,
  } = useSettings();

  return (
    <div className={mobile ? "" : "relative"}>
      {!mobile && (
        <button
          onClick={() => setOpen((v) => !v)}
          className="font-mono-tag text-xs uppercase tracking-wide text-ink-muted hover:text-ink"
          aria-expanded={open}
          aria-label="Open display settings"
        >
          Settings
        </button>
      )}

      {(open || mobile) && (
        <div
          className={
            mobile
              ? "mt-4 flex flex-col gap-4 border-t border-surface-border/60 pt-4"
              : "absolute right-0 top-8 z-50 w-64 rounded-lg border border-surface-border bg-surface-panel p-4 shadow-xl"
          }
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-ink-muted">Theme</span>
            <div className="flex gap-1 rounded-md border border-surface-border p-0.5">
              {["dark", "light"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={`rounded px-2 py-1 text-xs capitalize ${
                    theme === t ? "bg-accent text-onaccent" : "text-ink-muted"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="mb-2 block text-xs text-ink-muted">Accent</span>
            <div className="flex gap-2">
              {Object.entries(accents).map(([key, val]) => (
                <button
                  key={key}
                  onClick={() => setAccent(key)}
                  aria-label={val.label}
                  className={`h-6 w-6 rounded-full border-2 ${
                    accent === key ? "border-text" : "border-transparent"
                  }`}
                  style={{ backgroundColor: val.value }}
                />
              ))}
            </div>
          </div>

          <label className="flex items-center justify-between text-xs text-ink-muted">
            Reduce motion
            <input
              type="checkbox"
              checked={reduceMotion}
              onChange={(e) => setReduceMotion(e.target.checked)}
              className="h-4 w-4 accent-accent"
            />
          </label>

          <label className="flex items-center justify-between text-xs text-ink-muted">
            Custom cursor
            <input
              type="checkbox"
              checked={customCursor}
              onChange={(e) => setCustomCursor(e.target.checked)}
              className="h-4 w-4 accent-accent"
            />
          </label>
        </div>
      )}
    </div>
  );
}
