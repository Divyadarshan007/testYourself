import { useNavigate, useParams } from "react-router-dom";
import { questionArray } from "../../data/questionsArray";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addScore, clearUser } from "../../features/exam/examSlice";

const TakeExam = () => {
    const { examId, userId } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [currentIdx, setCurrentIdx] = useState(0)
    const questions = questionArray.filter((question) => {
        return question.id === examId;
    })
  
    
    const [answer, setAnswer] = useState(Array(questions.length).fill(null))

    const handleNext = () => {
        if (currentIdx < questions.length - 1) {
            setCurrentIdx(currentIdx + 1);
        }
    }
    const handlePrev = () => {
        if (currentIdx !== 0) {
            setCurrentIdx(currentIdx - 1)
        }
    }

    const currentQuestion = questions[currentIdx];

    const handleChange = (idx) => {
        let updatedAnswer = [...answer]
        updatedAnswer[currentIdx] = idx;
        setAnswer(updatedAnswer);
    }

    const [time, setTime] = useState(questions.length * 60);

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
        }, 1000)
        
        return()=>clearInterval(timer)
    }, [])

    const handleFinish = () => {
        let marks = 0;
        questions.forEach((q, index) => {
            if (answer[index] == q.correctAnswer) {
                marks++;
            }
        })
        dispatch(addScore({ id: userId, marks, examId }))
        dispatch(clearUser())
        navigate(`/exam/${examId}/result/${userId}`)
    }

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Question {currentIdx + 1} of {questions.length}</h2>
                <span className="text-red-500 font-medium">Time Left: {Math.floor(time / 60)}:{time % 60}</span>
            </div>
            <div>
                <p className="text-lg font-medium mb-4">{currentQuestion.question}</p>
                <div className="space-y-3">
                    {currentQuestion.options.map((opt, index) => (
                        <label key={index} className="block bg-gray-100 p-3 rounded-lg hover:bg-gray-200 cursor-pointer">
                            <input id="opt" checked={answer[currentIdx] === index} onChange={() => handleChange(index)} type="radio" name="option" className="mr-3" />
                            {opt}
                        </label>
                    ))}
                </div>
                <div className="flex items-center gap-4">
                    <button onClick={handlePrev} className="mt-6 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
                        Prev Question
                    </button>
                    {
                        currentIdx == questions.length - 1 ?
                            <button onClick={handleFinish} className="mt-6 bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700">
                                Finish
                            </button> : <button onClick={handleNext} className="mt-6 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
                                Next Question
                            </button>
                    }
                </div>
            </div>
        </div >
    );
};

export default TakeExam;
