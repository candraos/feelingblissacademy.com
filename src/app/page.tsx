import {
  AboutStorySection,
  AudienceSection,
  FinalCtaSection,
  HeroSection,
  ModulesSection,
  OfferSection,
  PainPointsSection,
  SiteFooter,
  SiteHeader,
  SocialProofSection,
  SolutionSection,
  TestimonialsSection,
} from "@/components/home";
import { seoConfig, siteConfig } from "@/lib/site-config";

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: siteConfig.englishName,
  description: seoConfig.description,
  provider: {
    "@type": "EducationalOrganization",
    name: siteConfig.englishName,
    sameAs: siteConfig.siteUrl,
  },
  offers: {
    "@type": "Offer",
    price: siteConfig.offerCurrentPrice,
    priceCurrency: "USD",
    url: siteConfig.siteUrl,
  },
};

export default function Home() {
  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />

      <main>
        <HeroSection />
        <PainPointsSection />
        <SolutionSection />
        <AboutStorySection />
        <ModulesSection />
        <AudienceSection />
        <TestimonialsSection />
        <SocialProofSection />
        
        <FinalCtaSection />
      </main>

      <SiteFooter />
    </div>
  );
}
