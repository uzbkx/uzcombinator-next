import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTASection } from "@/components/layout/cta-section";
import { PhotoGallery } from "@/components/ui/gallery";
import { DemoZoomSections } from "@/components/demo-day/zoom-sections";
import { LenisScroll } from "@/components/demo-day/lenis-scroll";

export default function DemoDayPage() {
  return (
    <>
      {/* Lenis smooth scroll — client side effect, renders nothing */}
      <LenisScroll />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="min-h-screen flex items-center justify-center bg-[#0A0A0A] relative overflow-hidden">
        {/* Subtle radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,102,0,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-widest text-orange-500 uppercase mb-6">
            Demo Day
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Demo Kun — Batch 1
          </h1>
          <p className="text-lg text-gray-500 mb-3">2026-yil, Aprel · Toshkent</p>
          <p className="text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed">
            12 ta startap investorlar va texnologiya hamjamiyati oldida o&apos;z
            loyihalarini taqdim etadi. Scroll qilib koring.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/apply"
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 bg-orange-500 text-white rounded-full font-semibold text-sm overflow-hidden transition-all duration-300 hover:bg-orange-600 hover:scale-105 hover:shadow-lg"
            >
              <span className="relative z-10">Ro&apos;yxatdan o&apos;tish</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/apply"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-gray-300 rounded-full font-semibold text-sm border border-white/20 transition-all duration-300 hover:border-white/40 hover:text-white"
            >
              Ariza topshirish
            </Link>
          </div>

          {/* Scroll hint */}
          <div className="mt-16 flex flex-col items-center gap-3 opacity-30">
            <span className="text-[10px] tracking-widest text-white uppercase">
              Scroll to explore
            </span>
            <div className="h-10 w-px bg-white" />
          </div>
        </div>
      </section>

      {/* ── Zoom Parallax: Live Pitches → Investor Networking ─────────── */}
      <DemoZoomSections />

      {/* ── Photo gallery ─────────────────────────────────────────────── */}
      <section className="bg-[#FAFAF8] pb-8">
        <div className="max-w-[1200px] mx-auto px-6">
          <PhotoGallery
            subtitle="Batch 1 — Demo Day"
            title={
              <>
                Eng yaxshi <span className="text-orange-500">lahzalar</span>
              </>
            }
            buttonLabel="Barcha rasmlar"
            animationDelay={0.3}
          />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <CTASection
        title="Demo Kun'ga tayyormisiz?"
        titleAccent="Hoziroq ro'yxatdan o'ting"
        description="Investorlar, mentorlar va startap jamoasi bilan to'g'ridan-to'g'ri uchrashing."
        primaryLabel="Ro'yxatdan o'tish"
        secondaryLabel="Ariza topshirish"
      />
    </>
  );
}
