import Image from "next/image";
import { couplePaymentMethods } from "@/components/couple-program/content";
import { WhatsappIcon } from "@/components/home/whatsapp-float-button";

type CouplePaymentMethodsProps = {
  centered?: boolean;
  tone?: "light" | "dark";
};

export function CouplePaymentMethods({
  centered = false,
  tone = "light",
}: CouplePaymentMethodsProps) {
  return (
    <div
      className={`payment-methods${centered ? " is-centered" : ""}${
        tone === "dark" ? " on-dark" : ""
      }`}
    >
      <p className="payment-methods-title">طرق الدفع المتاحة</p>

      <ul className="payment-methods-list" role="list">
        {couplePaymentMethods.map((method) => (
          <li key={method.name}>
            <a
              className="payment-method"
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`الدفع عبر ${method.name} - يفتح واتساب`}
            >
              <Image
                src={method.logo}
                alt=""
                width={method.logoWidth}
                height={method.logoHeight}
              />
              <span className="payment-method-hint">
                <WhatsappIcon size={15} />
                تواصلا عبر واتساب
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
