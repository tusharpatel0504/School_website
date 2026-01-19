import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/education.jpg" // ✅ put your about illustration in public folder
            alt="About Illustration"
            className="w-full max-w-[520px]  rounded-xl"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* Title */}
          <h2 className="text-4xl font-extrabold leading-snug text-[#0b1230]">
            About <span className="text-orange-500">BookStore</span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          {/* Feature Cards */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {/* Feature 1 */}
            <div className="rounded-2xl bg-white p-6 shadow-lg shadow-black/5 ring-1 ring-black/5 transition hover:-translate-y-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3B1D5A]">
                <img
                  src="/about-icon1.png" // ✅ icon image in public
                  alt="Trusted"
                  className="h-7 w-7"
                />
              </div>

              <h4 className="mt-4 text-base font-bold text-[#0b1230]">
                Trusted Courses
              </h4>
              <p className="mt-2 text-sm text-gray-500">
                Get trusted and verified learning materials from top instructors.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-2xl bg-white p-6 shadow-lg shadow-black/5 ring-1 ring-black/5 transition hover:-translate-y-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3B1D5A]">
                <img
                  src="/about-icon2.png" // ✅ icon image in public
                  alt="Affordable"
                  className="h-7 w-7"
                />
              </div>

              <h4 className="mt-4 text-base font-bold text-[#0b1230]">
                Affordable Learning
              </h4>
              <p className="mt-2 text-sm text-gray-500">
                Learn anytime, anywhere with budget friendly course packages.
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="mt-10 rounded-full bg-orange-500 px-10 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600 active:scale-[0.98]">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
