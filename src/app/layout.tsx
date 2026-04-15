import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sea Dogs Dive Center | New Smyrna Beach, FL",
  description:
    "Full-service PADI Dive Center with 25+ years of experience. SCUBA certifications, boat charters, spearfishing, lobster hunting, and gear shop in New Smyrna Beach, Florida.",
  keywords: [
    "scuba diving",
    "New Smyrna Beach",
    "PADI dive center",
    "spearfishing",
    "lobster hunting",
    "dive certifications",
    "wreck diving",
    "Volusia County",
    "Daytona Beach diving",
  ],
  openGraph: {
    title: "Sea Dogs Dive Center | New Smyrna Beach, FL",
    description:
      "25+ years of world-class diving, spearfishing, and PADI certifications in New Smyrna Beach, Florida.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
