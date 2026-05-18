import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "سياسة الخصوصية | Feeling Bliss Academy",
  description: "سياسة الخصوصية الخاصة بموقع Feeling Bliss Academy.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="section-kicker">سياسة الخصوصية</p>
        <h1>كيف نتعامل مع بياناتك</h1>
        <p>
          عند إرسال بياناتك عبر نماذج الموقع، نستخدمها فقط للتواصل معك بخصوص
          التسجيل في البرنامج أو الإجابة عن استفساراتك المتعلقة بالخدمة.
        </p>
        <p>
          لا نبيع بياناتك لأي طرف ثالث، ولا نستخدمها في أغراض خارج نطاق خدمة
          الأكاديمية إلا إذا تطلب القانون ذلك أو وافقت أنت صراحة على ذلك.
        </p>
        <p>
          يمكنك طلب تعديل أو حذف بياناتك في أي وقت عبر التواصل معنا من خلال
          البريد الإلكتروني الظاهر في الموقع.
        </p>
        <div className="legal-actions">
          <Link href="/">العودة إلى الصفحة الرئيسية</Link>
        </div>
      </div>
    </main>
  );
}
