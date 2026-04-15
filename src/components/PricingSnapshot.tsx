import type { PricingItem } from "@/types/sanity";
import ScrollReveal from "./ScrollReveal";

interface PricingSnapshotProps {
  items: PricingItem[];
}

const categoryLabels: Record<string, string> = {
  fill: "Tank Fills",
  instruction: "Courses & Instruction",
  rental: "Rentals",
  charter: "Charters",
};

const categoryOrder = ["fill", "instruction", "rental", "charter"];

export default function PricingSnapshot({ items }: PricingSnapshotProps) {
  const grouped = categoryOrder
    .map((cat) => ({
      category: cat,
      label: categoryLabels[cat],
      items: items.filter((item) => item.category === cat),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="w-12 h-1 bg-red-500 mx-auto mb-6 rounded-full" />
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ocean-900 mb-4">
              Popular Services & Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transparent pricing for all our most popular services. No hidden fees.
            </p>
          </div>
        </ScrollReveal>

        {/* Pricing groups */}
        <div className="space-y-8">
          {grouped.map((group, i) => (
            <ScrollReveal key={group.category} delay={i * 150}>
            <div>
              <h3 className="font-heading text-lg font-bold text-ocean-700 mb-4 uppercase tracking-wider">
                {group.label}
              </h3>
              <div className="bg-ocean-50 rounded-xl overflow-hidden divide-y divide-ocean-100">
                {group.items.map((item) => (
                  <div
                    key={item.serviceName}
                    className="flex items-center justify-between px-6 py-4 hover:bg-ocean-100/50 transition-colors"
                  >
                    <div>
                      <span className="font-heading font-semibold text-ocean-900">
                        {item.serviceName}
                      </span>
                      <span className="text-gray-500 text-sm ml-2">
                        {item.unit}
                      </span>
                    </div>
                    <div className="font-heading font-bold text-ocean-600 text-lg">
                      {item.priceLabel ? (
                        <span className="text-sm font-normal text-gray-500 mr-1">
                          {item.priceLabel}
                        </span>
                      ) : null}
                      ${item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-10">
          <a
            href="/pricing"
            className="inline-flex items-center font-heading font-semibold text-ocean-500 hover:text-ocean-600 transition-colors"
          >
            View Full Pricing
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
