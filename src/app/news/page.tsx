import { ArrowRight } from "lucide-react";
import { newsItems } from "@/data/news";
import { CTASection } from "@/components/layout/cta-section";

export default function NewsPage() {
  const featured = newsItems.find((n) => n.featured);
  const rest = newsItems.filter((n) => !n.featured);

  return (
    <>
      <section className="pt-32 pb-20 bg-[#FAFAF8]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="inline-block mb-6 text-[11px] font-semibold tracking-[0.2em] text-orange-500 uppercase">
            Yangiliklar
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 tracking-tight">
            Yangiliklar
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            UZ Combinator dunyosidan so&apos;nggi yangiliklar va e&apos;lonlar.
          </p>
        </div>
      </section>

      <section className="pb-32 bg-[#FAFAF8]">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Featured */}
          {featured && (
            <div className="mb-16 bg-white rounded-2xl overflow-hidden border border-[#EEEEE8]">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="aspect-[16/10] md:aspect-auto bg-gradient-to-br from-orange-100 to-gray-100 flex items-center justify-center min-h-[320px]">
                  <span className="text-7xl text-orange-200 font-display font-bold">UZ</span>
                </div>
                <div className="p-10 md:p-14 flex flex-col justify-center">
                  <span className="inline-block w-fit mb-4 text-[10px] font-bold tracking-[0.2em] uppercase text-orange-500">
                    {featured.category}
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4 tracking-tight">
                    {featured.title}
                  </h2>
                  <p className="text-gray-400 mb-6 leading-relaxed">{featured.description}</p>
                  <span className="text-[11px] text-gray-300 tracking-wide">{featured.date}</span>
                </div>
              </div>
            </div>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-sm hover:-translate-y-0.5 transition-all cursor-pointer group"
              >
                <div className="aspect-video bg-gradient-to-br from-orange-50 to-gray-100 flex items-center justify-center">
                  <span className="text-3xl text-gray-200 font-display font-bold">UZ</span>
                </div>
                <div className="p-7">
                  <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-gray-400 mb-3 block">
                    {item.category}
                  </span>
                  <h4 className="font-display font-bold text-[#1A1A1A] mb-3 tracking-tight">{item.title}</h4>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2 leading-relaxed">{item.description}</p>
                  <div className="flex items-center justify-between text-[11px] text-gray-300">
                    <span>{item.date}</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Tayyor bo'lsangiz,"
        titleAccent="Hoziroq ariza topshiring"
        description="Hech qanday g'oya erta emas — biz odamlarga investitsiya qilamiz."
      />
    </>
  );
}
