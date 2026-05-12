import { ContactForm } from "@/components/interactive-forms";
import {
  arabicNumbers,
  audienceCards,
  bookBenefits,
  directCards,
  faqs,
  failureSteps,
  journeyQuestions,
  journeySteps,
  serviceCards,
} from "@/components/home/content";
import {
  ContactChannel,
  DownloadBookButton,
  ScheduleButton,
  SectionHeading,
} from "@/components/home/shared";
import { siteConfig } from "@/lib/site-config";

export function DirectTalkSection() {
  return (
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
  );
}

export function AudienceSection() {
  return (
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
  );
}

export function AboutSection() {
  return (
    <section className="section section-panel" id="about">
      <div className="container about-grid">
        <div>
          <SectionHeading
            kicker="عن الدكتورة"
            title="د. آيات عودة — صحة نفسية وعلاج المشاعر"
            description="ترافق د. آيات عودة الأشخاص الذين يريدون إعادة الاتصال بذاتهم، فهم عوائقهم الشعورية، وبناء أهداف واضحة تنسجم مع قيمهم وحياتهم. من خلال منهج يجمع بين الصحة النفسية، علاج المشاعر، تطوير الذات، وبناء الرؤية، تساعدك على الانتقال من التشتت إلى الوضوح، ومن التعثر إلى خطوة جديدة أكثر وعيًا."
          />

          <p className="body-copy">
            الدعم هنا لا يقوم على الضغط ولا على الوعود الكبيرة، بل على مرافقة
            مهنية هادئة تساعدك أن ترى نفسك بوضوح، وتفهم ما تمر به، وتتخذ قرارك
            التالي بوعي وثقة أكبر.
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
  );
}

export function FailureSection() {
  return (
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
  );
}

export function BookSection() {
  return (
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

          {/* <div className="form-card">
            <p className="body-copy">
              حمّل دليلك المجاني لتعرف كيف تطوّر هدفك وتبدأ من جديد بثقة.
              اكتشف كيف تنتقل من فكرة عالقة إلى خطوة واضحة قابلة للتنفيذ، من
              دون أن تنتظر الكمال.
            </p>

            <div className="hero-actions">
              <DownloadBookButton
                label="أريد تحميل الكتاب المجاني"
                className="button button-primary"
              />
            </div>
          </div> */}
        </div>

        <aside className="book-showcase">
          {/* <a
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
            تعلّم كيف تصنع رؤية واضحة، هدفًا ذكيًا، وخطة مرنة تعيدك للطريق حتى
            بعد التعثر. ليس المطلوب أن تكون كاملًا… المطلوب أن تبدأ بوعي.
          </p> */}

          <div className="hero-actions">
            <a
              href={siteConfig.bookDownloadUrl}
              download
              className="button button-primary"
            >
              حمّل الكتاب الآن
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

export function CallSection() {
  return (
    <section className="section section-soft" id="call">
      <div className="container callout-shell">
        <div>
          <SectionHeading
            kicker="المكالمة المجانية"
            title="مكالمة مجانية لاكتشاف فرص التغيير"
            description="مساحة آمنة وخاصة نلتقي فيها لمدة 15 دقيقة لتشارك ما يشغلك، ونساعدك على رؤية أوضح لتحدياتك، وتتعرف كيف يمكنني دعمك بأسلوب يناسبك واحتياجك العاطفي والنفسي."
          />

          <p className="callout-note">
            هذه المكالمة ليست جلسة علاجية، بل بوابة لفهمك بشكل أعمق واتخاذ قرار
            واعٍ.
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
  );
}

export function ServicesSection() {
  return (
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
  );
}

export function JourneySection() {
  return (
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
          {journeyQuestions.map((question) => (
            <p key={question}>{question}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
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
  );
}

export function ContactSection() {
  const emailLink = `mailto:${siteConfig.email}`;

  return (
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
              إذا كنت تريد مساحة قصيرة وواضحة لتشارك ما يشغلك وتعرف إن كان هذا
              الدعم مناسبًا لك.
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
  );
}

export function FinalCtaSection() {
  return (
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
            <DownloadBookButton
              label="حمّل الكتاب المجاني"
              className="button button-primary"
            />
            <ScheduleButton
              label="احجز مكالمة مجانية"
              className="button button-secondary"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
