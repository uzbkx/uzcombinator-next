"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Marquee } from "@/components/ui/marquee";
import { CTASection } from "@/components/layout/cta-section";
import { FadeIn } from "@/components/animation/fade-in";

// ─── Marquee questions ────────────────────────────────────────────────────────
const marqueeQuestions = [
  "UZ Combinator nima?",
  "Ariza topshirish bepulmi?",
  "Dastur qancha davom etadi?",
  "Qabul qilish darajasi qancha?",
  "$1,000 stipendiya kimga beriladi?",
  "Mentor kim bo'ladi?",
  "Demo Day nima?",
  "Investitsiya olish mumkinmi?",
  "Qancha startap qabul qilinadi?",
  "O'zbekistondan tashqaridan ham ariza topshirish mumkinmi?",
  "45 kunlik dasturda nima qilinadi?",
  "Bridge to Silicon Valley nima?",
];

// Split into 3 rows
const [row1, row2, row3] = [
  marqueeQuestions.slice(0, 4),
  marqueeQuestions.slice(4, 8),
  marqueeQuestions.slice(8, 12),
];

// ─── FAQ data ─────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "UZ Combinator nima?",
    a: "UZ Combinator — O'zbekistondagi eng qat'iy startup akseleratorlaridan biri. Biz erta bosqichdagi asoschilarga mahsulot strategiyasi, o'sish va investor-tayyor taqdimot bo'yicha yordam beramiz. Qabul qilish darajasi atigi 2% — bu sifatga sodiqligimizning dalili.",
  },
  {
    q: "Dasturga kimlar ariza topshira oladi?",
    a: "Erta bosqichdagi har qanday sohadagi startap asoschilari ariza topshirishga haqli. Texnologiya, fintech, agritech, edtech yoki ijtimoiy tadbirkorlik — muhimi qat'iyat va haqiqiy muammoni hal qilish istagingiz.",
  },
  {
    q: "Qabul qilish darajasi qancha?",
    a: "Qabul qilish darajasi atigi 2%. Birinchi batch'da 1,453 ta startap ariza topshirdi — ulardan 145 tasi jonli suhbatga chaqirildi, 40 tasi shartlarga kelishdi va 30 tasi dasturni yakunladi. Bu jarayon sifatni ta'minlaydi.",
  },
  {
    q: "Stipendiya va bonuslar nimalardan iborat?",
    a: "Tanlangan har bir asoschi $1,000 stipendiya, zamonaviy coworking maydoniga to'liq kirish, zarur texnik vositalar va shaxsiy mentor bilan ishlash imkoniyatini oladi.",
  },
  {
    q: "45 kunlik dasturda nima qilinadi?",
    a: "Dastur davomida siz traction, product-market fit, MRR o'sishi va investor-tayyor pitch ustida intensiv ishlaysiz. Shaxsiy mentor va trekker kundalik yo'l-yo'riq beradi. Har hafta metriklar bo'yicha hisobot va peer-review session bo'lib o'tadi.",
  },
  {
    q: "Demo Day nima va unda kimlar qatnashadi?",
    a: "Demo Day — dastur yakunidagi investitsiya platformasi. Eng yaxshi startaplar faol O'zbek va xalqaro investorlar oldida pitch taqdim etadi. Bu O'zbekistondagi eng yirik startup investitsiya eventi bo'lib, jami $10M+ investitsiya jalb qilinishi kutilmoqda.",
  },
  {
    q: "Bridge to Silicon Valley dasturi nima?",
    a: "StarX, Alchemist Accelerator va boshqa Silicon Valley akseleratorlari bilan hamkorligimiz orqali eng yaxshi startaplarga AQSh bozoriga kirish imkoniyati yaratiladi. Banking support, visa yordami va relocation bo'yicha ko'mak ko'rsatiladi.",
  },
  {
    q: "Ariza topshirish bepulmi?",
    a: "Ha, ariza topshirish to'liq bepul. Veb-saytimiz orqali ariza qoldiring — jarayon 15-20 daqiqa vaqt oladi. Barcha arizalar ko'rib chiqiladi va natija 2-3 hafta ichida ma'lum qilinadi.",
  },
];

// ─── Badge pill ────────────────────────────────────────────────────────────────
function QuestionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center whitespace-nowrap rounded-none border border-orange-100 bg-orange-50 px-3 py-1.5 text-sm font-medium text-[#1A1A1A]">
      {children}
    </span>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────
export function FaqContent() {
  return (
    <>
      {/* ── Hero + Marquee ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#FAFAF8] pt-32 pb-0">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <FadeIn>
            <span className="inline-block mb-5 text-[11px] font-semibold tracking-[0.2em] text-orange-500 uppercase">
              Savol-javoblar
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight max-w-3xl mx-auto">
              Ko&apos;p so&apos;raladigan savollar
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-base md:text-lg text-gray-400 leading-relaxed">
              UZ Combinator haqida bilmoqchi bo&apos;lgan hamma narsangiz.
              Javob topa olmadingizmi?{" "}
              <a
                href="https://t.me/uzcombinator"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 underline underline-offset-2 hover:text-orange-600 transition-colors"
              >
                Telegramda yozing
              </a>
              .
            </p>
          </FadeIn>

          {/* Three-row marquee */}
          <div className="relative mt-12 mx-auto max-w-3xl overflow-hidden">
            {/* Fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#FAFAF8]" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#FAFAF8]" />

            <div className="-mx-6 flex w-screen flex-col gap-2 md:-mx-10 lg:-mx-16">
              <Marquee className="[--duration:40s] [--gap:0.5rem]" repeat={4}>
                {row1.map((q) => (
                  <QuestionBadge key={q}>{q}</QuestionBadge>
                ))}
              </Marquee>
              <Marquee
                className="[--duration:45s] [--gap:0.5rem]"
                repeat={4}
                reverse
              >
                {row2.map((q) => (
                  <QuestionBadge key={q}>{q}</QuestionBadge>
                ))}
              </Marquee>
              <Marquee className="[--duration:38s] [--gap:0.5rem]" repeat={4}>
                {row3.map((q) => (
                  <QuestionBadge key={q}>{q}</QuestionBadge>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </section>

      {/* ── Accordion ──────────────────────────────────────────────────── */}
      <section className="bg-white border-t border-dashed border-neutral-200">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {/* Left column */}
            <Accordion multiple className="divide-y divide-neutral-100">
              {faqs.slice(0, 4).map((faq) => (
                <AccordionItem
                  key={faq.q}
                  value={faq.q}
                  className="border-none py-1"
                >
                  <AccordionTrigger className="py-5 text-left text-base font-semibold text-[#1A1A1A] hover:no-underline hover:text-orange-500 transition-colors [&[data-state=open]]:text-orange-500">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-gray-500 leading-relaxed text-[15px]">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Right column */}
            <Accordion multiple className="divide-y divide-neutral-100">
              {faqs.slice(4).map((faq) => (
                <AccordionItem
                  key={faq.q}
                  value={faq.q}
                  className="border-none py-1"
                >
                  <AccordionTrigger className="py-5 text-left text-base font-semibold text-[#1A1A1A] hover:no-underline hover:text-orange-500 transition-colors [&[data-state=open]]:text-orange-500">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-gray-500 leading-relaxed text-[15px]">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <CTASection
        title="Savollaringiz yo'qmi?"
        titleAccent="Hoziroq ariza topshiring"
        description="Hech qanday g'oya erta emas — biz odamlarga investitsiya qilamiz."
      />
    </>
  );
}
