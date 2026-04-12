import Link from "next/link";
import { Logo } from "./logo";

const footerLinks = {
  pages: [
    { label: "About us", href: "/about" },
    { label: "Opportunities", href: "/opportunities" },
    { label: "Demo Day", href: "/demo-day" },
    { label: "Apply", href: "/apply" },
    { label: "FAQ", href: "/faq" },
  ],
  resources: [
    { label: "Intervyular", href: "/resources#interviews" },
    { label: "Pitch Videolar", href: "/resources#pitches" },
    { label: "Maqolalar", href: "/resources#articles" },
  ],
  contact: [
    { label: "Telegram", href: "https://t.me/uzcombinator", external: true },
    { label: "Instagram", href: "https://instagram.com/uzcombinator.uz", external: true },
    { label: "Email", href: "mailto:uzcombinator@gmail.com" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#111111] text-warm-400">
      <div className="border-t border-white/[0.06]" />
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="mb-5">
              <Logo white />
            </div>
            <p className="text-sm text-warm-500 leading-relaxed">O&apos;zbekistonning birinchi startup akseleratori.</p>
          </div>
          <div>
            <h5 className="text-[11px] font-medium uppercase tracking-[0.15em] text-warm-300 mb-5">Sahifalar</h5>
            <div className="flex flex-col gap-3">
              {footerLinks.pages.map((l) => (
                <Link key={l.href} href={l.href} className="text-sm text-warm-500 hover:text-white transition-colors duration-200">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h5 className="text-[11px] font-medium uppercase tracking-[0.15em] text-warm-300 mb-5">Resurslar</h5>
            <div className="flex flex-col gap-3">
              {footerLinks.resources.map((l) => (
                <Link key={l.href} href={l.href} className="text-sm text-warm-500 hover:text-white transition-colors duration-200">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h5 className="text-[11px] font-medium uppercase tracking-[0.15em] text-warm-300 mb-5">Bog&apos;lanish</h5>
            <div className="flex flex-col gap-3">
              {footerLinks.contact.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-warm-500 hover:text-white transition-colors duration-200"
                  {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-warm-600">&copy; 2026 UzCombinator. Barcha huquqlar himoyalangan.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-warm-600 hover:text-warm-300 transition-colors duration-200">Maxfiylik</Link>
            <Link href="#" className="text-xs text-warm-600 hover:text-warm-300 transition-colors duration-200">Shartlar</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
