"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { SiteSettings } from "@/types/sanity";
import MobileNav from "./MobileNav";

interface HeaderProps {
  settings: SiteSettings;
}

const navLinks = [
  { label: "Dive With Us", href: "#services" },
  { label: "Wrecks & Reefs", href: "#wrecks" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Header({ settings }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-1"
          : "bg-white/95 backdrop-blur-sm py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-22">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0 ml-8 sm:ml-20">
            <Image
              src="/images/seadogs-logo.png"
              alt="Sea Dogs Dive Center"
              width={393}
              height={291}
              className="h-14 sm:h-18 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-heading text-sm font-semibold text-ocean-800 hover:text-red-500 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-red-500 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Phone + CTA (desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${settings.phone.replace(/-/g, "")}`}
              className="font-heading text-sm font-semibold text-ocean-600 hover:text-ocean-800 transition-colors"
            >
              {settings.phone}
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 font-heading text-sm font-bold text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              Book a Dive
            </a>
          </div>

          {/* Mobile menu button */}
          <MobileNav settings={settings} navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
}
