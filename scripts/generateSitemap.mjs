import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const SITE_URL = "https://www.isosmservices.in";
const paths = [
  ["/", "1.0"], ["/about", "0.8"], ["/services", "0.9"], ["/certifications", "0.9"],
  ["/industries", "0.8"], ["/training", "0.8"], ["/events", "0.6"], ["/blog", "0.6"],
  ["/faq", "0.6"], ["/contact", "0.8"], ["/privacy-policy", "0.3"], ["/terms", "0.3"],
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map(([path, priority]) => `  <url>\n    <loc>${SITE_URL}${path}</loc>\n    <priority>${priority}</priority>\n  </url>`).join("\n")}
</urlset>
`;

await writeFile(fileURLToPath(new URL("../public/sitemap.xml", import.meta.url)), xml, "utf8");
