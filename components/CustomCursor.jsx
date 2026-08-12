"use client";

import { useEffect, useRef } from "react";
import { useSettings } from "@/context/SettingsContext";

export default function CustomCursor() {
  const { customCursor } = useSettings();
  const dotRef = useRef(null);

  useEffect(() => {
    if (!customCursor) return;
    const move = (e) => {
      if (!dotRef.current) return;
      dotRef.current.style.left = `${e.clientX}px`;
      dotRef.current.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [customCursor]);

  if (!customCursor) return null;
  return <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />;
}
