import Image from "next/image";
import { navigationItems } from "@/components/home/content";
import { MobileSideNav } from "@/components/home/mobile-side-nav";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a
          className="flex items-center gap-3 text-teal-600"
          href="#hero"
          aria-label="العودة إلى بداية الصفحة"
        >
          <span className="sr-only">Home</span>
          <Image
            src={siteConfig.logoUrl}
            alt="شعار Feeling Bliss Academy"
            width={68}
            height={68}
            sizes="68px"
            className="h-8 w-auto rounded-md"
          />
          <span className="hidden text-sm font-semibold text-slate-900 lg:inline-flex">
            {siteConfig.englishName}
          </span>
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex md:gap-4">
              <a
                className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                href="#offer"
              >
                اشترك الآن
              </a>

              <a
                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 lg:block"
                href="#modules"
              >
                المحاور
              </a>
            </div>

            <MobileSideNav
              items={navigationItems}
              tagline="طريقك نحو تحقيق أهدافك"
              ctaHref="#offer"
              ctaLabel="اشترك الآن"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
