import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addScore, clearUser } from "../../features/exam/examSlice";
import { motion } from "framer-motion";

const TakeExam = () => {
  const { examId, userId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const examData = useSelector((state) => state.exam.allQuestions);

  const [currentIdx, setCurrentIdx] = useState(0);
  const questions = examData.find((question) => {
    return question.id === examId;
  });

  const [answer, setAnswer] = useState(Array(questions.questions.length).fill(null));
  const handleNext = () => {
    if (currentIdx < questions.questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    }
  };
  const handlePrev = () => {
    if (currentIdx !== 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  const currentQuestion = questions.questions[currentIdx];

  const handleChange = (idx) => {
    let updatedAnswer = [...answer];
    updatedAnswer[currentIdx] = idx;
    setAnswer(updatedAnswer);
  };

  const [time, setTime] = useState(questions.questions.length * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev <= 0) {
          handleFinish();
          clearInterval(timer);
          return;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleFinish = () => {
    let marks = 0;
    questions.questions.forEach((q, index) => {
      if (answer[index] == q.correctAnswer) {
        marks++;
      }
    });
    dispatch(addScore({ id: userId, marks, examId, time: (questions.questions.length * 60) - time }));
    dispatch(clearUser());
    navigate(`/exam/${examId}/result/${userId}`);
  };

  
  const total = questions.questions.length * 60;
  const percent = Math.max(0, Math.min(100, ((total - time) / total) * 100));
  const mm = Math.floor(time / 60);
  const ss = String(time % 60).padStart(2, "0");

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
     
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] rounded-full blur-3xl opacity-20 bg-indigo-600/20" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_480px_at_50%_-140px,rgba(99,102,241,0.08),transparent_60%)]" />
        <div className="absolute inset-0 [background:linear-gradient(180deg,rgba(2,6,23,0.0)_0%,rgba(2,6,23,0.6)_100%)]" />
      </div>

      <div className="relative p-6 max-w-4xl mx-auto">
       
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mb-6"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold">
              Question {currentIdx + 1} of {questions.questions.length}
            </h2>
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/10 px-3 py-1 text-xs text-rose-300">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
              Time Left: {mm}:{ss}
            </div>
          </div>

        
          <div className="mt-3 h-2 w-full rounded-full bg-slate-800 overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${percent}%` }}
              transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-rose-500 via-amber-500 to-indigo-500"
              style={{ boxShadow: "0 0 18px rgba(99,102,241,0.25)" }}
            />
          </div>
        </motion.div>

        
        <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-sm shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)]">
        
          <div className="absolute inset-x-0 top-0 h-1.5 bg-indigo-500/40 group-hover:bg-indigo-400/70 transition-colors" />

          <div className="relative p-6">
            <p className="text-lg font-semibold mb-4 text-slate-100">
              {currentQuestion.question}
            </p>

           
            <div className="space-y-3 mb-2">
              {currentQuestion.options.map((opt, index) => {
                const isChecked = answer[currentIdx] === index;
                return (
                  <label
                    key={index}
                    className={[
                      "block cursor-pointer rounded-xl border p-3 transition-colors",
                      "bg-slate-900/60 border-slate-800 hover:bg-slate-800/70 hover:border-slate-700",
                      isChecked ? "border-indigo-500 bg-slate-800/70 ring-2 ring-indigo-400/30" : "",
                    ].join(" ")}
                  >
                    <input
                      id="opt"
                      checked={isChecked}
                      onChange={() => handleChange(index)}
                      type="radio"
                      name="option"
                      className="mr-3 h-4 w-4 align-middle text-indigo-500 focus:ring-indigo-400"
                    />
                    <span className="align-middle">{opt}</span>
                  </label>
                );
              })}
            </div>

           
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={handlePrev}
                className="bg-slate-800 text-slate-100 px-5 py-2 rounded-lg border border-slate-700 hover:bg-slate-700 transition-colors"
              >
                Prev Question
              </button>

              {currentIdx == questions.questions.length - 1 ? (
                <button
                  onClick={handleFinish}
                  className="bg-emerald-600 text-white px-5 py-2 rounded-lg hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors"
                >
                  Finish
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors"
                >
                  Next Question
                </button>
              )}
            </div>
          </div>

          
          <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default TakeExam;
