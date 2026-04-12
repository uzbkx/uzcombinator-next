"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Clock, DollarSign, Users, Zap } from "lucide-react";
import { FadeIn } from "@/components/animation/fade-in";

const quickInfo = [
  { icon: Clock, label: "45 kun", desc: "Intensiv dastur" },
  { icon: DollarSign, label: "$1,000", desc: "Stipendiya" },
  { icon: Users, label: "40+", desc: "Mentorlar" },
  { icon: Zap, label: "Bepul", desc: "Ariza topshirish" },
];

export function ApplyContent() {
  return (
    <>
      <section className="pt-32 pb-20 bg-[#FAFAF8]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="inline-block mb-6 text-[11px] font-semibold tracking-[0.2em] text-orange-500 uppercase">
            Ariza
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 tracking-tight">
            Ariza topshirish
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Keyingi batch uchun ariza topshiring yoki mavjud hisobingizga kiring.
          </p>
        </div>
      </section>

      <section className="pb-32 bg-[#FAFAF8]">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Quick Info */}
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {quickInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-[#EEEEE8]">
                  <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-[#1A1A1A] text-lg">{info.label}</div>
                    <div className="text-[11px] text-gray-400 tracking-wide uppercase">{info.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Login (left, narrower) */}
            <FadeIn className="lg:col-span-2">
              <div className="bg-[#FAFAF8] rounded-3xl p-10 border border-[#EEEEE8] h-fit sticky top-24">
                <h2 className="font-display text-xl font-bold text-[#1A1A1A] mb-8 tracking-tight">Kirish</h2>
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="login-email" className="text-[11px] uppercase tracking-[0.15em] text-gray-400 font-semibold">
                      Email
                    </Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="email@example.com"
                      className="mt-2 h-12 rounded-xl border-[#EEEEE8] bg-white focus:border-orange-300 focus:ring-orange-100"
                    />
                  </div>
                  <div>
                    <Label htmlFor="login-password" className="text-[11px] uppercase tracking-[0.15em] text-gray-400 font-semibold">
                      Parol
                    </Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="--------"
                      className="mt-2 h-12 rounded-xl border-[#EEEEE8] bg-white focus:border-orange-300 focus:ring-orange-100"
                    />
                  </div>
                  <Button className="w-full h-12 bg-[#1A1A1A] hover:bg-black text-white rounded-full text-sm font-semibold tracking-wide">
                    Kirish
                  </Button>
                </form>
              </div>
            </FadeIn>

            {/* Application (right, wider) */}
            <FadeIn delay={0.15} className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-10 border border-[#EEEEE8]">
                <h2 className="font-display text-xl font-bold text-[#1A1A1A] mb-8 tracking-tight">Yangi ariza</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-[11px] uppercase tracking-[0.15em] text-gray-400 font-semibold">
                        Ism va familiya *
                      </Label>
                      <Input
                        id="name"
                        placeholder="Ismingiz"
                        className="mt-2 h-12 rounded-xl border-[#EEEEE8] focus:border-orange-300 focus:ring-orange-100"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-[11px] uppercase tracking-[0.15em] text-gray-400 font-semibold">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@example.com"
                        className="mt-2 h-12 rounded-xl border-[#EEEEE8] focus:border-orange-300 focus:ring-orange-100"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-[11px] uppercase tracking-[0.15em] text-gray-400 font-semibold">
                        Telefon
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+998 90 123 45 67"
                        className="mt-2 h-12 rounded-xl border-[#EEEEE8] focus:border-orange-300 focus:ring-orange-100"
                      />
                    </div>
                    <div>
                      <Label htmlFor="startup-name" className="text-[11px] uppercase tracking-[0.15em] text-gray-400 font-semibold">
                        Startap nomi *
                      </Label>
                      <Input
                        id="startup-name"
                        placeholder="Startap nomi"
                        className="mt-2 h-12 rounded-xl border-[#EEEEE8] focus:border-orange-300 focus:ring-orange-100"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="desc" className="text-[11px] uppercase tracking-[0.15em] text-gray-400 font-semibold">
                      Startap haqida *
                    </Label>
                    <Textarea
                      id="desc"
                      placeholder="Startapingiz nima qiladi? Qanday muammoni hal qiladi?"
                      rows={4}
                      className="mt-2 rounded-xl border-[#EEEEE8] focus:border-orange-300 focus:ring-orange-100"
                    />
                  </div>
                  <div>
                    <Label htmlFor="stage" className="text-[11px] uppercase tracking-[0.15em] text-gray-400 font-semibold">
                      Bosqich
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-2 h-12 rounded-xl border-[#EEEEE8] focus:border-orange-300 focus:ring-orange-100">
                        <SelectValue placeholder="Startap bosqichini tanlang" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="idea">G&apos;oya bosqichi</SelectItem>
                        <SelectItem value="mvp">MVP tayyor</SelectItem>
                        <SelectItem value="early">Dastlabki mijozlar bor</SelectItem>
                        <SelectItem value="growth">O&apos;sish bosqichi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="linkedin" className="text-[11px] uppercase tracking-[0.15em] text-gray-400 font-semibold">
                      LinkedIn profil (ixtiyoriy)
                    </Label>
                    <Input
                      id="linkedin"
                      type="url"
                      placeholder="https://linkedin.com/in/..."
                      className="mt-2 h-12 rounded-xl border-[#EEEEE8] focus:border-orange-300 focus:ring-orange-100"
                    />
                  </div>
                  <Button
                    size="lg"
                    className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm font-semibold tracking-wide gap-2"
                  >
                    Ariza topshirish <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
