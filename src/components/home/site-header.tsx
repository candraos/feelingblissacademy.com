import Image from "next/image";
import { navigationItems } from "@/components/home/content";
import { MobileSideNav } from "@/components/home/mobile-side-nav";
import { ScheduleButton } from "@/components/home/shared";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-layout">
        <a className="brand" href="#home" aria-label="العودة إلى الرئيسية">
          <span className="brand-logo">
            <Image
              src={siteConfig.logoUrl}
              alt="شعار فيلينغ بليس أكاديمي"
              width={72}
              height={72}
              sizes="72px"
            />
          </span>
          <span className="brand-copy">
            <strong>{siteConfig.arabicName}</strong>
            <span>
              {siteConfig.practitionerName} | {siteConfig.practitionerTitle}
            </span>
          </span>
        </a>

        <nav className="site-nav" aria-label="التنقل الرئيسي">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <ScheduleButton
          label="احجز مكالمتك المجانية"
          className="button button-primary header-cta"
        />

        <MobileSideNav
          items={navigationItems}
          calendlyUrl={siteConfig.calendlyUrl}
        />
      </div>
    </header>
  );
}
