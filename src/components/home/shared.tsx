import { siteConfig } from "@/lib/site-config";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
  centered?: boolean;
};

type ButtonProps = {
  label: string;
  className?: string;
};

type ContactChannelProps = {
  title: string;
  description: string;
  actionLabel?: string;
  href?: string;
};

export function SectionHeading({
  kicker,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <header className={`section-heading${centered ? " is-centered" : ""}`}>
      <p className="section-kicker">{kicker}</p>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </header>
  );
}

export function ScheduleButton({ label, className = "" }: ButtonProps) {
  return (
    <a
      className={className}
      href={siteConfig.calendlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {label}
    </a>
  );
}

export function DownloadBookButton({ label, className = "" }: ButtonProps) {
  return (
    <a
      className={className}
      href={siteConfig.bookDownloadUrl}
      download
      aria-label={label}
    >
      {label}
    </a>
  );
}

export function ContactChannel({
  title,
  description,
  actionLabel,
  href,
}: ContactChannelProps) {
  const isAvailable = Boolean(href);

  return (
    <article className={`contact-card${isAvailable ? "" : " is-muted"}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      {isAvailable && href && actionLabel ? (
        <a
          className="contact-link"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {actionLabel}
        </a>
      ) : (
        <p className="channel-note">
          يمكن إضافة الرابط الرسمي هنا فور تزويده، وحتى ذلك الحين يمكنك استخدام
          النموذج أو الحجز المباشر.
        </p>
      )}
    </article>
  );
}
