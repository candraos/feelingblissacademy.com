export const siteConfig = {
  englishName: "Feeling Bliss Academy",
  arabicName: "فيلينغ بليس أكاديمي",
  practitionerName: "د. آيات عودة",
  practitionerTitle: "صحة نفسية وعلاج المشاعر",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://feelingblissacademy.com",
  calendlyUrl: "https://calendly.com/feelingblissacademy/15min",
  bookDownloadUrl: "/downloads/3-asrar-tatwir-hadafak.pdf",
  logoUrl: "/branding/feeling-bliss-academy-logo.png",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@feelingblissacademy.com",
  whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "",
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
} as const;

export const seoConfig = {
  title:
    "Feeling Bliss Academy | د. آيات عودة - صحة نفسية وعلاج المشاعر",
  description:
    "موقع د. آيات عودة للصحة النفسية وعلاج المشاعر. حمّل كتاب 3 أسرار لتطوير هدفك بنجاح وابدأ رحلتك من التشتت إلى الوضوح.",
  keywords: [
    "الصحة النفسية",
    "علاج المشاعر",
    "تطوير الذات",
    "تطوير الأهداف",
    "الفشل والنجاح",
    "وضوح الهدف",
    "د. آيات عودة",
    "Feeling Bliss Academy",
    "مكالمة مجانية",
    "استشارة نفسية",
    "أهداف SMART",
  ],
} as const;
