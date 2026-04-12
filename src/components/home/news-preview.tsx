"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { newsItems } from "@/data/news";
import { StaggerChildren, StaggerItem } from "@/components/animation/stagger-children";
import { FadeIn } from "@/components/animation/fade-in";

export function NewsPreview() {
  const items = newsItems.slice(0, 3);

  return (
    <section className="py-32 bg-[#FAFAF8]">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="mb-16">
            <span className="inline-block text-[11px] font-semibold tracking-[0.2em] text-[#FF6600] uppercase mb-5">
              Yangiliklar
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight">
              So&apos;nggi yangiliklar
            </h2>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <StaggerItem key={item.title}>
              <div className="group cursor-pointer rounded-2xl bg-white hover:shadow-lg transition-shadow duration-500">
                <div className="aspect-video rounded-xl m-3 mb-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                  <span className="text-4xl text-gray-200/80 font-display font-bold">UZ</span>
                </div>
                <div className="p-6 pt-5">
                  <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-gray-400 mb-3 block">
                    {item.category}
                  </span>
                  <h4 className="font-display font-bold text-[#1A1A1A] mb-2 group-hover:text-[#FF6600] transition-colors duration-300 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{item.date}</span>
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <div className="text-center mt-16">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#1A1A1A] hover:text-[#FF6600] transition-colors duration-300"
          >
            Barcha yangiliklar <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
