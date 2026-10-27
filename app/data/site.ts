export type Lang = "ar" | "en";
export type Localized = Record<Lang, string>;
export type ProjectCategory = "web" | "ai" | "app" | "operations";
export type ProjectStatus = "development" | "prototype" | "personal" | "live" | "volunteer";

export interface Project {
  slug: string;
  number: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured?: boolean;
  year: string;
  summary: Localized;
  challenge: Localized;
  role: Localized;
  solution: Localized;
  outcome: Localized;
  highlights: Record<Lang, string[]>;
  stack: string[];
  live?: string;
  github?: string;
  art: "manazil" | "khadmat" | "manhwa" | "dental-app" | "dental-web" | "switchyard" | "iftar" | "school" | "synccode";
}

export const profile = {
  name: { ar: "أحمد نزيه عبدالمعين قاسم", en: "Ahmed Nazeeh Abdulmuain Qasem" },
  shortName: { ar: "أحمد نزيه", en: "Ahmed Nazeeh" },
  title: { ar: "خريج تقنية معلومات ومطوّر تطبيقات", en: "IT graduate & application developer" },
  intro: {
    ar: "أبني منتجات رقمية تربط تجربة المستخدم بالبيانات والذكاء الاصطناعي؛ من منصات الويب إلى تطبيقات الهاتف وسطح المكتب.",
    en: "I build digital products that connect user experience, data, and AI — across web, mobile, and desktop.",
  },
  about: {
    ar: "أعمل على تحويل احتياجات واقعية إلى تطبيقات قابلة للاستخدام. تشمل خبرتي العملية تطوير الويب وقواعد البيانات وتكاملات الذكاء الاصطناعي، إلى جانب العمل الإداري والمحاسبي الذي منحني فهمًا مباشرًا لتدفق البيانات والعمليات اليومية. أحب بناء واجهات واضحة ومنطق موثوق، وأميّز دائمًا بين ما نُفّذ وما يزال قيد التطوير.",
    en: "I turn practical needs into usable software. My hands-on work spans web development, databases, and AI integrations, alongside administrative and accounting work that gave me a direct view of everyday workflows. I care about clear interfaces, reliable logic, and an honest account of what is implemented and what is still in progress.",
  },
  email: "ahmednazn2020@gmail.com",
  phone: "+967 776 049 183",
  github: "https://github.com/Hanbuyon",
  whatsapp: "https://wa.me/967776049183",
  location: { ar: "تعز، اليمن", en: "Taiz, Yemen" },
};

