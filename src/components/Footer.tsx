import type { SiteSettings } from "@/types/sanity";
import ScrollReveal from "./ScrollReveal";

interface FooterProps {
  settings: SiteSettings;
}

export default function Footer({ settings }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-ocean-950 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Contact */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4">
              Contact Us
            </h3>
            <div className="space-y-3 text-ocean-300">
              <p>{settings.address.street}</p>
              <p>
                {settings.address.city}, {settings.address.state}{" "}
                {settings.address.zip}
              </p>
              <a
                href={`tel:${settings.phone.replace(/-/g, "")}`}
                className="block text-sand-400 hover:text-sand-300 font-heading font-semibold transition-colors"
              >
                {settings.phone}
              </a>
              <a
                href={`mailto:${settings.email}`}
                className="block text-ocean-400 hover:text-ocean-300 transition-colors"
              >
                {settings.email}
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4">
              Quick Links
            </h3>
            <nav className="space-y-2">
              {[
                { label: "Boat Charters", href: "#services" },
                { label: "Get Certified", href: "#services" },
                { label: "Wrecks & Reefs", href: "#wrecks" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQs", href: "/faqs" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-ocean-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4">
              Services
            </h3>
            <nav className="space-y-2">
              {[
                "Discover SCUBA",
                "Open Water Cert",
                "Spearfishing",
                "Lobster Hunting",
                "Night Dives",
                "Equipment Rental",
              ].map((item) => (
                <span
                  key={item}
                  className="block text-ocean-300"
                >
                  {item}
                </span>
              ))}
            </nav>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4">
              Connect With Us
            </h3>
            <div className="space-y-4">
              {settings.socialLinks.facebook && (
                <a
                  href={settings.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-ocean-300 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Follow on Facebook
                </a>
              )}

              {/* PADI badge */}
              <div className="pt-4">
                <div className="inline-flex items-center gap-2 bg-ocean-900 rounded-lg px-4 py-2">
                  <svg className="w-6 h-6 text-sand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="font-heading text-sm font-semibold text-sand-400">
                    {settings.padiAffiliation}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ocean-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-ocean-400">
            <p>
              &copy; {currentYear} {settings.businessName}. All rights reserved.
            </p>
            <p className="text-ocean-500">
              Serving Volusia County &middot; Daytona Beach &middot; New Smyrna
              Beach &middot; Central Florida
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
