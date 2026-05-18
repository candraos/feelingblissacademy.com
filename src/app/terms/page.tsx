import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "الشروط والأحكام | Feeling Bliss Academy",
  description: "الشروط والأحكام الخاصة بموقع Feeling Bliss Academy.",
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="section-kicker">الشروط والأحكام</p>
        <h1>استخدام الموقع والتسجيل في البرنامج</h1>
        <p>
          استخدامك لهذا الموقع يعني موافقتك على استخدام المحتوى للأغراض الشخصية
          والمعلوماتية فقط، وعدم إعادة نشره أو نسخه تجارياً بدون إذن مسبق.
        </p>
        <p>
          التسجيل في البرنامج يخضع لتوفر المقاعد ولتأكيد استلام بياناتك أو دفعتك
          وفق آلية التسجيل المعتمدة من الأكاديمية.
        </p>
        <p>
          في حال تم الإعلان عن ضمان استرداد، فإنه يطبّق وفق المدة والشروط
          المذكورة في صفحة العرض الخاصة بالبرنامج.
        </p>
        <div className="legal-actions">
          <Link href="/">العودة إلى الصفحة الرئيسية</Link>
        </div>
      </div>
    </main>
  );
}
