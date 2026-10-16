import type { Config } from "@react-router/dev/config";
import { projectSlugs } from "./app/data/site";

export default {
  ssr: false,
  prerender: [
    "/",
    "/ar",
    "/en",
    ...["ar", "en"].flatMap((lang) =>
      projectSlugs.map((slug) => `/${lang}/projects/${slug}`),
    ),
  ],
} satisfies Config;
