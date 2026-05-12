import Image from "next/image";
import {
  ContactForm,
  LeadMagnetForm,
} from "@/components/interactive-forms";
import { siteConfig } from "@/lib/site-config";

const navigationItems = [
  { href: "#home", label: "الرئيسية" },
  { href: "#about", label: "عن الدكتورة" },
  { href: "#audience", label: "لمن هذا الموقع؟" },
  { href: "#book", label: "الكتاب المجاني" },
  { href: "#call", label: "المكالمة المجانية" },
  { href: "#services", label: "البرامج والخدمات" },
  { href: "#faq", label: "الأسئلة الشائعة" },
  { href: "#contact", label: "تواصل معنا" },
] as const;

const directCards = [
  "لديك فكرة لكنك لا تعرف من أين تبدأ.",
  "بدأت أكثر من مرة ثم توقفت.",
  "تخاف من الفشل أو من رأي الآخرين.",
  "تشعر أن أهدافك لا تشبهك فعلًا.",
  "تريد خطة واضحة لكنك تحتاج إلى دعم شعوري قبل الخطوات العملية.",
] as const;

const audienceCards = [
  "للبالغين الذين يريدون فهم أنفسهم بعمق.",
  "لأصحاب الأهداف المؤجلة.",
  "لمن يشعر أنه عالق بين الرغبة والخوف.",
  "لمقدمي الخدمات وأصحاب الأعمال الذين يريدون تطوير أهدافهم.",
  "لمن يريد أن يحوّل الفشل إلى درس وليس حكمًا نهائيًا عليه.",
  "لمن يحمل فكرة منذ مدة لكنه لم يستطع تحويلها إلى خطوة واضحة.",
] as const;

const reassurancePoints = [
  "لست عالقًا لأنك ضعيف، ربما تحتاج فقط إلى وضوح أعمق.",
  "لا تحتاج أن تبدأ من الكمال، تحتاج أن تبدأ بوعي.",
  "عندما تفهم ما يوقفك من الداخل، تصبح خطواتك أوضح في الخارج.",
] as const;

const failureSteps = [
  "افهم ما حدث دون جلد ذات.",
  "اكتشف الشعور الذي عطّلك.",
  "عدّل الخطة بدل أن تتخلى عن الهدف.",
  "ابدأ بخطوة صغيرة.",
  "احتفل بالعودة قبل النتيجة.",
] as const;

const bookBenefits = [
  "كيف تخلق رؤية واضحة لهدفك.",
  "كيف تصيغ هدفك بطريقة SMART.",
  "كيف تتعامل مع التوقف والتعثر.",
  "كيف تعود إلى خطتك دون جلد ذات.",
  "كيف تحوّل الفكرة إلى خطوات قابلة للتنفيذ.",
] as const;

const serviceCards = [
  {
    title: "جلسات فردية لفهم العوائق الشعورية",
    description:
      "مساحة مهنية خاصة تساعدك على تسمية ما تشعر به، وفهم ما يمنعك من التقدّم بوضوح أكبر.",
  },
  {
    title: "استشارة لتوضيح الهدف وبناء خطة أولية",
    description:
      "لقاء يركّز على تحويل الفكرة المبعثرة إلى اتجاه أوضح وخطوة عملية يمكن أن تبدأ منها.",
  },
  {
    title: "برامج تطوير الهدف والذات",
    description:
      "مرافقة هادئة تجمع بين الوعي النفسي، تنظيم الهدف، والمرونة المطلوبة للاستمرار بعد التعثر.",
  },
  {
    title: "دعم لمقدمي الخدمات وأصحاب الأعمال",
    description:
      "مساندة تساعدك على بناء وضوح داخلي ينعكس على قراراتك المهنية وخطواتك اليومية بثبات أكبر.",
  },
  {
    title: "مرافقة نفسية وشعورية للانتقال إلى التنفيذ",
    description:
      "دعم يربط بين ما يحدث داخلك وما تريد أن تراه في حياتك أو مشروعك، من دون ضغط أو وعود مبالغ فيها.",
  },
] as const;

