import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { questionArray } from "../../data/questionsArray";
import { motion } from "framer-motion";

const Result = () => {
  const { examId, userId } = useParams();
  const navigate = useNavigate();
  const users = useSelector((state) => state.exam.exams);
  const [time, setTime] = useState(0);

  const [marks, setMarks] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  useEffect(() => {
    let count = questionArray.find((q) => q.id === examId);
    setQuestionCount(count.questions.length);
    let findedUser = users.find((user) => {
      return user.id == userId;
    });
    setMarks(findedUser.marks);
    setTime(findedUser.timeTaken);
  }, [userId, examId, users]);

  
  const percent = questionCount ? Math.round((marks / questionCount) * 100) : 0;
  const mm = String(Math.floor(time / 60)).padStart(2, "0");
  const ss = String(Math.floor(time % 60)).padStart(2, "0");

  
  const size = 140;
  const stroke = 10;
  const radius = (size - stroke) / 2;
  const circ = 2 * Math.PI * radius;
  const dash = ((100 - percent) / 100) * circ;

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
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Exam Completed
          </div>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white">
            🎉 Well done!
          </h1>
          <p className="mt-2 text-slate-400">
            Here’s a quick summary of performance and time.
          </p>
        </motion.div>

        <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-sm shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)]">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-emerald-500/40 group-hover:bg-emerald-400/70 transition-colors" />

          <div className="relative p-6">
            <div className="flex items-center gap-6">
              <div className="relative grid place-items-center">
                <svg width={size} height={size} className="-rotate-90">
                  <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="currentColor"
                    strokeWidth={stroke}
                    className="text-slate-800"
                    fill="none"
                  />
                  <motion.circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="currentColor"
                    strokeWidth={stroke}
                    className="text-emerald-500 drop-shadow"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={circ}
                    strokeDashoffset={circ}
                    animate={{ strokeDashoffset: dash }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute text-center">
                  <div className="text-3xl font-extrabold text-white">{percent}%</div>
                  <div className="text-xs text-slate-400">Score</div>
                </div>
              </div>

              <div className="flex-1">
                <div className="text-lg mb-4">
                  <p className="text-slate-200">
                    <strong className="text-white">Score:</strong> {marks} / {questionCount}
                  </p>
                  <p className="text-slate-200">
                    <strong className="text-white">Time Taken:</strong> {mm}:{ss}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-800/80 border border-slate-700 px-3 py-1 text-xs text-slate-200">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Passed criteria: {percent >= 40 ? "Yes" : "No"}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-800/80 border border-slate-700 px-3 py-1 text-xs text-slate-200">
                    <span className="h-2 w-2 rounded-full bg-indigo-400" />
                    Accuracy: {questionCount ? Math.round((marks / questionCount) * 100) : 0}%
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-800/80 border border-slate-700 px-3 py-1 text-xs text-slate-200">
                    <span className="h-2 w-2 rounded-full bg-sky-400" />
                    Time: {mm}:{ss}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => navigate('/')}
                className="bg-slate-800 text-slate-100 px-4 py-2 rounded-lg border border-slate-700 hover:bg-slate-700 transition-colors"
              >
                Back to Home
              </button>
            </div>
          </div>

          <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default Result;
