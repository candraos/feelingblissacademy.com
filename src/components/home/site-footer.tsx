import { navigationItems } from "@/components/home/content";
import { ScheduleButton } from "@/components/home/shared";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const emailLink = `mailto:${siteConfig.email}`;

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h2>{siteConfig.arabicName}</h2>
          <p>
            {siteConfig.practitionerName} | {siteConfig.practitionerTitle}
          </p>
          <p>
            موقع عربي هادئ وواضح يساعد الزائر أن ينتقل من التشتت إلى خطوة أقرب
            للوعي والبدء.
          </p>
        </div>

        <div className="footer-links">
          <h3>الصفحات</h3>
          <div>
            {navigationItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <address className="footer-contact">
          <h3>روابط التواصل</h3>
          <a href={emailLink}>البريد الإلكتروني</a>
          {siteConfig.whatsappUrl ? (
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              واتساب
            </a>
          ) : (
            <span>واتساب</span>
          )}
          {siteConfig.instagramUrl ? (
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              إنستغرام
            </a>
          ) : (
            <span>إنستغرام</span>
          )}
          <ScheduleButton
            label="احجز 15 دقيقة لاكتشاف فرص التغيير"
            className="footer-booking"
          />
        </address>
      </div>

      <div className="container footer-bottom">
        <p>جميع الحقوق محفوظة © فيلينغ بليس أكاديمي</p>
      </div>
    </footer>
  );
}
