"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Reverse animation direction */
  reverse?: boolean;
  /** How many times to duplicate the children (for seamless loop) */
  repeat?: number;
  /** Vertical mode */
  vertical?: boolean;
}

/**
 * CSS-based infinite marquee.
 * Control speed via `[--duration:30s]` and gap via `[--gap:1rem]` class utilities.
 */
export function Marquee({
  className,
  reverse = false,
  repeat = 4,
  vertical = false,
  children,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden [--gap:1rem]",
        vertical ? "flex-col" : "flex-row",
        className,
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          aria-hidden={i > 0}
          className={cn(
            "flex min-w-0 shrink-0 gap-[var(--gap)]",
            vertical
              ? "flex-col animate-marquee-vertical"
              : "flex-row animate-marquee",
            reverse && "[animation-direction:reverse]",
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
