"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "./logo";
import { useScrolled } from "@/hooks/use-scrolled";
import { navLinksLeft, navLinksRight } from "@/data/navigation";

export function Navbar() {
  const scrolled = useScrolled();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#EEEEE8]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-20">
        {/* Left Links */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinksLeft.map((link) =>
            link.dropdown ? (
              <NavDropdown key={link.label} link={link} pathname={pathname} />
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`px-3.5 py-2 text-[13px] font-medium tracking-wide uppercase transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-orange-600"
                    : "text-warm-500 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Center Logo */}
        <Logo />

        {/* Right Links */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinksRight.map((link) =>
            link.dropdown ? (
              <NavDropdown key={link.label} link={link} pathname={pathname} />
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`px-3.5 py-2 text-[13px] font-medium tracking-wide uppercase transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-orange-600"
                    : "text-warm-500 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link href="/apply" className="hidden lg:inline-flex">
            <Button variant="ghost" size="sm" className="text-[13px] font-medium tracking-wide uppercase text-warm-500 hover:text-foreground hover:bg-transparent">
              Log in
            </Button>
          </Link>
          <Link href="/apply" className="hidden lg:inline-flex">
            <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 text-[13px] font-medium tracking-wide transition-all duration-200">
              Apply
            </Button>
          </Link>

          {/* Mobile Toggle */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full text-warm-600 hover:bg-warm-100 transition-colors">
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-80 pt-16 bg-[#FAFAF8]">
              <div className="flex flex-col gap-1">
                {[...navLinksLeft, ...navLinksRight].map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-5 py-3.5 text-[13px] font-medium tracking-wide uppercase rounded-lg transition-colors ${
                        pathname === link.href
                          ? "text-orange-600 bg-orange-50"
                          : "text-warm-600 hover:text-foreground hover:bg-warm-100"
                      }`}
                    >
                      {link.label}
                    </Link>
                    {link.dropdown?.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className="block pl-10 py-2.5 text-sm text-warm-400 hover:text-orange-600 transition-colors"
                        {...(sub.external ? { target: "_blank" } : {})}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                ))}
                <div className="mt-6 pt-6 border-t border-[#EEEEE8] flex flex-col gap-3 px-5">
                  <Link href="/apply" onClick={() => setMobileOpen(false)}>
                    <Button variant="ghost" className="w-full justify-center text-[13px] font-medium tracking-wide uppercase text-warm-500">Log in</Button>
                  </Link>
                  <Link href="/apply" onClick={() => setMobileOpen(false)}>
                    <Button className="w-full justify-center bg-orange-500 hover:bg-orange-600 text-white rounded-full text-[13px] font-medium tracking-wide">Apply</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

function NavDropdown({
  link,
  pathname,
}: {
  link: { label: string; href: string; dropdown?: { label: string; href: string; external?: boolean }[] };
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const isActive = pathname === link.href || link.dropdown?.some((d) => pathname === d.href);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={link.href}
        className={`flex items-center gap-1 px-3.5 py-2 text-[13px] font-medium tracking-wide uppercase transition-colors duration-200 ${
          isActive ? "text-orange-600" : "text-warm-500 hover:text-foreground"
        }`}
      >
        {link.label}
        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </Link>
      {open && link.dropdown && (
        <div className="absolute top-full left-0 pt-2 z-50">
          <div className="bg-white rounded-lg border border-[#EEEEE8] py-2 min-w-[200px]">
            {link.dropdown.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-5 py-2.5 text-sm text-warm-500 hover:text-orange-600 hover:bg-warm-50 transition-colors duration-150"
                {...(item.external ? { target: "_blank" } : {})}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
