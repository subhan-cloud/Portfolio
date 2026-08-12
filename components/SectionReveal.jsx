"use client";

import { motion } from "framer-motion";

export default function SectionReveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, rotateX: -4 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
