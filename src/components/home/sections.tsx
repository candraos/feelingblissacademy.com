import {
  audienceItems,
  bonusItems,
  moduleCards,
  offerFeatures,
  painPointCards,
  solutionPillars,
  transformationScenarios,
  trustIndicators,
} from "@/components/home/content";
import { OfferCountdown } from "@/components/home/offer-countdown";
import { SectionHeading } from "@/components/home/shared";
import { siteConfig } from "@/lib/site-config";

export function PainPointsSection() {
  return (
    <section className="section" id="pain-points">
      <div className="container">
        <SectionHeading
          kicker="نحن نشعر بك"
          title="هل تجد نفسك في إحدى هذه الحالات؟"
          description="إذا كنت ترى نفسك هنا، فالمشكلة ليست في طموحك. المشكلة غالباً في العائق غير المفكوك بعد."
        />

        <div className="card-grid pain-grid">
          {painPointCards.map((item) => (
            <article key={item.title} className="surface-card pain-card">
              <span className="card-tag">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SolutionSection() {
  return (
    <section className="section section-alt" id="solution">
      <div className="container solution-layout">
        <div>
          <SectionHeading
            kicker="لدينا الحل"
            title="مرحباً بك في Feeling Bliss Academy حيث تتحول العرقلة إلى قوة دفع!"
            description="في الأكاديمية، لا نقدم لك مجرد نصائح إنشائية. لقد صممنا نظاماً مهنياً ومتكاملاً يدمج بين التشبيك النفسي والتمكين المادي العملي لتتخلص من المعيقات وتصل إلى حالة النعيم والبهجة النفسية والوفرة المالية التي تستحقها."
          />
        </div>

        <article className="surface-card solution-card">
          <p className="solution-card-kicker">ما الذي يميز هذا النظام؟</p>
          <ul className="feature-list" role="list">
            {solutionPillars.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export function ModulesSection() {
  return (
    <section className="section" id="modules">
      <div className="container">
        <SectionHeading
          kicker="ماذا ستتعلم؟"
          title="محاور البرنامج الأساسية"
          description="قسّمنا الرحلة إلى ثلاث مراحل واضحة حتى لا يضيع منك الطريق بين الوعي والتنفيذ."
        />

        <div className="card-grid module-grid">
          {moduleCards.map((module) => (
            <article key={module.title} className="surface-card module-card">
              <p className="card-tag">{module.phase}</p>
              <h3>{module.title}</h3>
              <ul className="feature-list" role="list">
                {module.points.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AudienceSection() {
  return (
    <section className="section section-soft" id="audience">
      <div className="container">
        <SectionHeading
          kicker="لمن هذا البرنامج؟"
          title="هذا البرنامج صُمم لمن يملك الطموح لكنه يشعر أنه متوقف في المنتصف"
          description="إذا كنت تريد توازناً حقيقياً بين الداخل والخارج، بين السلام والإنجاز، فهذه الرحلة بُنيت لك."
          centered
        />

        <div className="card-grid audience-grid">
          {audienceItems.map((item) => (
            <article key={item} className="surface-card audience-card">
              <p>{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SocialProofSection() {
  return (
    <section className="section" id="results">
      <div className="container">
        <SectionHeading
          kicker="الضمان والثقة"
          title="كيف يبدو التحول عندما تملك النظام الصحيح؟"
          description="تعرض البطاقات التالية أنواع التحول التي صُمم البرنامج لقيادتها، بينما يمنحك الضمان مساحة آمنة لاتخاذ القرار بثقة."
        />

        <div className="card-grid social-grid">
          {transformationScenarios.map((item) => (
            <article key={item.title} className="surface-card social-card">
              <p className="card-tag">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <article className="surface-card trust-card">
          <div>
            <p className="trust-kicker">ضمان 100%</p>
            <h3>جرّب البرنامج بأمان كامل</h3>
            <p>
              إذا شعرت أن البرنامج لم يضف لك قيمة حقيقية، يمكنك طلب استرداد كامل خلال{" "}
              {siteConfig.refundWindowDays} أيام.
            </p>
          </div>

          <ul className="feature-list" role="list">
            {trustIndicators.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export function OfferSection() {
  return (
    <section className="section section-alt" id="offer">
      <div className="container">
        <SectionHeading
          kicker="العرض والأسعار"
          title="استثمر اليوم في انتقالك من العرقلة إلى الوضوح والوفرة"
          description="عرض محدود لباقة متكاملة تمنحك المحتوى العملي، المكافآت، والمساحة الداعمة لتبدأ بثقة."
        />

        <div className="offer-layout">
          <article className="surface-card pricing-card">
            <div className="pricing-head">
              <span className="pricing-chip">عرض لفترة محدودة</span>
              <p className="pricing-label">الباقة المتكاملة</p>
            </div>

            <div className="price-row" aria-label="السعر الحالي">
              <span className="price-old">${siteConfig.offerOriginalPrice}</span>
              <strong className="price-current">
                ${siteConfig.offerCurrentPrice}
              </strong>
            </div>

            <p className="pricing-copy">
              يشمل البرنامج الكامل، الأدوات التطبيقية، والمكافآت التي تساعدك على الربط بين
              الوعي النفسي والانضباط المالي.
            </p>

            <ul className="feature-list" role="list">
              {offerFeatures.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="card-grid bonus-grid">
              {bonusItems.map((bonus) => (
                <article key={bonus.title} className="bonus-card">
                  <p className="card-tag">{bonus.title}</p>
                  <p>{bonus.description}</p>
                </article>
              ))}
            </div>
          </article>

          <article className="surface-card register-card">
            <p className="register-kicker">الحجز المباشر</p>
            <h3>احجز مقعدك الآن عبر واتساب</h3>
            <p>
              أزلنا نموذج التسجيل. راسلنا مباشرة على واتساب وسنرسل لك تفاصيل التسجيل،
              آلية الدفع، وخطوات البدء المناسبة لك.
            </p>

            <a
              className="button button-primary"
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              ابدأ الحجز على واتساب
            </a>

            <a
              className="register-link"
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              الرقم المباشر: {siteConfig.whatsappNumberDisplay}
            </a>

            <p className="form-caption">
              سنرد عليك مباشرة لتأكيد المقعد والإجابة عن أي سؤال قبل الاشتراك.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section className="section final-cta-section">
      <div className="container">
        <article className="final-cta-card">
          <SectionHeading
            kicker="الخطوة الأخيرة"
            title="أحلامك لا تستحق الانتظار أكثر.. العرقلة تنتهي هنا!"
            description="لا تؤجل نفسك أكثر. اختر اليوم أن تبدأ بنظام أوضح، نفس أهدأ، وخطوات مالية أكثر ذكاء."
            centered
          />

          <OfferCountdown />

          <div className="hero-actions centered-buttons">
            
            <a
              className="button button-secondary button-red"
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              تحدث معنا على واتساب
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
