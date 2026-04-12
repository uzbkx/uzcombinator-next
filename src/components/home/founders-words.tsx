"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { flowingTestimonials } from "@/data/testimonials";

export function FoundersWords() {
  return (
    <section className="py-32 bg-[#FAFAF8]">
      <div className="max-w-[900px] mx-auto px-6">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-gray-400 uppercase mb-14">
          Asoschillar so&apos;zi bilan
        </p>

        {/* One single flowing paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="leading-[1.6]"
        >
          {flowingTestimonials.map((segment, i) => {
            // Show avatar when speaker changes
            const prevName = i > 0 ? flowingTestimonials[i - 1].name : null;
            const showAvatar = prevName !== null && prevName !== segment.name;

            return (
              <span key={i}>
                {showAvatar && (
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 border-2 border-white shadow-sm mx-2 align-middle" title={segment.name}>
                    <User className="h-3.5 w-3.5 text-gray-400" />
                  </span>
                )}
                {i === 0 && (
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 border-2 border-white shadow-sm mr-2 align-middle" title={segment.name}>
                    <User className="h-3.5 w-3.5 text-gray-400" />
                  </span>
                )}
                <span
                  className={`text-2xl md:text-3xl ${
                    segment.bold
                      ? "font-bold text-[#1A1A1A]"
                      : "text-gray-400"
                  }`}
                >
                  {segment.text}
                </span>
                {" "}
              </span>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
