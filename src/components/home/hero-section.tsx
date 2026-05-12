import Image from "next/image";
import { reassurancePoints } from "@/components/home/content";
import {
  DownloadBookButton,
  ScheduleButton,
} from "@/components/home/shared";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section className="section hero-section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="section-kicker">
            {siteConfig.practitionerName} | {siteConfig.practitionerTitle}
          </p>
          <h1>
            هل لديك هدف تعرفه جيدًا… لكن شيئًا ما يمنعك من الوصول إليه؟
          </h1>
          <p className="hero-description">
            مع د. آيات عودة، ستتعلّم كيف تفهم العائق الشعوري خلف التعثر، وتحوّل
            الفشل من نهاية مؤلمة إلى خطوة واعية نحو النجاح.
          </p>

          <div className="hero-actions">
            <DownloadBookButton
              label="حمّل الكتاب المجاني"
              className="button button-primary"
            />
            <ScheduleButton
              label="احجز مكالمة مجانية"
              className="button button-secondary"
            />
          </div>

          <ul className="hero-points" role="list">
            {reassurancePoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="hero-panel">
          <article className="hero-card">
            <div className="hero-image-shell">
              <Image
                src={siteConfig.logoUrl}
                alt="شعار فيلينغ بليس أكاديمي"
                width={280}
                height={280}
                priority
                sizes="(max-width: 768px) 220px, 280px"
              />
            </div>

            <div className="hero-card-copy">
              <p>مساحة تبدأ بفهم ما يوقفك بدل أن تحاكم نفسك عليه</p>
              <h2>من التشتت إلى وضوح تعرف كيف تمشي نحوه</h2>
              <p>
                هنا لا نتعامل مع التعثر كعيب، بل كإشارة تحتاج إلى فهم أعمق،
                وخطة أوضح، ومرونة تسمح لك أن تعود من جديد.
              </p>
            </div>

            <div className="hero-stat-grid">
              <div>
                <strong>١٥ دقيقة</strong>
                <span>مكالمة مجانية آمنة</span>
              </div>
              <div>
                <strong>كتاب مجاني</strong>
                <span>بداية عملية نحو الوضوح</span>
              </div>
              <div>
                <strong>نهج إنساني</strong>
                <span>وعي داخلي وخطوات واقعية</span>
              </div>
            </div>
          </article>

          <div className="floating-quote">
            الفشل ليس ضد النجاح… الفشل جزء من الطريق.
          </div>
        </div>
      </div>
    </section>
  );
}
