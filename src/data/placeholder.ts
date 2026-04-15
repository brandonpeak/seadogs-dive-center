import type {
  SiteSettings,
  Homepage,
  Service,
  Wreck,
  PricingItem,
  Review,
  CertificationLevel,
} from "@/types/sanity";

export const siteSettings: SiteSettings = {
  businessName: "Sea Dogs Dive Center",
  tagline: "New Smyrna Beach's Premier PADI Dive Center",
  phone: "386-424-1644",
  email: "seadogdiver@aol.com",
  address: {
    street: "111 Flagler Avenue",
    city: "New Smyrna Beach",
    state: "FL",
    zip: "32169",
  },
  socialLinks: {
    facebook: "https://facebook.com/SeaDogsDiveShop",
  },
  padiAffiliation: "PADI Dive Center",
  yearsInBusiness: 25,
};

export const homepage: Homepage = {
  hero: {
    headline: "Your Adventure Starts Below the Surface",
    subheadline:
      "25+ years of world-class diving, spearfishing, and PADI certifications in New Smyrna Beach, Florida.",
    backgroundImage: "/images/hero-underwater.jpg",
    primaryCta: { text: "Book a Dive", link: "#contact" },
    secondaryCta: { text: "Get Certified", link: "#certifications" },
  },
  aboutTeaser: {
    heading: "New Smyrna Beach's Original Dive Shop",
    body: "Sea Dogs Dive Center has been the go-to dive shop on Flagler Avenue for over 25 years. We're a full-service PADI Dive Center offering everything from your first Discover SCUBA experience to professional Divemaster certification. We sell top-quality dive gear, offer affordable rentals, and run charters to some of the best wrecks and reefs on Florida's east coast. Whether you're a first-timer or a seasoned diver, this is your home base.",
    image: "/images/about-shop.jpg",
    ctaText: "Learn More About Us",
    ctaLink: "/about",
  },
  ctaBanner: {
    heading: "Ready to Dive?",
    subheading:
      "Call us today or fill out a quick form and we'll get you on the water.",
    ctaText: "Get in Touch",
    ctaLink: "#contact",
    backgroundImage: "/images/hero-underwater.jpg",
  },
};

export const services: Service[] = [
  {
    name: "Boat Charters",
    slug: "boat-charters",
    shortDescription:
      "Explore 7+ named wrecks and reefs 10-12 miles offshore. Expert crew, divemasters, and onboard lunch included.",
    image: "/images/service-charters.jpg",
    icon: "anchor",
    startingPrice: 0,
    priceUnit: "per trip",
    sortOrder: 1,
    featured: true,
  },
  {
    name: "Get Certified",
    slug: "get-certified",
    shortDescription:
      "From Discover SCUBA to Divemaster. PADI courses for every level, taught by experienced instructors.",
    image: "/images/service-certifications.jpg",
    icon: "award",
    startingPrice: 179,
    priceUnit: "starting at",
    sortOrder: 2,
    featured: true,
  },
  {
    name: "Spearfishing",
    slug: "spearfishing",
    shortDescription:
      "The spearfishing specialists. Gear from Riffe, AB Biller, and JBL. Lessons and guided trips available.",
    image: "/images/service-spearfishing.jpg",
    icon: "target",
    startingPrice: 100,
    priceUnit: "lessons from",
    sortOrder: 3,
    featured: true,
  },
  {
    name: "Lobster Hunting",
    slug: "lobster-hunting",
    shortDescription:
      "Hunt some of the largest lobsters on the East Coast. Season runs August through March with mini-season in July.",
    image: "/images/service-lobster.jpg",
    imagePosition: "center 70%",
    icon: "shell",
    sortOrder: 4,
    featured: true,
  },
  {
    name: "Night Dives",
    slug: "night-dives",
    shortDescription:
      "Watch the reef transform after dark. Coral blooming, octopi, sharks, and nocturnal species come alive.",
    image: "/images/service-nightdive.jpg",
    icon: "moon",
    sortOrder: 5,
    featured: true,
  },
  {
    name: "Gear Shop",
    slug: "gear-shop",
    shortDescription:
      "Aqua Lung, Sherwood, Suunto, TUSA, Dive Rite, BARE, and more. Sales, rentals, service, and repairs.",
    image: "/images/service-gearshop.jpg",
    icon: "wrench",
    sortOrder: 6,
    featured: false,
  },
];

