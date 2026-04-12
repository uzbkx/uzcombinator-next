"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode, useEffect, useRef } from "react";

interface VerticalMarqueeProps {
  children: ReactNode;
  pauseOnHover?: boolean;
  reverse?: boolean;
  className?: string;
  speed?: number;
}

function VerticalMarquee({
  children,
  pauseOnHover = false,
  reverse = false,
  className,
  speed = 30,
}: VerticalMarqueeProps) {
  return (
    <div
      className={cn("group flex flex-col overflow-hidden", className)}
      style={{ "--duration": `${speed}s` } as React.CSSProperties}
    >
      <div
        className={cn(
          "flex shrink-0 flex-col animate-marquee-vertical",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 flex-col animate-marquee-vertical",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}

const marqueeItems = [
  "Tech Founders",
  "Fintech Builders",
  "EdTech Innovators",
  "DeepTech Teams",
  "Social Entrepreneurs",
  "Agritech Startups",
];

interface CTAWithMarqueeProps {
  title?: string;
  titleAccent?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTAWithMarquee({
  title = "Tayyor bo'lsangiz,",
  titleAccent = "Hoziroq ariza topshiring",
  description = "Hech qanday g'oya erta emas — biz odamlarga investitsiya qilamiz.",
  primaryLabel = "Ariza topshirish",
  primaryHref = "/apply",
  secondaryLabel = "Demo Day",
  secondaryHref = "/demo-day",
}: CTAWithMarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = marqueeRef.current;
    if (!container) return;

    const update = () => {
      const items = container.querySelectorAll<HTMLElement>(".marquee-item");
      const rect = container.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      items.forEach((item) => {
        const ir = item.getBoundingClientRect();
        const dist = Math.abs(centerY - (ir.top + ir.height / 2));
        const norm = Math.min(dist / (rect.height / 2), 1);
        item.style.opacity = (1 - norm * 0.8).toString();
      });
    };

    let frame: number;
    const loop = () => { update(); frame = requestAnimationFrame(loop); };
    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left: copy + buttons */}
          <div className="space-y-8">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up"
              style={{ letterSpacing: "-0.02em" }}>
              {title}
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                {titleAccent}
              </span>
            </h2>
            <p className="text-warm-400 text-lg md:text-xl leading-relaxed max-w-md animate-fade-in-up [animation-delay:200ms]">
              {description}
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up [animation-delay:400ms]">
              <Link href={primaryHref}>
                <button className="group relative px-7 py-3.5 bg-white text-[#0A0A0A] rounded-full font-semibold text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2">
                  <span className="relative z-10">{primaryLabel}</span>
                  <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-200 group-hover:translate-x-0.5" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                </button>
              </Link>
              <Link href={secondaryHref}>
                <button className="group relative px-7 py-3.5 bg-transparent text-white rounded-full font-semibold text-sm border border-white/20 overflow-hidden transition-all duration-300 hover:scale-105 hover:border-white/40">
                  <span className="relative z-10">{secondaryLabel}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right: vertical marquee */}
          <div ref={marqueeRef} className="relative h-[420px] lg:h-[500px] hidden lg:flex items-center">
            <div className="relative w-full h-full">
              <VerticalMarquee speed={22} className="h-full">
                {marqueeItems.map((item) => (
                  <div
                    key={item}
                    className="marquee-item font-display text-4xl xl:text-5xl font-light tracking-tight py-6 text-white/80"
                  >
                    {item}
                  </div>
                ))}
              </VerticalMarquee>
              {/* fade edges */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0A0A0A] to-transparent z-10" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
