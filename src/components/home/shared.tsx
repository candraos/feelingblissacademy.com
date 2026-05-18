type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
  centered?: boolean;
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
