import React from "react";

export default function PremiumLearning() {
  return (
    <section className="bg-[#FCF6EA] py-14">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/PremiumLearning.png" // ✅ your illustration image in public folder
            alt="Premium Learning Illustration"
            className="w-full max-w-[520px]"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* Heading */}
          <h2 className="text-4xl font-extrabold leading-snug text-[#0b1230]">
            Premium <span className="text-orange-500">Learning</span>
            <br />
            Experience
          </h2>

          {/* FEATURES */}
          <div className="mt-10 space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#3B1D5A]">
                <img
                  src="/EasilyAccessible.png" // ✅ icon image
                  alt="Accessible"
                  className="h-7 w-7"
                />
              </div>

              <div>
                <h4 className="text-base font-bold text-[#0b1230]">
                  Easily Accessible
                </h4>
                <p className="mt-1 text-sm text-gray-500">
                  Learning Will fell Very Comfortable WithCourslab.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#3B1D5A]">
                <img
                  src="/Funlearningexpe.png" // ✅ icon image
                  alt="Fun Learning"
                  className="h-7 w-7"
                />
              </div>

              <div>
                <h4 className="text-base font-bold text-[#0b1230]">
                  Fun learning expe
                </h4>
                <p className="mt-1 text-sm text-gray-500">
                  Learning Will fell Very Comfortable WithCourslab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
