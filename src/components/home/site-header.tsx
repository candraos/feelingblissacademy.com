"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navigationItems } from "@/components/home/content";
import { siteConfig } from "@/lib/site-config";

type NavigationHref = (typeof navigationItems)[number]["href"];

function getActiveHref(marker: number) {
  let currentHref: NavigationHref = navigationItems[0]?.href ?? "#hero";

  for (const [index, item] of navigationItems.entries()) {
    const section = document.querySelector<HTMLElement>(item.href);
    const nextSection = navigationItems[index + 1]
      ? document.querySelector<HTMLElement>(navigationItems[index + 1].href)
      : null;

    if (!section) {
      continue;
    }

    const sectionTop = section.offsetTop;
    const nextSectionTop = nextSection?.offsetTop ?? Number.POSITIVE_INFINITY;

    if (marker >= sectionTop && marker < nextSectionTop) {
      currentHref = item.href;
      break;
    }
  }

  return currentHref;
}

export function SiteHeader() {
  const [activeHref, setActiveHref] = useState<NavigationHref>(
    navigationItems[0]?.href ?? "#hero"
  );

  useEffect(() => {
    function updateActiveSection() {
      const marker = window.scrollY + Math.min(window.innerHeight * 0.3, 220);
      setActiveHref(getActiveHref(marker));
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-16 lg:gap-8 lg:px-8">
        <div className="order-2 flex flex-1 items-center justify-end md:order-2 md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {navigationItems.map((item) => {
                const isActive = item.href === activeHref;

                return (
                  <li key={item.href}>
                    <a
                      className={`header-nav-link px-1 py-2 transition ${
                        isActive ? "is-active font-semibold" : ""
                      }`}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#FF3131] px-4 py-2.5 text-sm font-medium text-white! transition hover:bg-[#d92929] hover:text-white md:px-5"
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              اشترك الآن
            </a>
          </div>
        </div>

        <a
          className="order-1 flex items-center text-teal-600 md:order-1"
          href="#hero"
          aria-label="العودة إلى بداية الصفحة"
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
        </a>
      </div>
    </header>
  );
}
