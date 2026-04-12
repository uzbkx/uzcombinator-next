export interface TestimonialSegment {
  text: string;
  name: string;
  bold?: boolean;
}

export const flowingTestimonials: TestimonialSegment[] = [
  { text: "UZ Combinator menga g'oyalar emas, tezlik muhimligini o'rgatdi.", name: "Jafar" },
  { text: "Tez harakat qilishni, taxminlarni sinashni va haqiqatga erta yuzlashishni o'rgandim — hatto noqulay bo'lsa ham.", name: "Jafar", bold: true },
  { text: "Men minglab foydalanuvchi bilan keldim va hammasi joyida deb o'ylardim.", name: "Abdulaziz" },
  { text: "Dastur menga noto'g'ri narsalarni kuzatayotganimni ko'rsatdi. Pivotdan keyin 2 haftada natijaga chiqdim.", name: "Abdulaziz", bold: true },
  { text: "Mahsulot yaxshilandi, ha. Lekin asosiysi — bozorni tushundim.", name: "Ziyobek" },
  { text: "Dastur davomida birinchi xalqaro mijozlarimizni imzoladik.", name: "Ziyobek", bold: true },
  { text: "Menga hech kim to'lamaydi deyishdi.", name: "T.Rahmonov" },
  { text: "Endi jiddiy daromad bor. UzCombinator menga funksiya emas, biznes qurishni o'rgatdi.", name: "T.Rahmonov", bold: true },
  { text: "Bundan keyin faqat natija uchun ishlashni qaror qildim.", name: "Dilshodbek", bold: true },
  { text: "Har qanday fikr-mulohazaga \"rahmat\" deyishni o'rgandim.", name: "Otabek" },
];
