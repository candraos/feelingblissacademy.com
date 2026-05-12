"use client";

import { FormEvent, useId, useState } from "react";

type LeadMagnetFormProps = {
  downloadUrl: string;
};

type ContactFormProps = {
  email: string;
};

export function LeadMagnetForm({ downloadUrl }: LeadMagnetFormProps) {
  const nameId = useId();
  const emailId = useId();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.reportValidity()) {
      return;
    }

    const downloadLink = document.createElement("a");
    downloadLink.href = downloadUrl;
    downloadLink.download = "3-asrar-tatwir-hadafak.pdf";
    downloadLink.rel = "noopener";
    downloadLink.click();

    setSubmitted(true);
    form.reset();
  }

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor={nameId}>الاسم</label>
        <input
          id={nameId}
          name="name"
          type="text"
          autoComplete="name"
          placeholder="اكتب اسمك هنا"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor={emailId}>البريد الإلكتروني</label>
        <input
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          placeholder="اكتب بريدك الإلكتروني"
          required
        />
      </div>

      <button className="button button-primary button-block" type="submit">
        أريد تحميل الكتاب المجاني
      </button>

      <p className="form-caption">
        سنجعل وصولك إلى الكتاب سهلًا ومباشرًا، ويمكن ربط هذا النموذج لاحقًا
        بنظام إرسال تلقائي من دون تغيير الواجهة.
      </p>

      {submitted ? (
        <p className="form-success" role="status" aria-live="polite">
          تم إرسال الكتاب إليك. هذه أول خطوة في طريقك نحو الوضوح.
          <a href={downloadUrl} download>
            إذا لم يبدأ التنزيل تلقائيًا، اضغط هنا.
          </a>
        </p>
      ) : null}
    </form>
  );
}

export function ContactForm({ email }: ContactFormProps) {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.reportValidity()) {
      return;
    }

    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const sender = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = encodeURIComponent(`رسالة جديدة من ${name}`);
    const body = encodeURIComponent(
      `الاسم: ${name}\nالبريد الإلكتروني: ${sender}\n\nالرسالة:\n${message}`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor={nameId}>الاسم</label>
          <input
            id={nameId}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="كيف تحب أن نخاطبك؟"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor={emailId}>البريد الإلكتروني</label>
          <input
            id={emailId}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="اكتب بريدك الإلكتروني"
            required
          />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor={messageId}>رسالتك</label>
        <textarea
          id={messageId}
          name="message"
          rows={5}
          placeholder="شاركنا ما يشغلك أو ما تريد أن تبدأ بفهمه"
          required
        />
      </div>

      <button className="button button-primary" type="submit">
        أرسل رسالتك
      </button>

      <p className="form-caption">
        عند الإرسال سيفتح بريدك الإلكتروني لتكمل الرسالة بالطريقة التي تناسبك.
      </p>

      {submitted ? (
        <p className="form-success" role="status" aria-live="polite">
          فتحنا لك بريدك الإلكتروني لتكمل الرسالة. وإذا أردت الطريق الأقصر،
          يمكنك دائمًا حجز مكالمة مجانية أولًا.
        </p>
      ) : null}
    </form>
  );
}
