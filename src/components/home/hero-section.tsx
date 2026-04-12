"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SpinningRingsBackground } from "@/components/ui/waitlist-hero";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Spinning concentric rings background */}
      <SpinningRingsBackground />

      {/* Bottom gradient fade — blends rings into the dark page below */}
      <div className="absolute inset-0 pointer-events-none z-[1]"
        style={{ background: "linear-gradient(to top, #0A0A0A 8%, rgba(10,10,10,0.6) 35%, transparent 100%)" }} />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto" style={{ zIndex: 10 }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]" />
          <span className="text-[13px] text-gray-500 font-medium tracking-wide">
            Batch 2 — Ariza qabul qilinmoqda
          </span>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex justify-center mb-10"
        >
          <Image
            src="/logo-white.png"
            alt="UZ Combinator"
            width={200}
            height={50}
            className="h-10 w-auto"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-6xl md:text-8xl font-bold text-white leading-[0.95] tracking-[-0.03em] mb-8"
        >
          Kuchli builderlarni
          <br />
          <span className="text-white/90">global startap</span>
          <br />
          <span className="text-white/80">asoschilarga aylantiramiz</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-base md:text-lg text-gray-500 max-w-lg mx-auto mb-14 leading-relaxed"
        >
          45 kunlik intensiv akselerator dasturi.
          <br className="hidden sm:block" />
          Mentorlik, investitsiya va global tarmoq.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Link
            href="/apply"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-[#0A0A0A] text-sm font-semibold tracking-wide hover:bg-gray-100 transition-colors duration-300"
          >
            Ariza topshirish
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-transparent text-gray-400 text-sm font-semibold tracking-wide border border-white/[0.12] hover:border-white/25 hover:text-gray-300 transition-all duration-300"
          >
            Batafsil
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
