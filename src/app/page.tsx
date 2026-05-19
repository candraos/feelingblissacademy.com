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
} from "@/components/home";

export default function Home() {
  return (
    <div className="page-shell">
      <SiteHeader />

      <main>
        <HeroSection />
        <PainPointsSection />
        <SolutionSection />
        <AboutStorySection />
        <ModulesSection />
        <AudienceSection />
        <SocialProofSection />
        <OfferSection />
        <FinalCtaSection />
      </main>

      <SiteFooter />
    </div>
  );
}
