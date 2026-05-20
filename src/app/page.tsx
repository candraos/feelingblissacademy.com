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
        <TestimonialsSection />
        <SocialProofSection />
        <OfferSection />
        <FinalCtaSection />
      </main>

      <SiteFooter />
    </div>
  );
}
