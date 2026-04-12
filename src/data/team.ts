export interface TeamMember {
  name: string;
  role: string;
  org?: string;
  category: "founders" | "team" | "trackers" | "mentors-strategy" | "mentors-product" | "mentors-sales" | "mentors-branding" | "investors";
  image?: string;
  linkedin?: string;
}

export const teamMembers: TeamMember[] = [
  // === FOUNDERS ===
  { name: "Ulugbek Ismatov", role: "Founder", category: "founders", image: "/team/ulugbek-ismatov.webp" },
  { name: "Murodillo Ismailov", role: "CEO", category: "founders", image: "/team/murodillo-ismailov.webp" },
  { name: "Laylo Ismailova", role: "Co-Founder", category: "founders", image: "/team/laylo-ismailova.webp" },

  // === TEAM ===
  { name: "Ahmadjon Qahramonov", role: "Community Organizer", category: "team", image: "/team/ahmadjon-qahramonov.webp" },
  { name: "Dilxumor Xoldarova", role: "Manager", category: "team", image: "/team/dilxumor-xoldarova.webp" },
  { name: "Ahrorbek Amonov", role: "Developer", category: "team", image: "/team/ahrorbek-amonov.webp" },
  { name: "Azim Egamberdiev", role: "Startup Analyst", category: "team", image: "/team/azim-egamberdiev.webp" },
  { name: "Dilmurod Yuldoshev", role: "Videographer", category: "team", image: "/team/dilmurod-yuldoshev.webp" },
  { name: "Nurali Sharipov", role: "Content Manager", category: "team", image: "/team/nurali-sharipov.webp" },

  // === TRACKERS ===
  { name: "Safina Teshaboyeva", role: "Strategik operatsiyalar va o'sish eksperti", org: "CAU / Astrum / Impact", category: "trackers", image: "/mentors/safina-teshaboyeva.webp" },
  { name: "Abdumalik Maksudov", role: "Startaplarni baholash va investitsiya eksperti", org: "SQB Ventures / UIC / IT Park", category: "trackers", image: "/mentors/abdumalik-maksudov.webp" },
  { name: "Ulug'bek Ismatov", role: "MPMG CEO", org: "MPMG", category: "trackers", image: "/mentors/ulugbek-ismatov-tracker.webp" },
  { name: "Abdul Sharopov", role: "Kuzatuvchi", org: "Sarmo Ventures", category: "trackers", image: "/mentors/abdul-sharopov.webp" },

  // === MENTORS: Strategy & Validation (7) ===
  { name: "Dilshod Zufarov", role: "Strategy & Validation", category: "mentors-strategy", image: "/mentors/dilshod-zufarov.webp" },
  { name: "Shahzod Ismoilov", role: "Strategy & Validation", category: "mentors-strategy", image: "/mentors/shahzod-ismoilov.webp" },
  { name: "Sardor Akhmedov", role: "Strategy & Validation", category: "mentors-strategy", image: "/mentors/sardor-akhmedov.webp" },
  { name: "Farhod Furqatov", role: "Strategy & Validation", category: "mentors-strategy", image: "/mentors/farhod-furqatov.webp" },
  { name: "Abdulaziz Yakubov", role: "Strategy & Validation", category: "mentors-strategy", image: "/mentors/abdulaziz-yakubov.webp" },
  { name: "Samira Latipova", role: "Strategy & Validation", category: "mentors-strategy", image: "/mentors/samira-latipova.webp" },
  { name: "Farhod Norboyev", role: "Strategy & Validation", category: "mentors-strategy", image: "/mentors/farhod-norboyev.webp" },

  // === MENTORS: Product & Technology (6) ===
  { name: "Bunyodbek Jumanazarov", role: "Product & Technology", category: "mentors-product", image: "/mentors/bunyodbek-jumanazarov.webp" },
  { name: "Ozodbek Ulmasov", role: "Product & Technology", category: "mentors-product", image: "/mentors/ozodbek-ulmasov.webp" },
  { name: "Farhod Kamilov", role: "Product & Technology", category: "mentors-product", image: "/mentors/farhod-kamilov.webp" },
  { name: "Nuriddin Imnixunov", role: "Product & Technology", category: "mentors-product", image: "/mentors/nuriddin-imnixunov.webp" },
  { name: "Rustam Xamdamov", role: "Product & Technology", category: "mentors-product", image: "/mentors/rustam-xamdamov.webp" },
  { name: "Islombek Ibragimov", role: "Product & Technology", category: "mentors-product", image: "/mentors/islombek-ibragimov.webp" },

  // === MENTORS: Sales & Growth (4) ===
  { name: "Mavlonbek Murodov", role: "Sales & Growth", category: "mentors-sales", image: "/mentors/mavlonbek-murodov.webp" },
  { name: "Sardor Umirdinov", role: "Sales & Growth", category: "mentors-sales", image: "/mentors/sardor-umirdinov.webp" },
  { name: "Otabek Suvonov", role: "Sales & Growth", category: "mentors-sales", image: "/mentors/otabek-suvonov.webp" },
  { name: "Iskandar Kurbonov", role: "Sales & Growth", category: "mentors-sales", image: "/mentors/iskandar-kurbonov.webp" },

  // === MENTORS: Branding & Investment (4) ===
  { name: "Firdavs Urinov", role: "Branding & Investment", category: "mentors-branding", image: "/mentors/firdavs-urinov.webp" },
  { name: "Alisher Tojiyev", role: "Branding & Investment", category: "mentors-branding", image: "/mentors/alisher-tojiyev.webp" },
  { name: "Aleksey Ivanov", role: "Branding & Investment", category: "mentors-branding", image: "/mentors/alexey-ivanov.webp" },
  { name: "Qudrat Ruzmetov", role: "Branding & Investment", category: "mentors-branding", image: "/mentors/qudrat-ruzmetov.webp" },

  // === INVESTORS (12) ===
  { name: "Abdulaziz Yoqubov", role: "CEO", org: "Yoshlar Ventures", category: "investors", image: "/investors/abdulaziz-yoqubov.webp" },
  { name: "Akmal Paiziev", role: "Founder", org: "Numeo.ai", category: "investors", image: "/investors/akmal-paiziev.webp" },
  { name: "Nuriddin Iminokhunov", role: "Founder & CEO", org: "Global Move", category: "investors", image: "/investors/nuriddin.webp" },
  { name: "Muzaffar Karabayev", role: "Founder & Investor", org: "kpi.com", category: "investors", image: "/investors/muzaffar-karabayev.webp" },
  { name: "Rustam Qoriyev", role: "CEO", org: "Ibrat Farzandlari", category: "investors", image: "/investors/rustam-qoriyev.webp" },
  { name: "Ulug'bek Ismatov", role: "CEO", org: "MPMG", category: "investors", image: "/investors/ulugbek-ismatov.webp" },
  { name: "Sirojiddin Olimov", role: "CEO", org: "Mutolaa", category: "investors", image: "/investors/sirojiddin-olimov.webp" },
  { name: "Orian-Mehroj Rashidov", role: "CEO", org: "Ustoz AI", category: "investors", image: "/investors/orian-rashidov.webp" },
  { name: "Bahromjon Latifov", role: "Head", org: "Dock 2 Dock Freight LLC", category: "investors", image: "/investors/bahromjon-latifov.webp" },
  { name: "Hikmatillo Umarhojiyev", role: "Cofounder/CEO", org: "Findecor.io", category: "investors", image: "/investors/hikmatillo.webp" },
  { name: "Islombek Abdulakhatov", role: "Founder & CEO", org: "Aortavision", category: "investors", image: "/investors/islombek-abdulakhatov.webp" },
  { name: "Islomjon Kodirov", role: "Head", org: "IKT RISHTON LLC", category: "investors", image: "/investors/islomjon-kodirov.webp" },
];

export const teamCategories = [
  "founders", "team", "trackers",
  "mentors-strategy", "mentors-product", "mentors-sales", "mentors-branding",
  "investors"
] as const;

export const teamCategoryLabels: Record<string, string> = {
  founders: "Founders",
  team: "Team",
  trackers: "Trackers",
  "mentors-strategy": "Strategy & Validation",
  "mentors-product": "Product & Technology",
  "mentors-sales": "Sales & Growth",
  "mentors-branding": "Branding & Investment",
  investors: "Investors",
};
