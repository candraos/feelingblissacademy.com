"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

const STORAGE_KEY = "feeling-bliss-offer-deadline";
const OFFER_DURATION_MS = siteConfig.offerTimerMinutes * 60 * 1000;

type CountdownParts = {
  hours: number;
  minutes: number;
  seconds: number;
};

function getRemainingParts(remainingMs: number): CountdownParts {
  const safeRemaining = Math.max(0, remainingMs);
  const totalSeconds = Math.floor(safeRemaining / 1000);

  return {
    hours: Math.floor(totalSeconds / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function toArabicDigits(value: number) {
  return value.toLocaleString("ar-EG", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
}

export function OfferCountdown() {
  const [remainingMs, setRemainingMs] = useState(OFFER_DURATION_MS);

  useEffect(() => {
    const now = Date.now();
    const storedDeadline = Number(window.localStorage.getItem(STORAGE_KEY));
    let currentDeadline =
      Number.isFinite(storedDeadline) && storedDeadline > now
        ? storedDeadline
        : now + OFFER_DURATION_MS;

    window.localStorage.setItem(STORAGE_KEY, String(currentDeadline));
    setRemainingMs(currentDeadline - now);

    const intervalId = window.setInterval(() => {
      const currentTime = Date.now();
      const currentRemaining = currentDeadline - currentTime;

      if (currentRemaining <= 0) {
        currentDeadline = currentTime + OFFER_DURATION_MS;

        window.localStorage.setItem(STORAGE_KEY, String(currentDeadline));
        setRemainingMs(OFFER_DURATION_MS);
        return;
      }

      setRemainingMs(currentRemaining);
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  const { hours, minutes, seconds } = getRemainingParts(remainingMs);

  return (
    <div className="countdown-card" aria-live="polite">
      <p className="countdown-label">ينتهي هذا العرض الخاص خلال</p>

      <div className="countdown-grid">
        <div>
          <strong>{toArabicDigits(hours)}</strong>
          <span>ساعة</span>
        </div>
        <div>
          <strong>{toArabicDigits(minutes)}</strong>
          <span>دقيقة</span>
        </div>
        <div>
          <strong>{toArabicDigits(seconds)}</strong>
          <span>ثانية</span>
        </div>
      </div>
    </div>
  );
}
