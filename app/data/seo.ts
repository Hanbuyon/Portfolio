import type { Lang } from "./site";

export const siteOrigin = "https://ahmednazeeh.vercel.app";

export const shareImages = {
  ar: {
    url: `${siteOrigin}/og-ar.png`,
    width: "1865",
    height: "906",
    alt: "أحمد نزيه، خريج تقنية معلومات ومطوّر تطبيقات",
    locale: "ar_AR",
    alternateLocale: "en_US",
  },
  en: {
    url: `${siteOrigin}/og-en.png`,
    width: "1845",
    height: "891",
    alt: "Ahmed Nazeeh, IT graduate and application developer",
    locale: "en_US",
    alternateLocale: "ar_AR",
  },
} as const satisfies Record<Lang, {
  url: string;
  width: string;
  height: string;
  alt: string;
  locale: string;
  alternateLocale: string;
}>;

export function socialImageMeta(lang: Lang) {
  const image = shareImages[lang];
  return [
    { property: "og:image", content: image.url },
    { property: "og:image:secure_url", content: image.url },
    { property: "og:image:type", content: "image/png" },
    { property: "og:image:width", content: image.width },
    { property: "og:image:height", content: image.height },
    { property: "og:image:alt", content: image.alt },
    { property: "og:locale", content: image.locale },
    { property: "og:locale:alternate", content: image.alternateLocale },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: image.url },
    { name: "twitter:image:alt", content: image.alt },
  ];
}
