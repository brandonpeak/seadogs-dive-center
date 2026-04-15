import type { AboutTeaser as AboutTeaserType } from "@/types/sanity";
import ScrollReveal from "./ScrollReveal";

interface AboutTeaserProps {
  about: AboutTeaserType;
}

export default function AboutTeaser({ about }: AboutTeaserProps) {
  return (
    <section className="section-padding bg-ocean-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image — slides in from left */}
          <ScrollReveal direction="left" duration={800}>
            <div className="relative">
              <div
                className="aspect-[4/3] rounded-2xl bg-cover bg-center shadow-lg"
                style={{ backgroundImage: `url(${about.image})` }}
              />
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-500/15 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-ocean-400/20 rounded-2xl -z-10" />
            </div>
          </ScrollReveal>

          {/* Content — slides in from right */}
          <ScrollReveal direction="right" duration={800} delay={200}>
            <div>
              <div className="w-12 h-1 bg-red-500 mb-6 rounded-full" />
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ocean-900 mb-6">
                {about.heading}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {about.body}
              </p>
              <a
                href={about.ctaLink}
                className="inline-flex items-center px-6 py-3 font-heading font-bold text-red-500 border-2 border-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all hover:scale-105"
              >
                {about.ctaText}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