export const projects: Project[] = [
  {
    slug: "manazil", number: "01", title: "Manazil", category: "web", status: "development", featured: true, year: "2026", art: "manazil",
    summary: { ar: "منصة للبحث عن الإقامات والحجوزات والإيجارات طويلة الأجل، طُوّرت ضمن مشروع التخرج وما زالت قيد التطوير.", en: "A graduation project for finding stays, booking accommodation, and managing longer-term rentals; still in development." },
    challenge: { ar: "جمع البحث والحجز والإيجار والعمليات الإدارية ضمن تجربة واحدة تخدم أدوارًا مختلفة.", en: "Bring discovery, bookings, rentals, and operational workflows into one experience for different user roles." },
    role: { ar: "مشاركة في تطوير مشروع التخرج. لا تتوفر بيانات موثقة تفصل نطاق مساهمة كل عضو، لذلك تُعرض إمكانات المنصة بوصفها عمل المشروع.", en: "Contributed to the graduation project. The available record does not separate each contributor's scope, so platform capabilities are described as project work." },
    solution: { ar: "تطبيق Next.js متصل بـ Supabase وPostgreSQL، يضم صفحات وقواعد بيانات وتدفقات للحجوزات والإيجارات، مع بحث جغرافي ومساعدات قائمة على Gemini واسترجاع المعلومات.", en: "A Next.js application backed by Supabase and PostgreSQL, with booking and rental flows, geospatial search, and Gemini-powered assistance with retrieval." },
    outcome: { ar: "توجد معاينة منشورة للتطوير؛ مستوى اكتمال التدفقات يختلف من وحدة إلى أخرى.", en: "A development preview is live; end-to-end completeness varies by module." },
    highlights: {
      ar: ["بحث عن العقارات ومعلومات الإقامة مع دعم الخرائط", "نماذج للحجوزات والدفع عبر Stripe في التدفقات المدعومة", "واجهات عربية وإنجليزية مع دعم RTL", "معرفة عقارية قابلة للاسترجاع لمساعدة البحث والإجابات"],
      en: ["Property discovery with map-oriented search", "Booking and Stripe checkout flows where supported", "Arabic and English interfaces with RTL support", "Retrievable property knowledge for search and assistance"],
    },
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "PostGIS", "pgvector", "Gemini", "Stripe"],
    live: "https://manazil-platform-dev.vercel.app/ar",
  },
  {
    slug: "khadmat", number: "02", title: "KHADMAT", category: "ai", status: "prototype", featured: true, year: "2025–2026", art: "khadmat",
    summary: { ar: "نموذج جماعي لخدمة العملاء وإدارة التذاكر بمساعد ذكي نصي وصوتي؛ حقق المركز الثالث في محافظة تعز بمسابقة تمكين.", en: "A team-built customer service and ticketing prototype with text and voice AI assistance; placed third in Taiz in the Tamkeen competition." },
    challenge: { ar: "تسهيل الوصول إلى سياسات المؤسسة وإنشاء التذاكر عبر محادثة قادرة على تنفيذ إجراء فعلي.", en: "Make company knowledge accessible and let a conversational assistant actually create and manage tickets." },
    role: { ar: "نسّقت عملية التطوير، وركزت على منطق الوكيل الذكي وFunction Calling وRAG والمساعد الصوتي. بقية النظام ثمرة عمل الفريق.", en: "Coordinated development and focused on the AI agent, function calling, RAG, and voice assistant. The broader system was a team effort." },
    solution: { ar: "يربط المساعد المدخلات النصية والصوتية بمعلومات المؤسسة ووظائف التذاكر. استخدم جانب الصوت WebSockets وAudioWorklets؛ وتضم المنصة واجهة React وخلفية Python/Flask وقاعدة بيانات علائقية.", en: "The assistant connects text and voice input to company knowledge and ticket actions. Voice used WebSockets and AudioWorklets; the platform includes a React frontend, Python/Flask backend, and relational database." },
    outcome: { ar: "المركز الثالث على مستوى محافظة تعز في مسابقة تمكين؛ المشروع نموذج للمسابقة وليس نشرًا تجاريًا.", en: "Third place in Taiz governorate in the Tamkeen competition; a competition prototype, not a commercial deployment." },
    highlights: {
      ar: ["وكيل ينفّذ إجراءات عبر Function Calling", "RAG للوصول إلى معلومات وسياسات المؤسسة", "تفاعل صوتي باستخدام WebSockets وAudioWorklets", "تنسيق عمل التطوير ضمن فريق"],
      en: ["Action-taking agent via function calling", "RAG over company knowledge and policies", "Voice interaction with WebSockets and AudioWorklets", "Development coordination in a team"],
    },
    stack: ["React", "TypeScript", "Python", "Flask", "MySQL", "RAG", "WebSockets", "AudioWorklets"],
    github: "https://github.com/Hanbuyon/KHADMAT",
  },
  {
    slug: "manhwa-tool-kit", number: "03", title: "Manhwa Tool Kit", category: "ai", status: "personal", featured: true, year: "2026", art: "manhwa",
    summary: { ar: "أداة شخصية لاستخراج النصوص من المانهوا وترجمتها مع مراعاة السياق واتساق الأسماء والمصطلحات.", en: "A personal tool for extracting and translating manhwa text while retaining context and consistent names and terms." },
    challenge: { ar: "تتغير أسماء الشخصيات والمصطلحات بين الصفحات والفصول عندما تُترجم دون ذاكرة للسياق.", en: "Names and terms drift between pages and chapters when translation lacks context." },
    role: { ar: "مشروع شخصي طوّرته واستخدمته مع عدد محدود من الأصدقاء؛ لم يُطلق للعامة بعد.", en: "A personal project I built and used with a small group of friends; it has not had a public launch." },
    solution: { ar: "تستخرج الأداة النصوص بقدرات Gemini متعددة الوسائط، وتستخدم سياق الفصول السابقة ومسرد المصطلحات لتحسين الاتساق. تتعامل إدارة الطلبات مع الحدود والأخطاء وإعادة المحاولة.", en: "The tool extracts text using Gemini's multimodal capabilities and draws on earlier chapters and a glossary for consistent translation. Request management handles limits, failures, and retries." },
    outcome: { ar: "أداة قابلة للاستخدام في نطاق شخصي محدود؛ لا تُعرض لها أرقام دقة عامة أو انتشار غير مثبتة.", en: "Used privately on a limited scale; no unsupported overall accuracy or adoption figures are claimed." },
    highlights: {
      ar: ["استخراج النص من الصور وترجمته", "استرجاع السياق من الفصول والمسرد", "توحيد الأسماء والمصطلحات", "إدارة الأخطاء وإعادة المحاولة عند حدود الطلبات"],
      en: ["Text extraction and translation from images", "Context retrieval from chapters and glossary", "Consistent names and terminology", "Failure handling and retries within request limits"],
    },
    stack: ["React", "TypeScript", "Supabase", "Gemini", "OCR", "RAG"],
    github: "https://github.com/Hanbuyon/Manhwa-Tool-Kit",
  },
  {
    slug: "synccode", number: "09", title: "SyncCode", category: "web", status: "live", featured: true, year: "2026", art: "synccode",
    summary: { ar: "محرر مستندات تعاوني يزامن تغييرات المستخدمين باستخدام Yjs، مع حفظ المستندات وإدارة الوصول.", en: "A collaborative document editor that synchronizes user changes with Yjs, backed by document persistence and access controls." },
    challenge: { ar: "تمكين عدة مستخدمين من تحرير المستند نفسه مع الحفاظ على اتساق التغييرات وإتاحة نسخة محلية للعمل.", en: "Let multiple users edit the same document while keeping changes consistent and maintaining a local copy for continued work." },
    role: { ar: "مشروع مكتمل وفق التوثيق المرفق؛ يصف هذا العرض بنية المنتج ووظائفه الموثقة.", en: "A completed project according to the supplied documentation; this case study describes its documented product architecture and features." },
    solution: { ar: "يبني المحرر على Next.js وReact وProseMirror، ويستخدم Yjs لمزامنة التغييرات التعاونية وSocket.io لتبادلها، مع Supabase للمصادقة والصلاحيات وحفظ المستندات، وIndexedDB للتخزين المحلي.", en: "The editor uses Next.js, React, and ProseMirror, with Yjs for collaborative state, Socket.io to exchange updates, Supabase for authentication, permissions, and document persistence, and IndexedDB for local storage." },
    outcome: { ar: "تطبيق منشور متاح للمعاينة. يدعم التوثيق المزامنة التعاونية والتخزين المحلي، دون عرض أرقام أداء أو استخدام غير موثقة.", en: "A live application is available to explore. The documentation describes collaborative synchronization and local persistence; no unsupported performance or adoption metrics are claimed." },
    highlights: {
      ar: ["تحرير مستندات تعاوني باستخدام Yjs وProseMirror", "تبادل تحديثات المستند عبر Socket.io", "مصادقة وصلاحيات وحفظ مستمر عبر Supabase", "تخزين محلي للمستندات باستخدام IndexedDB"],
      en: ["Collaborative editing with Yjs and ProseMirror", "Document updates exchanged through Socket.io", "Authentication, permissions, and persistence with Supabase", "Local document persistence with IndexedDB"],
    },
    stack: ["Next.js", "React", "Yjs", "Socket.io", "ProseMirror", "Supabase", "PostgreSQL", "IndexedDB"],
    live: "https://sync-code-gules.vercel.app/",
  },
  {
    slug: "dentalflow-android", number: "04", title: "DentalFlow", category: "app", status: "development", year: "2026", art: "dental-app",
    summary: { ar: "تطبيق Android لإدارة عمل عيادة الأسنان، مع أدوار للمالك والاستقبال وسجلات محلية ومزامنة وتذكيرات.", en: "An Android app for dental clinic operations, with owner and receptionist roles, local records, synchronization, and reminders." },
    challenge: { ar: "تنظيم المواعيد والحسابات وبيانات العيادة مع استمرار العمل عند ضعف الاتصال.", en: "Organize appointments, accounts, and clinic records while supporting work through unreliable connectivity." },
    role: { ar: "عمل تطوير لتطبيق العيادة؛ يصف التوثيق بنية التطبيق ووظائفه الحالية دون ادعاء نشر تجاري مكتمل.", en: "Development work on the clinic application; available documentation describes its current architecture and features without claiming a completed commercial launch." },
    solution: { ar: "تطبيق Kotlin وJetpack Compose وRoom، يستخدم تخزينًا محليًا وأدوار وصول، مع آلية مزامنة وتذكيرات عبر WorkManager.", en: "A Kotlin, Jetpack Compose, and Room app with local storage, role-aware access, synchronization, and WorkManager reminders." },
    outcome: { ar: "التطبيق قيد التطوير؛ لا تُعرض أعداد مستخدمين أو ضمانات مزامنة غير مثبتة.", en: "The application is still in development; no unverified user counts or synchronization guarantees are claimed." },
    highlights: {
      ar: ["واجهات منفصلة للمالك والاستقبال", "قاعدة بيانات محلية باستخدام Room", "مزامنة سجلات العيادة", "تذكيرات ومهام مجدولة باستخدام WorkManager"],
      en: ["Separate owner and receptionist interfaces", "Local database with Room", "Clinic-record synchronization", "Reminders and scheduled work with WorkManager"],
    },
    stack: ["Kotlin", "Jetpack Compose", "Room", "SQLite", "WorkManager", "DataStore", "OkHttp"],
  },
  {
    slug: "dental-clinic-website", number: "05", title: "Dr. Noha Dental Clinic", category: "web", status: "live", year: "2026", art: "dental-web",
    summary: { ar: "موقع عربي للعيادة يعرض الخدمات والفريق والموقع وطرق التواصل وحجز الموعد عبر WhatsApp.", en: "An Arabic clinic website presenting services, the team, location, and WhatsApp appointment contact." },
    challenge: { ar: "تقديم معلومات العيادة للزوار بصورة مريحة على الهاتف وسهلة التحديث.", en: "Present clinic information clearly on mobile and make it easier to maintain." },
    role: { ar: "تطوير موقع العيادة العام باستخدام Next.js. إعداد إدارة المحتوى عبر Google Sheets ما زال في مرحلة إكمال ومراجعة.", en: "Developed the public Next.js website. The Google Sheets content-management migration remains in progress and under review." },
    solution: { ar: "واجهة عربية متجاوبة للخدمات والأطباء والموقع ومعرض الصور والتواصل، مع مسار تواصل مباشر لحجز المواعيد.", en: "A responsive Arabic site for services, clinicians, location, gallery, and direct appointment contact." },
    outcome: { ar: "الموقع العام منشور ويمكن معاينته؛ نظام إدارة المحتوى الإداري لم يكتمل بعد.", en: "The public website is live; the administrative content-management migration is not yet complete." },
    highlights: {
      ar: ["واجهة متجاوبة باللغة العربية", "عرض الخدمات وفريق العيادة", "معرض صور وموقع العيادة", "رابط مباشر للتواصل بشأن المواعيد"],
      en: ["Responsive Arabic interface", "Services and clinic team", "Gallery and clinic location", "Direct appointment-contact link"],
    },
    stack: ["Next.js", "React", "TypeScript", "Vercel"],
    live: "https://dental-flow-web-app.vercel.app/",
  },
  {
    slug: "switchyard", number: "06", title: "Switchyard", category: "app", status: "development", year: "2026", art: "switchyard",
    summary: { ar: "تطبيق مكتبي قيد التطوير لتنظيم مراحل العمل البرمجي بمساعدة الوكلاء، مع سجل للأحداث والأدلة التقنية.", en: "A desktop application in development for coordinating agent-assisted software workflows, with an event journal and technical evidence." },
    challenge: { ar: "جعل انتقال المهام ومراجعة النتائج قابلين للتتبع والتحقق، بدل الاعتماد على حالة المحادثة وحدها.", en: "Make task progression and review traceable and verifiable rather than relying only on conversation state." },
    role: { ar: "تطوير بنية التطبيق وسطح المكتب وفق ملخص المشروع؛ الوظائف المستقبلية موصوفة منفصلة عن المنفّذ.", en: "Development of the application architecture and desktop interface as documented in the project summary; planned functions are separated from implemented work." },
    solution: { ar: "يجمع Rust وTauri وReact وSQLite لإدارة الحالات والتخزين وسجل الأحداث، مع تكامل OpenCode وجمع أدلة من Git وأوامر البناء والاختبار.", en: "Combines Rust, Tauri, React, and SQLite for workflow state, persistence, and event history, with OpenCode integration and evidence collection from Git and build/test commands." },
    outcome: { ar: "أنجزت أجزاء من البنية ولوحة التحكم وفق ملخص المشروع؛ تكامل Gemini للمراجعة ما يزال مخططًا.", en: "The project summary reports implemented core architecture and dashboard work; Gemini review integration remains planned." },
    highlights: {
      ar: ["آلة حالات بقواعد انتقال واضحة", "تخزين محلي وسجل أحداث باستخدام SQLite", "تكامل OpenCode لجلسات البرمجة", "جمع أدلة تقنية مع حدود للمخرجات وتنقيح للأسرار"],
      en: ["State machine with guarded transitions", "Local persistence and event journal in SQLite", "OpenCode coding-session integration", "Bounded technical evidence collection with secret redaction"],
    },
    stack: ["Rust", "Tauri 2", "React", "TypeScript", "SQLite", "OpenCode"],
  },
  {
    slug: "iftar-platform", number: "07", title: "Iftar Campaign Platform", category: "operations", status: "volunteer", year: "Ramadan 2024", art: "iftar",
    summary: { ar: "منصة تطوعية لمتابعة حملة إفطار صائم وإظهار الوجبات والتبرعات والنفقات بشفافية.", en: "A volunteer-built platform tracking an iftar campaign and publicly showing meals, donations, and spending." },
    challenge: { ar: "تسجيل تقدم الحملة يوميًا وإتاحة المعلومات للمتبرعين وفريق التوزيع.", en: "Record campaign progress daily and make information accessible to donors and the distribution team." },
    role: { ar: "بنيت المنصة بنفسي، وشاركت في إدارة الحملة وتوثيق البيانات والتوزيع الميداني.", en: "I built the platform myself and participated in campaign management, record keeping, and on-site distribution." },
    solution: { ar: "عرض يومي لصور الوجبات وأعدادها بحسب الموقع، مع واجهة إدارة لتسجيل التبرعات والنفقات ونشرها.", en: "Daily photos and meal counts by site, plus an administration interface for recording and publishing donations and expenses." },
    outcome: { ar: "تحقق هدف توزيع 9,000 وجبة عبر ثلاثة مواقع في تعز، وجُمعت تبرعات تجاوزت 6,300 ريال سعودي وفق بيانات الحملة المقدمة.", en: "The campaign distributed its target of 9,000 meals across three sites in Taiz and collected over SAR 6,300 in donations, according to the provided campaign record." },
    highlights: {
      ar: ["بناء منصة ويب للحملة", "تحديثات يومية بحسب موقع التوزيع", "إظهار التبرعات والمصروفات", "المشاركة في إدارة العمليات الميدانية"],
      en: ["Built the campaign website", "Daily updates by distribution site", "Published donation and spending records", "Participated in field operations"],
    },
    stack: ["Web platform", "Campaign operations", "Reporting"],
  },
  {
    slug: "student-records", number: "08", title: "Student Records System", category: "operations", status: "volunteer", year: "2022", art: "school",
    summary: { ar: "أداة Microsoft Access لتنظيم بيانات الطلاب والغياب وتوزيع الطلاب وإعداد تقارير يومية وشهرية.", en: "A Microsoft Access tool for organizing student records, attendance, class allocation, and daily and monthly reporting." },
    challenge: { ar: "تنظيم متابعة السجلات والغياب وتوليد التقارير في سياق عمل شؤون الطلاب.", en: "Organize student and attendance records and produce reports for student-affairs work." },
    role: { ar: "عمل تطوعي في شؤون الطلاب والبيانات بمدرسة الكوثر للقرآن الكريم خلال 2022. المسمى الرسمي والمدة الدقيقة غير محسومين.", en: "Volunteer student-affairs and data work at Al-Kawthar Quran School in 2022. The formal title and exact duration remain unconfirmed." },
    solution: { ar: "بنيت أداة بسيطة باستخدام Access لتسجيل الغياب وتوزيع الطلاب وإعداد التقارير، إلى جانب استخدام Microsoft Office في المتابعة اليومية.", en: "Built a simple Access tool for attendance, student allocation, and reports, alongside day-to-day Microsoft Office work." },
    outcome: { ar: "سهّلت الأداة متابعة البيانات والتقارير؛ لا تُنشر أعداد طلاب غير مؤكدة.", en: "The tool supported records and reporting; no unconfirmed student counts are published." },
    highlights: {
      ar: ["سجلات غياب الطلاب", "توزيع الطلاب ومتابعة البيانات", "تقارير يومية وشهرية", "دعم مهام شؤون الطلاب"],
      en: ["Attendance records", "Student allocation and data tracking", "Daily and monthly reports", "Student-affairs support"],
    },
    stack: ["Microsoft Access", "Microsoft Office", "Reporting"],
  },
];

