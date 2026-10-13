import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { motion } from "framer-motion";
import { clientLogos } from "../data/assetLists.js";

export default function ClientLogos() {
  return (
    <section className="mag-section border-t border-black/15 py-20 md:py-24">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="mag-kicker">Our Key Clients</span>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-[var(--editorial-ink)] sm:text-5xl">
            Trusted by 500+ organizations
          </h2>
        </motion.div>

        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={36}
          freeMode
          loop
          speed={4500}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          allowTouchMove={false}
          className="client-swiper"
        >
          {clientLogos.map((src) => (
            <SwiperSlide key={src} style={{ width: "140px" }}>
              <div className="mag-card flex h-16 items-center justify-center p-2 transition hover:scale-[1.02]">
                <img src={src} alt="Client company logo" className="max-h-14 max-w-[130px] object-contain" loading="lazy" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
