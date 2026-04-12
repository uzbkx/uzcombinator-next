"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const IMG_PAD_H  = "12vw"; // horizontal inset each side  → image width  = 76 vw
const IMG_HEIGHT  = "55vh"; // image height in vh          → shorter card
const IMG_TOP     = "5vh";  // sticky top offset

// ─── Types ────────────────────────────────────────────────────────────────────
interface TextParallaxContentProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children?: React.ReactNode;
}

// ─── Main wrapper ─────────────────────────────────────────────────────────────
export function TextParallaxContent({
  imgUrl,
  subheading,
  heading,
  children,
}: TextParallaxContentProps) {
  return (
    <div style={{ paddingLeft: IMG_PAD_H, paddingRight: IMG_PAD_H }}>
      <div className="relative h-[110vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
}

// ─── Sticky image with scale-out ──────────────────────────────────────────────
function StickyImage({ imgUrl }: { imgUrl: string }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: IMG_HEIGHT,
        top: IMG_TOP,
        scale,
      }}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div className="absolute inset-0 bg-neutral-950/60" style={{ opacity }} />
    </motion.div>
  );
}

// ─── Floating overlay text ────────────────────────────────────────────────────
function OverlayCopy({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{ y, opacity, height: IMG_HEIGHT }}
      className="absolute left-0 top-0 flex w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-3 text-center text-lg md:text-2xl font-medium text-white/60 tracking-widest uppercase">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl font-display tracking-tight px-6">
        {heading}
      </p>
    </motion.div>
  );
}

// ─── Per-block content panel ──────────────────────────────────────────────────
export function ParallaxBlockContent({
  title,
  desc,
  tag,
  href = "/apply",
  buttonLabel = "Batafsil",
}: {
  title: string;
  desc: string;
  tag?: string;
  href?: string;
  buttonLabel?: string;
}) {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12 bg-[#FAFAF8]">
      <h2 className="col-span-1 text-2xl md:text-3xl font-bold text-[#1A1A1A] md:col-span-4 font-display tracking-tight">
        {title}
      </h2>
      <div className="col-span-1 md:col-span-8">
        {tag && (
          <span className="inline-block mb-4 text-[10px] font-semibold tracking-[0.2em] uppercase text-orange-500">
            {tag}
          </span>
        )}
        <p className="mb-8 text-lg text-neutral-500 md:text-xl leading-relaxed">
          {desc}
        </p>
        <Link
          href={href}
          className="inline-flex items-center gap-2 rounded-full bg-[#1A1A1A] px-8 py-3.5 text-sm font-semibold text-white hover:bg-black transition-colors"
        >
          {buttonLabel}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
