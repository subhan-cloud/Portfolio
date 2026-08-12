"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ACCENTS = {
  signal: { label: "Signal Blue", value: "#4F7CFF", soft: "#1B2A55" },
  circuit: { label: "Circuit Violet", value: "#8B6BFF", soft: "#241A4D" },
  terminal: { label: "Terminal Green", value: "#3DDC97", soft: "#123527" },
  amber: { label: "Amber", value: "#FFB454", soft: "#4A2E0C" },
};

const SettingsContext = createContext(null);

export function SettingsProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [accent, setAccent] = useState("signal");
  const [reduceMotion, setReduceMotion] = useState(false);
  const [customCursor, setCustomCursor] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const storedAccent = localStorage.getItem("accent");
    const storedMotion = localStorage.getItem("reduceMotion");
    const storedCursor = localStorage.getItem("customCursor");
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (storedTheme) setTheme(storedTheme);
    if (storedAccent) setAccent(storedAccent);
    setReduceMotion(storedMotion ? storedMotion === "true" : prefersReduced);
    if (storedCursor) setCustomCursor(storedCursor === "true");
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme === "light");
    root.style.setProperty("--accent", ACCENTS[accent].value);
    root.style.setProperty("--accent-soft", ACCENTS[accent].soft);
    root.classList.toggle("reduce-motion", reduceMotion);
    root.classList.toggle("custom-cursor", customCursor);
    localStorage.setItem("theme", theme);
    localStorage.setItem("accent", accent);
    localStorage.setItem("reduceMotion", String(reduceMotion));
    localStorage.setItem("customCursor", String(customCursor));
  }, [theme, accent, reduceMotion, customCursor, ready]);

  return (
    <SettingsContext.Provider
      value={{
        theme,
        setTheme,
        accent,
        setAccent,
        accents: ACCENTS,
        reduceMotion,
        setReduceMotion,
        customCursor,
        setCustomCursor,
        ready,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used within SettingsProvider");
  return ctx;
}
