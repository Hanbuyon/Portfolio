import { readdir, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = new URL("../build/client/", import.meta.url);
const rootPath = fileURLToPath(root);
const siteUrl = (process.env.SITE_URL || "https://ahmednazeeh.vercel.app").replace(/\/$/, "");

async function pages(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const paths = [];
  for (const entry of entries) {
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) paths.push(...await pages(fullPath));
    else if (entry.name === "index.html") paths.push(fullPath);
  }
  return paths;
}

const files = await pages(rootPath);
const urls = files.map((file) => {
  const path = relative(rootPath, file).replaceAll("\\", "/").replace(/index\.html$/, "");
  return `${siteUrl}/${path}`;
}).filter((url) => url !== `${siteUrl}/`);

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${url.replaceAll("&", "&amp;")}</loc></url>`).join("\n")}\n</urlset>\n`;
await writeFile(new URL("../build/client/sitemap.xml", import.meta.url), xml);
await writeFile(new URL("../build/client/robots.txt", import.meta.url), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);
console.log(`Generated sitemap for ${urls.length} pages at ${siteUrl}`);
