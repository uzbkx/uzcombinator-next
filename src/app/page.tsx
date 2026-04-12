import { HeroSection } from "@/components/home/hero-section";
import { OriginStory } from "@/components/home/origin-story";
import { StatsBar } from "@/components/home/stats-bar";
import { PartnerStrip } from "@/components/home/partner-strip";
import { SuccessStories } from "@/components/home/success-stories";
import { FoundersWords } from "@/components/home/founders-words";
import { NetworkCards } from "@/components/home/network-cards";
import { NewsPreview } from "@/components/home/news-preview";
import { CTASection } from "@/components/layout/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OriginStory />
      <StatsBar />
      <PartnerStrip />
      <SuccessStories />
      <FoundersWords />
      <NetworkCards />
      <NewsPreview />
      <CTASection
        title="Tayyor bo'lsangiz,"
        titleAccent="Hoziroq ariza topshiring"
        description="Hech qanday g'oya erta emas — biz odamlarga investitsiya qilamiz."
      />
    </>
  );
}
