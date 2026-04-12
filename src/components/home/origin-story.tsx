"use client";

import { FadeIn } from "@/components/animation/fade-in";

const stages = [
  {
    step: "01",
    label: "Ariza topshirish",
    stat: "1,453",
    desc: "startap ariza topshirdi",
  },
  {
    step: "02",
    label: "Jonli suhbat",
    stat: "145",
    desc: "startap tanlandi (~10%)",
  },
  {
    step: "03",
    label: "Ulush va shartlar",
    stat: "40",
    desc: "startap kelishuvga yetdi",
  },
  {
    step: "04",
    label: "45 kunlik dastur",
    stat: "30",
    desc: "startap dasturni yakunladi",
  },
];

export function OriginStory() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="mb-20">
            <span className="inline-block text-[11px] font-semibold tracking-[0.2em] text-[#FF6600] uppercase mb-5">
              Nima bu?
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight max-w-2xl">
              UzCombinator nima?
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Left: story text */}
          <FadeIn className="lg:col-span-3">
            <div className="space-y-6">
              <p className="text-lg text-gray-500 leading-[1.8]">
                UZ Combinator — O&apos;zbekistondagi eng qat&apos;iy startup akseleratorlaridan biri.
                Qabul qilish darajasi atigi <strong className="text-[#1A1A1A] font-semibold">2%</strong> —
                1,453 ta startap ichidan faqat 30 tasi dasturga tanlandi.
              </p>
              <p className="text-lg text-gray-500 leading-[1.8]">
                Dasturga qabul qilingan har bir asoschi <strong className="text-[#1A1A1A] font-semibold">$1,000 stipendiya</strong> oladi
                va 45 kun davomida intensiv akselerator jarayonidan o&apos;tadi.
              </p>
              <p className="text-lg text-gray-500 leading-[1.8]">
                Startaplar traction, MRR, dastur davomidagi o&apos;sish va hamjamiyat
                orasidagi tan olinish asosida tanlanadi.
              </p>
            </div>

            {/* 2% badge */}
            <div className="mt-10 inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-orange-50 border border-orange-100">
              <span className="font-display text-4xl font-black text-orange-500 leading-none">2%</span>
              <span className="text-sm text-gray-500 leading-snug max-w-[180px]">
                Qabul qilish darajasi — O&apos;zbekistonda eng past
              </span>
            </div>

          </FadeIn>

          {/* Right: 4-stage funnel */}
          <FadeIn delay={0.2} className="lg:col-span-2">
            <div className="sticky top-24 bg-[#0A0A0A] rounded-3xl p-8 text-white">
              <h3 className="font-display text-base font-semibold mb-8 tracking-wide uppercase text-gray-400">
                Tanlov bosqichlari
              </h3>
              <ol className="space-y-0">
                {stages.map((s, i) => (
                  <li key={s.step} className="relative flex gap-5">
                    {/* vertical line */}
                    {i < stages.length - 1 && (
                      <div className="absolute left-[19px] top-10 bottom-0 w-px bg-white/10" />
                    )}
                    {/* circle */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-orange-400">{s.step}</span>
                    </div>
                    <div className="pb-8">
                      <p className="text-sm font-semibold text-white leading-tight">{s.label}</p>
                      <p className="mt-1">
                        <span className="font-display text-2xl font-black text-orange-400">{s.stat}</span>
                        <span className="text-xs text-gray-500 ml-2">{s.desc}</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
