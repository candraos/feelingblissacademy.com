"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navigationItems } from "@/components/home/content";
import { siteConfig } from "@/lib/site-config";

type NavigationHref = (typeof navigationItems)[number]["href"];

function getActiveHref(offset: number) {
  let currentHref: NavigationHref = navigationItems[0]?.href ?? "#hero";

  for (const item of navigationItems) {
    const section = document.querySelector<HTMLElement>(item.href);

    if (section && section.offsetTop <= offset) {
      currentHref = item.href;
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
      setActiveHref(getActiveHref(window.scrollY + 140));
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (left, right) =>
              Math.abs(left.boundingClientRect.top) -
              Math.abs(right.boundingClientRect.top)
          );

        if (visibleEntries[0]) {
          const target = visibleEntries[0].target as HTMLElement;
          const matchedHref = navigationItems.find(
            (item) => item.href === `#${target.id}`
          )?.href;

          if (matchedHref) {
            setActiveHref(matchedHref);
          }
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.15, 0.35, 0.6],
      }
    );

    navigationItems.forEach((item) => {
      const section = document.querySelector<HTMLElement>(item.href);

      if (section) {
        observer.observe(section);
      }
    });

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateActiveSection);
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
                      className={`px-1 py-2 transition ${
                        isActive
                          ? "font-semibold text-green-600 underline decoration-2 decoration-green-600 underline-offset-8"
                          : "text-gray-500 hover:text-gray-700"
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
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-teal-600 px-4 py-2.5 text-sm font-medium text-white! transition hover:bg-teal-700 hover:text-white md:px-5"
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
