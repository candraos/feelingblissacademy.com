import Image from "next/image";
import { CoupleCtaButtons } from "@/components/couple-program/cta-buttons";
import { CouplePaymentMethods } from "@/components/couple-program/payment-methods";
import {
  coupleAudienceIntro,
  coupleAudienceItems,
  coupleAudienceNote,
  coupleBenefits,
  coupleBookingSteps,
  coupleFaqs,
  coupleGiftStages,
  coupleHeroHighlights,
  coupleHeroStats,
  coupleProgramEnglishName,
  coupleScheduleOptions,
  coupleStoryParagraphs,
  coupleStructureFeatures,
  coupleTestimonials,
  coupleValueCards,
  coupleWorkAxes,
  relationshipKillers,
  relationshipKillersBridge,
} from "@/components/couple-program/content";
import { SectionHeading } from "@/components/home/shared";
import { siteConfig } from "@/lib/site-config";

export function CoupleHeroSection() {
  return (
    <section className="section hero-section" id="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="section-kicker">إطلاق رسمي: برنامج علاجي للأزواج</p>

          <h1>
            علاج العلاقة <span className="text-accent-red">لتحيا من جديد</span>
          </h1>

          <p className="hero-description">
            برنامج علاجي متكامل من{" "}
            <span className="text-accent-red">12 ساعة</span> للأزواج المرهقين
            عاطفياً: نكسر معاً الأنماط والانفعالات المتكررة، ونعيد بناء{" "}
            <span className="text-accent-red">
              الثقة والتواصل والاحترام المتبادل
            </span>
            ، بحلول جذرية بدل المسكنات المؤقتة.
          </p>

          <CoupleCtaButtons />

          <ul className="hero-highlight-list" role="list">
            {coupleHeroHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="hero-panel">
          <article className="hero-card">
            <div className="hero-card-top">
              <span className="hero-badge">إطلاق رسمي</span>
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
              <p className="hero-card-label">{coupleProgramEnglishName}</p>
              <h2>
                ثقة، <span className="text-accent-red">تواصل</span>، وأمان يعود
                إلى بيتكما
              </h2>
              <p>
                برنامج مصمم للثنائيات التي ترغب بصدق في التغيير: نبدأ{" "}
                <span className="text-accent-red">بتقييم دقيق</span>، ثم نعمل
                معاً على تمارين علاجية تعزز التفاهم وتتجاوز تراكمات الماضي.
              </p>
            </div>

            <div className="hero-stat-grid">
              {coupleHeroStats.map((item) => (
                <div key={item.value}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </article>

          <p className="hero-quote">
            من التخبط العاطفي وتكرار نفس الخلافات.. إلى إطار عملي واضح ومجرب
            لتجاوز الأزمات.
          </p>
        </div>
      </div>
    </section>
  );
}

export function CoupleAudienceSection() {
  return (
    <section className="section section-soft" id="audience">
      <div className="container">
        <SectionHeading
          kicker="لمن هذا البرنامج؟"
          title={
            <>
              هذا البرنامج مخصص تحديداً{" "}
              <span className="text-accent-red">للثنائيات</span> الذين:
            </>
          }
          description={coupleAudienceIntro}
        />

        <div className="card-grid audience-grid">
          {coupleAudienceItems.map((item) => (
            <article key={item} className="surface-card audience-card">
              <p>{item}</p>
            </article>
          ))}
        </div>

        <div className="notice-card" role="note">
          <p>
            <strong>ملاحظة مهمة: </strong>
            {coupleAudienceNote}
          </p>
        </div>
      </div>
    </section>
  );
}

export function RelationshipKillersSection() {
  return (
    <section className="section section-alt" id="relationship-killers">
      <div className="container">
        <SectionHeading
          kicker="ما الذي يهدد استقرار العلاقة؟"
          title={
            <>
              تفكيك <span className="text-accent-red">مهلكات العلاقة</span> وهدم
              أنماط التواصل السلبي
            </>
          }
          description="نساعدكما في البرنامج على الاكتشاف المبكر والتفكيك العلمي لـ«مهلكات العلاقة» التي تهدد استقرار أي علاقة:"
        />

        <div className="card-grid killer-grid">
          {relationshipKillers.map((item) => (
            <article
              key={item.term}
              className="surface-card info-card killer-card"
            >
              <div className="killer-head">
                <span className="killer-number" aria-hidden="true">
                  {item.number}
                </span>
                <h3>{item.title}</h3>
                <span className="card-tag">{item.term}</span>
              </div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <p className="hero-quote bridge-callout">{relationshipKillersBridge}</p>
      </div>
    </section>
  );
}

export function CoupleValueSection() {
  return (
    <section className="section" id="value">
      <div className="container">
        <SectionHeading
          kicker="ما الذي يضيفه البرنامج؟"
          title={
            <>
              القيمة التي يضيفها البرنامج{" "}
              <span className="text-accent-red">لحياتكما معاً</span>
            </>
          }
          description="نعالج جذور المشكلة لا أعراضها فقط، ونمنحكما أدوات تخدم علاقتكما لسنوات طويلة."
        />

        <div className="card-grid module-grid">
          {coupleValueCards.map((item) => (
            <article key={item.title} className="surface-card info-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}

          <article className="cta-card">
            <h3>جاهزان لبداية جديدة؟</h3>
            <p>
              احجزا مكانكما على لائحة انتظار البرنامج واستلما هداياكما فور
              الدفع.
            </p>
            <CoupleCtaButtons tone="dark" />
          </article>
        </div>
      </div>
    </section>
  );
}

export function CoupleBenefitsSection() {
  return (
    <section className="section section-soft" id="benefits">
      <div className="container">
        <SectionHeading
          kicker="ماذا يستفيد الشريكان من هذا البرنامج؟"
          title={
            <>
              ما ستخرجان به <span className="text-accent-red">من هذه الرحلة</span>
            </>
          }
        />

        <article className="surface-card benefit-card">
          <ul className="feature-list benefit-list" role="list">
            {coupleBenefits.map((item) => (
              <li key={item.title}>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export function CoupleStructureSection() {
  return (
    <section className="section" id="structure">
      <div className="container">
        <SectionHeading
          kicker="تفاصيل مميزة ونظام البرنامج"
          title={
            <>
              باقة من <span className="text-accent-red">12 ساعة علاجية</span>{" "}
              بنظام مرن يناسب جدولكما
            </>
          }
          description="اختارا الحضور في العيادة أو أونلاين، والجدول الزمني الأنسب لكما."
        />

        <div className="structure-layout">
          <article className="surface-card package-card">
            <p className="pricing-label">نظام الباقة (Package)</p>

            <div className="package-hours">
              <strong>12</strong>
              <span>ساعة علاجية</span>
            </div>

            <p className="pricing-copy">
              يمتد البرنامج على مدار 12 ساعة علاجية، مع مرونة اختيار الجدول
              الزمني الأنسب لكما:
            </p>

            <div className="package-options">
              {coupleScheduleOptions.map((option) => (
                <div key={option.label} className="package-option">
                  <span className="card-tag">{option.label}</span>
                  <strong>{option.duration}</strong>
                  <span>{option.pace}</span>
                </div>
              ))}
            </div>
          </article>

          <div className="structure-features">
            {coupleStructureFeatures.map((item) => (
              <article key={item.title} className="surface-card info-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.showPaymentMethods ? <CouplePaymentMethods /> : null}
              </article>
            ))}
          </div>
        </div>

        <div className="structure-axes">
          <h3>محاور العمل داخل البرنامج</h3>
          <ol className="step-list axes-list" role="list">
            {coupleWorkAxes.map((item) => (
              <li key={item}>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function CoupleGiftsSection() {
  return (
    <section className="section section-alt" id="gifts">
      <div className="container">
        <SectionHeading
          kicker="هدايا ومزايا حصرية للمشتركين"
          title={
            <>
              هدايا تصلكما <span className="text-accent-red">فور الدفع</span>،
              وميزة خاصة عند إتمام الاشتراك
            </>
          }
          centered
        />

        <div className="gift-layout">
          {coupleGiftStages.map((stage) => (
            <article
              key={stage.number}
              className={`surface-card gift-stage${
                stage.isPremium ? " is-premium" : ""
              }`}
            >
              <div className="gift-stage-head">
                <span className="gift-stage-number" aria-hidden="true">
                  {stage.number}
                </span>
                <div>
                  <h3>{stage.label}</h3>
                  <p>{stage.intro}</p>
                </div>
              </div>

              <div className="gift-items">
                {stage.items.map((item) => (
                  <div key={item.title} className="bonus-card">
                    <p className="card-tag">{item.title}</p>
                    <p>{item.description}</p>
                    {item.list ? (
                      <ul className="feature-list" role="list">
                        {item.list.map((entry) => (
                          <li key={entry}>{entry}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="gift-cta">
          <CoupleCtaButtons centered />
        </div>
      </div>
    </section>
  );
}

export function CoupleTestimonialsSection() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <SectionHeading
          kicker="تجارب حقيقية"
          title="ثنائيات استعادت الأمان والتوازن"
          description="كلمات من مشتركين سابقين في البرنامج، بعد أن غيّرت الأدوات والتمارين العلاجية شكل يومهم."
          centered
        />

        <div className="card-grid testimonials-grid couple-testimonials">
          {coupleTestimonials.map((item) => (
            <article key={item.name} className="surface-card testimonial-card">
              <div className="testimonial-head">
                <p className="testimonial-name">{item.name}</p>
                <p className="testimonial-role">{item.role}</p>
              </div>

              <p className="testimonial-quote">&quot;{item.quote}&quot;</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CoupleStorySection() {
  return (
    <section className="section section-soft" id="story">
      <div className="container">
        <div className="about-story-layout">
          <article className="surface-card about-story-card">
            <SectionHeading
              kicker="كيف بدأت رحلة هذا البرنامج؟"
              title={
                <>
                  من فكرة وحلم.. إلى واقع يلامس حياة{" "}
                  <span className="text-accent-red">أزواج كُثر</span>
                </>
              }
            />

            <div className="about-story-prose">
              {coupleStoryParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
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
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function CoupleFaqSection() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <SectionHeading
          kicker="الأسئلة الشائعة"
          title="كل ما تودان معرفته قبل الانضمام"
          centered
        />

        <div className="faq-list">
          {coupleFaqs.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CoupleFinalCtaSection() {
  return (
    <section className="section final-cta-section" id="book">
      <div className="container">
        <article className="final-cta-card">
          <SectionHeading
            kicker="الخطوة الأخيرة: احجزا مكانكما"
            title={
              <>
                تذكروا العلاقة التي اخترتموها في البدايات..{" "}
                <span className="text-accent-red">واستثمروا فيها اليوم</span>
              </>
            }
            description="لتبقى دائماً مثل البدايات ولا تصلوا للنهايات، فـ 12 ساعة من الشجاعة للعمل على العلاقة خيرٌ من طي الصفحة مع الندم."
            centered
          />

          <ol className="step-list on-dark booking-steps" role="list">
            {coupleBookingSteps.map((step) => (
              <li key={step.title}>
                <strong>{step.title}</strong>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>

          <CouplePaymentMethods centered tone="dark" />

          <CoupleCtaButtons centered tone="dark" />

          <p className="booking-contact">
            أو راسلونا مباشرة على{" "}
            <span dir="ltr">{siteConfig.whatsappNumberDisplay}</span>
          </p>
        </article>
      </div>
    </section>
  );
}
