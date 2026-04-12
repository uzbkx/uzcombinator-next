"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogoCloud } from "@/components/ui/logo-cloud-3";
import { partners } from "@/data/partners";
import { StaggerChildren, StaggerItem } from "@/components/animation/stagger-children";
import Image from "next/image";

// All partners that have logos — fed into the infinite scroll strip
const sliderLogos = partners
  .filter((p) => !!p.logo)
  .map((p) => ({ src: p.logo as string, alt: p.name }));

export function PartnersContent() {
  const national = partners.filter((p) => p.category === "national");
  const international = partners.filter((p) => p.category === "international");

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#FAFAF8]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="inline-block mb-6 text-[11px] font-semibold tracking-[0.2em] text-orange-500 uppercase">
            Hamkorlar
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 tracking-tight">
            Hamkorlar
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Mahalliy va xalqaro hamkorlarimiz.
          </p>
        </div>
      </section>

      {/* Infinite Logo Strip */}
      <section className="bg-[#FAFAF8] border-y border-[#EEEEE8] py-6">
        <LogoCloud
          logos={sliderLogos}
          className="max-w-full"
        />
      </section>

      {/* Tabbed Grid */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <Tabs defaultValue="national" className="w-full">
            <div className="flex justify-center mb-14">
              <TabsList className="bg-transparent border border-[#EEEEE8] rounded-full p-1">
                <TabsTrigger
                  value="national"
                  className="rounded-full px-8 py-2.5 text-[11px] font-semibold tracking-[0.15em] uppercase text-gray-400 data-[state=active]:bg-transparent data-[state=active]:text-orange-500 data-[state=active]:shadow-none transition-colors"
                >
                  National
                </TabsTrigger>
                <TabsTrigger
                  value="international"
                  className="rounded-full px-8 py-2.5 text-[11px] font-semibold tracking-[0.15em] uppercase text-gray-400 data-[state=active]:bg-transparent data-[state=active]:text-orange-500 data-[state=active]:shadow-none transition-colors"
                >
                  International
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="national">
              <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {national.map((p) => (
                  <StaggerItem key={p.name}>
                    <div className="flex items-center justify-center h-40 bg-white rounded-2xl border border-[#EEEEE8] hover:border-orange-200 hover:shadow-sm transition-all">
                      {p.logo ? (
                        <Image
                          src={p.logo}
                          alt={p.name}
                          width={120}
                          height={40}
                          className="h-8 w-auto object-contain"
                        />
                      ) : (
                        <span className="text-sm font-semibold text-gray-500 tracking-wide">
                          {p.name}
                        </span>
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </TabsContent>

            <TabsContent value="international">
              <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {international.map((p) => (
                  <StaggerItem key={p.name}>
                    <div className="flex items-center justify-center h-40 bg-white rounded-2xl border border-[#EEEEE8] hover:border-orange-200 hover:shadow-sm transition-all">
                      {p.logo ? (
                        <Image
                          src={p.logo}
                          alt={p.name}
                          width={120}
                          height={40}
                          className="h-8 w-auto object-contain"
                        />
                      ) : (
                        <span className="text-sm font-semibold text-gray-500 tracking-wide">
                          {p.name}
                        </span>
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
