import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <p className="footer-copy">
          © {new Date().getFullYear()} Feeling Bliss Academy. Powered by{" "}
          <a
            href="https://charbelandraos.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Charbel Andraos
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
