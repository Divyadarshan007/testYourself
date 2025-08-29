import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addUserInfo } from "../../features/exam/examSlice";
import { nanoid } from "@reduxjs/toolkit";
import { questionArray } from "../../data/questionsArray";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const blockVariants = {
  hidden: { y: 10, opacity: 0, scale: 0.98 },
  show: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.28, ease: "easeOut" } },
};

const Instructions = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [questionCount, setQuestionCount] = useState(0);
  useEffect(() => {
    questionArray.forEach((q) => {
      if (q.id == examId) {
        const count = questionArray.filter((q) => q.id === examId).length;
        setQuestionCount(count);
      }
    });
  }, [examId]);

  const [input, setInput] = useState({
    name: "", email: ""
  });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    if (!input.name.trim() || !input.email.trim()) {
      alert("Fill all details");
      return;
    }
    const userId = nanoid();
    dispatch(addUserInfo({ id: userId, ...input }));
    navigate(`/exam/${examId}/start/${userId}`);
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">

      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] rounded-full blur-3xl opacity-20 bg-indigo-600/20" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_480px_at_50%_-140px,rgba(99,102,241,0.08),transparent_60%)]" />
        <div className="absolute inset-0 [background:linear-gradient(180deg,rgba(2,6,23,0.0)_0%,rgba(2,6,23,0.6)_100%)]" />
      </div>

      <div className="relative p-6 max-w-3xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Instructions
          </div>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white">
            Exam Instructions
          </h1>
          <p className="mt-2 text-slate-400">
            Enter details, review rules, and begin when ready.
          </p>
        </motion.div>


        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-sm shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)]"
        >

          <div className="absolute inset-x-0 top-0 h-1.5 bg-indigo-500/40 group-hover:bg-indigo-400/70 transition-colors" />
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute -inset-16 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(99,102,241,0.12),transparent_30%)] blur-2xl" />
          </div>

          <div className="relative p-6">

            <motion.div variants={blockVariants} className="space-y-3 mb-5">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2.5 text-slate-100 placeholder:text-slate-500 shadow-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/40"
                value={input.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter your Email"
                className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2.5 text-slate-100 placeholder:text-slate-500 shadow-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/40"
                value={input.email}
                onChange={handleChange}
              />
            </motion.div>


            <motion.div variants={blockVariants} className="mb-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-800/80 border border-slate-700 px-3 py-1 text-xs text-slate-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-indigo-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="13" r="8" />
                  <path d="M9 2h6" />
                </svg>
                Timed
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-800/80 border border-slate-700 px-3 py-1 text-xs text-slate-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 11l2 2 4-4M7 17l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
                </svg>
                Multiple choices
              </span>
            </motion.div>


            <motion.ul variants={blockVariants} className="list-disc ml-6 text-slate-300 space-y-2">
              <li>Total duration: {questionCount} minutes</li>
              <li>Each question has 4 options</li>
              <li>No negative marking</li>
              <li>You cannot go back once you submit</li>
              <li>Ensure a stable internet connection</li>
            </motion.ul>


            <motion.div variants={blockVariants} className="mt-6">
              <button
                className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-medium shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Start Exam
              </button>
            </motion.div>
          </div>

          <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
};

export default Instructions;
