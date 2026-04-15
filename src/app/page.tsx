import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import PADICertification from "@/components/PADICertification";
import GoogleReviews from "@/components/GoogleReviews";
import AboutTeaser from "@/components/AboutTeaser";
import WrecksPreview from "@/components/WrecksPreview";
import PricingSnapshot from "@/components/PricingSnapshot";
import VisitTheShop from "@/components/VisitTheShop";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

import {
  siteSettings,
  homepage,
  services,
  certificationLevels,
  wrecks,
  pricingItems,
  reviews,
} from "@/data/placeholder";

export default function Home() {
  const activityServices = services.filter(
    (s) => s.slug !== "gear-shop" && s.slug !== "get-certified"
  );

  return (
    <>
      <Header settings={siteSettings} />
      <main>
        <Hero hero={homepage.hero} />
        <TrustBar settings={siteSettings} />
        <ServicesGrid services={activityServices} />
        <PADICertification levels={certificationLevels} />
        <GoogleReviews reviews={reviews} />
        <AboutTeaser about={homepage.aboutTeaser} />
        <section id="wrecks">
          <WrecksPreview wrecks={wrecks} />
        </section>
        <PricingSnapshot items={pricingItems} />
        <VisitTheShop settings={siteSettings} />
        <CtaBanner
          banner={homepage.ctaBanner}
          phone={siteSettings.phone}
        />
      </main>
      <Footer settings={siteSettings} />
    </>
  );
}
