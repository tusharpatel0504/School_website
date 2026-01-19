export default function Hero() {
  return (
    <div className="min-h-screen bg-[#fbf4ea] flex justify-center">
      {/* Navbar */}
      

      {/* Hero */}
      <main className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-10 md:grid-cols-2 md:py-16">
        {/* Left: Text */}
        <section>
          <h1 className="text-4xl font-extrabold leading-tight text-[#151035] md:text-5xl">
            The <span className="text-[#ff6a2a]">Smart</span>
            <br />
            Choice For <span className="text-[#ff6a2a]">Future</span>
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-6 text-[#6c6a7a] md:text-base">
            Elearn is a global training provider based across the UK that
            specialises in accredited and bespoke training courses. We crush the...
          </p>

          {/* Search bar */}
          <div className="mt-10 flex w-full max-w-xl items-center gap-4">
            <div className="flex flex-1 items-center gap-3 rounded-full bg-white px-5 py-3 shadow-sm">
              {/* search icon */}
              <svg
                className="h-5 w-5 text-[#6c6a7a]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>

              <input
                type="text"
                placeholder="Search for a location..."
                className="w-full bg-transparent text-sm text-[#151035] outline-none placeholder:text-[#9b98aa]"
              />
            </div>

            <button className="rounded-full bg-[#3a1c64] px-7 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition">
              Continue
            </button>
          </div>
        </section>

        {/* Right: Image / Illustration */}
        <section className="relative flex items-center justify-center">
          {/* decorative circle */}
          <div className="absolute right-6 top-6 h-64 w-64 rounded-full bg-[#f3e3c3] opacity-70 blur-[0px]" />

          {/* Illustration image */}
          <div className="relative z-10 w-full max-w-lg">
            <img
              src="heroimg.png"
              alt="E-learning illustration"
              className="w-full h-auto"
              draggable="false"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
