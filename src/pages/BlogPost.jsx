import { motion } from "framer-motion";
import { Link, Navigate, useOutletContext, useParams } from "react-router-dom";
import CtaBanner from "../components/CtaBanner.jsx";
import PageMeta from "../components/PageMeta.jsx";
import { blogPosts } from "../data/blog.js";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });
}

function ArticleFormat({ post }) {
  if (post.format === "comparison") {
    return <div className="blog-comparison-grid">{post.comparison.map((item) => <article key={item.name}><span>{item.name}</span><h3>{item.question}</h3><p><b>Focus:</b> {item.focus}</p><p><b>Evidence:</b> {item.evidence}</p></article>)}</div>;
  }

  if (post.format === "decision-guide") {
    return <div className="blog-decision-guide">{post.decisionGuide.map((item, index) => <article key={item.choice}><span>{String(index + 1).padStart(2, "0")}</span><div><p>{item.cue}</p><h3>{item.choice}</h3><p>{item.why}</p></div></article>)}</div>;
  }

  if (post.format === "checklist") {
    return <aside className="blog-checklist"><p>First implementation checklist</p><ol>{post.checklist.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol></aside>;
  }

  if (post.format === "timeline") {
    return <div className="blog-timeline">{post.timeline.map((item, index) => <article key={item.phase}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item.phase}</h3><p>{item.detail}</p></div></article>)}</div>;
  }

  if (post.format === "field-notes") {
    return <div className="blog-field-notes">{post.fieldNotes.map((note) => <article key={note.label}><span>{note.label}</span><p>{note.text}</p></article>)}</div>;
  }

  if (post.format === "market-map") {
    return <div className="blog-market-map">{post.marketMap.map((item) => <article key={item.route}><h3>{item.route}</h3><p><b>Start with:</b> {item.startingPoint}</p><p><b>Typical proof:</b> {item.proof}</p></article>)}</div>;
  }

  return null;
}

export default function BlogPost() {
  const { onEnquire } = useOutletContext();
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const related = post ? blogPosts.filter((p) => p.slug !== slug).slice(0, 3) : [];

  if (!post) return <Navigate to="/blog" replace />;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    image: post.image,
    author: { "@type": "Organization", name: "System Management Services" },
    publisher: { "@type": "Organization", name: "System Management Services" },
    mainEntityOfPage: `https://www.isosmservices.in/blog/${post.slug}`,
  };

  return (
    <>
      <PageMeta
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        keywords={`${post.tag}, ISO certification consultant Ahmedabad, compliance guidance, certification audit support`}
        jsonLd={articleSchema}
      />

      <article className="editorial-hero pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="container-page max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <Link to="/blog" className="mag-kicker focus-ring">
              Back to Blog
            </Link>
            <span className="mag-kicker mt-8 block w-fit">{post.tag}</span>
            <h1 className="editorial-headline mt-5">{post.title}</h1>
            <div className="blog-post-meta mt-6 flex items-center gap-3 border-y border-black/20 py-3 text-xs text-[var(--editorial-muted)]">
              <span>{formatDate(post.date)}</span>
              <span aria-hidden="true">/</span>
              <span>{post.readTime}</span>
            </div>
            <div className="blog-post-image mt-8" style={{ backgroundImage: `url(${post.image || "/assets/blog/audit-desk.svg"})` }} role="img" aria-label={post.imageAlt} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mag-card blog-article-body mt-10 p-6 text-[16px] leading-8 text-[var(--editorial-muted)] md:p-9"
          >
            <div className="blog-article-introduction">
              {post.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <img className="blog-inline-image" src={post.inlineImage || post.image} alt={post.imageAlt} loading="lazy" />
            {post.sections.map((section) => <section key={section.heading} className="blog-article-section"><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
            <ArticleFormat post={post} />
            <p className="blog-article-conclusion">{post.conclusion}</p>
          </motion.div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="mag-section border-t border-black/15 pb-24 pt-16 md:pb-32">
          <div className="container-page">
            <h2 className="mag-kicker mb-8">More from the blog</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {related.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="mag-card p-5 transition hover:-translate-y-1 focus-ring">
                  <span className="mag-kicker text-[10px]">{p.tag}</span>
                  <h3 className="mt-4 font-display text-xl font-semibold leading-tight text-[var(--editorial-ink)]">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner onEnquire={onEnquire} />
    </>
  );
}
