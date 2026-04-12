"use client";

import { Play, ArrowRight, DollarSign } from "lucide-react";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { FadeIn } from "@/components/animation/fade-in";
import Link from "next/link";
import { useRef } from "react";
import { CTASection } from "@/components/layout/cta-section";

const sections = ["interviews", "pitches", "books", "articles"];
const sectionLabels: Record<string, string> = {
  interviews: "Intervyular",
  pitches: "Pitch Videolar",
  books: "Kitoblar",
  articles: "Maqolalar",
};

const libraryItems = {
  interviews: [
    "Startap asoschilar bilan suhbat",
    "Investor ko'zi bilan startap",
    "Texnologiya sohasida muvaffaqiyat",
    "Mentorlik tajribasi",
    "Biznes modelini ishlab chiqish",
    "Startap ekotizimi",
  ],
  pitches: [
    "Batch 1 — Startup 1 Pitch",
    "Batch 1 — Startup 2 Pitch",
    "Batch 1 — Startup 3 Pitch",
    "Batch 1 — Startup 4 Pitch",
    "Batch 1 — Startup 5 Pitch",
    "Batch 1 — Startup 6 Pitch",
  ],
  books: [
    "The Lean Startup — Eric Ries",
    "Zero to One — Peter Thiel",
    "The Hard Thing About Hard Things",
    "Blitzscaling — Reid Hoffman",
    "Crossing the Chasm",
    "The Mom Test",
  ],
  articles: [
    "MVP qanday quriladi?",
    "Investor pitch deck tayyorlash",
    "Startap moliyalashtirish bosqichlari",
    "Product-market fit topish",
    "Jamoa qurish asoslari",
    "O'sish strategiyalari",
  ],
};

export function ResourcesContent() {
  const activeId = useScrollSpy(sections, 300);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#FAFAF8]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="inline-block mb-6 text-[11px] font-semibold tracking-[0.2em] text-orange-500 uppercase">
            Resurslar
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 tracking-tight">
            Bilim bazasi
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Video darslar, podkastlar, maqolalar va boshqa foydali materiallar startup asoschilari uchun.
          </p>
        </div>
      </section>

      {/* Sticky Sidebar Nav */}
      <nav className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-1 pl-6 pr-4 py-4 border-l-0">
        <div className="border-l border-[#EEEEE8] pl-4 flex flex-col gap-1">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`block px-3 py-2 text-[11px] font-semibold tracking-[0.15em] uppercase transition-all whitespace-nowrap ${
                activeId === id
                  ? "text-orange-500 border-l-2 border-orange-500 -ml-[calc(0.25rem+1px)] pl-[calc(0.75rem+1px)]"
                  : "text-gray-400 hover:text-[#1A1A1A]"
              }`}
            >
              {sectionLabels[id]}
            </a>
          ))}
          <Link
            href="https://uzcombinator.uz/valuation"
            target="_blank"
            className="block px-3 py-2 text-[11px] font-semibold tracking-[0.15em] uppercase text-gray-400 hover:text-[#1A1A1A] transition-all whitespace-nowrap"
          >
            Valuation
          </Link>
        </div>
      </nav>

      {/* Mobile bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden flex justify-center gap-0.5 px-3 py-2.5 bg-white/90 backdrop-blur-md border-t border-[#EEEEE8]">
        {sections.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`px-3 py-1.5 text-[10px] font-semibold tracking-[0.1em] uppercase rounded-full transition-all ${
              activeId === id
                ? "text-orange-500 bg-orange-50"
                : "text-gray-400"
            }`}
          >
            {sectionLabels[id]}
          </a>
        ))}
      </nav>

      {/* Featured Resource */}
      <section className="pb-16 bg-[#FAFAF8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-2xl border border-[#EEEEE8] overflow-hidden">
              <div className="aspect-[16/10] md:aspect-auto bg-gradient-to-br from-gray-800 to-gray-950 flex items-center justify-center relative">
                <Play className="h-14 w-14 text-white/40" />
                <span className="absolute bottom-4 right-4 text-[11px] text-white/50 bg-black/30 px-2.5 py-1 rounded-full tracking-wide">
                  12:45
                </span>
              </div>
              <div className="p-10 md:p-12 flex flex-col justify-center">
                <span className="inline-block w-fit mb-4 text-[10px] font-bold tracking-[0.2em] uppercase text-white bg-orange-500 px-3 py-1 rounded-full">
                  Yangi
                </span>
                <h2 className="font-display text-xl md:text-2xl font-bold text-[#1A1A1A] mb-3 tracking-tight">
                  Founder&apos;s Cafe: Startap ekotizimida muvaffaqiyatga erishish
                </h2>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  Muvaffaqiyatli asochilar bilan suhbat — startap qurish, investitsiya jalb qilish va jamoa boshqarish haqida.
                </p>
                <div className="flex items-center gap-2 text-[11px] text-gray-300 tracking-wide">
                  <span>UZ Combinator</span>
                  <span className="text-gray-200">·</span>
                  <span>2 kun oldin</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Library Rows */}
      <section className="pb-16 bg-[#F5F5F0] pt-16">
        <div className="max-w-[1200px] mx-auto px-6 space-y-20">
          {sections.map((sectionId) => (
            <LibraryRow key={sectionId} id={sectionId} title={sectionLabels[sectionId]} items={libraryItems[sectionId as keyof typeof libraryItems]} />
          ))}
        </div>
      </section>

      {/* Valuation Banner */}
      <section className="py-16 bg-[#F5F5F0]">
        <div className="max-w-[1200px] mx-auto px-6">
          <Link
            href="https://uzcombinator.uz/valuation"
            target="_blank"
            className="flex items-center gap-8 p-8 md:p-10 bg-gradient-to-r from-orange-500 via-orange-500 to-orange-400 rounded-2xl text-white hover:shadow-xl hover:-translate-y-0.5 transition-all group"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center flex-shrink-0">
              <DollarSign className="h-7 w-7" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-lg md:text-xl font-bold tracking-tight">Startup Valuation Kalkulyatori</h3>
              <p className="text-sm text-white/70 mt-1">Startupingizning pre-money qiymatini 3 ta standart metod orqali baholang.</p>
            </div>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform flex-shrink-0 opacity-60" />
          </Link>
        </div>
      </section>

      <CTASection
        title="Bilimni amaliyotga,"
        titleAccent="Hoziroq ariza topshiring"
        description="Hech qanday g'oya erta emas — biz odamlarga investitsiya qilamiz."
      />
    </>
  );
}

function LibraryRow({ id, title, items }: { id: string; title: string; items: string[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = () => {
    scrollRef.current?.scrollBy({ left: 600, behavior: "smooth" });
  };

  return (
    <div id={id}>
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-display text-xl md:text-2xl font-bold text-[#1A1A1A] tracking-tight">{title}</h3>
        <button
          onClick={scroll}
          className="w-10 h-10 rounded-full border border-[#EEEEE8] flex items-center justify-center hover:border-orange-300 hover:text-orange-500 transition-colors text-gray-300"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item) => (
          <div
            key={item}
            className="flex-shrink-0 w-60 bg-white rounded-xl overflow-hidden hover:shadow-sm hover:-translate-y-0.5 transition-all cursor-pointer group"
          >
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
              <Play className="h-6 w-6 text-gray-200 group-hover:text-orange-300 transition-colors" />
            </div>
            <div className="p-5">
              <h4 className="text-sm font-semibold text-[#1A1A1A] line-clamp-2">{item}</h4>
              <span className="text-[11px] text-gray-300 mt-2 block tracking-wide">UZ Combinator</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
