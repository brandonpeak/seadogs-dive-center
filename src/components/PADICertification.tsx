import type { CertificationLevel } from "@/types/sanity";
import ScrollReveal from "./ScrollReveal";

interface PADICertificationProps {
  levels: CertificationLevel[];
}

export default function PADICertification({ levels }: PADICertificationProps) {
  const pricedLevels = levels.filter((l) => l.price != null);
  const divemaster = levels.find((l) => l.slug === "divemaster");

  return (
    <section id="certifications" className="section-padding bg-ocean-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-12 lg:mb-16">
            <div className="w-12 h-1 bg-red-500 mx-auto mb-6 rounded-full" />
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ocean-900 mb-4">
              Get PADI Certified
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From your first breath underwater to going pro — we offer PADI
              courses for every level, taught by experienced instructors in the
              ocean, not just a pool.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <ScrollReveal direction="left" duration={800}>
            <div className="relative">
              <div
                className="aspect-[4/3] rounded-2xl bg-cover bg-center shadow-lg"
                style={{
                  backgroundImage: "url(/images/service-certifications.jpg)",
                }}
              />
              {/* PADI logo overlay */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md">
                <img
                  src="/images/padi-logo.png"
                  alt="PADI Dive Center"
                  className="h-10 w-auto"
                />
              </div>
              {/* Decorative accents */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-500/15 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-ocean-400/20 rounded-2xl -z-10" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right" duration={800} delay={200}>
            <div>
              {/* Cert level cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {pricedLevels.map((level) => (
                  <div
                    key={level.slug}
                    className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-heading font-bold text-ocean-900 text-sm">
                        {level.name}
                      </h3>
                      {level.badge ? (
                        <span className="text-[10px] font-heading font-semibold uppercase tracking-wider bg-sand-500 text-white px-2 py-0.5 rounded-full shrink-0 ml-2">
                          {level.badge}
                        </span>
                      ) : null}
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed mb-3">
                      {level.description}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="font-heading text-xl font-bold text-ocean-800">
                        ${level.price}
                      </span>
                      <span className="text-gray-400 text-xs">
                        {level.unit}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Divemaster card */}
              {divemaster ? (
                <div className="bg-ocean-900 rounded-xl p-5 shadow-md mb-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-heading font-bold text-white text-sm">
                      {divemaster.name}
                    </h3>
                    {divemaster.badge ? (
                      <span className="text-[10px] font-heading font-semibold uppercase tracking-wider bg-sand-500 text-white px-2 py-0.5 rounded-full shrink-0 ml-2">
                        {divemaster.badge}
                      </span>
                    ) : null}
                  </div>
                  <p className="text-ocean-200 text-xs leading-relaxed mb-3">
                    {divemaster.description}
                  </p>
                  <span className="font-heading text-sm font-semibold text-sand-400">
                    Contact us for details
                  </span>
                </div>
              ) : null}

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 font-heading font-bold text-white bg-red-500 rounded-lg hover:bg-red-600 transition-all hover:scale-105 shadow-md"
              >
                Start Your Certification
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
