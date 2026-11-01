import Image from "next/image";
import { couplePaymentMethods } from "@/components/couple-program/content";
import { PaymentQrButton } from "@/components/couple-program/payment-qr-button";
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
            {method.qrCode ? (
              <PaymentQrButton
                name={method.name}
                logo={method.logo}
                logoWidth={method.logoWidth}
                logoHeight={method.logoHeight}
                qrCode={method.qrCode}
                confirmHref={method.href}
              />
            ) : (
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
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
