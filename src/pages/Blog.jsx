import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import EditorialHero from "../components/EditorialHero.jsx";
import PageMeta from "../components/PageMeta.jsx";
import { blogPosts } from "../data/blog.js";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });
}

export default function Blog() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "SMS Certification & Compliance Blog",
    description: "Practical guidance on ISO certification, audits and product compliance from System Management Services.",
    blogPost: blogPosts.map((post) => ({ "@type": "BlogPosting", headline: post.title, datePublished: post.date, url: `https://www.isosmservices.in/blog/${post.slug}` })),
  };

  return (
    <>
      <PageMeta
        title="Blog"
        description="Notes on ISO certification, audits, and compliance from SMS's lead auditors and consultants."
        path="/blog"
        keywords="ISO certification blog Ahmedabad, ISO audit guide, food safety certification, information security certification, product compliance India"
        jsonLd={blogSchema}
      />

      <EditorialHero
        eyebrow="Field Notes"
        title="Dispatches from"
        accent="the audit floor."
        description="Practical explainers on ISO standards, certification process and compliance, written with the clarity of people who sit through audits."
        image="/assets/blog/audit-desk.svg"
        imageAlt="Illustration of a certification audit desk and field notes"
        label="Audit Desk"
        meta={[
          { value: blogPosts.length, label: "Articles" },
          { value: "ISO", label: "Standards" },
          { value: "Audit", label: "Focus" },
          { value: "SMS", label: "Byline" },
        ]}
      />

      <section className="mag-section pb-24 md:pb-32">
        <div className="container-page">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                transition={{ delay: (i % 3) * 0.08 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="mag-card group flex h-full flex-col p-6 transition hover:-translate-y-1 focus-ring"
                >
                  <div className="blog-card-image mb-5" style={{ backgroundImage: `url(${post.image || "/assets/blog/audit-desk.svg"})` }} aria-hidden="true" />
                  <span className="mag-kicker text-[10px]">{post.tag}</span>
                  <h2 className="mt-5 font-display text-2xl font-semibold leading-tight text-[var(--editorial-ink)] transition group-hover:text-[var(--editorial-red)]">
                    {post.title}
                  </h2>
                  <p className="mag-copy mt-4 flex-1 text-sm">{post.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-black/15 pt-4 text-xs text-[var(--editorial-muted)]">
                    <span>{formatDate(post.date)}</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
