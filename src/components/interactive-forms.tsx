"use client";

import { FormEvent, useId, useState } from "react";

type EnrollmentFormProps = {
  email: string;
};

export function EnrollmentForm({ email }: EnrollmentFormProps) {
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
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
    const phone = String(formData.get("phone") ?? "").trim();
    const subject = encodeURIComponent(`طلب تسجيل جديد - ${name}`);
    const body = encodeURIComponent(
      [
        "مرحباً،",
        "",
        "أرغب في التسجيل في برنامج Feeling Bliss Academy.",
        "",
        `الاسم: ${name}`,
        `البريد الإلكتروني: ${sender}`,
        `رقم الهاتف: ${phone}`,
      ].join("\n")
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <form className="enrollment-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor={nameId}>الاسم</label>
        <input
          id={nameId}
          name="name"
          type="text"
          autoComplete="name"
          placeholder="اكتب اسمك الكامل"
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
          placeholder="name@example.com"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor={phoneId}>رقم الهاتف</label>
        <input
          id={phoneId}
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+961"
          required
        />
      </div>

      <button className="button button-primary" type="submit">
        أرسل بياناتي الآن
      </button>

      <p className="form-caption">
        عند الإرسال سيفتح بريدك الإلكتروني تلقائياً لتأكيد بياناتك وإتمام طلب
        التسجيل.
      </p>

      {submitted ? (
        <p className="form-success" role="status" aria-live="polite">
          تم تجهيز رسالة التسجيل. إذا لم يفتح بريدك تلقائياً يمكنك مراسلتنا على{" "}
          <a href={`mailto:${email}`}>{email}</a>.
        </p>
      ) : null}
    </form>
  );
}
