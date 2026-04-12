"use client";

import { AnimatedCounter } from "@/components/animation/animated-counter";
import { CTASection } from "@/components/layout/cta-section";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { WorldMap } from "@/components/ui/map";
import { TextParallaxContent, ParallaxBlockContent } from "@/components/ui/text-parallax-content-scroll";
import { FadeIn } from "@/components/animation/fade-in";

const opportunities = [
  {
    subheading: "Moliyaviy qo'llab-quvvatlash",
    heading: "$1,000 Stipendiya",
    title: "$1,000 stipendiya va ish sharoitlari",
    desc: "Har bir tanlangan asoschi 1,000 AQSh dollari stipendiyasi, zamonaviy coworking maydoniga kirish va zarur texnik vositalarni oladi.",
    tag: "Batch 2 uchun",
    imgUrl: "/opportunities/stipend.png",
  },
  {
    subheading: "Shaxsiy yo'nalish",
    heading: "Mentorlar va Trekkerlar",
    title: "Har bir startap uchun shaxsiy mentor",
    desc: "Har bir startapga shaxsiy mentor va trekker biriktiriladi. Ular mahsulot strategiyasi, texnologiya va o'sish bo'yicha kundalik yo'l-yo'riq berib, asoschillarni real natijaga yetaklaydi.",
    tag: "40+ ekspert",
    imgUrl: "/opportunities/mentors.png",
  },
  {
    subheading: "Raqobat muhiti",
    heading: "Raqobatbardosh Ekotizim",
    title: "45 kun ichida eng tez o'sish",
    desc: "45 kun davomida builderlar metriklar orqali o'lchanadigan, bir-biridan o'rganadigan va tez qaror qabul qiladigan raqobatbardosh ekotizimda ishlaydi.",
    tag: "Intensiv dastur",
    imgUrl: "/opportunities/competitive.png",
  },
  {
    subheading: "Global miqyos",
    heading: "Investor-tayyor Pitch",
    title: "Global fikrlash va investor-tayyor taqdimot",
    desc: "Biz asoschilarga global nuqtai nazarni rivojlantirishga yordam beramiz va ularni investorlar oldida aniq va ishonchli taqdimot qilishga o'rgatamiz.",
    tag: "Demo Day",
    imgUrl: "/opportunities/pitch.png",
  },
  {
    subheading: "Hamjamiyat",
    heading: "Kuchlilar bilan bir xonada",
    title: "Tajribali asoschillar, investorlar, liderlar",
    desc: "Siz yolg'iz qurmaydigan bo'lasiz. Tajribali asoschillar, investorlar va sanoat liderlaridan iborat jamoada ishlaysiz — ularning tajribasi va tarmog'idan bevosita foydalanasiz.",
    tag: "Network",
    imgUrl: "/opportunities/tech.png",
  },
  {
    subheading: "Investitsiya",
    heading: "Investitsiya Imkoniyati",
    title: "Demo Day'da to'g'ridan-to'g'ri investorlar bilan",
    desc: "Dastur yakunida eng yaxshi startaplar Demo Day'da faol investorlar oldida pitch taqdim etadi. Bu O'zbekistondagi eng yirik startup investitsiya platformasi.",
    tag: "Demo Day",
    imgUrl: "/opportunities/investment.png",
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

      {/* Parallax Benefit Scroll */}
      <div className="bg-[#FAFAF8]">
        {opportunities.map((o) => (
          <TextParallaxContent
            key={o.heading}
            imgUrl={o.imgUrl}
            subheading={o.subheading}
            heading={o.heading}
          >
            <ParallaxBlockContent
              title={o.title}
              desc={o.desc}
              tag={o.tag}
              href="/apply"
              buttonLabel="Ariza topshirish"
            />
          </TextParallaxContent>
        ))}
      </div>

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
                  // StarX — Menlo Park / Silicon Valley
                  start: { lat: 41.2995, lng: 69.2401, label: "Toshkent" },
                  end:   { lat: 37.4530, lng: -122.1817, label: "StarX" },
                },
                {
                  // Alchemist Accelerator — San Francisco
                  start: { lat: 41.2995, lng: 69.2401, label: "Toshkent" },
                  end:   { lat: 37.7749, lng: -122.4194, label: "Alchemist" },
                },
                {
                  // Silicon Valley hub (San Jose) — general SV connection
                  start: { lat: 41.2995, lng: 69.2401, label: "Toshkent" },
                  end:   { lat: 37.3382, lng: -121.8863, label: "Silicon Valley" },
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
