"use client";

import { InfiniteScroll } from "@/components/animation/infinite-scroll";
import { partners } from "@/data/partners";
import Image from "next/image";

export function PartnerStrip() {
  return (
    <section className="py-14 bg-[#FAFAF8]">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-center text-[11px] font-semibold tracking-[0.2em] text-gray-400 uppercase mb-10">
          Bizga ishonadi
        </p>
        <InfiniteScroll duration={30}>
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex-shrink-0 px-8 flex items-center justify-center"
            >
              {p.logo ? (
                <Image src={p.logo} alt={p.name} width={100} height={32} className="h-6 w-auto object-contain" />
              ) : (
                <span className="text-sm font-medium text-gray-400 whitespace-nowrap">{p.name}</span>
              )}
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </section>
  );
}
