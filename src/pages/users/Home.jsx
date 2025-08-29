const Home = () => {
  return (
    <section className="relative height bg-slate-950 text-slate-100 py-16 flex items-center h-full">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] rounded-full blur-3xl opacity-20 bg-indigo-600/20" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_480px_at_50%_-140px,rgba(99,102,241,0.08),transparent_60%)]" />
        <div className="absolute inset-0 [background:linear-gradient(180deg,rgba(2,6,23,0.0)_0%,rgba(2,6,23,0.6)_100%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
          Welcome
        </div>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Master exams with a modern, smooth experience
            </h1>
            <p className="mt-3 text-slate-400 max-w-2xl">
              Explore available exams, take timed tests, and view results with elegant UI and subtle motion. Everything you need to focus and perform.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/all-exam"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-white font-medium shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors"
              >
                Browse Exams →
              </a>
             
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-sm shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)]">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-indigo-500/40" />
              <h3 className="text-lg font-semibold text-white">Quick start</h3>
              <p className="mt-1 text-slate-400">
                Jump into a curated exam and experience the flow.
              </p>
              <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                <li>• Timed sessions with clear progress</li>
                <li>• Multiple-choice questions</li>
                <li>• Results with score and time</li>
              </ul>
              <a
                href="/all-exam"
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white text-sm font-medium shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors"
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
