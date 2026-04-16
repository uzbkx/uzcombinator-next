"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface GridCard {
  tag: string;
  title: string;
  description: string;
  imgUrl: string;
  href?: string;
}

interface SpeedrunGridProps {
  heading?: string;
  subheading?: string;
  cards: GridCard[];
  /** Number of columns on desktop (default 3) */
  cols?: 2 | 3;
  href?: string;
  cta?: string;
}

const cardVariants: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

export function SpeedrunGrid({
  heading,
  subheading,
  cards,
  cols = 3,
  href = "/apply",
  cta,
}: SpeedrunGridProps) {
  const gridCols =
    cols === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="bg-[#0A0A0A] border-t border-white/[0.06]">
      {/* ── Section header ──────────────────────────────────────────── */}
      {(heading || subheading) && (
        <div className="max-w-[1200px] mx-auto px-6 pt-24 pb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            {subheading && (
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-orange-500 mb-4">
                {subheading}
              </p>
            )}
            {heading && (
              <h2 className="font-display text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.05] max-w-lg">
                {heading}
              </h2>
            )}
          </div>
          {cta && (
            <Link
              href={href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-400 transition-colors shrink-0"
            >
              {cta}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      )}

      {/* ── Card grid ───────────────────────────────────────────────── */}
      {/* Outer border-top + border-left; each cell adds border-right + border-bottom */}
      <div
        className={`grid grid-cols-1 ${gridCols} border-l border-t border-white/[0.08]`}
      >
        {cards.map((card, i) => (
          <SpeedrunCard key={card.title} card={card} index={i} href={href} />
        ))}
      </div>
    </section>
  );
}

function SpeedrunCard({
  card,
  index,
  href,
}: {
  card: GridCard;
  index: number;
  href: string;
}) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={cardVariants}
      className="group relative flex flex-col border-r border-b border-white/[0.08] overflow-hidden"
    >
      {/* ── Image ─────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden aspect-[4/3] bg-[#111111]">
        <motion.img
          src={card.imgUrl}
          alt={card.title}
          className="w-full h-full object-cover opacity-90 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
        />
        {/* subtle dark gradient at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
      </div>

      {/* ── Body ──────────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-8 gap-4">
        {/* Tag */}
        <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-orange-500">
          {card.tag}
        </span>

        {/* Title */}
        <h3 className="font-display text-xl md:text-2xl font-bold text-white leading-tight tracking-tight">
          {card.title}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed flex-1">
          {card.description}
        </p>

        {/* Arrow link */}
        <Link
          href={card.href ?? href}
          className="inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-wide text-white/40 hover:text-orange-500 transition-colors duration-200 mt-2 self-start"
        >
          Batafsil
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.div>
  );
}
