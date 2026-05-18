import {
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
} from "@/components/home";

export default function Home() {
  return (
    <div className="page-shell">
      <SiteHeader />

      <main>
        <HeroSection />
        <PainPointsSection />
        <SolutionSection />
        <ModulesSection />
        <AudienceSection />
        <SocialProofSection />
        <OfferSection />
        <FinalCtaSection />
      </main>

      <SiteFooter />

      <a className="mobile-float-cta" href="#offer">
        احجز مقعدك الآن
      </a>
    </div>
  );
}
