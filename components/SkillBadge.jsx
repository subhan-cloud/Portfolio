"use client";

export default function SkillBadge({ label }) {
  return (
    <div className="group [perspective:600px]">
      <div className="relative h-10 w-full rounded-md border border-surface-border bg-surface-panel transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <span className="absolute inset-0 flex items-center justify-center font-mono-tag text-xs text-ink [backface-visibility:hidden]">
          {label}
        </span>
        <span
          className="absolute inset-0 flex items-center justify-center rounded-md bg-accent font-mono-tag text-xs text-onaccent [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
