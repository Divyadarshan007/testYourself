import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { questionArray } from "../../data/questionsArray";

const Result = () => {
  const { examId, userId } = useParams()
  const navigate = useNavigate()
  const users = useSelector(state => state.exam.exams)
  const [time, setTime] = useState(0)

  const [marks, setMarks] = useState(0)
  const [questionCount, setQuestionCount] = useState(0)
  useEffect(() => {
    let count = questionArray.find(q => q.id === examId)
    setQuestionCount(count.questions.length);
    let findedUser = users.find((user) => {
      return user.id == userId
    })
    setMarks(findedUser.marks);
    setTime(findedUser.timeTaken)

  }, [userId, examId, users])



  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow">
      <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 Exam Completed!</h1>
      <div className="text-lg mb-6">
        <p><strong>Score:</strong> {marks} / {questionCount}</p>
        <p><strong>Time Taken:</strong> {String(Math.floor(time / 60)).padStart(2, '0')}:{String(Math.floor(time % 60)).padStart(2, '0')}</p>
      </div>
      <div className="flex space-x-4">
        <button onClick={() => navigate('/')} className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Result;
