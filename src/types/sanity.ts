export interface SiteSettings {
  businessName: string;
  tagline: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  socialLinks: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
  };
  padiAffiliation: string;
  yearsInBusiness: number;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  backgroundImage: string;
  primaryCta: { text: string; link: string };
  secondaryCta: { text: string; link: string };
}

export interface AboutTeaser {
  heading: string;
  body: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

export interface CtaBanner {
  heading: string;
  subheading: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

export interface Homepage {
  hero: HeroContent;
  aboutTeaser: AboutTeaser;
  ctaBanner: CtaBanner;
}

export interface Service {
  name: string;
  slug: string;
  shortDescription: string;
  image: string;
  imagePosition?: string;
  icon: string;
  startingPrice?: number;
  priceUnit?: string;
  sortOrder: number;
  featured: boolean;
}

export interface Wreck {
  name: string;
  slug: string;
  type: string;
  depth: string;
  shortDescription: string;
  image: string;
  sortOrder: number;
}

export interface PricingItem {
  serviceName: string;
  price: number;
  priceLabel: string;
  unit: string;
  category: "instruction" | "charter" | "rental" | "fill";
  sortOrder: number;
  featured: boolean;
}

export interface Review {
  author: string;
  text: string;
  rating: number;
  date: string;
}

export interface CertificationLevel {
  name: string;
  slug: string;
  description: string;
  price?: number;
  unit?: string;
  badge?: string;
}
