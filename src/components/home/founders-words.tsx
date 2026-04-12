"use client";

import { motion } from "framer-motion";
import { flowingTestimonials } from "@/data/testimonials";
import { TypewriterAvatars, type FounderCard } from "@/components/ui/typewriter-testimonial";

// Short bio shown in the hover bubble for each founder
const founderCards: FounderCard[] = [
  {
    name: "Jafar",
    jobtitle: "Founder, Batch 1",
    image: "https://images.unsplash.com/photo-1507003211169-0a6dd7228f2d?w=120&h=120&fit=crop&crop=face",
    text: "Jafar dasturga g'oya bosqichida keldi. 45 kun ichida to'liq pivotni amalga oshirdi va birinchi to'lovchi mijozlarini topdi.",
  },
  {
    name: "Abdulaziz",
    jobtitle: "Founder, Batch 1",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face",
    text: "Abdulaziz 1000+ foydalanuvchi bilan keldi. Dastur noto'g'ri metrikalarni kuzatayotganini aniqladi — pivotdan keyin 2 haftada daromad boshlandi.",
  },
  {
    name: "Ziyobek",
    jobtitle: "Founder, Batch 1",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&h=120&fit=crop&crop=face",
    text: "Ziyobek dastur davomida birinchi xalqaro mijozlarini imzoladi. Bozorni tushunish uning eng katta yutug'i bo'ldi.",
  },
  {
    name: "T. Rahmonov",
    jobtitle: "Founder, Batch 1",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120&fit=crop&crop=face",
    text: "Hamma to'lamasligini aytdi. UzCombinator unga funksiya emas, haqiqiy biznes qurishni o'rgatdi. Bugun jiddiy daromad bor.",
  },
  {
    name: "Dilshodbek",
    jobtitle: "Founder, Batch 1",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=120&h=120&fit=crop&crop=face",
    text: "Dilshodbek dasturdan faqat natija uchun ishlash qarorini oldi. Bugun uning startapi O'zbekiston bozorida faol o'smoqda.",
  },
  {
    name: "Otabek",
    jobtitle: "Founder, Batch 1",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=120&h=120&fit=crop&crop=face",
    text: "Otabek feedback madaniyatini o'rgandi. Har qanday tanqidni imkoniyat sifatida ko'rib, mahsulotini tez iteratsiya qildi.",
  },
];

// Map name → FounderCard for quick lookup in the flowing text
const founderByName = Object.fromEntries(founderCards.map(f => [f.name.split(" ")[0], f]));

export function FoundersWords() {
  return (
    <section className="py-32 bg-[#FAFAF8]">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="mb-14 space-y-6">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-gray-400 uppercase">
            Asoschillar so&apos;zi bilan
          </p>
          {/* Hover avatars — hover each to see who's speaking */}
          <TypewriterAvatars founders={founderCards} />
        </div>

        {/* Flowing testimonial paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="leading-[1.6]"
        >
          {flowingTestimonials.map((segment, i) => {
            const prevName = i > 0 ? flowingTestimonials[i - 1].name : null;
            const showAvatar = (i === 0) || (prevName !== null && prevName !== segment.name);
            const firstName = segment.name.split(" ")[0];
            const founder = founderByName[firstName];

            return (
              <span key={i}>
                {showAvatar && founder && (
                  <span className="inline-block align-middle mx-2">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      title={founder.name}
                      className="w-7 h-7 rounded-full border-2 border-orange-200 object-cover inline-block"
                    />
                  </span>
                )}
                <span
                  className={`text-2xl md:text-3xl ${
                    segment.bold
                      ? "font-bold text-[#1A1A1A]"
                      : "text-gray-400"
                  }`}
                >
                  {segment.text}
                </span>
                {" "}
              </span>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
