import {
  AboutSection,
  AudienceSection,
  BookSection,
  CallSection,
  ContactSection,
  DirectTalkSection,
  FailureSection,
  FaqSection,
  FinalCtaSection,
  HeroSection,
  JourneySection,
  ServicesSection,
  SiteFooter,
  SiteHeader,
} from "@/components/home";

export default function Home() {
  return (
    <div className="page-shell">
      <div className="background-orb orb-one" aria-hidden="true" />
      <div className="background-orb orb-two" aria-hidden="true" />

      <SiteHeader />

      <main>
        <HeroSection />
        <DirectTalkSection />
        <AudienceSection />
        <AboutSection />
        <FailureSection />
        <BookSection />
        <CallSection />
        {/* <ServicesSection /> */}
        <JourneySection />
        <FaqSection />
        <ContactSection />
        <FinalCtaSection />
      </main>

      <SiteFooter />
    </div>
  );
}
