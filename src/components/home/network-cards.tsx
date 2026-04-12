"use client";

import Link from "next/link";
import { Users, Building, TrendingUp, ArrowRight } from "lucide-react";
import { StaggerChildren, StaggerItem } from "@/components/animation/stagger-children";

const cards = [
  {
    icon: Users,
    title: "Mentorlar",
    desc: "40+ tajribali mentor va ekspert sizning startapingizni keyingi bosqichga olib chiqadi.",
    href: "/about#mentors",
  },
  {
    icon: Building,
    title: "Hamkorlar",
    desc: "Mahalliy va xalqaro hamkorlar tarmog'i orqali global imkoniyatlarga ega bo'ling.",
    href: "/partners",
  },
  {
    icon: TrendingUp,
    title: "Investorlar",
    desc: "Angel investorlar va VC fondlari bilan bevosita aloqa o'rnating.",
    href: "/about#investors",
  },
];

export function NetworkCards() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <StaggerItem key={card.title}>
              <Link
                href={card.href}
                className="group block p-10 rounded-2xl bg-white border border-[#EEEEE8] hover:border-orange-200 transition-colors duration-300"
              >
                <card.icon className="h-6 w-6 text-[#1A1A1A] mb-6" />
                <h3 className="font-display text-xl font-bold text-[#1A1A1A] mb-3 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                  {card.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF6600] group-hover:gap-2.5 transition-all duration-300">
                  Batafsil <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
