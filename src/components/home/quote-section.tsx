"use client";

import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export function QuoteSection() {
  return (
    <HeroHighlight containerClassName="bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: [24, -6, 0] }}
        transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
        className="max-w-4xl px-6 text-center text-3xl font-bold leading-snug tracking-tight text-neutral-800 md:text-5xl lg:text-6xl lg:leading-tight mx-auto"
      >
        Transforming strong builders into{" "}
        <Highlight className="text-neutral-900">
          global founders
        </Highlight>
      </motion.h2>
    </HeroHighlight>
  );
}
