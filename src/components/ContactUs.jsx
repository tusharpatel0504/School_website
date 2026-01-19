import React from "react";

export default function ContactUs() {
  return (
    <section className="relative bg-white py-20">
      {/* Optional decorative images (public folder) */}
      <img
        src="/contact-left.png" // optional
        alt=""
        className="pointer-events-none absolute left-8 top-16 hidden w-14 md:block"
      />
      <img
        src="/contact-right.png" // optional
        alt=""
        className="pointer-events-none absolute right-10 top-10 hidden w-16 md:block"
      />

      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#0b1230]">Contact Us</h2>
          <p className="mt-2 text-sm text-gray-400">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
        </div>

        {/* Content */}
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {/* Left Info Card */}
          <div className="rounded-2xl bg-[#FCF6EA] p-10 shadow-lg shadow-black/5 ring-1 ring-black/5">
            <h3 className="text-2xl font-extrabold leading-snug text-[#0b1230]">
              Need help? <br />
              Let’s talk with us.
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              We are here to help you. Feel free to contact us anytime and we’ll
              get back to you as soon as possible.
            </p>

            <div className="mt-8 space-y-5">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3B1D5A]">
                  <svg
                    className="h-6 w-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.06a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-bold text-[#0b1230]">Phone</p>
                  <p className="text-sm text-gray-500">+1 000 123 4567</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3B1D5A]">
                  <svg
                    className="h-6 w-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 4h16v16H4V4Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="m22 6-10 7L2 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-bold text-[#0b1230]">Email</p>
                  <p className="text-sm text-gray-500">support@courslab.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3B1D5A]">
                  <svg
                    className="h-6 w-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-bold text-[#0b1230]">Location</p>
                  <p className="text-sm text-gray-500">
                    123 Learning Street, NY, USA
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button className="mt-10 rounded-full bg-orange-500 px-9 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600 active:scale-[0.98]">
              Get Started
            </button>
          </div>

          {/* Right Form Card */}
          <div className="rounded-2xl bg-white p-10 shadow-lg shadow-black/5 ring-1 ring-black/5">
            <h3 className="text-xl font-extrabold text-[#0b1230]">
              Send a Message
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Fill out the form and we’ll reply shortly.
            </p>

            <form className="mt-8 space-y-5">
              {/* Name */}
              <div>
                <label className="text-sm font-semibold text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-semibold text-gray-600">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="text-sm font-semibold text-gray-600">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-semibold text-gray-600">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="mt-2 w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-full bg-[#3B1D5A] px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2f1449] active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
