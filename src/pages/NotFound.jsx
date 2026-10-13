import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta.jsx";

export default function NotFound() {
  return <section className="not-found"><PageMeta title="Page Not Found" description="The requested page could not be found." path="/404" /><div className="container"><p className="eyebrow">404</p><h1>This page is not available.</h1><Link className="button" to="/">Return home</Link></div></section>;
}
