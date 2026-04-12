export interface Partner {
  name: string;
  category: "national" | "international";
  logo?: string;
}

export const partners: Partner[] = [
  { name: "Yoshlar Ishlari Agentligi", category: "national", logo: "/partners/yia.svg" },
  { name: "Yoshlar Ventures", category: "national", logo: "/partners/yoshlarventures.jpg" },
  { name: "IT Park", category: "national", logo: "/partners/itpark.png" },
  { name: "Aloqa Ventures", category: "national", logo: "/partners/aloqa-ventures.png" },
  { name: "StarX", category: "international", logo: "/partners/starx.png" },
  { name: "Alchemist", category: "international" },
  { name: "Elpic Labs", category: "international", logo: "/partners/elpic-labs.svg" },
  { name: "United Ventures", category: "international", logo: "/partners/uc-ventures.png" },
];
