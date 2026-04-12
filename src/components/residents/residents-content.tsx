"use client";

import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Grid3X3, Users } from "lucide-react";
import { startups } from "@/data/startups";
import { StaggerChildren, StaggerItem } from "@/components/animation/stagger-children";
import { CTASection } from "@/components/layout/cta-section";
import TeamShowcase from "@/components/ui/team-showcase";
import { batchOneFounders } from "@/data/founders";

export function ResidentsContent() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#FAFAF8]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="inline-block mb-6 text-[11px] font-semibold tracking-[0.2em] text-orange-500 uppercase">
            Rezidentlar
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 tracking-tight">
            Rezidentlar
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            45 kunlik dasturni muvaffaqiyatli yakunlagan startaplar.
          </p>
        </div>
      </section>

      <section id="startups" className="pb-32 bg-[#FAFAF8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <Tabs defaultValue="startups" className="w-full">
            <div className="flex justify-center mb-14">
              <TabsList className="bg-transparent border border-[#EEEEE8] rounded-full p-1">
                <TabsTrigger
                  value="startups"
                  className="rounded-full px-8 py-2.5 text-[11px] font-semibold tracking-[0.15em] uppercase gap-2 text-gray-400 data-[state=active]:bg-transparent data-[state=active]:text-orange-500 data-[state=active]:shadow-none transition-colors"
                >
                  <Grid3X3 className="h-3.5 w-3.5" /> Startups
                </TabsTrigger>
                <TabsTrigger
                  value="founders"
                  className="rounded-full px-8 py-2.5 text-[11px] font-semibold tracking-[0.15em] uppercase gap-2 text-gray-400 data-[state=active]:bg-transparent data-[state=active]:text-orange-500 data-[state=active]:shadow-none transition-colors"
                >
                  <Users className="h-3.5 w-3.5" /> Founders
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="startups">
              <StaggerChildren className="space-y-5">
                {startups.map((s) => (
                  <StaggerItem key={s.name}>
                    <div className="flex items-center gap-8 p-7 bg-white rounded-2xl border border-[#EEEEE8] hover:border-orange-200 hover:shadow-sm transition-all">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center flex-shrink-0">
                        <span className="font-display font-bold text-orange-500 text-sm">{s.name.replace("Startup ", "S")}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display font-bold text-[#1A1A1A] text-lg tracking-tight">{s.name}</h4>
                        <p className="text-sm text-gray-400 mt-1">{s.description}</p>
                      </div>
                      <Badge variant="outline" className="flex-shrink-0 text-[10px] tracking-[0.1em] uppercase border-[#EEEEE8] text-gray-400">
                        {s.batch}
                      </Badge>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </TabsContent>

            <TabsContent value="founders" id="founders">
              <div className="flex justify-center">
                <TeamShowcase members={batchOneFounders} />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <CTASection
        title="Navbatdagi kuchli startap"
        titleAccent="siz bo'lishingiz mumkin"
        description="Har yili biz eng istiqbolli asoschilarga investitsiya qilamiz. Ariza topshiring."
      />
    </>
  );
}
