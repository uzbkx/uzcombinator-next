"use client";

import { DollarSign, TrendingUp, Trophy, Globe, Code } from "lucide-react";
import { FadeIn } from "@/components/animation/fade-in";
import { AnimatedCounter } from "@/components/animation/animated-counter";
import { CTASection } from "@/components/layout/cta-section";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { WorldMap } from "@/components/ui/map";

const benefits = [
  {
    icon: DollarSign,
    title: "$1,000 stipendiya va ish sharoitlari",
    desc: "Har bir tanlangan asoschi 1,000 AQSh dollari stipendiyasi, zamonaviy coworking maydoniga kirish va zarur texnik vositalarni oladi.",
    color: "text-orange-500",
    image: "/opportunities/stipend.png",
  },
  {
    icon: TrendingUp,
    title: "Mentorlar va Trekkerlar",
    desc: "Har bir startapga shaxsiy mentor va trekker biriktiriladi. Ular mahsulot strategiyasi, texnologiya va o'sish bo'yicha kundalik yo'l-yo'riq berib, asoschillarni real natijaga yetaklaydi.",
    color: "text-emerald-500",
    image: "/opportunities/mentors.png",
  },
  {
    icon: Trophy,
    title: "Raqobatbardosh muhit",
    desc: "45 kun davomida builderlar metriklar orqali o'lchanadigan, bir-biridan o'rganadigan va tez qaror qabul qiladigan raqobatbardosh ekotizimda ishlaydi.",
    color: "text-blue-500",
    image: "/opportunities/competitive.png",
  },
  {
    icon: Globe,
    title: "Global fikrlash va investor-tayyor pitch",
    desc: "Biz asoschilarga global nuqtai nazarni rivojlantirishga yordam beramiz va ularni investorlar oldida aniq va ishonchli taqdimot qilishga o'rgatamiz.",
    color: "text-violet-500",
    image: "/opportunities/pitch.png",
  },
  {
    icon: Code,
    title: "Eng kuchlilar bilan bir xonada bo'ling",
    desc: "Siz yolg'iz qurmaydigan bo'lasiz. Tajribali asoschillar, investorlar va sanoat liderlaridan iborat jamoada ishlaysiz — ularning tajribasi va tarmog'idan bevosita foydalanasiz.",
    color: "text-rose-500",
    image: "/opportunities/tech.png",
  },
];

export function OpportunitiesContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#FAFAF8]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="inline-block mb-6 text-[11px] font-semibold tracking-[0.2em] text-orange-500 uppercase">
            Imkoniyatlar
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 tracking-tight">
            Imkoniyatlar
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            UZ Combinator dasturida sizni nimalar kutmoqda.
          </p>
        </div>
      </section>

      {/* Benefit Cards */}
      <section className="pb-32 bg-[#FAFAF8]">
        <div className="max-w-[1100px] mx-auto px-6 space-y-24">
          {benefits.map((b, i) => (
            <FadeIn key={b.title} delay={i * 0.08}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <b.icon className={`h-7 w-7 mb-6 ${b.color}`} />
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4 tracking-tight">
                    {b.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{b.desc}</p>
                </div>
                <div className={`aspect-[4/3] rounded-2xl overflow-hidden relative ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <Image src={b.image} alt={b.title} fill className="object-cover" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Bridge to Silicon Valley */}
      <section className="py-32 bg-[#0A0A0A]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn className="mb-14">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-orange-400 uppercase mb-6 block">
              Ko&apos;prik
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-lg">
                Bridge to Silicon Valley
              </h2>
              <div className="flex flex-col gap-4 lg:max-w-sm">
                <p className="text-gray-500 text-base leading-relaxed">
                  Silicon Valley akselerator dasturlari (StarX, Alchemist va boshqalar) bilan hamkorligimiz orqali AQSh bozoriga kirish imkoniyatlarini yaratamiz.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Banking Support", "Visa Assistance", "Relocation"].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 text-[10px] font-semibold tracking-[0.15em] uppercase text-orange-400 bg-orange-500/10 rounded-full border border-orange-500/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <WorldMap
              dark
              lineColor="#FF6600"
              dots={[
                {
                  start: { lat: 41.2995, lng: 69.2401, label: "Toshkent" },
                  end:   { lat: 37.3382, lng: -121.8863, label: "Silicon Valley" },
                },
                {
                  start: { lat: 41.2995, lng: 69.2401, label: "Toshkent" },
                  end:   { lat: 40.7128, lng: -74.006, label: "New York" },
                },
                {
                  start: { lat: 41.2995, lng: 69.2401, label: "Toshkent" },
                  end:   { lat: 51.5074, lng: -0.1278, label: "London" },
                },
                {
                  start: { lat: 41.2995, lng: 69.2401, label: "Toshkent" },
                  end:   { lat: 25.2048, lng: 55.2708, label: "Dubai" },
                },
              ]}
            />
          </FadeIn>
        </div>
      </section>

      {/* But wait, there's more */}
      <ButWaitMore />

      <CTASection
        title="Tayyor bo'lsangiz,"
        titleAccent="Hoziroq ariza topshiring"
        description="Hech qanday g'oya erta emas — biz odamlarga investitsiya qilamiz."
      />
    </>
  );
}

function ButWaitMore() {
  const titleRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-10%" });
  const numberInView = useInView(numberRef, { once: true, margin: "-10%" });

  return (
    <section className="py-40 bg-[#0A0A0A]">
      <div className="max-w-[1000px] mx-auto px-6 text-center">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-orange-400 text-[11px] font-semibold tracking-[0.2em] uppercase mb-6">
            Lekin kutib turing...
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            But wait, here is more
          </h2>
          <p className="text-gray-500 text-lg mb-20">Demo Day&apos;da startaplar uchun jami investitsiya hajmi</p>
        </motion.div>

        <motion.div
          ref={numberRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={numberInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="relative"
        >
          <div className="font-display text-8xl md:text-[10rem] font-black text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text leading-none tracking-tighter">
            {numberInView ? (
              <AnimatedCounter target={10000000} duration={2500} prefix="$" />
            ) : (
              "$0"
            )}
          </div>
          <p className="text-gray-600 text-lg mt-6 tracking-wide">startaplar uchun investitsiya</p>
        </motion.div>
      </div>
    </section>
  );
}
