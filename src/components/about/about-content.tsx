"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, ExternalLink } from "lucide-react";
import { teamMembers, teamCategories, teamCategoryLabels } from "@/data/team";
import { FadeIn } from "@/components/animation/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/animation/stagger-children";
import Link from "next/link";
import { CTASection } from "@/components/layout/cta-section";
import Image from "next/image";

const missionBlocks = [
  {
    title: "Builder-first falsafasi",
    desc: "UZ Combinator ijro etuvchi asoschilarga mo'ljallangan. Biz tez harakatlanadigan, tez-tez iteratsiya qiladigan va g'oyalarni mahsulotga aylantiradigan builderlarni qo'llab-quvvatlaymiz.",
  },
  {
    title: "Tuzilgan momentum va o'lchanadigan progress",
    desc: "Bizning 45 kunlik dasturimiz doimiy oldinga harakatni yaratadi — haftalik sprintlar, KPIlar, mahsulot validatsiyasi va mijozlarni jalb qilish.",
  },
  {
    title: "Ekspert rahbarligida yuqori samarali muhit",
    desc: "Maqsadli asoschillar mahsulot, texnologiya, o'sish va moliyalashtirish bo'yicha tajribali operatorlar va mentorlar bilan birga ishlaydi.",
  },
  {
    title: "Global ta'sir va to'liq qo'llab-quvvatlash tizimi",
    desc: "Xalqaro hamkorlar orqali asoschillar global istiqbollar va imkoniyatlarga ega bo'ladi, zamonaviy ish joyi va texnik vositalar bilan qo'llab-quvvatlanadi.",
  },
];

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#FAFAF8]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="inline-block mb-6 text-[11px] font-semibold tracking-[0.2em] text-orange-500 uppercase">
            Biz haqimizda
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 tracking-tight">
            UZ Combinator haqida
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            O&apos;zbekistonning birinchi va eng katta startup akseleratori.
          </p>
        </div>
      </section>

      {/* Origin Article */}
      <section id="story" className="py-24 bg-[#FAFAF8]">
        <div className="max-w-[680px] mx-auto px-6">
          <FadeIn>
            <article className="space-y-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight">
                Qanday boshlangan?
              </h2>
              <p className="text-[#555] text-lg md:text-xl leading-[1.9]">
                Biz O&apos;zbekistonda startup ekotizimini rivojlantirish uchun birlashgan bir guruh insonlarmiz.
                UZ Combinator g&apos;oyasi oddiy savoldan tug&apos;ildi: nima uchun O&apos;zbekistonda
                Y Combinator yoki Techstars kabi dastur yo&apos;q?
              </p>
              <p className="text-[#555] text-lg md:text-xl leading-[1.9]">
                Javob aniq edi — buni biz o&apos;zimiz qurishimiz kerak. 2024-yilda biz birinchi batch uchun
                60 dan ortiq ariza oldik va eng kuchli 12 ta startapni tanladik. 45 kun davomida ular
                mentorlar bilan ishladi, mahsulotlarini yaxshiladi va Demo Day&apos;da investorlar oldiga chiqdi.
              </p>
              <p className="text-[#555] text-lg md:text-xl leading-[1.9]">
                Bugun biz O&apos;zbekistonning birinchi va eng katta startup akseleratorimiz. Bizning maqsadimiz
                oddiy: kuchli builderlarni 45 kun ichida global startap asoschilarga aylantirish.
                Biz faqat g&apos;oyalarga emas, odamlarga investitsiya qilamiz. Har bir batchda biz
                O&apos;zbekistonning eng iste&apos;dodli asoschillarini tanlaymiz va ularga global miqyosda
                raqobatlasha oladigan startaplar qurishga yordam beramiz.
              </p>
              <p className="text-[#555] text-lg md:text-xl leading-[1.9]">
                UZ Combinator bu faqat akselerator emas — bu harakat. Bu O&apos;zbekiston startap ekotizimining
                kelajagini qurayotgan jamoa. Va biz endigina boshladik.
              </p>
            </article>
          </FadeIn>
        </div>
      </section>

      {/* Mission — UZ COMBINATOR NIMA? */}
      <section className="py-28 bg-[#F5F5F0]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-6">
              <span className="text-[11px] font-semibold tracking-[0.2em] text-orange-500 uppercase">
                UZ Combinator nima?
              </span>
            </div>
            <p className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-[#1A1A1A] max-w-3xl mx-auto mb-16 leading-snug tracking-tight">
              UZ Combinator bitta aniq missiya atrofida qurilgan:{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                KUCHLI BUILDERLARNI 45 KUN ICHIDA GLOBAL STARTAP ASOSCHILARGA AYLANTIRISH.
              </span>
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missionBlocks.map((block) => (
              <StaggerItem key={block.title}>
                <div className="p-10 bg-white rounded-2xl border border-[#EEEEE8] hover:shadow-sm transition-all h-full">
                  <h3 className="font-display text-lg font-bold text-[#1A1A1A] mb-4 tracking-tight">
                    {block.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{block.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Team Grid with Tabs */}
      <section id="team" className="py-28 bg-[#FAFAF8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-[11px] font-semibold tracking-[0.2em] text-orange-500 uppercase mb-6 block">
                Jamoa
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight">
                Bizning jamoamiz
              </h2>
            </div>
          </FadeIn>

          <Tabs defaultValue="founders" className="w-full">
            <div className="flex justify-center mb-14">
              <TabsList className="bg-transparent border border-[#EEEEE8] rounded-2xl p-1 flex-wrap justify-center gap-1">
                {teamCategories.map((cat) => (
                  <TabsTrigger
                    key={cat}
                    value={cat}
                    className="rounded-full px-5 py-2 text-[11px] font-semibold tracking-[0.15em] uppercase text-gray-400 data-[state=active]:bg-transparent data-[state=active]:text-orange-500 data-[state=active]:shadow-none transition-colors"
                  >
                    {teamCategoryLabels[cat]}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {teamCategories.map((cat) => (
              <TabsContent key={cat} value={cat} id={cat}>
                <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {teamMembers
                    .filter((m) => m.category === cat)
                    .map((member) => (
                      <StaggerItem key={member.name}>
                        <div className="relative group">
                          <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-orange-50 to-gray-100 relative">
                            {member.image ? (
                              <Image src={member.image} alt={member.name} fill className="object-cover" />
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <User className="h-20 w-20 text-gray-200" />
                              </div>
                            )}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-28 pb-7 px-7">
                              <h4 className="font-display text-xl font-bold text-white tracking-tight">
                                {member.name}
                              </h4>
                              <span className="text-sm text-orange-300 mt-1 block">{member.role}</span>
                              {member.org && (
                                <span className="text-xs text-white/60 mt-0.5 block">{member.org}</span>
                              )}
                            </div>
                            {member.linkedin && (
                              <Link
                                href={member.linkedin}
                                target="_blank"
                                className="absolute bottom-5 right-5 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors"
                              >
                                <ExternalLink className="h-4 w-4 text-white" />
                              </Link>
                            )}
                          </div>
                        </div>
                      </StaggerItem>
                    ))}
                </StaggerChildren>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <CTASection
        title="Biz bilan birga quraylik,"
        titleAccent="Hoziroq ariza topshiring"
        description="Hech qanday g'oya erta emas — biz odamlarga investitsiya qilamiz."
      />
    </>
  );
}
