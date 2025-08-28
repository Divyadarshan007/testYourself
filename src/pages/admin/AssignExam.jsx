import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { assignExam } from "../../features/exam/examSlice";

const AssignExam = () => {

    const [input, setInput] = useState({
        id: '', title: '',

    })
    const [questions, setQuestions] = useState([{ question: '', options: ['', '', '', ''], correctAnswer: '' }])
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
    }
    const handleQuestions = (idx, value) => {
        let updatedQues = [...questions];
        updatedQues[idx].question = value;
        setQuestions(updatedQues)

    }
    const handleOption = (idx, optIdx, value) => {
        const updatedobj = [...questions];
        updatedobj[idx].options[optIdx] = value;
        setQuestions(updatedobj)
    }
    const handleCorrect = (idx, value) => {
        const updated = [...questions];
        updated[idx].correctAnswer = value;
        setQuestions(updated);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const examData = { ...input, questions }
        dispatch(assignExam(examData))
    }
    const handleAdd = (e) => {
        e.preventDefault();
        setQuestions([...questions, { question: '', options: ['', '', '', ''], correctAnswer: '' }])
    }

    return (
        <form className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold mb-6 text-center">Assign Exam</h2>

            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">ID</label>
                <input
                    onChange={handleChange}
                    value={input.id}
                    type="text"
                    id="id"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Title</label>
                <input
                    onChange={handleChange}
                    value={input.title}
                    type="text"
                    id="title"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex flex-col items-end max-h-[432px] mb-4 border p-5 overflow-y-scroll">
                {
                    questions.map((item, idx) => {
                        return <div key={idx} className="border p-4 mb-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">Question {idx + 1}</label>
                                <input
                                    onChange={(e) => handleQuestions(idx, e.target.value)}
                                    value={item.question}
                                    id="question"
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">Options</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {

                                        item.options.map((option, optIdx) => {
                                            return <input
                                                key={optIdx}
                                                type="text"
                                                onChange={(e) => handleOption(idx, optIdx, e.target.value)}
                                                value={option}
                                                id="options"
                                                placeholder={`Option ${optIdx + 1}`}
                                                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        })


                                    }

                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-medium mb-2">Correct Answer (Index)</label>
                                <input
                                    type="number"
                                    onChange={(e) => handleCorrect(idx, e.target.value)}
                                    value={item.correctAnswer}
                                    id="correctAnswer"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter the correct option number (0-3)"
                                />
                            </div>
                        </div>
                    })
                }
                <button className="cursor-pointer" type="button" onClick={handleAdd}>Add more</button>
            </div>

            <div className="text-center flex justify-center gap-4">
                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                    Assign
                </button>

            </div>
        </form>
    );
};

export default AssignExam;
