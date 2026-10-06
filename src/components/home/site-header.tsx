"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileSideNav } from "@/components/home/mobile-side-nav";
import { siteConfig, siteNavigation } from "@/lib/site-config";

type SiteHeaderProps = {
  ctaHref?: string;
  ctaLabel?: string;
  logoHref?: string;
};

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader({
  ctaHref = siteConfig.CtaUrl,
  ctaLabel = "اشترك الآن",
  logoHref = "#hero",
}: SiteHeaderProps) {
  const pathname = usePathname();
  const activeHref = siteNavigation.find((item) =>
    isActivePath(pathname, item.href)
  )?.href;

  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-16 lg:gap-8 lg:px-8">
        <div className="order-2 flex flex-1 items-center justify-end md:order-2 md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-8 text-base">
              {siteNavigation.map((item) => {
                const isActive = item.href === activeHref;

                return (
                  <li key={item.href}>
                    <Link
                      className={`header-nav-link px-1 py-2 transition ${
                        isActive ? "is-active font-semibold" : ""
                      }`}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#FF3131] px-4 py-2.5 text-sm font-medium text-white! transition hover:bg-[#d92929] hover:text-white md:px-5"
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ctaLabel}
            </a>

            <MobileSideNav
              items={siteNavigation}
              tagline={siteConfig.arabicName}
              ctaHref={ctaHref}
              ctaLabel={ctaLabel}
              activeHref={activeHref}
            />
          </div>
        </div>

        <Link
          className="order-1 flex items-center text-teal-600 md:order-1"
          href={logoHref}
          aria-label={
            logoHref.startsWith("#")
              ? "العودة إلى بداية الصفحة"
              : "الانتقال إلى الصفحة الرئيسية"
          }
        >
          <span className="sr-only">Home</span>
          <Image
            src={siteConfig.logoUrl}
            alt="شعار Feeling Bliss Academy"
            width={144}
            height={144}
            sizes="(max-width: 767px) 144px, 96px"
            className="h-14 w-auto rounded-md md:h-10"
          />
        </Link>
      </div>
    </header>
  );
}
