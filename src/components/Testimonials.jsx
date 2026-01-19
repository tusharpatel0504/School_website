import React, { useMemo, useState } from "react";
import { testimonials } from "../data/testimonial";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // show 3 cards like the design
  const visible = 3;

  const pages = Math.ceil(testimonials.length / visible);

  const currentPage = Math.floor(index / visible);

  const currentTestimonials = useMemo(() => {
    const start = currentPage * visible;
    return testimonials.slice(start, start + visible);
  }, [currentPage]);

  const prev = () => {
    const prevPage = (currentPage - 1 + pages) % pages;
    setIndex(prevPage * visible);
  };

  const next = () => {
    const nextPage = (currentPage + 1) % pages;
    setIndex(nextPage * visible);
  };

  return (
    <section className="relative bg-white py-20">
      {/* Decorative images if you have them */}
      <img
        src="/testimonial-arrow-left.png" // optional decorative arrow
        alt=""
        className="pointer-events-none absolute left-10 bottom-10 hidden w-20 md:block"
      />
      <img
        src="/testimonial-planet.png" // optional decorative planet
        alt=""
        className="pointer-events-none absolute right-10 bottom-10 hidden w-20 md:block"
      />

      <div className="mx-auto max-w-6xl px-4">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#0b1230]">
            What Student’s Say
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>

        {/* Cards */}
        <div className="relative mt-12">
          {/* Shadow background like screenshot */}
          <div className="absolute inset-0 -z-10 blur-3xl opacity-50"></div>

          <div className="grid gap-8 md:grid-cols-3">
            {currentTestimonials.map((t) => (
              <article
                key={t.id}
                className="rounded-xl bg-white p-7 shadow-lg shadow-black/5 ring-1 ring-black/5"
              >
                <p className="text-sm leading-relaxed text-gray-400">
                  “{t.quote}”
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-bold text-[#0b1230]">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:border-purple-700 hover:text-purple-700"
              aria-label="Previous testimonials"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i * visible)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === currentPage
                      ? "w-6 bg-[#3B1D5A]"
                      : "w-2.5 bg-gray-300"
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:border-purple-700 hover:text-purple-700"
              aria-label="Next testimonials"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
