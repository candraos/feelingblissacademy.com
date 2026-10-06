import { WhatsappIcon } from "@/components/home/whatsapp-float-button";
import { coupleWhatsappUrl } from "@/components/couple-program/content";
import { siteConfig } from "@/lib/site-config";

type CoupleCtaButtonsProps = {
  centered?: boolean;
  tone?: "light" | "dark";
};

export function CoupleCtaButtons({
  centered = false,
  tone = "light",
}: CoupleCtaButtonsProps) {
  const isDark = tone === "dark";

  return (
    <div className={`hero-actions${centered ? " is-centered" : ""}`}>
      <a
        className={`button ${
          isDark ? "button-secondary button-red" : "button-primary"
        }`}
        href={coupleWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsappIcon size={20} />
        احجزا مكانكما عبر واتساب
      </a>
      <a
        className={`button ${isDark ? "button-ghost-light" : "button-secondary"}`}
        href={siteConfig.coupleAssessmentUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        تقييم العلاقة
      </a>
    </div>
  );
}
