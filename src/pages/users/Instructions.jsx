import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addUserInfo } from "../../features/exam/examSlice";
import { nanoid } from "@reduxjs/toolkit";
import { questionArray } from "../../data/questionsArray";

const Instructions = () => {
  const { examId } = useParams()
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [questionCount, setQuestionCount] = useState(0)
  useEffect(() => {
    questionArray.forEach((q) => {
      if (q.id == examId) {
       const count = questionArray.filter((q)=>q.id === examId).length
       setQuestionCount(count)
      }
    })
  }, [examId])
  const [input, setInput] = useState({
    name: '', email: ''
  })
  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value })
  }

  const handleSubmit = () => {
    if (!input.name || !input.email) {
      alert("Fill all details");
      return
    }
    const userId = nanoid()
    dispatch(addUserInfo({ id: userId, ...input }))
    navigate(`/exam/${examId}/start/${userId}`)
  }


  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">Exam Instructions</h1>
      <div className="space-y-3 mb-4">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          className="border p-2 rounded w-full"
          value={input.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter your Email"
          className="border p-2 rounded w-full"
          value={input.email}
          onChange={handleChange}
        />
      </div>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Total duration: {questionCount} minutes</li>
        <li>Each question has 4 options</li>
        <li>No negative marking</li>
        <li>You cannot go back once you submit</li>
        <li>Ensure a stable internet connection</li>
      </ul>
      <button className="mt-6 bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700" onClick={() => {
        handleSubmit()

      }}>
        Start Exam
      </button>
    </div>
  );
};

export default Instructions;
