import PageMeta from "../components/PageMeta.jsx";
import { galleryItems } from "../data/content.js";

export default function EventsGalleryPage() {
  return <><PageMeta title="Training & Audit Gallery" description="A selection of SMS training, awareness and audit activities." path="/events" /><section className="gallery-hero"><div className="container"><p className="eyebrow">Gallery</p><h1>Workshops, awareness and audit activity.</h1><p>A small selection of SMS sessions in the field—supporting teams where the work happens.</p></div></section><section className="section"><div className="container gallery-grid-brand">{galleryItems.map((item, index) => <figure key={item.src} className={`gallery-item item-${index + 1}`}><img src={item.src} alt={item.title} loading={index > 2 ? "lazy" : "eager"} /><figcaption><span>SMS field work</span>{item.title}</figcaption></figure>)}</div></section></>;
}
