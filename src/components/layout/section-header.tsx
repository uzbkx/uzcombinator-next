interface SectionHeaderProps {
  tag?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({ tag, title, description, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {tag && (
        <span className="inline-block mb-5 text-[11px] font-medium uppercase tracking-[0.15em] text-orange-600">
          {tag}
        </span>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ letterSpacing: "-0.02em" }}>
        {title}
      </h2>
      {description && (
        <p className={`text-warm-400 text-lg leading-relaxed ${centered ? "max-w-lg mx-auto" : "max-w-lg"}`}>{description}</p>
      )}
    </div>
  );
}
