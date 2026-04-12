export interface NewsItem {
  title: string;
  description: string;
  category: string;
  date: string;
  featured?: boolean;
}

export const newsItems: NewsItem[] = [
  { title: "UZ Combinator Batch 2 uchun ariza qabul qilishni boshladi", description: "Yangi batch uchun ariza topshirish oynasi ochildi.", category: "E'lon", date: "2026-04-01", featured: true },
  { title: "Demo Day: Batch 1 natijalari", description: "12 ta startap investorlarga pitch qildi.", category: "Tadbir", date: "2026-03-15" },
  { title: "StarX hamkorligi e'lon qilindi", description: "Silicon Valley akseleratori bilan yangi dastur.", category: "Hamkorlik", date: "2026-03-10" },
  { title: "Founder's Cafe: Yangi podcast seriyasi", description: "Muvaffaqiyatli asoschillar bilan suhbat.", category: "Media", date: "2026-03-05" },
  { title: "IT Park bilan birgalikda hackathon", description: "48 soatlik intensiv hackathon.", category: "Tadbir", date: "2026-02-28" },
];
