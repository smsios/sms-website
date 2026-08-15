import { motion } from "framer-motion";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { certifyingBodyLogos } from "../data/assetLists.js";

const featuredBodies = certifyingBodyLogos.slice(0, 6);

export default function CertifyingBodies() {
  return (
    <section className="border-y border-black/15 bg-[var(--editorial-cream)] py-20 md:py-24">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-2xl"
        >
          <span className="mag-kicker">Accreditation</span>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-[var(--editorial-ink)] sm:text-5xl">
            Certification through internationally reputed, accredited bodies
          </h2>
        </motion.div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2600, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop={featuredBodies.length > 3}
          spaceBetween={12}
          slidesPerView={2}
          breakpoints={{ 520: { slidesPerView: 3 }, 768: { slidesPerView: 4 }, 1024: { slidesPerView: 6 } }}
          className="certification-logo-slider"
          aria-label="Featured accredited certification bodies"
        >
          {featuredBodies.map((src, index) => (
            <SwiperSlide key={src}>
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="mag-card flex h-20 items-center justify-center p-3"
              >
                <img src={src} alt={`Accredited certification body logo ${index + 1}`} className="max-h-12 max-w-full object-contain" loading="lazy" />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
