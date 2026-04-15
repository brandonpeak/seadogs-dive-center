import type { SiteSettings } from "@/types/sanity";
import ScrollReveal from "./ScrollReveal";

interface VisitTheShopProps {
  settings: SiteSettings;
}

export default function VisitTheShop({ settings }: VisitTheShopProps) {
  const address = settings.address;
  const fullAddress = `${address.street}, ${address.city}, ${address.state} ${address.zip}`;
  const mapsQuery = encodeURIComponent(`Sea Dogs Dive Center, ${fullAddress}`);

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10 lg:mb-14">
            <div className="w-12 h-1 bg-red-500 mx-auto mb-6 rounded-full" />
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ocean-900 mb-4">
              Visit the Shop
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Right on Flagler Avenue, steps from the beach. Stop in for gear, fills, rentals, or just to talk diving.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Shop info + photo */}
          <ScrollReveal direction="left">
            <div className="flex flex-col h-full">
              {/* Shop photo */}
              <div className="relative rounded-xl overflow-hidden h-56 lg:h-64 mb-6">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url(/images/service-gearshop.jpg)" }}
                />
              </div>

              {/* Details */}
              <div className="flex-1 space-y-5">
                {/* Brands */}
                <div>
                  <h3 className="font-heading text-lg font-bold text-ocean-900 mb-2">Full-Service Gear Shop</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Aqua Lung, Sherwood, Suunto, TUSA, Dive Rite, BARE, and more.
                    Sales, rentals, service, and repairs. Air and NITROX fills on site.
                  </p>
                </div>

                {/* Contact info grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-heading font-semibold text-sm text-ocean-900">{address.street}</p>
                      <p className="text-sm text-gray-500">{address.city}, {address.state} {address.zip}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <a href={`tel:${settings.phone.replace(/-/g, "")}`} className="font-heading font-semibold text-sm text-ocean-900 hover:text-red-500 transition-colors">
                        {settings.phone}
                      </a>
                      <p className="text-sm text-gray-500">Call anytime</p>
                    </div>
                  </div>
                </div>

                {/* Directions link */}
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-ocean-900 text-white font-heading font-semibold text-sm rounded-lg hover:bg-ocean-800 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Google Maps embed */}
          <ScrollReveal direction="right">
            <div className="rounded-xl overflow-hidden shadow-md h-full min-h-[400px]">
              <iframe
                title="Sea Dogs Dive Center location"
                src={`https://maps.google.com/maps?q=${mapsQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
