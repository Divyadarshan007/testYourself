import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";


const Home = () => {
  const navigate = useNavigate()
  const [allQuestions, setAllQuestions] = useState([])

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("allQuestions"));
    setAllQuestions(data)
  }, [])

allQuestions.forEach((item)=>{
  console.log(item);
  
})

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Available Exams</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allQuestions.map((exam) => (
          <div key={exam.id} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all">
            <h2 className="text-xl font-semibold">{exam.title}</h2>
            <p className="text-gray-500 mb-4"> {exam.question.length} Questions</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => navigate(`/exam/${exam.id}`)}>
              Start Exam
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
