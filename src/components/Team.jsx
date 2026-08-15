import { motion } from "framer-motion";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { company } from "../data/content.js";

export default function Team() {
  return (
    <section id="team" className="mag-section py-20 md:py-28">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mb-12 max-w-2xl"
        >
          <span className="mag-kicker">SMS Team</span>
          <h2 className="mag-title mt-5">
            Led by auditors who understand implementation on the floor
          </h2>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={28}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } }}
          className="team-swiper pb-12"
        >
          {company.partners.map((person) => (
            <SwiperSlide key={person.name} className="team-slide !h-auto">
              <article className="team-card mag-card flex h-full flex-col overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden bg-[#d9d0c5]">
                  <img src={person.photo} alt={person.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-semibold text-[var(--editorial-ink)] line-clamp-1">
                    {person.name}
                  </h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-wide text-[var(--editorial-red)] line-clamp-1">
                    {person.role}
                  </p>
                  <p className="mag-copy mt-4 text-sm line-clamp-2">{person.qualification}</p>
                  <p className="mt-3 text-sm font-semibold text-[var(--editorial-ink)] line-clamp-1">
                    {person.experience}
                  </p>
                  <p className="mt-4 text-xs leading-6 text-[var(--editorial-muted)] line-clamp-3">
                    {person.credentials}
                  </p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}