export const projectSlugs = projects.map((project) => project.slug);

export const experience = [
  { date: { ar: "أغسطس 2026 — الآن", en: "Aug 2026 — Present" }, title: { ar: "مراجعة حسابات العيادة ونسب الطبيبات", en: "Clinic accounts and clinician-share review" }, place: { ar: "عيادة الدكتورة نهى لطب الأسنان", en: "Dr. Noha Dental Clinic" }, body: { ar: "مراجعة الحسابات ونسب الطبيبات ومطابقة السجلات في بيئة عمل فعلية.", en: "Review clinic accounts and clinician shares, checking records within day-to-day operations." } },
  { date: { ar: "رمضان 2024", en: "Ramadan 2024" }, title: { ar: "إدارة حملة ومنصة إفطار صائم — تطوع", en: "Iftar campaign and platform — volunteer" }, place: { ar: "تعز، اليمن", en: "Taiz, Yemen" }, body: { ar: "بناء منصة الحملة والمشاركة في توثيق البيانات والتوزيع عبر ثلاثة مواقع؛ تحقق هدف 9,000 وجبة.", en: "Built the campaign platform and helped record and distribute meals across three sites; the 9,000-meal target was met." } },
  { date: { ar: "2022", en: "2022" }, title: { ar: "شؤون الطلاب وإدارة السجلات — تطوع", en: "Student affairs and records — volunteer" }, place: { ar: "مدرسة الكوثر للقرآن الكريم", en: "Al-Kawthar Quran School" }, body: { ar: "متابعة بيانات الطلاب والغياب، وإنشاء أداة Access للتوزيع والتقارير. المدة والمسمى الرسمي بحاجة إلى توثيق إضافي.", en: "Maintained student and attendance data and built an Access tool for allocation and reports. Exact dates and formal title await confirmation." } },
  { date: { ar: "2021", en: "2021" }, title: { ar: "سكرتير إداري ومساعد بيانات", en: "Administrative secretary and data assistant" }, place: { ar: "عيادة الدكتورة نهى لطب الأسنان", en: "Dr. Noha Dental Clinic" }, body: { ar: "العمل على المواعيد وسجلات المرضى والإيرادات والمصروفات ومراجعة الحسابات ضمن وظيفة مدفوعة.", en: "Handled appointments, patient records, daily income and expenses, and account review in a paid clinic role." } },
];

