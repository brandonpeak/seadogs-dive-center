const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = path.join(__dirname, "..", "public", "images");

const images = [
  {
    name: "hero-underwater",
    width: 1920,
    height: 1080,
    label: "Hero - Underwater",
    gradient: { from: "#0a1628", via: "#0c2d48", to: "#145369" },
    style: "hero",
  },
  {
    name: "service-charters",
    width: 800,
    height: 600,
    label: "Boat Charters",
    gradient: { from: "#0d3b66", via: "#1a6b8a", to: "#2a9d8f" },
    style: "card",
  },
  {
    name: "service-certifications",
    width: 800,
    height: 600,
    label: "Get Certified",
    gradient: { from: "#1b4965", via: "#2a6f97", to: "#468faf" },
    style: "card",
  },
  {
    name: "service-spearfishing",
    width: 800,
    height: 600,
    label: "Spearfishing",
    gradient: { from: "#0b3d4e", via: "#1a5c6e", to: "#2e8b7a" },
    style: "card",
  },
  {
    name: "service-lobster",
    width: 800,
    height: 600,
    label: "Lobster Hunting",
    gradient: { from: "#1a3a5c", via: "#2b5f7e", to: "#3d8b9e" },
    style: "card",
  },
  {
    name: "service-nightdive",
    width: 800,
    height: 600,
    label: "Night Dives",
    gradient: { from: "#06101a", via: "#0d1f33", to: "#1a3a5c" },
    style: "card",
  },
  {
    name: "service-gearshop",
    width: 800,
    height: 600,
    label: "Gear Shop",
    gradient: { from: "#1b3a4b", via: "#2a5c6e", to: "#3e8e8e" },
    style: "card",
  },
  {
    name: "about-shop",
    width: 800,
    height: 600,
    label: "About the Shop",
    gradient: { from: "#14394e", via: "#1e5f74", to: "#3aafa9" },
    style: "card",
  },
  {
    name: "wreck-generic",
    width: 800,
    height: 600,
    label: "Wreck Dive",
    gradient: { from: "#0b2545", via: "#134074", to: "#1d6a96" },
    style: "card",
  },
  {
    name: "cta-underwater",
    width: 1920,
    height: 1080,
    label: "CTA - Ready to Dive?",
    gradient: { from: "#0a2342", via: "#1a4d6e", to: "#1e7a8a" },
    style: "hero",
  },
];

function generateBubbles(width, height, count) {
  let bubbles = "";
  for (let i = 0; i < count; i++) {
    const cx = Math.round(Math.random() * width);
    const cy = Math.round(Math.random() * height);
    const r = Math.round(3 + Math.random() * 18);
    const opacity = (0.04 + Math.random() * 0.1).toFixed(2);
    bubbles += `    <circle cx="${cx}" cy="${cy}" r="${r}" fill="white" opacity="${opacity}"/>\n`;
  }
  return bubbles;
}

function generateWaves(width, height) {
  const waveCount = 4;
  let waves = "";
  for (let i = 0; i < waveCount; i++) {
    const yBase = height * 0.25 + i * (height * 0.18);
    const amplitude = 15 + i * 8;
    const opacity = (0.03 + i * 0.02).toFixed(2);
    const segments = 8;
    const segWidth = width / segments;
    let d = `M0 ${yBase}`;
    for (let s = 0; s < segments; s++) {
      const x1 = s * segWidth + segWidth * 0.5;
      const y1 = yBase + (s % 2 === 0 ? -amplitude : amplitude);
      const x2 = (s + 1) * segWidth;
      const y2 = yBase;
      d += ` Q${x1} ${y1} ${x2} ${y2}`;
    }
    d += ` L${width} ${height} L0 ${height} Z`;
    waves += `    <path d="${d}" fill="white" opacity="${opacity}"/>\n`;
  }
  return waves;
}

function generateLightRays(width, height) {
  let rays = "";
  const rayCount = 5;
  for (let i = 0; i < rayCount; i++) {
    const x = width * 0.15 + Math.random() * width * 0.7;
    const topWidth = 20 + Math.random() * 40;
    const bottomWidth = 80 + Math.random() * 120;
    const opacity = (0.02 + Math.random() * 0.04).toFixed(2);
    rays += `    <polygon points="${x - topWidth / 2},0 ${x + topWidth / 2},0 ${x + bottomWidth / 2},${height} ${x - bottomWidth / 2},${height}" fill="white" opacity="${opacity}"/>\n`;
  }
  return rays;
}

function generateSVG(image) {
  const { width, height, label, gradient, style, name } = image;
  const gradientId = `grad-${name}`;
  const isHero = style === "hero";
  const bubbleCount = isHero ? 40 : 20;
  const fontSize = isHero ? 48 : 32;
  const subFontSize = isHero ? 24 : 16;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${gradient.from}"/>
      <stop offset="50%" stop-color="${gradient.via}"/>
      <stop offset="100%" stop-color="${gradient.to}"/>
    </linearGradient>
    <filter id="blur-${name}">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1.5"/>
    </filter>
  </defs>

  <!-- Background gradient -->
  <rect width="${width}" height="${height}" fill="url(#${gradientId})"/>

  <!-- Light rays from surface -->
  <g filter="url(#blur-${name})">
${generateLightRays(width, height)}  </g>

  <!-- Wave patterns -->
${generateWaves(width, height)}
  <!-- Bubbles -->
${generateBubbles(width, height, bubbleCount)}
  <!-- Label text -->
  <text x="${width / 2}" y="${height / 2 - 10}" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="${fontSize}" font-weight="700" fill="white" opacity="0.85">${label}</text>
  <text x="${width / 2}" y="${height / 2 + subFontSize + 10}" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="${subFontSize}" fill="white" opacity="0.5">${width} x ${height} placeholder</text>
</svg>`;
}

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Generate each SVG
for (const image of images) {
  const svg = generateSVG(image);
  const filePath = path.join(OUTPUT_DIR, `${image.name}.svg`);
  fs.writeFileSync(filePath, svg, "utf-8");
  console.log(`Generated: ${filePath}`);
}

console.log(`\nDone! ${images.length} SVG placeholders created in ${OUTPUT_DIR}`);
