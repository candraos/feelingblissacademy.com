"use client";

import { useEffect, useEffectEvent, useState } from "react";

type MobileSideNavProps = {
  items: ReadonlyArray<{
    href: string;
    label: string;
  }>;
  ctaHref: string;
  ctaLabel: string;
};

export function MobileSideNav({
  items,
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
      <div className="mobile-side-nav">
        <button
          type="button"
          className="mobile-side-nav__toggle"
          aria-expanded={isOpen}
          aria-controls="mobile-side-nav-drawer"
          aria-label="فتح قائمة التنقل"
          onClick={() => setIsOpen(true)}
        >
          <span className="mobile-side-nav__toggle-lines" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div className="mobile-side-nav__overlay" onClick={closeNav}>
          <aside
            id="mobile-side-nav-drawer"
            className="mobile-side-nav__drawer"
            role="dialog"
            aria-modal="true"
            aria-label="قائمة التنقل"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mobile-side-nav__header">
              <p>التنقل</p>
              <button
                type="button"
                className="mobile-side-nav__close"
                aria-label="إغلاق القائمة"
                onClick={closeNav}
              >
                إغلاق
              </button>
            </div>

            <nav className="mobile-side-nav__nav" aria-label="أقسام الصفحة">
              {items.map((item) => (
                <a key={item.href} href={item.href} onClick={closeNav}>
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              className="button button-primary mobile-side-nav__cta"
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
