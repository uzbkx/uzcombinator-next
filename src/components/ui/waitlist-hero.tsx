"use client";

import { useState, useRef } from "react";

export const WaitlistHero = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      fireConfetti();
    }, 1500);
  };

  const fireConfetti = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: {
      x: number; y: number; vx: number; vy: number;
      life: number; color: string; size: number;
    }[] = [];
    const confettiColors = ["#FF6600", "#10b981", "#fbbf24", "#f472b6", "#fff"];

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 12,
        vy: (Math.random() - 2) * 10,
        life: 100,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        size: Math.random() * 4 + 2,
      });
    }

    const animate = () => {
      if (particles.length === 0) { ctx.clearRect(0, 0, canvas.width, canvas.height); return; }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy; p.vy += 0.5; p.life -= 2;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.life / 100);
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
        if (p.life <= 0) { particles.splice(i, 1); i--; }
      }
      requestAnimationFrame(animate);
    };
    animate();
  };

  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center">
      <div className="relative w-full h-screen overflow-hidden bg-[#09090b]">
        {/* Spinning rings background */}
        <SpinningRingsBackground />

        {/* Gradient overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to top, #09090b 10%, rgba(9,9,11,0.8) 40%, transparent 100%)" }} />

        {/* Content */}
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-end pb-24 gap-6">
          <h1 className="text-5xl md:text-6xl font-bold text-center tracking-tight text-white">
            Take a screenshot.
          </h1>
          <p className="text-lg font-medium text-slate-400">Save anything with a screenshot.</p>

          <div className="w-full max-w-md px-4 mt-4 h-[60px] relative">
            <canvas ref={canvasRef}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-50" />

            {status === "success" ? (
              <div className="absolute inset-0 flex items-center justify-center rounded-full bg-emerald-500 animate-bounce-in">
                <div className="flex items-center gap-2 text-white font-semibold text-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>You&apos;re on the list!</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative w-full h-full">
                <input type="email" required placeholder="name@email.com" value={email}
                  disabled={status === "loading"} onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-[60px] pl-6 pr-[150px] rounded-full outline-none bg-zinc-800 text-white placeholder-zinc-500 disabled:opacity-70"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)" }} />
                <div className="absolute top-[6px] right-[6px] bottom-[6px]">
                  <button type="submit" disabled={status === "loading"}
                    className="h-full px-6 rounded-full font-medium text-white bg-[#0079da] hover:brightness-110 active:scale-95 transition-all min-w-[130px] flex items-center justify-center disabled:cursor-wait">
                    {status === "loading" ? (
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    ) : "Join waitlist"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/** Reusable spinning concentric rings — extracted for use in other sections */
export function SpinningRingsBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ perspective: "1200px", transform: "perspective(1200px) rotateX(15deg)", transformOrigin: "center bottom" }}>
      {/* Outer ring — clockwise */}
      <div className="absolute inset-0 animate-spin-slow">
        <div className="absolute top-1/2 left-1/2"
          style={{ width: "2000px", height: "2000px", transform: "translate(-50%, -50%) rotate(279.05deg)" }}>
          <img src="https://framerusercontent.com/images/oqZEqzDEgSLygmUDuZAYNh2XQ9U.png?scale-down-to=2048"
            alt="" className="w-full h-full object-cover opacity-50" />
        </div>
      </div>
      {/* Middle ring — counter-clockwise */}
      <div className="absolute inset-0 animate-spin-slow-reverse">
        <div className="absolute top-1/2 left-1/2"
          style={{ width: "1000px", height: "1000px", transform: "translate(-50%, -50%) rotate(304.42deg)" }}>
          <img src="https://framerusercontent.com/images/UbucGYsHDAUHfaGZNjwyCzViw8.png?scale-down-to=1024"
            alt="" className="w-full h-full object-cover opacity-60" />
        </div>
      </div>
      {/* Inner ring — clockwise */}
      <div className="absolute inset-0 animate-spin-slow">
        <div className="absolute top-1/2 left-1/2"
          style={{ width: "800px", height: "800px", transform: "translate(-50%, -50%) rotate(48.33deg)" }}>
          <img src="https://framerusercontent.com/images/Ans5PAxtJfg3CwxlrPMSshx2Pqc.png"
            alt="" className="w-full h-full object-cover opacity-80" />
        </div>
      </div>
    </div>
  );
}
