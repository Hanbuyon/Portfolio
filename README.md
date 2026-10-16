# Ahmed Nazeeh — Portfolio

A bilingual Arabic and English developer portfolio built with React, TypeScript, and React Router. The static site includes project case studies, real interface screenshots where available, an accessible gallery, and downloadable resumes.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run typecheck
npm run build
```

Vercel serves the prerendered output from `build/client`. The original screenshot collection in `Images Gallary/` is intentionally excluded from Git; only selected optimized assets in `public/projects/` are published.

## Notes

- `/ar` and `/en` are the Arabic and English portfolio routes.
- `/ar/projects/:slug` and `/en/projects/:slug` provide shareable case studies.
- Some project screenshots show development or sample data and are captioned accordingly.
- Screenshots from the dental Android app are demonstration screens. No patient-identifying appointment detail is included.
- The dental clinic team photo is not included.
