export interface NavDropdownItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
  dropdown?: NavDropdownItem[];
}

export const navLinksLeft: NavLink[] = [
  { label: "About us", href: "/about" },
  {
    label: "Resources",
    href: "/resources",
    dropdown: [
      { label: "Intervyular", href: "/resources#interviews" },
      { label: "Pitch Videolar", href: "/resources#pitches" },
      { label: "Kitoblar", href: "/resources#books" },
      { label: "Maqolalar", href: "/resources#articles" },
      { label: "Valuation Kalkulyator", href: "https://uzcombinator.uz/valuation", external: true },
    ],
  },
  { label: "Opportunities", href: "/opportunities" },
];

export const navLinksRight: NavLink[] = [
  { label: "Demo Day", href: "/demo-day" },
  {
    label: "Residents",
    href: "/residents",
    dropdown: [
      { label: "Startups", href: "/residents#startups" },
      { label: "Founders", href: "/residents#founders" },
    ],
  },
  { label: "Partners", href: "/partners" },
];
