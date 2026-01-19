import React, { useMemo, useState, useEffect } from "react";
import { ourTracks } from "../data/ourtracks";

function StarRating({ value = 0 }) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <div className="flex items-center gap-0.5">
      {stars.map((s) => (
        <svg
          key={s}
          viewBox="0 0 24 24"
          className={`h-4 w-4 ${
            s <= value ? "text-amber-400" : "text-gray-200"
          }`}
          fill="currentColor"
        >
          <path d="M12 17.27l5.18 3.04-1.64-5.81L20 9.24l-5.93-.51L12 3.5 9.93 8.73 4 9.24l4.46 5.26-1.64 5.81z" />
        </svg>
      ))}
    </div>
  );
}

function MetaItem({ icon, text }) {
  return (
    <div className="flex items-center gap-1.5 text-xs text-gray-500">
      <span className="text-gray-400">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

// ✅ Arrow button (moved farther left/right)
function ArrowBtn({ direction = "left", onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`absolute top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-3 shadow-md ring-1 ring-black/5 
      transition hover:scale-105 active:scale-95 disabled:opacity-40 disabled:hover:scale-100
      ${
        direction === "left"
          ? "-left-8 md:-left-12"
          : "-right-8 md:-right-12"
      }`}
      aria-label={direction === "left" ? "Previous" : "Next"}
    >
      {direction === "left" ? (
        <svg className="h-5 w-5 text-gray-700" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 18l-6-6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg className="h-5 w-5 text-gray-700" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

export default function OurTracks() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // ✅ Responsive visible cards count
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1); // mobile
      else if (w < 1024) setVisibleCount(2); // tablet
      else setVisibleCount(3); // desktop
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // ✅ maxIndex
  const maxIndex = Math.max(0, ourTracks.length - visibleCount);

  // ✅ arrows
  const handlePrev = () => setStartIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setStartIndex((prev) => Math.min(prev + 1, maxIndex));

  // ✅ translate percent (smooth)
  const translatePercent = useMemo(() => {
    return (startIndex * 100) / visibleCount;
  }, [startIndex, visibleCount]);

  return (
    <section className="relative bg-white py-16">
      {/* Bulb Image */}
      <div className="pointer-events-none absolute left-10 top-16 hidden md:block">
        <img src="/lamp.png" alt="bulb" className="h-20" />
      </div>

      {/* Arrow Image */}
      <div className="pointer-events-none absolute right-10 top-10 hidden md:block">
        <img src="/arrow.png" alt="arrow" className="h-28" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Our Tracks
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>

        {/* ✅ SLIDER */}
        <div className="relative mt-10">
          {/* arrows */}
          <ArrowBtn
            direction="left"
            onClick={handlePrev}
            disabled={startIndex === 0}
          />
          <ArrowBtn
            direction="right"
            onClick={handleNext}
            disabled={startIndex >= maxIndex}
          />

          {/* outer wrapper */}
          <div className="overflow-hidden">
            {/* track */}
            <div
              className="flex gap-8 transition-transform duration-500"
              style={{
                transform: `translateX(-${translatePercent}%)`,
              }}
            >
              {ourTracks.map((track) => (
                <div
                  key={track.id}
                  className={`shrink-0 w-full ${
                    visibleCount === 1
                      ? "sm:w-full"
                      : visibleCount === 2
                      ? "sm:w-[calc((100%-32px)/2)]"
                      : "lg:w-[calc((100%-64px)/3)]"
                  }`}
                >
                  <article className="group overflow-hidden rounded-2xl bg-white shadow-lg shadow-black/5 ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-xl">
                    {/* image */}
                    <div className="relative h-44 w-full overflow-hidden">
                      <img
                        src={track.image}
                        alt={track.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* content */}
                    <div className="p-5">
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-400">{track.category}</p>
                        <StarRating value={track.rating} />
                      </div>

                      <h3 className="mt-2 text-sm font-semibold text-gray-900">
                        {track.title}
                      </h3>

                      <p className="mt-1 text-sm font-semibold text-orange-500">
                        ${track.price}
                      </p>

                      <div className="my-4 h-px w-full bg-gray-100" />

                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                        <MetaItem
                          icon={
                            <svg
                              className="h-4 w-4"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M12 7v5l3 2"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                              <path
                                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                            </svg>
                          }
                          text={track.duration}
                        />

                        <MetaItem
                          icon={
                            <svg
                              className="h-4 w-4"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M4 5h16v12H4z"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                              <path
                                d="M4 17l4-4 4 3 4-5 4 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          }
                          text={`${track.lessons} Courses`}
                        />

                        <MetaItem
                          icon={
                            <svg
                              className="h-4 w-4"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M4 17v2h16v-2"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                              <path
                                d="M12 3v12"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                              <path
                                d="M7 10l5 5 5-5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          }
                          text={`${track.sales} Sales`}
                        />
                      </div>

                      <div className="mt-5 flex justify-center">
                        <button className="rounded-full bg-orange-500 px-8 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600 active:scale-[0.98]">
                          Join Course
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* ✅ END SLIDER */}
      </div>
    </section>
  );
}