const journeySteps = [
  "من التشتت",
  "إلى الوعي",
  "إلى وضوح الهدف",
  "إلى خطة مرنة",
  "إلى تنفيذ خطوة بخطوة",
] as const;

const faqs = [
  {
    question: "هل الجلسات مناسبة للبالغين فقط؟",
    answer:
      "نعم، الموقع والخدمات موجّهة بشكل أساسي للبالغين الذين يريدون فهم أنفسهم وأهدافهم بوعي أكبر.",
  },
  {
    question: "هل أحتاج أن أكون صاحب مشروع للاستفادة؟",
    answer:
      "لا. يمكنك الاستفادة سواء كان لديك مشروع، هدف شخصي، فكرة مؤجلة، أو رغبة في فهم ما يوقفك من الداخل.",
  },
  {
    question: "ماذا لو كان لدي هدف لكنني فشلت سابقًا؟",
    answer:
      "الفشل السابق لا يعني أن الطريق انتهى. أحيانًا يكون التعثر بداية لفهم أعمق وخطة أكثر مناسبة لك.",
  },
  {
    question: "هل الكتاب مجاني؟",
    answer:
      'نعم، كتاب "3 أسرار لتطوير هدفك بنجاح" مجاني ويمكنك تحميله من خلال النموذج الموجود في الموقع.',
  },
  {
    question: "كيف أحجز مكالمة؟",
    answer:
      'يمكنك الضغط على زر "احجز مكالمتك المجانية" واختيار الوقت المناسب لك عبر صفحة الحجز.',
  },
  {
    question: "هل المكالمة المجانية جلسة علاجية؟",
    answer:
      "لا، المكالمة المجانية ليست جلسة علاجية، بل مساحة قصيرة وآمنة لاكتشاف احتياجك وفهم كيف يمكن دعمك بشكل مناسب.",
  },
  {
    question: "هل يمكنني الاستفادة إذا كنت لا أعرف من أين أبدأ؟",
    answer:
      "نعم، هذا تحديدًا أحد أهداف الموقع: مساعدتك على الانتقال من التشتت إلى وضوح الخطوة الأولى.",
  },
] as const;

const arabicNumbers = ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨"] as const;

function SectionHeading({
  kicker,
  title,
  description,
  centered = false,
}: {
  kicker: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <header className={`section-heading${centered ? " is-centered" : ""}`}>
      <p className="section-kicker">{kicker}</p>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </header>
  );
}

