"use client";

import Image from "next/image";
import { useId, useRef } from "react";
import { WhatsappIcon } from "@/components/home/whatsapp-float-button";

type PaymentQrButtonProps = {
  name: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  qrCode: string;
  confirmHref: string;
};

export function PaymentQrButton({
  name,
  logo,
  logoWidth,
  logoHeight,
  qrCode,
  confirmHref,
}: PaymentQrButtonProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  return (
    <>
      <button
        type="button"
        className="payment-method"
        aria-haspopup="dialog"
        aria-label={`الدفع عبر ${name} - يعرض رمز QR`}
        onClick={() => dialogRef.current?.showModal()}
      >
        <Image src={logo} alt="" width={logoWidth} height={logoHeight} />
        <span className="payment-method-hint is-qr">
          <QrIcon />
          امسحا رمز QR للدفع
        </span>
      </button>

      <dialog
        ref={dialogRef}
        className="payment-qr-dialog"
        aria-labelledby={titleId}
        onClick={(event) => {
          // The dialog has no padding of its own, so a click that lands on it
          // (rather than on its content) is a click on the backdrop.
          if (event.target === event.currentTarget) {
            event.currentTarget.close();
          }
        }}
      >
        <div className="payment-qr-body">
          <h3 id={titleId}>الدفع عبر {name}</h3>
          <p>افتحا تطبيق {name} وامسحا رمز QR التالي لإتمام الدفع.</p>

          <Image
            className="payment-qr-image"
            src={qrCode}
            alt={`رمز QR للدفع عبر ${name}`}
            width={494}
            height={494}
            // Served as-is: re-encoding would blur the code a scanner reads.
            unoptimized
          />

          <p className="payment-qr-note">
            بعد التحويل، أرسلا لنا إثبات الدفع عبر واتساب لتأكيد حجزكما.
          </p>

          <div className="payment-qr-actions">
            <a
              className="button button-primary"
              href={confirmHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappIcon size={20} />
              تأكيد الدفع عبر واتساب
            </a>
            <form method="dialog">
              <button type="submit" className="button button-secondary">
                إغلاق
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

function QrIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M14 14h3v3h-3zM20 14v.01M14 20h.01M17 20h4v-3" />
    </svg>
  );
}
