"use client";

import { FormEvent, useId, useState } from "react";

type ContactFormProps = {
  email: string;
};

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
