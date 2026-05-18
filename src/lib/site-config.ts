export const siteConfig = {
  englishName: "Feeling Bliss Academy",
  arabicName: "أكاديمية Feeling Bliss",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://feelingblissacademy.com",
  calendlyUrl: "https://calendly.com/feelingblissacademy/15min",
  logoUrl: "/branding/feeling-bliss-academy-logo.png",
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@feelingblissacademy.com",
  whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "",
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
  offerOriginalPrice: 299,
  offerCurrentPrice: 99,
  refundWindowDays: 7,
  offerTimerMinutes: 135,
} as const;

export const seoConfig = {
  title:
    "طريقك نحو تحقيق أهدافك | Feeling Bliss Academy للتمكين النفسي والمالي",
  description:
    "صفحة هبوط عربية تركّز على فك العرقلة النفسية والمالية عبر نظام عملي يجمع بين الذهنية، الإدارة المالية، والخارطة الاستراتيجية للتنفيذ.",
  keywords: [
    "Feeling Bliss Academy",
    "العرقلة النفسية",
    "التمكين المالي",
    "تحقيق الأهداف",
    "الإدارة المالية",
    "العقلية والوفرة",
    "برنامج عربي",
    "التسجيل في أكاديمية",
    "الخوف من الفشل",
    "المماطلة",
    "النجاح الشخصي",
    "السلام الداخلي",
  ],
} as const;
