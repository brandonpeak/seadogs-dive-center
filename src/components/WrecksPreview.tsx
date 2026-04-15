import type { Wreck } from "@/types/sanity";
import WrecksCarousel from "./WrecksCarousel";
import ScrollReveal from "./ScrollReveal";

interface WrecksPreviewProps {
  wrecks: Wreck[];
}

export default function WrecksPreview({ wrecks }: WrecksPreviewProps) {
  return (
    <section className="section-padding bg-ocean-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="w-12 h-1 bg-red-500 mx-auto mb-6 rounded-full" />
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Dive Our Legendary Wrecks
            </h2>
            <p className="text-lg text-ocean-300 max-w-2xl mx-auto">
              Seven named wrecks and reefs within 12 miles of shore. Turtles, rays,
              goliath grouper, and more call these waters home.
            </p>
          </div>
        </ScrollReveal>

        {/* Wreck carousel */}
        <ScrollReveal>
          <WrecksCarousel wrecks={wrecks} />
        </ScrollReveal>

        {/* View all link */}
        <ScrollReveal delay={400}>
          <div className="text-center mt-10">
            <a
              href="/wrecks"
              className="inline-flex items-center font-heading font-semibold text-sand-400 hover:text-sand-300 transition-colors"
            >
              View All Wrecks & Reefs
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
