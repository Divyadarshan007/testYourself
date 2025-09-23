import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { questionArray } from "../../data/questionsArray";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { y: 10, opacity: 0, scale: 0.98 },
  show: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.28, ease: "easeOut" } },
};

const hoverTarget = { y: -8, scale: 1.01, rotateX: 0.5 };
const tapTarget = { scale: 0.99, y: -3 };

export default function Exams() {
  const navigate = useNavigate();
  const [allQuestions, setAllQuestions] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("allQuestions") || "[]");
    if (!data || data.length === 0) {
      localStorage.setItem("allQuestions", JSON.stringify(questionArray));
      data = questionArray;
    }
    setAllQuestions(data);
  }, []);

  const delays = useMemo(
    () => allQuestions.map((_, i) => 0.05 + (i % 6) * 0.02),
    [allQuestions]
  );

  return (
    <section className="relative height  bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
     
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] rounded-full blur-3xl opacity-20 bg-indigo-600/20" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_-120px,rgba(99,102,241,0.08),transparent_60%)]" />
        <div className="absolute inset-0 [background:linear-gradient(180deg,rgba(2,6,23,0.0)_0%,rgba(2,6,23,0.7)_100%)]" />
      </div>

      <div className="relative p-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Live Exams
          </div>
          <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Explore <span className="text-indigo-400">Available Exams</span>
          </h1>
          <p className="mt-2 text-slate-400">
            Curated sets with focused questions and smooth interactions for a delightful testing flow.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {allQuestions.map((exam, idx) => (
            <motion.div
              key={exam.id}
              variants={cardVariants}
              transition={{ delay: delays[idx] || 0 }}
              whileHover={hoverTarget}
              whileTap={tapTarget}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-sm shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)] hover:shadow-[0_22px_45px_-20px_rgba(0,0,0,0.85)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              
              <div className="absolute inset-x-0 top-0 h-1.5 bg-indigo-500/40 group-hover:bg-indigo-400/70 transition-colors" />
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -inset-16 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(99,102,241,0.15),transparent_30%)] blur-2xl" />
              </div>

              <div className="relative p-6">
                <h2 className="text-lg font-semibold text-slate-100 group-hover:text-white transition-colors">
                  {exam.title}
                </h2>
                <p className="text-slate-400 mt-1 mb-5">
                  {exam.questions.length} Questions
                </p>

                
                <div className="mb-5 flex flex-wrap items-center gap-2">
                  <motion.span
                    whileHover={{ y: -1 }}
                    className="inline-flex items-center gap-1.5 rounded-full bg-slate-800/80 border border-slate-700 px-3 py-1 text-xs text-slate-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-indigo-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 8v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="13" r="8" />
                      <path d="M9 2h6" />
                    </svg>
                    Timed
                  </motion.span>

                  <motion.span
                    whileHover={{ y: -1 }}
                    className="inline-flex items-center gap-1.5 rounded-full bg-slate-800/80 border border-slate-700 px-3 py-1 text-xs text-slate-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 11l2 2 4-4M7 17l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                      <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
                    </svg>
                    Multiple choices
                  </motion.span>
                </div>

                <div className="flex items-center justify-between">
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0, scale: 0.98 }}
                    onClick={() => navigate(`/exam/${exam.id}`)}
                    className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white font-medium shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors"
                  >
                    Start Exam
                    <motion.span
                      aria-hidden
                      initial={{ x: 0, opacity: 0.7 }}
                      whileHover={{ x: 3, opacity: 1 }}
                      transition={{ duration: 0.15 }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </div>
              </div>

             
              <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
