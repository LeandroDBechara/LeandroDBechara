"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ScrollAnimationProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function ScrollAnimation({ children, delay = 0, className }: ScrollAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
