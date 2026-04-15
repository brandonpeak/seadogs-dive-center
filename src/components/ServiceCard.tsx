import type { Service } from "@/types/sanity";

interface ServiceCardProps {
  service: Service;
  variant?: "default" | "featured";
}

export default function ServiceCard({ service, variant = "default" }: ServiceCardProps) {
  if (variant === "featured") {
    return (
      <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row h-full">
        {/* Image — left side on desktop */}
        <div className="relative md:w-1/2 h-56 md:h-auto shrink-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${service.image})`, backgroundPosition: service.imagePosition ?? "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-ocean-950/40 to-transparent" />
        </div>

        {/* Content — right side */}
        <div className="p-8 md:p-10 flex flex-col justify-center flex-1">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-ocean-900 mb-3 group-hover:text-ocean-600 transition-colors">
            {service.name}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            {service.shortDescription}
          </p>
          <span className="inline-flex items-center text-red-500 font-heading font-semibold group-hover:text-red-600 transition-colors">
            Learn More
            <svg
              className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
      {/* Image */}
      <div className="relative h-48 shrink-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${service.image})`, backgroundPosition: service.imagePosition ?? "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/60 to-transparent" />

        {/* Price badge */}
        {service.startingPrice ? (
          <div className="absolute top-4 right-4 bg-sand-500 text-white px-3 py-1 rounded-full text-sm font-heading font-semibold">
            {service.priceUnit} ${service.startingPrice}
          </div>
        ) : null}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading text-xl font-bold text-ocean-900 mb-2 group-hover:text-ocean-600 transition-colors">
          {service.name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
          {service.shortDescription}
        </p>
        <span className="inline-flex items-center text-red-500 font-heading font-semibold text-sm group-hover:text-red-600 transition-colors">
          Learn More
          <svg
            className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  );
}
