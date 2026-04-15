import type { Service } from "@/types/sanity";
import ServiceCard from "./ServiceCard";
import ScrollReveal from "./ScrollReveal";

interface ServicesGridProps {
  services: Service[];
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  const [featured, ...rest] = services;

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-12 lg:mb-16">
            <div className="w-12 h-1 bg-red-500 mx-auto mb-6 rounded-full" />
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ocean-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From beginner certifications to expert-level spearfishing, we&apos;ve got everything you need for your underwater adventure.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured card — wide horizontal layout */}
        <ScrollReveal className="mb-6 lg:mb-8">
          <ServiceCard service={featured} variant="featured" />
        </ScrollReveal>

        {/* Remaining cards — asymmetric grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {rest.map((service, i) => (
            <ScrollReveal key={service.slug} delay={i * 80} distance={30}>
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
