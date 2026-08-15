import { motion } from "framer-motion";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  ["Gap Assessment", "Department-wise micro-level survey against standard requirements", "M12 32a20 20 0 1 0 40 0 20 20 0 0 0-40 0Zm34 14 10 10"],
  ["Documentation", "Policies, procedures and records built to match how your teams actually work", "M18 8h22l10 10v38H18V8Zm22 0v10h10M24 32h20M24 42h20M24 50h12"],
  ["Training", "Awareness and internal-auditor training across every level of the organization", "M20 24a9 9 0 1 0 18 0 9 9 0 0 0-18 0Zm-8 30c2-10 9-16 17-16s15 6 17 16M43 30a7 7 0 1 0 14 0 7 7 0 0 0-14 0Zm0 23c2-7 7-11 14-11"],
  ["Internal Audit", "Evidence-based review before any external auditor sees the system", "M12 12h40v40H12V12Zm10 21 8 8 16-18"],
  ["Certification", "Stage 1 and Stage 2 audits with an internationally accredited certifying body", "M32 10a17 17 0 1 0 0 34 17 17 0 0 0 0-34Zm-8 32-5 14 13-7 13 7-5-14"],
];

export default function ImageGallery() {
  return (
    <section className="bg-gradient-to-b from-blue-50/70 to-white py-20 md:py-28">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mb-12 max-w-2xl"
        >
          <span className="stamp px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-navy-800">The Engagement</span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-navy-950 sm:text-4xl">
            Five stages, one accountable implementation team
          </h2>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4200, disableOnInteraction: false }}
          spaceBetween={24}
          slidesPerView={1.15}
          breakpoints={{ 640: { slidesPerView: 2.2 }, 1024: { slidesPerView: 3.2 } }}
          className="image-gallery-swiper pb-12"
        >
          {slides.map(([title, caption, path], index) => (
            <SwiperSlide key={title}>
              <article className="card-panel flex h-64 flex-col justify-between rounded-md p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-md bg-blue-50 text-navy-800">
                  <svg viewBox="0 0 64 64" width="42" height="42" fill="none">
                    <path d={path} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <span className="font-mono text-xs text-gold-500">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-navy-950">{title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-600">{caption}</p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
