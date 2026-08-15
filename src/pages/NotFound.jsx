import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta.jsx";

export default function NotFound() {
  return (
    <>
      <PageMeta title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="editorial-hero flex min-h-[78vh] items-center justify-center pt-24">
        <div className="container-page text-center">
          <span className="mag-kicker mx-auto">404</span>
          <h1 className="editorial-headline mx-auto mt-6 max-w-4xl">
            This page missed <span>the issue.</span>
          </h1>
          <p className="editorial-dek mx-auto mt-6">The page you're looking for may have moved or been removed.</p>
          <Link
            to="/"
            className="mt-8 inline-flex bg-[var(--editorial-ink)] px-6 py-3 font-semibold text-[var(--editorial-cream)] transition hover:bg-[var(--editorial-red)] focus-ring"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
