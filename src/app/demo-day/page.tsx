import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DemoBlocks } from "@/components/demo-day/demo-blocks";
import { CTASection } from "@/components/layout/cta-section";
import { PhotoGallery } from "@/components/ui/gallery";

export default function DemoDayPage() {
  return (
    <>
      {/* Full-height gradient hero */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-rose-50 to-amber-50 relative">
        <div className="text-center px-6 max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-widest text-orange-600 uppercase mb-6">Demo Day</span>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold text-gray-900 mb-6">
            Demo Kun — Batch 1
          </h1>
          <p className="text-lg text-gray-500 mb-4">2026-yil, Aprel | Toshkent</p>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            12 ta startap investorlar va texnologiya hamjamiyati oldida o&apos;z loyihalarini taqdim etadi.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/apply" className="group relative inline-flex items-center gap-2 px-7 py-3.5 bg-gray-900 text-white rounded-full font-semibold text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <span className="relative z-10">Ro&apos;yxatdan o&apos;tish</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-200 group-hover:translate-x-0.5" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            </Link>
            <Link href="/apply" className="group relative inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-gray-700 rounded-full font-semibold text-sm border border-gray-300 overflow-hidden transition-all duration-300 hover:scale-105 hover:border-gray-500">
              <span className="relative z-10">Ariza topshirish</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/50 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            </Link>
          </div>
        </div>
      </section>

      <DemoBlocks />

      {/* Photo gallery — content coming soon */}
      <section className="bg-[#FAFAF8] pb-8">
        <div className="max-w-[1200px] mx-auto px-6">
          <PhotoGallery
            subtitle="Batch 1 — Demo Day"
            title={<>Eng yaxshi <span className="text-orange-500">lahzalar</span></>}
            buttonLabel="Barcha rasmlar"
            animationDelay={0.3}
          />
        </div>
      </section>

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
