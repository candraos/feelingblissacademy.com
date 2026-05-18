"use client";

import { useEffect, useState } from "react";

type MobileSideNavProps = {
  items: ReadonlyArray<{
    href: string;
    label: string;
  }>;
  calendlyUrl: string;
};

export function MobileSideNav({
  items,
  calendlyUrl,
}: MobileSideNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

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
        <div
          className="mobile-side-nav__overlay"
          onClick={() => setIsOpen(false)}
        >
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
                onClick={() => setIsOpen(false)}
              >
                إغلاق
              </button>
            </div>

            <nav
              className="mobile-side-nav__nav"
              aria-label="التنقل في الجوال"
            >
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              className="button button-primary mobile-side-nav__cta"
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              احجز مكالمتك المجانية
            </a>
          </aside>
        </div>
      ) : null}
    </>
  );
}
