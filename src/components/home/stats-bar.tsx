"use client";

import { AnimatedCounter } from "@/components/animation/animated-counter";
import { FadeIn } from "@/components/animation/fade-in";

const stats = [
  { target: 1000000, prefix: "$", suffix: "", label: "Investitsiya", duration: 2500 },
  { target: 60, prefix: "", suffix: "+", label: "Startaplar", duration: 1500 },
  { target: 9, prefix: "", suffix: "+", label: "Hamkorlar", duration: 1500 },
];

export function StatsBar() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1000px] mx-auto px-6">
        <FadeIn>
          <div className="flex items-center justify-center">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center">
                {i > 0 && <div className="w-px h-20 bg-[#1EB53A]/40 mx-10 md:mx-20" />}
                <div className="text-center">
                  <div className="font-display text-6xl md:text-7xl font-bold text-[#1A1A1A] tracking-tight">
                    <AnimatedCounter
                      target={stat.target}
                      duration={stat.duration}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mt-3">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
