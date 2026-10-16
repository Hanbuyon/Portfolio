import type { ReactNode } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from "react-router";
import styles from "./styles.css?url";
import "@fontsource-variable/geist/index.css";
import "@fontsource/ibm-plex-sans-arabic/400.css";
import "@fontsource/ibm-plex-sans-arabic/500.css";
import "@fontsource/ibm-plex-sans-arabic/600.css";
import "@fontsource/ibm-plex-sans-arabic/700.css";

export const links = () => [
  { rel: "stylesheet", href: styles },
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
  { rel: "preconnect", href: "https://fonts.gstatic.com" },
];

export function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const lang = location.pathname.startsWith("/en") ? "en" : "ar";
  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0b0f14" />
        <link rel="alternate" hrefLang="ar" href={location.pathname.replace(/^\/(ar|en)/, "/ar")} />
        <link rel="alternate" hrefLang="en" href={location.pathname.replace(/^\/(ar|en)/, "/en")} />
        <link rel="alternate" hrefLang="x-default" href="/ar" />
        <Links />
        <Meta />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
