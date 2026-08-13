"use client";

import { useState } from "react";

export default function EmailButton({ email, children, className }) {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(email).catch(() => {});
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <a href={`mailto:${email}`} onClick={handleClick} className={className}>
      {copied ? "Copied email ✓" : children}
    </a>
  );
}
