import type { Lang } from "./site";

export interface GalleryImage {
  src: string;
  title: Record<Lang, string>;
  note?: Record<Lang, string>;
  portrait?: boolean;
}

const shot = (slug: string, file: string, ar: string, en: string, portrait = false, note?: Record<Lang, string>): GalleryImage => ({
  src: `/projects/${slug}/${file}.webp`, title: { ar, en }, portrait, note,
});

export const galleryBySlug: Record<string, GalleryImage[]> = {
  manazil: [
    shot("manazil", "home", "واجهة منازل الرئيسية", "Manazil home page"),
    shot("manazil", "search", "البحث عن الإقامات والتصفية", "Accommodation search and filters"),
    shot("manazil", "property", "تفاصيل العقار", "Property details"),
    shot("manazil", "map", "البحث على الخريطة", "Map search"),
    shot("manazil", "booking", "مراجعة الحجز قبل الدفع", "Booking review before payment"),
    shot("manazil", "dashboard", "لوحة الإدارة في نسخة التطوير", "Development admin dashboard", false, { ar: "الأرقام الظاهرة تخص نسخة التطوير ولا تُستخدم كمؤشرات أداء مثبتة.", en: "Figures shown belong to the development instance and are not verified performance metrics." }),
    shot("manazil", "assistant", "واجهة المساعد الذكي", "AI assistant interface"),
  ],
  khadmat: [
    shot("khadmat", "home", "الواجهة الرئيسية للنموذج", "Prototype home screen", false, { ar: "الأرقام المعروضة بيانات تجريبية للواجهة.", en: "Displayed metrics are prototype sample data." }),
    shot("khadmat", "tickets", "قائمة التذاكر", "Ticket list"),
    shot("khadmat", "ticket", "تفاصيل التذكرة", "Ticket detail"),
    shot("khadmat", "knowledge", "قسم مصادر المعرفة", "Knowledge sources screen"),
  ],
  "manhwa-tool-kit": [
    shot("manhwa-tool-kit", "chapter", "بدء فصل جديد", "Start a new chapter", false, { ar: "لقطة قديمة نُظّفت من سهم توضيحي؛ قد تختلف الواجهة الحالية.", en: "Older screenshot with an annotation removed; the current UI may differ." }),
    shot("manhwa-tool-kit", "projects", "إدارة مشاريع المانهوا", "Manhwa project management"),
    shot("manhwa-tool-kit", "keys", "إعداد مفاتيح الخدمات", "Provider key settings"),
  ],
  "dentalflow-android": [
    shot("dentalflow-android", "appointments", "إدارة المواعيد", "Appointment management", true),
    shot("dentalflow-android", "owner", "واجهة المالك", "Owner dashboard", true),
    shot("dentalflow-android", "finances", "ملخص الحسابات", "Financial summary", true),
    shot("dentalflow-android", "reception", "واجهة الاستقبال", "Reception dashboard", true),
    shot("dentalflow-android", "reminders", "التذكيرات", "Reminders", true),
  ],
  "dental-clinic-website": [
    shot("dental-clinic-website", "home", "الصفحة الرئيسية لموقع العيادة", "Clinic website home"),
    shot("dental-clinic-website", "services", "قسم الخدمات", "Services section"),
    shot("dental-clinic-website", "gallery", "معرض العيادة", "Clinic gallery", false, { ar: "الجولة الافتراضية المعروضة في الموقع تجريبية.", en: "The virtual-tour section shown on the site is a demo." }),
    shot("dental-clinic-website", "contact", "الموقع والتواصل", "Location and contact"),
    shot("dental-clinic-website", "mobile", "عرض الهاتف", "Mobile presentation", true),
  ],
  switchyard: [
    shot("switchyard", "overview", "لوحة نظرة عامة", "Overview dashboard", false, { ar: "تعرض اللقطة بيانات تطوير تجريبية.", en: "The screenshot shows development fixture data." }),
    shot("switchyard", "project", "تفاصيل المشروع", "Project detail"),
    shot("switchyard", "criteria", "معايير تنفيذ المهمة", "Task criteria"),
    shot("switchyard", "events", "سجل الأحداث والصلاحيات", "Event and permission journal"),
  ],
};
