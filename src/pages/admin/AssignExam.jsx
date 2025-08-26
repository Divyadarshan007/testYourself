import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { assignExam } from "../../features/exam/examSlice";

const AssignExam = () => {

    const [input, setInput] = useState({
        id: '', title: '', question: '', options: ['', '', '', ''], correctAnswer: '',

    })
    const [question, setQuestion] = useState([{ question: '', options: ['', '', '', ''], correctAnswer: '' }])
    const [addQuestion, setAddQuestion] = useState([""])
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
    }
    const handleQuestions = () => {
        
    }
    const handleOption = (idx, value) => {
        const updatedobj = [...input.options];
        updatedobj[idx] = value;
        setInput({ ...input, options: updatedobj });
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input);
        dispatch(assignExam(input))
    }
    const handleAdd = () => {
        setAddQuestion([...addQuestion, ""])
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
                    addQuestion.map((item, idx) => {
                        return <div key={idx} className="border p-4 mb-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">Question</label>
                                <input
                                    onChange={handleChange}
                                    value={input.question}
                                    id="question"
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">Options</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {
                                        input.options.map((option, indx) => {
                                            return <input
                                                key={indx}
                                                type="text"
                                                onChange={(e) => handleOption(indx, e.target.value)}
                                                value={option}
                                                id="options"
                                                placeholder="Option 1"
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
                                    onChange={handleChange}
                                    value={input.correctAnswer}
                                    id="correctAnswer"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter the correct option number (1-4)"
                                />
                            </div>
                        </div>
                    })
                }
                <span className="cursor-pointer" onClick={handleAdd}>Add more</span>
            </div>

            <div className="text-center flex justify-center gap-4">
                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                    Assign
                </button>
                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                    add more questions
                </button>
            </div>
        </form>
    );
};

export default AssignExam;
