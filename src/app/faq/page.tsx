import type { Metadata } from "next";
import { FaqContent } from "@/components/faq/faq-content";

export const metadata: Metadata = {
  title: "Ko'p so'raladigan savollar | UZ Combinator",
  description:
    "UZ Combinator dasturi, ariza jarayoni, stipendiya va Demo Day haqida eng ko'p beriladigan savollar va javoblar.",
};

export default function FaqPage() {
  return <FaqContent />;
}
