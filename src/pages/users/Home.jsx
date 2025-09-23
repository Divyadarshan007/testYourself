const Home = () => {
  return (
    <section className="relative height bg-slate-950 text-slate-100 py-10 sm:py-16 md:py-20 flex items-center ">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[450px] sm:w-[700px] md:w-[1100px] h-[300px] sm:h-[500px] md:h-[700px] rounded-full blur-3xl opacity-20 bg-indigo-600/20" />
        <div className="absolute inset-0 bg-[radial-gradient(450px_250px_at_50%_-80px,rgba(99,102,241,0.08),transparent_60%)] sm:bg-[radial-gradient(900px_480px_at_50%_-140px,rgba(99,102,241,0.08),transparent_60%)]" />
        <div className="absolute inset-0 [background:linear-gradient(180deg,rgba(2,6,23,0.0)_0%,rgba(2,6,23,0.6)_100%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
        <div className="inline-flex items-center gap-1 sm:gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-xs text-indigo-300">
          <span className="inline-block h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-indigo-400 animate-pulse" />
          Welcome
        </div>

        <div className="mt-5 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">

          <div className="lg:col-span-7">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-snug sm:leading-tight">
              Master exams with a modern, smooth experience
            </h1>
            <p className="mt-2 sm:mt-4 text-slate-400 max-w-2xl text-xs sm:text-base md:text-lg">
              Explore available exams, take timed tests, and view results with elegant UI and subtle motion. Everything you need to focus and perform.
            </p>

            <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
              <a
                href="/all-exam"
                className="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg bg-indigo-600 px-3 sm:px-5 py-1.5 sm:py-2.5 text-white text-xs sm:text-base font-medium shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors">
                Browse Exams →
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-800 bg-slate-900/70 p-3 sm:p-6 backdrop-blur-sm shadow-[0_6px_18px_-10px_rgba(0,0,0,0.7)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-indigo-500/40" />
              <h3 className="text-sm sm:text-lg font-semibold text-white">Quick start</h3>
              <p className="mt-1 text-slate-400 text-xs sm:text-base">
                Jump into a curated exam and experience the flow.
              </p>
              <ul className="mt-3 sm:mt-4 space-y-1 sm:space-y-2 text-slate-300 text-xs sm:text-sm">
                <li>• Timed sessions with clear progress</li>
                <li>• Multiple-choice questions</li>
                <li>• Results with score and time</li>
              </ul>
              <a
                href="/all-exam"
                className="mt-3 sm:mt-5 inline-flex items-center gap-1.5 sm:gap-2 rounded-lg bg-indigo-600 px-3 sm:px-4 py-1.5 sm:py-2 text-white text-xs sm:text-sm font-medium shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors"
              >
                Start now →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
