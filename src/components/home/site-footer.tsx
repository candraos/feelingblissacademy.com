import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-brand">
          <strong>{siteConfig.englishName}</strong>
          <p>
            برنامج عربي يربط بين التحرر النفسي والإدارة المالية الذكية لتحقيق
            أهدافك بثبات ووضوح.
          </p>
        </div>

        <nav className="footer-links" aria-label="روابط التذييل">
          <Link href="/privacy-policy">سياسة الخصوصية</Link>
          <Link href="/terms">الشروط والأحكام</Link>
          <a href={`mailto:${siteConfig.email}`}>تواصل معنا</a>
        </nav>

        <p className="footer-copy">
          جميع الحقوق محفوظة © {new Date().getFullYear()} {siteConfig.englishName}
        </p>
      </div>
    </footer>
  );
}