export const wrecks: Wreck[] = [
  {
    name: "USS Mindanao",
    slug: "uss-mindanao",
    type: "446ft Liberty Ship",
    depth: "80 FSW",
    shortDescription:
      "The crown jewel of local diving. This massive WWII-era Liberty Ship is home to turtles, rays, and goliath grouper.",
    image: "/images/wreck-coming-soon.svg",
    sortOrder: 1,
  },
  {
    name: "Rio Yuna",
    slug: "rio-yuna",
    type: "217ft Ship",
    depth: "80 FSW",
    shortDescription:
      "A 217-foot vessel sitting upright on the ocean floor, covered in vibrant marine growth.",
    image: "/images/wreck-rioyuna.jpg",
    sortOrder: 2,
  },
  {
    name: "Semarca",
    slug: "semarca",
    type: "76ft Utility Vessel",
    depth: "80 FSW",
    shortDescription:
      "A compact utility vessel that's perfect for newer divers. Great visibility and plenty of marine life.",
    image: "/images/wreck-coming-soon.svg",
    sortOrder: 3,
  },
  {
    name: "Atlas Barge",
    slug: "atlas-barge",
    type: "100ft Barge",
    depth: "80 FSW",
    shortDescription:
      "A 100-foot barge with interesting structural features that attract schools of fish and occasional pelagics.",
    image: "/images/wreck-atlas.jpg",
    sortOrder: 4,
  },
  {
    name: "Maxine D",
    slug: "maxine-d",
    type: "165ft Supply Vessel",
    depth: "80 FSW",
    shortDescription:
      "A large supply vessel offering multiple levels to explore and excellent opportunities for underwater photography.",
    image: "/images/wreck-maxined.jpg",
    sortOrder: 5,
  },
  {
    name: "Alexandra McAllister",
    slug: "alexandra-mcallister",
    type: "100ft Tug",
    depth: "80 FSW",
    shortDescription:
      "This tugboat sits perfectly on the bottom, creating an artificial reef teeming with tropical fish.",
    image: "/images/wreck-mcallister.jpg",
    sortOrder: 6,
  },
  {
    name: "Thomas H",
    slug: "thomas-h",
    type: "100ft Tug",
    depth: "80 FSW",
    shortDescription:
      "Another tugboat offering great penetration diving for advanced divers and a home to resident marine life.",
    image: "/images/wreck-coming-soon.svg",
    sortOrder: 7,
  },
];

export const pricingItems: PricingItem[] = [
  {
    serviceName: "Air Fill (80cf)",
    price: 7,
    priceLabel: "",
    unit: "per fill",
    category: "fill",
    sortOrder: 1,
    featured: true,
  },
  {
    serviceName: "NITROX Fill (80cf)",
    price: 10,
    priceLabel: "",
    unit: "per fill",
    category: "fill",
    sortOrder: 2,
    featured: true,
  },
  {
    serviceName: "Discover SCUBA",
    price: 179,
    priceLabel: "From",
    unit: "per person",
    category: "instruction",
    sortOrder: 3,
    featured: true,
  },
  {
    serviceName: "Open Water Cert",
    price: 500,
    priceLabel: "From",
    unit: "group rate",
    category: "instruction",
    sortOrder: 4,
    featured: true,
  },
  {
    serviceName: "Advanced Open Water",
    price: 400,
    priceLabel: "",
    unit: "per person",
    category: "instruction",
    sortOrder: 5,
    featured: true,
  },
  {
    serviceName: "NITROX Certification",
    price: 200,
    priceLabel: "",
    unit: "per person",
    category: "instruction",
    sortOrder: 6,
    featured: true,
  },
  {
    serviceName: "Full Gear Rental",
    price: 50,
    priceLabel: "From",
    unit: "per trip",
    category: "rental",
    sortOrder: 7,
    featured: true,
  },
  {
    serviceName: "Spearfishing Lesson",
    price: 100,
    priceLabel: "",
    unit: "2-hour session",
    category: "instruction",
    sortOrder: 8,
    featured: true,
  },
];

export const certificationLevels: CertificationLevel[] = [
  {
    name: "Discover SCUBA",
    slug: "discover-scuba",
    description:
      "Try diving for the first time — no experience needed. Pool session plus an ocean dive.",
    price: 179,
    unit: "per person",
    badge: "Start Here",
  },
  {
    name: "Open Water Certification",
    slug: "open-water",
    description:
      "Your full PADI Open Water cert. Classroom, pool, and 4 ocean dives over several days.",
    price: 500,
    unit: "group rate",
    badge: "Most Popular",
  },
  {
    name: "Advanced Open Water",
    slug: "advanced-open-water",
    description:
      "Five adventure dives including deep and navigation. No classroom — just diving.",
    price: 400,
    unit: "per person",
  },
  {
    name: "NITROX Certification",
    slug: "nitrox",
    description:
      "Learn to dive with enriched air for longer bottom times and shorter surface intervals.",
    price: 200,
    unit: "per person",
  },
  {
    name: "Divemaster",
    slug: "divemaster",
    description:
      "Go pro. The first level of PADI professional certification. Mentor under our experienced team.",
    badge: "Go Pro",
  },
];

export const reviews: Review[] = [
  {
    author: "Tim Baker",
    text: "Top shelf service, staff is extremely knowledgeable and helpful. This is the go-to dive shop in New Smyrna Beach.",
    rating: 5,
    date: "Google Review",
  },
  {
    author: "J N",
    text: "Friendly service, very knowledgeable and great prices. Highly recommend for certifications and gear.",
    rating: 5,
    date: "Google Review",
  },
  {
    author: "Dean Cunkelman",
    text: "Great selection of quality equipment. The crew really knows their stuff and makes every dive trip memorable.",
    rating: 5,
    date: "Google Review",
  },
];
