import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { assignExam, editExam } from "../../features/exam/examSlice";
import { useNavigate, useParams } from "react-router-dom";

const EditExam = () => {
    const [input, setInput] = useState({
        id: "", title: "",
    });
    const allData = useSelector(store => {
        return store.exam.allQuestions
    })
    console.log(allData);

    const [questions, setQuestions] = useState([{ question: "", options: ["", "", "", ""], correctAnswer: "" }]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { examId } = useParams()
    useEffect(() => {
        const data = allData.find((item) => {
            return item.id === examId;
        })
        const { questions, ...basicInfo } = data
        console.log( questions, basicInfo);
        

        if (!data) {
            navigate('/')
            return;
        }

        setInput(basicInfo)
        setQuestions(questions)
    }, [examId])
    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value });
    };

    const handleQuestions = (idx, value) => {
        let updatedQues = [...questions];
        updatedQues[idx].question = value;
        setQuestions(updatedQues);
    };
    const handleOption = (idx, optIdx, value) => {                                   
        const updatedobj = [...questions];
        updatedobj[idx].options[optIdx] = value;
        setQuestions(updatedobj);
    };
    const handleCorrect = (idx, value) => {
        const updated = [...questions];
        updated[idx].correctAnswer = value;
        setQuestions(updated);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!input.id.trim() || !input.title.trim()) {
            alert("Exam ID and Title cannot be empty.");
            return;
        }

        for (let i = 0; i < questions.length; i++) {
            const q = questions[i];
            if (!q.question.trim()) {
                alert(`Question ${i + 1} cannot be empty.`);
                return;
            }
            for (let j = 0; j < q.options.length; j++) {
                if (!q.options[j].trim()) {
                    alert(`Option ${j + 1} for Question ${i + 1} cannot be empty.`);
                    return;
                }
            }
            if (q.correctAnswer === "" || q.correctAnswer < 0 || q.correctAnswer > 3) {
                alert(`Correct Answer for Question ${i + 1} must be between 0 and 3.`);
                return;
            }
        }

        const examData = { ...input, questions };
        dispatch(editExam(examData));
        navigate('/admin')
    };

    const handleAdd = (e) => {
        e.preventDefault();
        setQuestions([...questions, { question: "", options: ["", "", "", ""], correctAnswer: "" }]);
    };

    return (
        <div className="relative min-h-screen bg-slate-950 text-slate-100 py-12">
            <div className="pointer-events-none fixed inset-0">
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] rounded-full blur-3xl opacity-20 bg-indigo-600/20" />
                <div className="absolute inset-0 bg-[radial-gradient(900px_480px_at_50%_-140px,rgba(99,102,241,0.08),transparent_60%)]" />
                <div className="absolute inset-0 [background:linear-gradient(180deg,rgba(2,6,23,0.0)_0%,rgba(2,6,23,0.6)_100%)]" />
            </div>

            <form
                className="relative max-w-3xl mx-auto p-6 rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-sm shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)]"
                onSubmit={handleSubmit}
            >
                <div className="absolute inset-x-0 top-0 h-1.5 bg-indigo-500/40 rounded-t-2xl" />

                <div className="mb-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                        Builder
                    </div>
                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-white">Assign Exam</h2>
                    <p className="mt-1 text-slate-400 text-sm">Provide exam details and add questions. Submit to assign.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className="block text-sm text-slate-300 mb-1">ID</label>
                        <input
                            onChange={handleChange}
                            value={input.id}
                            type="text"
                            id="id"
                            className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2.5 text-slate-100 placeholder:text-slate-500 shadow-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/40"
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-slate-300 mb-1">Title</label>
                        <input
                            onChange={handleChange}
                            value={input.title}
                            type="text"
                            id="title"
                            className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2.5 text-slate-100 placeholder:text-slate-500 shadow-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/40"
                        />
                    </div>
                </div>

                {/* Questions */}
                <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-sm font-semibold text-slate-200">Questions</h3>
                        <button
                            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-3 py-1.5 text-white text-xs font-medium shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors"
                            type="button"
                            onClick={handleAdd}
                        >
                            Add more
                        </button>
                    </div>

                    <div className="max-h-[460px] overflow-y-auto noScroll-bar pr-1 space-y-4">
                        {questions.map((item, idx) => (
                            <div key={idx} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                                <div className="mb-4">
                                    <label className="block text-sm text-slate-300 mb-1">Question {idx + 1}</label>
                                    <input
                                        onChange={(e) => handleQuestions(idx, e.target.value)}
                                        value={item.question}
                                        id="question"
                                        type="text"
                                        className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2.5 text-slate-100 placeholder:text-slate-500 shadow-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/40"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm text-slate-300 mb-2">Options</label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {item.options.map((option, optIdx) => (
                                            <input
                                                key={optIdx}
                                                type="text"
                                                onChange={(e) => handleOption(idx, optIdx, e.target.value)}
                                                value={option}
                                                id="options"
                                                placeholder={`Option ${optIdx + 1}`}
                                                className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2.5 text-slate-100 placeholder:text-slate-500 shadow-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/40"
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-2">
                                    <label className="block text-sm text-slate-300 mb-1">Correct Answer (Index)</label>
                                    <input
                                        type="number"
                                        onChange={(e) => handleCorrect(idx, e.target.value)}
                                        value={item.correctAnswer}
                                        id="correctAnswer"
                                        className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2.5 text-slate-100 placeholder:text-slate-500 shadow-sm outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/40"
                                        placeholder="Enter the correct option number (0-3)"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="sticky bottom-0 -mx-6 mt-6 bg-gradient-to-t from-slate-950/80 to-transparent px-6 py-3 backdrop-blur-sm">
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors"
                        >
                            Assign
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditExam;
