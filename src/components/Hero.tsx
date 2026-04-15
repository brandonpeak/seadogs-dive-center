"use client";

import { useEffect, useState, useRef } from "react";
import type { HeroContent } from "@/types/sanity";

interface HeroProps {
  hero: HeroContent;
}

export default function Hero({ hero }: HeroProps) {
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-28 pb-12">
      {/* Poster image — shows instantly while video loads */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/videos/hero-poster.jpg)` }}
      />

      {/* Background video — loads after page, replaces poster */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/videos/hero-poster.jpg"
      >
        <source
          src={isMobile ? "/videos/hero-mobile.mp4" : "/videos/hero-desktop.mp4"}
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-ocean-950/60 via-ocean-900/30 to-ocean-950/70" />

      {/* Content with entrance animations */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Small tagline — fades in first */}
        <div
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 700ms ease-out 200ms, transform 700ms ease-out 200ms",
          }}
        >
          <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
          <span className="font-heading text-sm font-semibold text-white/90 tracking-wide uppercase">
            New Smyrna Beach&apos;s Premier Dive Center
          </span>
        </div>

        {/* Headline — fades in second */}
        <h1
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] tracking-tight mb-6 drop-shadow-lg"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 800ms ease-out 500ms, transform 800ms ease-out 500ms",
          }}
        >
          {hero.headline}
        </h1>

        {/* Subheadline — fades in third */}
        <p
          className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 800ms ease-out 800ms, transform 800ms ease-out 800ms",
          }}
        >
          {hero.subheadline}
        </p>

        {/* Buttons — fade in last */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 800ms ease-out 1100ms, transform 800ms ease-out 1100ms",
          }}
        >
          <a
            href={hero.primaryCta.link}
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-heading font-bold text-white bg-red-500 hover:bg-red-600 rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            {hero.primaryCta.text}
          </a>
          <a
            href={hero.secondaryCta.link}
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-heading font-semibold text-white border-2 border-white/70 hover:bg-white hover:text-ocean-900 rounded-lg transition-all hover:scale-105"
          >
            {hero.secondaryCta.text}
          </a>
        </div>
      </div>

    </section>
  );
}
