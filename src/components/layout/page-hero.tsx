interface PageHeroProps {
  tag: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

export function PageHero({ tag, title, description, children }: PageHeroProps) {
  return (
    <section className="pt-36 pb-20 bg-background">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <span className="inline-block mb-5 text-[11px] font-medium uppercase tracking-[0.15em] text-orange-600">
          {tag}
        </span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5" style={{ letterSpacing: "-0.02em" }}>
          {title}
        </h1>
        <p className="text-warm-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">{description}</p>
        {children}
      </div>
    </section>
  );
}
