import { siteConfig } from "@/lib/site-config";

type WhatsappIconProps = {
  size?: number;
};

type WhatsappFloatButtonProps = {
  href?: string;
};

export function WhatsappIcon({ size = 28 }: WhatsappIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.02 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.47 1.33 4.98L2 22l5.2-1.36a9.93 9.93 0 0 0 4.82 1.23h.01c5.5 0 9.96-4.46 9.96-9.96S17.52 2 12.02 2zm0 18.2h-.01a8.24 8.24 0 0 1-4.2-1.15l-.3-.18-3.09.81.83-3.01-.2-.31a8.2 8.2 0 0 1-1.27-4.4c0-4.55 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 8.24 8.24c0 4.55-3.7 8.24-8.25 8.24zm4.52-6.17c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.45-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.51.59.19 1.12.16 1.54.1.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29z" />
    </svg>
  );
}

export function WhatsappFloatButton({
  href = siteConfig.whatsappUrl,
}: WhatsappFloatButtonProps) {
  return (
    <a
      className="whatsapp-float-button"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا على واتساب"
    >
      <WhatsappIcon />
    </a>
  );
}
