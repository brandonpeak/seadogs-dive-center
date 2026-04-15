"use client";

import { useState } from "react";
import type { SiteSettings } from "@/types/sanity";

interface MobileNavProps {
  settings: SiteSettings;
  navLinks: { label: string; href: string }[];
}

export default function MobileNav({ settings, navLinks }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-ocean-800 hover:text-red-500 transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Slide-out drawer */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed top-0 right-0 bottom-0 w-72 bg-ocean-950 z-50 shadow-2xl">
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-white hover:text-ocean-300 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="px-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 font-heading text-lg font-semibold text-white/80 hover:text-white hover:bg-ocean-800/50 rounded-lg px-3 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Contact info */}
            <div className="px-6 mt-8 space-y-4">
              <a
                href={`tel:${settings.phone.replace(/-/g, "")}`}
                className="flex items-center gap-3 text-sand-400 hover:text-sand-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-heading font-semibold">{settings.phone}</span>
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center py-3 font-heading font-bold text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors"
              >
                Book a Dive
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