export const education = [
  { years: "2022–2026", title: { ar: "بكالوريوس تقنية المعلومات", en: "BSc in Information Technology" }, place: { ar: "جامعة العلوم والتكنولوجيا — تعز", en: "University of Science and Technology — Taiz" }, note: { ar: "اكتملت متطلبات الدراسة؛ الشهادة الرسمية قيد الإصدار. النتيجة النهائية: 96%.", en: "Degree requirements completed; official certificate pending. Final result: 96%." } },
  { years: "2019–2020", title: { ar: "الثانوية العامة — القسم العلمي", en: "Secondary School — Science" }, place: { ar: "مدرسة النبراس", en: "Al-Nibras School" }, note: { ar: "النتيجة: 95%.", en: "Final result: 95%." } },
];

export const credentials = [
  { title: { ar: "تركيب وإدارة كاميرات المراقبة CCTV", en: "CCTV Installation and Management" }, issuer: { ar: "جامعة العلوم والتكنولوجيا — تعز", en: "University of Science and Technology — Taiz" }, detail: { ar: "20 ساعة · 16 سبتمبر 2025", en: "20 hours · 16 Sep 2025" } },
  { title: { ar: "ICDL المتقدمة", en: "Advanced ICDL" }, issuer: { ar: "جامعة العلوم والتكنولوجيا", en: "University of Science and Technology" }, detail: { ar: "120 ساعة · 2023 · 99%", en: "120 hours · 2023 · 99%" } },
  { title: { ar: "التوجيه المهني والأكاديمي بمنهجية GIZ", en: "Career and Academic Guidance — GIZ Methodology" }, issuer: { ar: "مؤسسة مستقبَلنا للتنمية البشرية", en: "Mostaqbalna Foundation for Human Development" }, detail: { ar: "10 أيام · 5–14 أكتوبر 2020", en: "10 days · 5–14 Oct 2020" } },
  { title: { ar: "التصوير والمونتاج", en: "Photography and Video Editing" }, issuer: { ar: "مركز الجند للتدريب وتنمية المهارات", en: "Al-Jund Center for Training and Skills Development" }, detail: { ar: "60 ساعة · 16–31 يوليو 2019 · 95%", en: "60 hours · 16–31 Jul 2019 · 95%" } },
  { title: { ar: "برنامج الطلاب الموهوبين", en: "Talented Students Program" }, issuer: { ar: "مؤسسة التواصل", en: "Al-Tawasol Foundation" }, detail: { ar: "الروبوت والتطوير · 2018", en: "Robotics and development · 2018" } },
];

