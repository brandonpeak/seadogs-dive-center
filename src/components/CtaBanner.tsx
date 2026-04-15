import type { CtaBanner as CtaBannerType } from "@/types/sanity";
import ScrollReveal from "./ScrollReveal";

interface CtaBannerProps {
  banner: CtaBannerType;
  phone: string;
}

export default function CtaBanner({ banner, phone }: CtaBannerProps) {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background with parallax */}
      <div
        className="absolute inset-[-20%] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${banner.backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-ocean-950/80" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal direction="none" duration={800}>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          {banner.heading}
        </h2>
        <p className="text-lg sm:text-xl text-ocean-200 mb-10 max-w-2xl mx-auto">
          {banner.subheading}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${phone.replace(/-/g, "")}`}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-heading font-bold text-white bg-red-500 hover:bg-red-600 rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call {phone}
          </a>
          <a
            href={banner.ctaLink}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-heading font-semibold text-white border-2 border-white/80 hover:bg-white hover:text-ocean-900 rounded-lg transition-all hover:scale-105"
          >
            {banner.ctaText}
          </a>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
