"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type MobileSideNavProps = {
  items: ReadonlyArray<{
    href: string;
    label: string;
  }>;
  tagline: string;
  ctaHref: string;
  ctaLabel: string;
  activeHref?: string;
};

export function MobileSideNav({
  items,
  tagline,
  ctaHref,
  ctaLabel,
  activeHref,
}: MobileSideNavProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);

  function clearCloseTimeout() {
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }

  function openNav() {
    clearCloseTimeout();
    setIsMounted(true);

    window.requestAnimationFrame(() => {
      // Force a style pass in the closed position so the slide-in transitions.
      drawerRef.current?.getBoundingClientRect();
      setIsOpen(true);
      closeButtonRef.current?.focus();
    });
  }

  function closeNav() {
    clearCloseTimeout();
    setIsOpen(false);
    toggleRef.current?.focus();

    closeTimeoutRef.current = window.setTimeout(() => {
      setIsMounted(false);
      closeTimeoutRef.current = null;
    }, 220);
  }

  useEffect(() => {
    if (!isMounted) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const desktopQuery = window.matchMedia("(min-width: 768px)");

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeNav();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusable = drawerRef.current?.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])"
      );

      if (!focusable || focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const activeElement = document.activeElement;

      if (!drawerRef.current?.contains(activeElement)) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    function handleBreakpointChange(event: MediaQueryListEvent) {
      if (event.matches) {
        closeNav();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", handleBreakpointChange);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", handleBreakpointChange);
      clearCloseTimeout();
    };
  }, [isMounted]);

  return (
    <>
      <div className="md:hidden">
        <button
          ref={toggleRef}
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md bg-gray-100 text-gray-700 transition hover:bg-gray-200"
          aria-expanded={isOpen}
          aria-controls="mobile-side-nav-drawer"
          data-testid="mobile-side-nav-toggle"
          aria-label="فتح قائمة التنقل"
          onClick={openNav}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-6"
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

      {isMounted
        ? // Rendered into <body>: the header's backdrop-blur would otherwise
          // become the containing block of this fixed overlay.
          createPortal(
            <div
              className="fixed inset-0 z-50 md:hidden"
              data-testid="mobile-side-nav-overlay"
            >
              <div
                className={`absolute inset-0 bg-slate-900/45 transition-opacity duration-200 ${
                  isOpen ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden="true"
                onClick={closeNav}
              />

              <aside
                ref={drawerRef}
                id="mobile-side-nav-drawer"
                data-testid="mobile-side-nav-drawer"
                className={`absolute inset-y-0 inset-e-0 flex w-[min(20rem,calc(100%-3rem))] flex-col gap-6 overflow-y-auto border-s border-slate-200 bg-white p-5 shadow-2xl transition-transform duration-200 ease-out ${
                  isOpen ? "translate-x-0" : "translate-x-full rtl:-translate-x-full"
                }`}
                role="dialog"
                aria-modal="true"
                aria-label="قائمة التنقل"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="grid gap-1">
                    <p className="m-0 text-lg font-extrabold text-slate-900">
                      التنقل
                    </p>
                    <span className="text-sm text-slate-500">{tagline}</span>
                  </div>

                  <button
                    ref={closeButtonRef}
                    type="button"
                    className="inline-flex min-h-11 items-center rounded-md px-2 text-sm font-bold text-teal-700 transition hover:bg-teal-50"
                    aria-label="إغلاق القائمة"
                    onClick={closeNav}
                  >
                    إغلاق
                  </button>
                </div>

                <nav className="grid gap-2" aria-label="التنقل الرئيسي">
                  {items.map((item) => {
                    const isActive = item.href === activeHref;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeNav}
                        className={`rounded-xl border px-4 py-3 text-base transition ${
                          isActive
                            ? "border-[#0ca3bf] bg-[#0ca3bf]/10 font-semibold text-[#0a4d4f]"
                            : "border-slate-200 bg-white text-slate-800 hover:border-teal-200 hover:bg-teal-50"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>

                <a
                  className="mt-auto inline-flex min-h-12 items-center justify-center rounded-md bg-[#FF3131] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#d92929] hover:text-white"
                  href={ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeNav}
                >
                  {ctaLabel}
                </a>
              </aside>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
