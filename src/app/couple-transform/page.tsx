import type { Metadata } from "next";
import { SiteFooter, SiteHeader, WhatsappFloatButton } from "@/components/home";
import {
  CoupleAudienceSection,
  CoupleBenefitsSection,
  CoupleFaqSection,
  CoupleFinalCtaSection,
  CoupleGiftsSection,
  CoupleHeroSection,
  CoupleStorySection,
  CoupleStructureSection,
  CoupleTestimonialsSection,
  CoupleValueSection,
  CoupleVideoSection,
  RelationshipKillersSection,
  coupleProgramEnglishName,
  coupleProgramName,
  coupleProgramPath,
  coupleWhatsappUrl,
} from "@/components/couple-program";
import { siteConfig } from "@/lib/site-config";

const pageTitle = `${coupleProgramName} | ${coupleProgramEnglishName} | ${siteConfig.englishName}`;
const pageDescription =
  "برنامج علاجي للأزواج من 12 ساعة، حضورياً أو أونلاين، يفكك مهلكات العلاقة ويعيد بناء الثقة والتواصل والاحترام المتبادل. احجزا مكانكما الآن.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "علاج العلاقة",
    "العلاج الزوجي",
    "برنامج للأزواج",
    "Couple Transform Program",
    "مهلكات العلاقة",
    "خرائط الحب",
    "الثقة والاحترام",
    "علاج الأزواج أونلاين",
    "استشارات زوجية",
    "Feeling Bliss Academy",
  ],
  alternates: {
    canonical: coupleProgramPath,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteConfig.siteUrl}${coupleProgramPath}`,
    siteName: siteConfig.englishName,
    locale: "ar_LB",
    type: "website",
    images: [
      {
        url: siteConfig.logoUrl,
        width: 1254,
        height: 1254,
        alt: "شعار Feeling Bliss Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [siteConfig.logoUrl],
  },
};

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: `${coupleProgramName} (${coupleProgramEnglishName})`,
  description: pageDescription,
  inLanguage: "ar",
  url: `${siteConfig.siteUrl}${coupleProgramPath}`,
  provider: {
    "@type": "EducationalOrganization",
    name: siteConfig.englishName,
    sameAs: siteConfig.siteUrl,
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: ["onsite", "online"],
    courseWorkload: "PT12H",
  },
};

export default function CoupleTransformPage() {
  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader
        ctaHref={coupleWhatsappUrl}
        ctaLabel="احجزا مكانكما"
        logoHref="/"
      />

      <main>
        <CoupleHeroSection />
        <CoupleAudienceSection />
        <RelationshipKillersSection />
        <CoupleValueSection />
        <CoupleBenefitsSection />
        <CoupleVideoSection />
        <CoupleStructureSection />
        <CoupleGiftsSection />
        <CoupleTestimonialsSection />
        <CoupleStorySection />
        <CoupleFaqSection />
        <CoupleFinalCtaSection />
      </main>

      <SiteFooter />
      <WhatsappFloatButton href={coupleWhatsappUrl} />
    </div>
  );
}
