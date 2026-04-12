export interface Startup {
  name: string;
  description: string;
  batch: string;
  founders: { name: string; role: string }[];
}

export const startups: Startup[] = [
  { name: "Startup 1", description: "AI-powered logistics platform", batch: "Batch 1", founders: [{ name: "Founder A", role: "CEO & Co-founder" }, { name: "Founder B", role: "CTO & Co-founder" }] },
  { name: "Startup 2", description: "Fintech for SMEs", batch: "Batch 1", founders: [{ name: "Founder C", role: "CEO" }] },
  { name: "Startup 3", description: "EdTech marketplace", batch: "Batch 1", founders: [{ name: "Founder D", role: "CEO & Founder" }, { name: "Founder E", role: "CTO" }] },
  { name: "Startup 4", description: "HealthTech diagnostics", batch: "Batch 1", founders: [{ name: "Founder F", role: "CEO" }] },
  { name: "Startup 5", description: "AgriTech supply chain", batch: "Batch 1", founders: [{ name: "Founder G", role: "CEO & Founder" }] },
  { name: "Startup 6", description: "E-commerce SaaS", batch: "Batch 1", founders: [{ name: "Founder H", role: "CEO & Co-founder" }] },
];
