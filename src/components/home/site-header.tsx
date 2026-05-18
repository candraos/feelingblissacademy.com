import Image from "next/image";
import { navigationItems } from "@/components/home/content";
import { MobileSideNav } from "@/components/home/mobile-side-nav";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-layout">
        <a className="brand" href="#hero" aria-label="العودة إلى بداية الصفحة">
          <span className="brand-logo">
            <Image
              src={siteConfig.logoUrl}
              alt="شعار Feeling Bliss Academy"
              width={68}
              height={68}
              sizes="68px"
            />
          </span>

          <span className="brand-copy">
            <strong>{siteConfig.englishName}</strong>
            <span>طريقك نحو تحقيق أهدافك</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="التنقل الرئيسي">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="button button-primary header-cta" href="#offer">
          اشترك الآن
        </a>

        <MobileSideNav
          items={navigationItems}
          ctaHref="#offer"
          ctaLabel="اشترك الآن"
        />
      </div>
    </header>
  );
}
