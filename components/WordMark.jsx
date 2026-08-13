import { site } from "@/lib/site";

export default function WordMark({ size = "md" }) {
  const box = size === "sm" ? "h-6 w-6" : "h-8 w-8";
  const textSize = size === "sm" ? "text-base" : "text-lg";

  return (
    <span className="inline-flex items-center gap-2">
      <span
        className={`${box} flex flex-shrink-0 items-center justify-center rounded-md bg-[#05070c] font-display font-bold text-white`}
      >
        S
      </span>
      <span className={`font-display ${textSize} font-bold tracking-tight`}>
        {site.name}
        <span className="text-accent">.</span>
      </span>
    </span>
  );
}
