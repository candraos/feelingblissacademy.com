import Image from "next/image";
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
          description={
            <>
              إذا كنت ترى نفسك هنا، فالمشكلة ليست في{" "}
              <span className="text-accent-red">طموحك</span>. المشكلة غالباً في{" "}
              <span className="text-accent-red">العائق غير المفكوك</span> بعد.
            </>
          }
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
            title={
              <>
                مرحباً بك في{" "}
                <span className="text-accent-red">Feeling Bliss Academy</span>{" "}
                حيث تتحول العرقلة إلى <span className="text-accent-red">قوة دفع!</span>
              </>
            }
            description={
              <>
                في الأكاديمية، لا نقدم لك مجرد نصائح إنشائية. لقد صممنا نظاماً
                مهنياً ومتكاملاً يدمج بين التشبيك النفسي والتمكين المادي العملي
                لتتخلص من <span className="text-accent-red">المعيقات</span> وتصل
                إلى حالة النعيم والبهجة النفسية{" "}
                <span className="text-accent-red">والوفرة المالية</span> التي
                تستحقها.
              </>
            }
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

export function AboutStorySection() {
  return (
    <section className="section" id="about-story">
      <div className="container">
        <div className="about-story-layout">
          <article className="surface-card about-story-card">
            <SectionHeading
              kicker="من تجربتي الشخصية"
              title={
                <>
                  من العثرة.. إلى <span className="text-accent-red">التميز</span>:
                  لماذا أسستُ هذه الأكاديمية؟
                </>
              }
              description="تجربة حقيقية"
            />

            <div className="about-story-prose">
              <p>
                مرحباً، أنا <span className="text-accent-red">الدكتورة آيات عودة</span>.
              </p>
              <p>
                خلال مسيرتي في العلاج النفسي والتطوير الذاتي، واجهتُ وساعدتُ
                المئات في مواجهة نوعين من الحواجز:{" "}
                <span className="text-accent-red">عراقيل نفسية</span> كـ
                (الخوف، الشك، والمماطلة)، و
                <span className="text-accent-red"> حواجز مادية</span> كـ
                (سوء إدارة الموارد والشعور الدائم بضيق الميزانية).
              </p>
              <p>
                رأيتُ كيف يربط الكثيرون بين سلامهم الداخلي وقدرتهم على الإنجاز
                المالي، وكيف يمكن للفوضى في جانب واحد أن تعطل الجانب الآخر
                تماماً وتؤجل التغيير لأجل غير مسمى.
              </p>
              <p>
                من رحم هذه التحديات، ولدت فكرة{" "}
                <span className="text-accent-red">Feeling Bliss Academy</span>.
              </p>
              <p>
                لقد صممتُ هذا البرنامج ليكون النظام العملي المتكامل الذي يفكك
                العقد والمعيقات النفسية أولاً، ثم يبني تمكيناً وعقلية مالية
                قوية، ليترجم كل ذلك في النهاية إلى خطوات استراتيجية ملموسة على
                أرض الواقع.
              </p>
              <p>
                عندما تنضم إلينا، أنتَ لا تشترك في كورس تقليدي، بل تبدأ{" "}
                <span className="text-accent-red">رحلة حقيقية مدعومة بالخبرة</span>.
              </p>
            </div>
          </article>

          <aside className="surface-card about-story-signature-card">
            <div className="about-story-logo-shell">
              <Image
                src={siteConfig.logoUrl}
                alt="شعار Feeling Bliss Academy"
                width={220}
                height={220}
                sizes="(max-width: 760px) 140px, 220px"
              />
            </div>

            <div className="about-story-signature-copy">
              <p className="about-story-signature-kicker">مؤسسة الأكاديمية</p>
              <h3>د. آيات عودة</h3>
              <p className="about-story-signature-script">Dr. Ayat Awde</p>
              <p>
                خبرة نفسية ومهنية صُممت لتربط بين التعافي الداخلي، وضوح القرار،
                والتنفيذ الواقعي.
              </p>
            </div>
          </aside>
        </div>
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
          title={
            <>
              محاور <span className="text-accent-red">البرنامج الأساسية</span>
            </>
          }
          description={
            <>
              قسّمنا الرحلة إلى <span className="text-accent-red">ثلاث مراحل واضحة</span>{" "}
              حتى لا يضيع منك الطريق بين الوعي والتنفيذ.
            </>
          }
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
          title={
            <>
              هذا البرنامج صُمم لمن يملك <span className="text-accent-red">الطموح</span>{" "}
              لكنه يشعر أنه <span className="text-accent-red">متوقف في المنتصف</span>
            </>
          }
          description={
            <>
              إذا كنت تريد <span className="text-accent-red">توازناً حقيقياً</span>{" "}
              بين الداخل والخارج، بين السلام والإنجاز، فهذه الرحلة بُنيت لك.
            </>
          }
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
          title={
            <>
              استثمر اليوم في انتقالك من{" "}
              <span className="text-accent-red">العرقلة</span> إلى{" "}
              <span className="text-accent-red">الوضوح والوفرة</span>
            </>
          }
          description={
            <>
              <span className="text-accent-red">عرض محدود</span> لباقة متكاملة
              تمنحك المحتوى العملي، المكافآت، والمساحة الداعمة لتبدأ بثقة.
            </>
          }
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
              يشمل <span className="text-accent-red">البرنامج الكامل</span>،
              الأدوات التطبيقية، والمكافآت التي تساعدك على الربط بين الوعي
              النفسي و<span className="text-accent-red">الانضباط المالي</span>.
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
            <h3>
              احجز <span className="text-accent-red">مقعدك الآن</span> عبر واتساب
            </h3>
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

            {siteConfig.paymentUrl ? (
              <a
                className="button button-secondary button-payment"
                href={siteConfig.paymentUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                بوابة الدفع الإلكتروني
              </a>
            ) : null}

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
            title={
              <>
                <span className="text-accent-red">أحلامك</span> لا تستحق الانتظار
                أكثر.. <span className="text-accent-red">العرقلة تنتهي هنا!</span>
              </>
            }
            description={
              <>
                لا تؤجل نفسك أكثر. اختر اليوم أن تبدأ{" "}
                <span className="text-accent-red">بنظام أوضح</span>، نفس أهدأ،
                وخطوات مالية أكثر ذكاء.
              </>
            }
            centered
          />

          <OfferCountdown />

          <div className="hero-actions centered-buttons">
            {siteConfig.paymentUrl ? (
              <a
                className="button button-secondary button-payment"
                href={siteConfig.paymentUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                ادخل إلى بوابة الدفع الإلكتروني
              </a>
            ) : null}

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
