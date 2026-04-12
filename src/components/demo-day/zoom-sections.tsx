'use client';

import { ZoomParallax } from '@/components/ui/zoom-parallax';

// ─── Live Pitches images ───────────────────────────────────────────────────────
const livePitchImages = [
  {
    src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1280&h=720&fit=crop&auto=format&q=80',
    alt: 'Founder pitching on stage',
  },
  {
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1280&h=720&fit=crop&auto=format&q=80',
    alt: 'Startup presentation event',
  },
  {
    src: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=800&fit=crop&auto=format&q=80',
    alt: 'Speaker at conference',
  },
  {
    src: 'https://images.unsplash.com/photo-1558008258-3256797b43f3?w=1280&h=720&fit=crop&auto=format&q=80',
    alt: 'Audience at demo day',
  },
  {
    src: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=800&fit=crop&auto=format&q=80',
    alt: 'Pitch deck on screen',
  },
  {
    src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1280&h=720&fit=crop&auto=format&q=80',
    alt: 'Startup competition stage',
  },
  {
    src: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1280&h=720&fit=crop&auto=format&q=80',
    alt: 'Tech startup founder presenting',
  },
];

// ─── Investor Networking images ────────────────────────────────────────────────
const networkingImages = [
  {
    src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1280&h=720&fit=crop&auto=format&q=80',
    alt: 'Investor meeting and networking',
  },
  {
    src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1280&h=720&fit=crop&auto=format&q=80',
    alt: 'Business handshake deal',
  },
  {
    src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=800&fit=crop&auto=format&q=80',
    alt: 'Team collaboration session',
  },
  {
    src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1280&h=720&fit=crop&auto=format&q=80',
    alt: 'Networking event crowd',
  },
  {
    src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=800&fit=crop&auto=format&q=80',
    alt: 'Startup founders discussing',
  },
  {
    src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1280&h=720&fit=crop&auto=format&q=80',
    alt: 'Professional meeting in office',
  },
  {
    src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1280&h=720&fit=crop&auto=format&q=80',
    alt: 'Investor pitch session',
  },
];

// ─── Section label strip ───────────────────────────────────────────────────────
function SectionLabel({
  number,
  title,
  description,
  dark = false,
}: {
  number: string;
  title: string;
  description: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`relative z-10 flex flex-col items-center justify-center py-28 px-6 text-center ${
        dark ? 'bg-[#0A0A0A]' : 'bg-[#FAFAF8]'
      }`}
    >
      <span
        className={`inline-block mb-4 text-[11px] font-semibold tracking-[0.25em] uppercase ${
          dark ? 'text-orange-400' : 'text-orange-500'
        }`}
      >
        {number}
      </span>
      <h2
        className={`font-display text-4xl md:text-6xl font-bold tracking-tight max-w-xl ${
          dark ? 'text-white' : 'text-[#1A1A1A]'
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-5 text-base md:text-lg leading-relaxed max-w-md ${
          dark ? 'text-gray-400' : 'text-gray-400'
        }`}
      >
        {description}
      </p>
      {/* scroll hint */}
      <div className="mt-10 flex flex-col items-center gap-2 opacity-40">
        <span className={`text-[10px] tracking-widest uppercase ${dark ? 'text-white' : 'text-[#1A1A1A]'}`}>
          Scroll to zoom
        </span>
        <div className="h-8 w-px bg-current opacity-50" />
      </div>
    </div>
  );
}

// ─── Main export ───────────────────────────────────────────────────────────────
export function DemoZoomSections() {
  return (
    <>
      {/* ── Section 1: Live Pitches ──────────────────────────────────── */}
      <SectionLabel
        number="01 — Live Pitches"
        title="Jonli taqdimotlar"
        description="12 ta startap 5 daqiqalik pitch bilan investorlar va texnologiya jamoasi oldida o'z loyihasini taqdim etadi."
      />
      <ZoomParallax images={livePitchImages} />

      {/* ── Section 2: Investor Networking ──────────────────────────── */}
      <SectionLabel
        number="02 — Investor Networking"
        title="Investor bilan to'g'ridan-to'g'ri"
        description="Demo Day'dan keyin 1-on-1 suhbatlar, shartnomalar va yangi hamkorliklar."
        dark
      />
      <ZoomParallax images={networkingImages} />
    </>
  );
}