export const skillGroups = [
  { label: { ar: "تطوير الويب والواجهات", en: "Web & interface development" }, items: ["React", "TypeScript", "Next.js", "HTML", "CSS", "Tailwind CSS"], proof: ["manazil", "dental-clinic-website", "manhwa-tool-kit"] },
  { label: { ar: "الذكاء الاصطناعي والتكامل", en: "AI & integrations" }, items: ["Gemini", "RAG", "Function Calling", "Voice interfaces", "OCR"], proof: ["khadmat", "manhwa-tool-kit", "manazil"] },
  { label: { ar: "البيانات والخدمات", en: "Data & services" }, items: ["PostgreSQL", "Supabase", "MySQL", "SQL", "Python", "Flask"], proof: ["manazil", "khadmat", "manhwa-tool-kit"] },
  { label: { ar: "الهاتف وسطح المكتب", en: "Mobile & desktop" }, items: ["Kotlin", "Jetpack Compose", "Room", "Rust", "Tauri", "SQLite"], proof: ["dentalflow-android", "switchyard"] },
  { label: { ar: "تنظيم العمل والتقارير", en: "Operations & reporting" }, items: ["Microsoft Access", "Microsoft Office", "Record review", "Reporting"], proof: ["student-records", "iftar-platform"] },
];

