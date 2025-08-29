import { useDispatch, useSelector } from "react-redux";
import { deleteExam, deleteUser } from "../../features/exam/examSlice";
import { useState } from "react";

const UserInfo = () => {
    const users = useSelector((store) => store.exam.exams);
    const allExams = useSelector((store) => store.exam.allQuestions);
    const dispatch = useDispatch();
    const [submittedExam, setSubmittedExam] = useState(true);

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    };

    const handleDeleteExam = (id) => {
        dispatch(deleteExam(id));
    }
    return (
        <div className="relative min-h-screen bg-slate-950 text-slate-100">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="flex items-center justify-between mb-5">
                    <h1 className="text-2xl font-bold tracking-tight">User Info</h1>
                    <div className="inline-flex rounded-lg border border-slate-800 bg-slate-900/70 p-1">
                        <button
                            className={[
                                "px-4 py-2 text-sm rounded-md transition-colors",
                                submittedExam
                                    ? "bg-indigo-600 text-white"
                                    : "text-slate-300 hover:bg-slate-800",
                            ].join(" ")}
                            onClick={() => setSubmittedExam(true)}
                        >
                            Assigned Exam
                        </button>
                        <button
                            className={[
                                "px-4 py-2 text-sm rounded-md transition-colors",
                                !submittedExam
                                    ? "bg-indigo-600 text-white"
                                    : "text-slate-300 hover:bg-slate-800",
                            ].join(" ")}
                            onClick={() => setSubmittedExam(false)}
                        >
                            Submitted Exam
                        </button>
                    </div>
                </div>

                <div className="relative overflow-x-auto shadow-md rounded-xl ring-1 ring-slate-800 bg-slate-900/70 backdrop-blur-sm">
                    {!submittedExam ? (
                        <table className="w-full text-sm text-left text-slate-300">
                            <thead className="text-xs uppercase sticky top-0 z-10 bg-slate-900/90 backdrop-blur border-b border-slate-800 text-slate-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Name</th>
                                    <th scope="col" className="px-6 py-3">Email</th>
                                    <th scope="col" className="px-6 py-3">Category</th>
                                    <th scope="col" className="px-6 py-3">Marks</th>
                                    <th scope="col" className="px-6 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, idx) => (
                                    <tr
                                        key={idx}
                                        className={[
                                            "border-b border-slate-800",
                                            idx % 2 === 0 ? "bg-slate-900/50" : "bg-slate-900/70",
                                            "hover:bg-slate-800/70 transition-colors",
                                        ].join(" ")}
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-slate-100 whitespace-nowrap"
                                        >
                                            {user.name}
                                        </th>
                                        <td className="px-6 py-4">{user.email}</td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-800/80 border border-slate-700 px-2.5 py-0.5 text-xs text-slate-200">
                                                {user.examName}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 px-2.5 py-0.5 text-xs">
                                                {user.marks}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex gap-2">
                                                <button
                                                    className="inline-flex items-center gap-2 rounded-lg bg-rose-600/90 px-3 py-1.5 text-white text-xs font-medium shadow-sm hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors"
                                                    onClick={() => handleDelete(user.id)}
                                                >
                                                    Delete
                                                </button>
                                                <button
                                                    className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-slate-200 text-xs hover:bg-slate-700 transition-colors"
                                                >
                                                    kuch or
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {users.length === 0 && (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-6 text-center text-slate-400">
                                            No submitted exams found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    ) : (
                        <table className="w-full text-sm text-left text-slate-300">
                            <thead className="text-xs uppercase sticky top-0 z-10 bg-slate-900/90 backdrop-blur border-b border-slate-800 text-slate-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">No</th>
                                    <th scope="col" className="px-6 py-3">Exam Title</th>
                                    <th scope="col" className="px-6 py-3">Exam Category</th>
                                    <th scope="col" className="px-6 py-3">Total Questions</th>
                                    <th scope="col" className="px-6 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allExams.map((exam, idx) => (
                                    <tr
                                        key={idx}
                                        className={[
                                            "border-b border-slate-800",
                                            idx % 2 === 0 ? "bg-slate-900/50" : "bg-slate-900/70",
                                            "hover:bg-slate-800/70 transition-colors",
                                        ].join(" ")}
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-slate-100 whitespace-nowrap"
                                        >
                                            {idx + 1}
                                        </th>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 px-2.5 py-0.5 text-xs">
                                                {exam.id}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">{exam.title}</td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-800/80 border border-slate-700 px-2.5 py-0.5 text-xs text-slate-200">
                                                {exam.questions.length}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex gap-2">
                                                <button
                                                    className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-slate-200 text-xs hover:bg-slate-700 transition-colors"
                                                    onClick={() => handleDeleteExam(exam.id)}
                                                >
                                                    Delete
                                                </button>
                                                <button
                                                    className="inline-flex items-center gap-2 rounded-lg bg-indigo-600/90 px-3 py-1.5 text-white text-xs font-medium shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors"
                                                >
                                                    kuch or
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {allExams.length === 0 && (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-6 text-center text-slate-400">
                                            No exams available.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
