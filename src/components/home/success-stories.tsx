"use client";

import { User } from "lucide-react";
import { StaggerChildren, StaggerItem } from "@/components/animation/stagger-children";
import { FadeIn } from "@/components/animation/fade-in";

const stories = [
  { name: "Founder 1", startup: "Startup Name, Batch 1", desc: "Demo Day'da $50,000 investitsiya jalb qildi. AI-powered logistics platform asoschilaridan." },
  { name: "Founder 2", startup: "Startup Name, Batch 1", desc: "Pre-seed raundda investitsiya oldi. Fintech for SMEs platformasi asoschilaridan." },
  { name: "Founder 3", startup: "Startup Name, Batch 1", desc: "Xalqaro akselerator dasturiga qabul qilindi. EdTech marketplace asoschilaridan." },
  { name: "Founder 4", startup: "Startup Name, Batch 1", desc: "HealthTech diagnostics loyihasi bilan $30,000 investitsiya jalb qildi." },
  { name: "Founder 5", startup: "Startup Name, Batch 1", desc: "AgriTech supply chain loyihasi. StarX akseleratoriga qabul qilindi." },
  { name: "Founder 6", startup: "Startup Name, Batch 1", desc: "E-commerce SaaS platformasi. Demo Day'da eng yaxshi pitch mukofotini oldi." },
];

export function SuccessStories() {
  return (
    <section className="py-32 bg-[#FAFAF8]">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="mb-16">
            <span className="inline-block text-[11px] font-semibold tracking-[0.2em] text-[#FF6600] uppercase mb-5">
              Muvaffaqiyat hikoyalari
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight">
              Investitsiya olgan asoschillar
            </h2>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((s) => (
            <StaggerItem key={s.name}>
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer group transition-transform duration-500 ease-out hover:scale-[1.02]">
                {/* Photo placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                  <User className="h-14 w-14 text-gray-300" />
                </div>
                {/* Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-32 pb-6 px-6">
                  <h4 className="font-display text-xl font-bold text-white tracking-tight">{s.name}</h4>
                  <span className="text-xs font-semibold text-orange-400 block mb-2">{s.startup}</span>
                  <p className="text-sm text-white/70 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