export const languages = [
  { name: { ar: "العربية", en: "Arabic" }, level: { ar: "اللغة الأم", en: "Native" } },
  { name: { ar: "الإنجليزية", en: "English" }, level: { ar: "متوسط · دبلوم GLOPAL بنسبة 90%", en: "Intermediate · GLOPAL diploma 90%" } },
  { name: { ar: "الألمانية", en: "German" }, level: { ar: "دراسة حتى A2 · A1: 93%، A2: 83%", en: "Coursework through A2 · A1: 93%, A2: 83%" } },
];

export const ui = {
  ar: {
    nav: ["المشاريع", "نبذة ومهارات", "الخبرات", "التعليم", "السيرة"], contact: "تواصل معي", menu: "القائمة", close: "إغلاق", heroKicker: "متاح لفرص العمل التقنية", explore: "استكشف أعمالي", resume: "السيرة الذاتية", scroll: "مرّر للاستكشاف", selected: "مشاريع مختارة", selectedIntro: "تطبيقات بُنيت حول مشكلات فعلية — من تجربة المستخدم إلى المنطق والبيانات.", all: "جميع المشاريع", allIntro: "تصفّح العمل بحسب المجال، وافتح أي مشروع لمعرفة دوره وحالته وتفاصيله.", filterAll: "الكل", filters: { web: "الويب", ai: "الذكاء الاصطناعي", app: "تطبيقات", operations: "عمليات وبيانات" }, caseStudy: "تفاصيل المشروع", live: "معاينة المشروع", repo: "المستودع", about: "نبذة عني", aboutKicker: "خلف الكود", skills: "المهارات والأدوات", proof: "المشاريع المرتبطة", experience: "الخبرات", experienceIntro: "خبرات تقنية وإدارية وتطوعية في سياقات عمل حقيقية.", education: "التعليم", credentials: "الدورات والشهادات", languages: "اللغات", cvTitle: "السيرة الذاتية", cvIntro: "نسخة عامة مختصرة للتقديم، متاحة بالعربية والإنجليزية.", cvAr: "تنزيل السيرة العربية", cvEn: "تنزيل السيرة الإنجليزية", cvPreview: "معاينة السيرة", cvHide: "إغلاق المعاينة", contactTitle: "لنعمل على ما هو قادم.", contactIntro: "أبحث عن فرص عمل في تطوير التطبيقات وتقنية المعلومات، وأرحب بالتعاون على مشاريع مناسبة.", email: "البريد الإلكتروني", copy: "نسخ البريد", copied: "تم النسخ", copyFail: "تعذّر النسخ؛ استخدم رابط البريد", github: "GitHub", whatsapp: "WhatsApp", location: "الموقع", back: "العودة إلى المشاريع", overview: "نظرة عامة", challenge: "التحدي", role: "الدور والمساهمة", solution: "ما نُفّذ", highlights: "أبرز الوظائف", outcome: "النتيجة والحالة", stack: "التقنيات", next: "المشروع التالي", status: { development: "قيد التطوير", prototype: "نموذج مسابقة", personal: "مشروع شخصي", live: "موقع منشور", volunteer: "عمل تطوعي" }, visualNote: "تصور بصري للمشروع", play3d: "تشغيل التفاعل ثلاثي الأبعاد", stop3d: "إيقاف التفاعل", footer: "صُمم بعناية في تعز، اليمن", skip: "الانتقال إلى المحتوى" },
  en: {
    nav: ["Projects", "About & skills", "Experience", "Education", "Resume"], contact: "Get in touch", menu: "Menu", close: "Close", heroKicker: "Open to technology roles", explore: "Explore my work", resume: "View resume", scroll: "Scroll to explore", selected: "Selected work", selectedIntro: "Products built around real problems — from the interface to the logic and data behind it.", all: "All projects", allIntro: "Browse by discipline, then open a project to see its role, status, and details.", filterAll: "All", filters: { web: "Web", ai: "AI", app: "Applications", operations: "Operations & data" }, caseStudy: "Explore project", live: "Live preview", repo: "Repository", about: "About me", aboutKicker: "Behind the code", skills: "Skills & tools", proof: "Related projects", experience: "Experience", experienceIntro: "Technical, administrative, and volunteer work in real operating contexts.", education: "Education", credentials: "Courses & certificates", languages: "Languages", cvTitle: "Resume", cvIntro: "A general resume for applications, available in Arabic and English.", cvAr: "Download Arabic resume", cvEn: "Download English resume", cvPreview: "Preview resume", cvHide: "Close preview", contactTitle: "Let's build what comes next.", contactIntro: "I'm looking for roles in application development and IT, and welcome relevant project collaborations.", email: "Email", copy: "Copy email", copied: "Copied", copyFail: "Copy failed; use the email link", github: "GitHub", whatsapp: "WhatsApp", location: "Location", back: "Back to projects", overview: "Overview", challenge: "The challenge", role: "Role & contribution", solution: "What was built", highlights: "Key capabilities", outcome: "Outcome & status", stack: "Technology", next: "Next project", status: { development: "In development", prototype: "Competition prototype", personal: "Personal project", live: "Live website", volunteer: "Volunteer work" }, visualNote: "Conceptual project visual", play3d: "Enable 3D interaction", stop3d: "Disable 3D", footer: "Made with care in Taiz, Yemen", skip: "Skip to content" },
} as const;
