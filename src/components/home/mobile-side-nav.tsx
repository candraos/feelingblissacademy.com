"use client";

import { useEffect, useEffectEvent, useState } from "react";

type MobileSideNavProps = {
  items: ReadonlyArray<{
    href: string;
    label: string;
  }>;
  tagline: string;
  ctaHref: string;
  ctaLabel: string;
};

export function MobileSideNav({
  items,
  tagline,
  ctaHref,
  ctaLabel,
}: MobileSideNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeNav = useEffectEvent(() => setIsOpen(false));

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeNav();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeNav]);

  return (
    <>
      <div className="md:hidden">
        <button
          type="button"
          className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75"
          aria-expanded={isOpen}
          aria-controls="mobile-side-nav-drawer"
          aria-label="فتح قائمة التنقل"
          onClick={() => setIsOpen(true)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 bg-white/95 md:hidden"
          onClick={closeNav}
        >
          <aside
            id="mobile-side-nav-drawer"
            className="absolute inset-y-0 right-0 grid w-full max-w-sm gap-6 bg-white p-5 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="قائمة التنقل"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="grid gap-1">
                <p className="m-0 text-lg font-extrabold text-slate-900">
                  التنقل
                </p>
                <span className="text-sm text-slate-500">{tagline}</span>
              </div>

              <button
                type="button"
                className="text-sm font-bold text-teal-700"
                aria-label="إغلاق القائمة"
                onClick={closeNav}
              >
                إغلاق
              </button>
            </div>

            <nav className="grid gap-2" aria-label="أقسام الصفحة">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeNav}
                  className="rounded-xl bg-teal-50 px-4 py-3 text-slate-800 transition hover:bg-teal-100"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              className="mt-auto inline-flex min-h-12 items-center justify-center rounded-md bg-teal-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-teal-700"
              href={ctaHref}
              onClick={closeNav}
            >
              {ctaLabel}
            </a>
          </aside>
        </div>
      ) : null}
    </>
  );
}
