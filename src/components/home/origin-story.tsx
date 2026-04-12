"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animation/fade-in";
import { Check } from "lucide-react";

export function OriginStory() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="mb-20">
            <span className="inline-block text-[11px] font-semibold tracking-[0.2em] text-[#FF6600] uppercase mb-5">
              Qanday boshlangan?
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight">
              Bizning hikoyamiz
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Text */}
          <FadeIn className="lg:col-span-3">
            <div className="max-w-none space-y-6">
              <p className="text-lg text-gray-500 leading-[1.8]">
                Biz O&apos;zbekistonda startup ekotizimini rivojlantirish uchun birlashgan bir guruh insonlarmiz.
                UZ Combinator g&apos;oyasi oddiy savoldan tug&apos;ildi: nima uchun O&apos;zbekistonda
                Y Combinator yoki Techstars kabi dastur yo&apos;q?
              </p>
              <p className="text-lg text-gray-500 leading-[1.8]">
                Javob aniq edi — buni biz o&apos;zimiz qurishimiz kerak. 2024-yilda biz birinchi batch uchun
                60 dan ortiq ariza oldik va eng kuchli 12 ta startapni tanladik. 45 kun davomida ular
                mentorlar bilan ishladi, mahsulotlarini yaxshiladi va Demo Day&apos;da investorlar oldiga chiqdi.
              </p>
              <p className="text-lg text-gray-500 leading-[1.8]">
                Bugun biz O&apos;zbekistonning birinchi va eng katta startup akseleratorimiz va biz endigina
                boshladik.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-block mt-10 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#1A1A1A] hover:underline underline-offset-4 transition-all"
            >
              Batafsil o&apos;qish
            </Link>
          </FadeIn>

          {/* Sticky card */}
          <FadeIn delay={0.2} className="lg:col-span-2">
            <div className="sticky top-24 bg-[#0A0A0A] rounded-3xl p-10 text-white">
              <h3 className="font-display text-xl font-bold mb-8">Nima qilamiz?</h3>
              <ul className="space-y-5">
                {[
                  "45 kunlik intensiv akselerator dasturi",
                  "$1,000 stipendiya har bir asoschi uchun",
                  "40+ tajribali mentor va ekspert",
                  "Demo Day — investorlar oldida pitch",
                  "Global akseleratorlarga ko'prik",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <Check className="h-4 w-4 text-[#FF6600] flex-shrink-0 mt-1" />
                    <span className="text-sm text-gray-400 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
