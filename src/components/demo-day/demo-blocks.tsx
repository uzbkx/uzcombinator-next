"use client";

import { FadeIn } from "@/components/animation/fade-in";
import { Mic, Users, Calendar } from "lucide-react";

const blocks = [
  {
    tag: "01",
    icon: Mic,
    title: "Live Pitches",
    desc: "Har bir startap 5 daqiqalik pitch taqdimotida investorlar va texnologiya hamjamiyati oldida o'z loyihasini taqdim etadi.",
    reverse: false,
  },
  {
    tag: "02",
    icon: Users,
    title: "Investor Networking",
    desc: "Demo Day'dan so'ng investorlar va asoschillar bevosita uchrashadi. 1-on-1 suhbatlar va tarmoq kengaytirish imkoniyati.",
    reverse: true,
  },
  {
    tag: "03",
    icon: Calendar,
    title: "Join Us @ Demo Day",
    desc: "Tadbir ochiq — investor, mentor yoki startap ishqibozi bo'lsangiz, ro'yxatdan o'ting va Demo Day'da qatnashing.",
    reverse: false,
  },
];

export function DemoBlocks() {
  return (
    <section className="py-32 bg-[#FAFAF8]">
      <div className="max-w-[1200px] mx-auto px-6 space-y-32">
        {blocks.map((block, i) => (
          <FadeIn key={block.tag} delay={i * 0.1}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${block.reverse ? "lg:direction-rtl" : ""}`}>
              <div className={block.reverse ? "lg:order-2" : ""}>
                <span className="inline-block text-2xl md:text-3xl font-bold text-orange-500 mb-6 tracking-tight font-display">
                  {block.tag}
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-5 tracking-tight">
                  {block.title}
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">{block.desc}</p>
              </div>
              <div className={`aspect-[4/3] bg-gradient-to-br from-gray-100 to-[#F0F0E8] rounded-3xl flex items-center justify-center ${block.reverse ? "lg:order-1" : ""}`}>
                <block.icon className="h-16 w-16 text-gray-200" />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
