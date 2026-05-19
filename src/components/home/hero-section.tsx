import Image from "next/image";
import { heroHighlights, heroStats } from "@/components/home/content";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section className="section hero-section" id="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="section-kicker">طريقك نحو تحقيق أهدافك</p>

          <h1>
            هل تشعر أن هناك جداراً خفياً يمنعك من الوصول إلى{" "}
            <span className="text-accent-red">أحلامك؟</span> حان الوقت لهدمه
            وتحقيق أهدافك <span className="text-accent-red">بنجاح!</span>
          </h1>

          <p className="hero-description">
            سواء كانت <span className="text-accent-red">العرقلة</span> نفسية أو
            مادية، نحن هنا لنمنحك الحل المتكامل والنظام العملي للانتقال من
            التعثر إلى <span className="text-accent-red">التميز.</span>
          </p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              اشترك عبر واتساب وابدأ رحلة التغيير
            </a>
            <a className="button button-secondary" href="#modules">
              اكتشف محاور البرنامج
            </a>
          </div>

          <ul className="hero-highlight-list" role="list">
            {heroHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="hero-panel">
          <article className="hero-card">
            <div className="hero-card-top">
              <span className="hero-badge">من التعثر إلى التميز</span>
              <div className="hero-image-shell">
                <Image
                  src={siteConfig.logoUrl}
                  alt="شعار Feeling Bliss Academy"
                  width={124}
                  height={124}
                  priority
                  sizes="124px"
                />
              </div>
            </div>

            <div className="hero-card-copy">
              <p className="hero-card-label">{siteConfig.arabicName}</p>
              <h2>
                <span className="text-accent-red">هدوء نفسي</span>، قرار مالي
                أوضح، و<span className="text-accent-red">خطوات قابلة للتنفيذ</span>
              </h2>
              <p>
                صُممت هذه الصفحة لتقودك تدريجياً من الإرباك إلى{" "}
                <span className="text-accent-red">الوضوح</span>، ومن التردد إلى
                التسجيل، عبر رحلة تحترم حالتك النفسية وواقعك{" "}
                <span className="text-accent-red">المالي</span> معاً.
              </p>
            </div>

            <div className="hero-stat-grid">
              {heroStats.map((item) => (
                <div key={item.value}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </article>

          <p className="hero-quote">
            عندما تهدأ الضوضاء الداخلية وتصبح مواردك تحت سيطرتك، تظهر الخطوة
            التالية بوضوح.
          </p>
        </div>
      </div>
    </section>
  );
}
