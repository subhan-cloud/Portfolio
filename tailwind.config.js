/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "var(--fg)",
          muted: "var(--fg-muted)",
        },
        surface: {
          DEFAULT: "var(--bg)",
          soft: "var(--bg-soft)",
          panel: "var(--bg-panel)",
          border: "var(--border)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          soft: "var(--accent-soft)",
        },
        onaccent: "#05070c",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        blink: "blink 1s step-start infinite",
      },
    },
  },
  plugins: [],
};
