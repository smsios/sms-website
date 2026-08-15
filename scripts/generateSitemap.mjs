import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { blogPosts } from "../src/data/blog.js";
import { serviceDirectory } from "../src/data/serviceDirectory.js";

const SITE_URL = "https://www.isosmservices.in";

// Derive service URLs from the same data used by the router so the sitemap cannot fall behind the catalogue.
const servicePaths = serviceDirectory.flatMap((category) => [
  `/services/${category.slug}`,
  ...category.services.map((service) => `/services/${category.slug}/${service.slug}`),
]);

const paths = [
  { path: "/", priority: "1.0" },
  { path: "/about", priority: "0.8" },
  { path: "/services", priority: "0.9" },
  ...servicePaths.map((path) => ({ path, priority: path.split("/").length > 3 ? "0.7" : "0.8" })),
  { path: "/blog", priority: "0.7" },
  ...blogPosts.map((post) => ({ path: `/blog/${post.slug}`, priority: "0.7" })),
  { path: "/faq", priority: "0.7" },
  { path: "/contact", priority: "0.8" },
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map(({ path, priority }) => `  <url>\n    <loc>${SITE_URL}${path}</loc>\n    <priority>${priority}</priority>\n  </url>`).join("\n")}
</urlset>
`;

await writeFile(fileURLToPath(new URL("../public/sitemap.xml", import.meta.url)), xml, "utf8");
