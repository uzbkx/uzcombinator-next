"use client";

import { ReactNode } from "react";

interface InfiniteScrollProps {
  children: ReactNode;
  duration?: number;
  className?: string;
}

export function InfiniteScroll({ children, duration = 25, className }: InfiniteScrollProps) {
  return (
    <div className={`relative overflow-hidden ${className || ""}`}>
      <div
        className="flex gap-12 w-max"
        style={{
          animation: `partnerScroll ${duration}s linear infinite`,
        }}
      >
        {children}
        {children}
      </div>
      {/* Fade masks */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FAFAF8] to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FAFAF8] to-transparent pointer-events-none z-10" />
    </div>
  );
}