function ScheduleButton({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
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

function ContactChannel({
  title,
  description,
  actionLabel,
  href,
}: {
  title: string;
  description: string;
  actionLabel?: string;
  href?: string;
}) {
  const isAvailable = Boolean(href);

  return (
    <article className={`contact-card${isAvailable ? "" : " is-muted"}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      {isAvailable && href && actionLabel ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
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

export default function Home() {
  const emailLink = `mailto:${siteConfig.email}`;

  return (
    <div className="page-shell">
      <div className="background-orb orb-one" aria-hidden="true" />
      <div className="background-orb orb-two" aria-hidden="true" />

      <header className="site-header">
        <div className="container header-layout">
          <a className="brand" href="#home" aria-label="العودة إلى الرئيسية">
            <span className="brand-logo">
              <Image
                src={siteConfig.logoUrl}
                alt="شعار فيلينغ بليس أكاديمي"
                width={72}
                height={72}
                sizes="72px"
              />
            </span>
            <span className="brand-copy">
              <strong>{siteConfig.arabicName}</strong>
              <span>
                {siteConfig.practitionerName} | {siteConfig.practitionerTitle}
              </span>
            </span>
          </a>

          <nav className="site-nav" aria-label="التنقل الرئيسي">
            {navigationItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <ScheduleButton
            label="احجز مكالمتك المجانية"
            className="button button-primary header-cta"
          />
        </div>
      </header>

      <main>
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
                مع د. آيات عودة، ستتعلّم كيف تفهم العائق الشعوري خلف التعثر،
                وتحوّل الفشل من نهاية مؤلمة إلى خطوة واعية نحو النجاح.
              </p>

              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href={siteConfig.bookDownloadUrl}
                  download
                >
                  حمّل الكتاب المجاني
                </a>
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

        <section className="section section-soft">
          <div className="container">
            <SectionHeading
              kicker="حديث مباشر معك"
              title="ربما لا ينقصك الطموح… بل ينقصك الوضوح"
              description="أنت لا تفشل لأنك ضعيف. ربما أنت فقط تحاول أن تصل إلى هدفك من دون أن تفهم ما الذي يوقفك من الداخل. الخوف، التردد، جلد الذات، أو انتظار اللحظة المثالية… كلها قد تجعلك عالقًا رغم أنك تملك القدرة."
            />

            <div className="card-grid card-grid-five">
              {directCards.map((item) => (
                <article key={item} className="soft-card">
                  <p>{item}</p>
                </article>
              ))}
            </div>

            <div className="centered-cta">
              <ScheduleButton
                label="أريد أن أفهم ما يوقفني"
                className="button button-primary"
              />
            </div>
          </div>
        </section>

        <section className="section" id="audience">
          <div className="container">
            <SectionHeading
              kicker="لمن هذا الموقع؟"
              title="هذا المكان لك إذا كنت تشعر أنك مستعد للتغيير… لكنك لا تعرف من أين تبدأ"
              description="إذا كنت تحمل هدفًا واضحًا في عقلك لكنك لا تجد الطريق أو الثبات أو المرونة، فستجد هنا لغة تشبه ما تمر به وخطوة تالية تشعر أنها ممكنة."
              centered
            />

            <div className="card-grid card-grid-three">
              {audienceCards.map((item, index) => (
                <article key={item} className="outlined-card">
                  <span>{arabicNumbers[index]}</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-panel" id="about">
          <div className="container about-grid">
            <div>
              <SectionHeading
                kicker="عن الدكتورة"
                title="د. آيات عودة — صحة نفسية وعلاج المشاعر"
                description="ترافق د. آيات عودة الأشخاص الذين يريدون إعادة الاتصال بذاتهم، فهم عوائقهم الشعورية، وبناء أهداف واضحة تنسجم مع قيمهم وحياتهم. من خلال منهج يجمع بين الصحة النفسية، علاج المشاعر، تطوير الذات، وبناء الرؤية، تساعدك على الانتقال من التشتت إلى الوضوح، ومن التعثر إلى خطوة جديدة أكثر وعيًا."
              />

              <p className="body-copy">
                الدعم هنا لا يقوم على الضغط ولا على الوعود الكبيرة، بل على
                مرافقة مهنية هادئة تساعدك أن ترى نفسك بوضوح، وتفهم ما تمر به،
                وتتخذ قرارك التالي بوعي وثقة أكبر.
              </p>

              <ScheduleButton
                label="احجز مكالمة تعارف مجانية"
                className="button button-primary"
              />
            </div>

            <aside className="insight-card">
              <p className="section-kicker">كيف تبدو المرافقة هنا؟</p>
              <ul role="list">
                <li>وعي قبل الاستعجال.</li>
                <li>خطة تراعي واقعك بدل أن تضغطك.</li>
                <li>مرونة تسمح لك بالعودة بعد أي تعثر.</li>
                <li>قرار واعٍ بدل ردّ فعل متعب.</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section section-dark">
          <div className="container">
            <SectionHeading
              kicker="الفكرة الرئيسية"
              title="الفشل ليس ضد النجاح… الفشل جزء من الطريق"
              description="عندما تتعثر، لا يعني ذلك أن حلمك انتهى. أحيانًا يكون التعثر رسالة: أعد النظر، افهم شعورك، عدّل خطتك، وابدأ من جديد بوعي أكبر. النجاح لا يحتاج إلى كمال، بل يحتاج إلى مرونة، ووضوح، وقدرة على العودة."
            />

            <div className="steps-grid">
              {failureSteps.map((step, index) => (
                <article key={step} className="step-card">
                  <span>{arabicNumbers[index]}</span>
                  <p>{step}</p>
                </article>
              ))}
            </div>

            <div className="centered-cta">
              <ScheduleButton
                label="ابدأ بخطوة آمنة"
                className="button button-light"
              />
            </div>
          </div>
        </section>

        <section className="section" id="book">
          <div className="container book-grid">
            <div>
              <SectionHeading
                kicker="الكتاب المجاني"
                title="حمّل كتابك المجاني: 3 أسرار لتطوير هدفك بنجاح"
                description="كتاب عملي يساعدك على فهم هدفك، بناء رؤية واضحة، صياغة هدف ذكي، والتعامل مع العقبات بمرونة. مناسب لكل شخص لديه حلم أو فكرة أو مشروع لكنه يحتاج إلى وضوح وخطوات عملية للبدء."
              />

              <ul className="check-list" role="list">
                {bookBenefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <LeadMagnetForm downloadUrl={siteConfig.bookDownloadUrl} />
            </div>

            <aside className="book-showcase">
              <a
                className="book-cover"
                href={siteConfig.bookDownloadUrl}
                download
                aria-label="تحميل كتاب 3 أسرار لتطوير هدفك بنجاح"
              >
                <span className="book-badge">كتاب مجاني</span>
                <strong>3 أسرار لتطوير هدفك بنجاح</strong>
                <span>رؤية واضحة • هدف ذكي • خطة مرنة</span>
              </a>

              <p>
                حمّل دليلك المجاني لتعرف كيف تطوّر هدفك وتبدأ من جديد بثقة.
                ليس المطلوب أن تكون كاملًا… المطلوب أن تبدأ بوعي.
              </p>
            </aside>
          </div>
        </section>

        <section className="section section-soft" id="call">
          <div className="container callout-shell">
            <div>
              <SectionHeading
                kicker="المكالمة المجانية"
                title="مكالمة مجانية لاكتشاف فرص التغيير"
                description="مساحة آمنة وخاصة نلتقي فيها لمدة 15 دقيقة لتشارك ما يشغلك، ونساعدك على رؤية أوضح لتحدياتك، وتتعرف كيف يمكنني دعمك بأسلوب يناسبك واحتياجك العاطفي والنفسي."
              />

              <p className="callout-note">
                هذه المكالمة ليست جلسة علاجية، بل بوابة لفهمك بشكل أعمق واتخاذ
                قرار واعٍ.
              </p>
            </div>

            <article className="call-card">
              <ul role="list">
                <li>مدة المكالمة: 15 دقيقة.</li>
                <li>مجانية بالكامل.</li>
                <li>مساحة خاصة وآمنة.</li>
                <li>مناسبة إذا كنت عالقًا أو لا تعرف من أين تبدأ.</li>
                <li>تساعدك على معرفة نوع الدعم المناسب لك.</li>
              </ul>

              <ScheduleButton
                label="احجز مكالمتك المجانية"
                className="button button-primary button-block"
              />
            </article>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <SectionHeading
              kicker="البرامج والخدمات"
              title="خدمات مرنة تبدأ من فهمك لا من افتراضات جاهزة"
              description="كل خدمة هنا تمهّد لما بعدها، حتى تشعر أن الخطوة التالية ممكنة وواضحة بدل أن تكون عبئًا جديدًا عليك."
              centered
            />

            <div className="card-grid card-grid-three">
              {serviceCards.map((service) => (
                <article key={service.title} className="service-card">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-actions">
                    <a href="#contact">أعرف أكثر</a>
                    <ScheduleButton
                      label="احجز مكالمة"
                      className="service-link"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-panel">
          <div className="container">
            <SectionHeading
              kicker="رحلة التحول"
              title="رحلتك لا تبدأ عندما تختفي مخاوفك… بل عندما تفهمها"
              description="لا تحتاج أن تعرف كل الطريق من البداية. تحتاج فقط أن تفهم أين أنت الآن، ثم تختار الخطوة التالية بوعي. كل عودة بعد تعثر هي جزء من نجاحك."
            />

            <div className="journey-track" role="list">
              {journeySteps.map((step) => (
                <div key={step} className="journey-step" role="listitem">
                  {step}
                </div>
              ))}
            </div>

            <div className="journey-quotes">
              <p>هل بدأت أكثر من مرة ثم توقفت؟</p>
              <p>هل تعرف هدفك لكنك لا تعرف لماذا لا تتحرك؟</p>
              <p>هل تشعر أن الفشل السابق ما زال يمنعك من المحاولة؟</p>
              <p>هل لديك فكرة لكنك لا تعرف كيف تبدأ؟</p>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container">
            <SectionHeading
              kicker="الأسئلة الشائعة"
              title="أسئلة قد تدور في بالك الآن"
              description="إذا وجدت نفسك بين هذه الأسئلة، فهذا طبيعي. المهم أن تحصل على إجابة واضحة تساعدك أن تختار خطوتك التالية بهدوء."
            />

            <div className="faq-list">
              {faqs.map((item) => (
                <details key={item.question} className="faq-item">
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="contact">
          <div className="container">
            <SectionHeading
              kicker="تواصل معنا"
              title="اختر الطريق الأقرب لك الآن"
              description="إذا شعرت أن هذا الكلام يشبهك، يمكنك أن تبدأ بالمكالمة المجانية، أو ترسل رسالة، أو تجهّز نفسك عبر الكتاب المجاني. المهم أن تبدأ بخطوة تشعر أنها آمنة لك."
            />

            <div className="contact-grid">
              <article className="contact-card">
                <h3>مكالمة 1:1 مجانية</h3>
                <p>
                  إذا كنت تريد مساحة قصيرة وواضحة لتشارك ما يشغلك وتعرف إن كان
                  هذا الدعم مناسبًا لك.
                </p>
                <ScheduleButton
                  label="أريد مكالمة 1:1"
                  className="contact-link"
                />
              </article>

              <article className="contact-card">
                <h3>البريد الإلكتروني</h3>
                <p>
                  إذا كنت تفضّل أن تشرح بهدوء ما تمر به قبل الحجز، يمكنك إرسال
                  رسالة مباشرة.
                </p>
                <a className="contact-link" href={emailLink}>
                  راسلني عبر البريد الإلكتروني
                </a>
              </article>

              <ContactChannel
                title="واتساب"
                description="إذا كانت المحادثة النصية هي الطريق الأسهل لك، يمكن إضافة رابط واتساب الرسمي هنا فور تفعيله."
                actionLabel="ابدأ المحادثة"
                href={siteConfig.whatsappUrl}
              />

              <ContactChannel
                title="إنستغرام"
                description="إذا كنت تفضّل المتابعة عبر الرسائل الخاصة أو زيارة الحضور الرقمي للمحتوى، يمكن إضافة الرابط الرسمي هنا بسهولة."
                actionLabel="انتقل إلى إنستغرام"
                href={siteConfig.instagramUrl}
              />
            </div>

            <div className="contact-form-shell">
              <div>
                <h3>أو اكتب رسالتك هنا</h3>
                <p>
                  شاركنا ما يشغلك باختصار، وسنساعدك أن تختار الخطوة الأنسب لك من
                  دون ضغط.
                </p>
              </div>
              <ContactForm email={siteConfig.email} />
            </div>
          </div>
        </section>

        <section className="section final-cta-section">
          <div className="container">
            <article className="final-cta-card">
              <SectionHeading
                kicker="خطوتك التالية"
                title="جاهز أن تبدأ من جديد… لكن هذه المرة بوعي؟"
                description="لا تنتظر أن تختفي كل مخاوفك حتى تبدأ. ابدأ بخطوة صغيرة: حمّل الكتاب المجاني أو احجز مكالمتك الأولى."
                centered
              />

              <div className="hero-actions centered-buttons">
                <a
                  className="button button-primary"
                  href={siteConfig.bookDownloadUrl}
                  download
                >
                  حمّل الكتاب المجاني
                </a>
                <ScheduleButton
                  label="احجز مكالمة مجانية"
                  className="button button-secondary"
                />
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <h2>{siteConfig.arabicName}</h2>
            <p>
              {siteConfig.practitionerName} | {siteConfig.practitionerTitle}
            </p>
            <p>
              موقع عربي هادئ وواضح يساعد الزائر أن ينتقل من التشتت إلى خطوة
              أقرب للوعي والبدء.
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
    </div>
  );
}
