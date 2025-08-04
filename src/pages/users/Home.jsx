import { useNavigate } from "react-router-dom";
import { questionArray } from "../../data/questionsArray";

const Home = () => {
  const navigate = useNavigate()
  let htmlCount = 0;
  let cssCount = 0;
  let jsCount = 0;
  questionArray.forEach((q) => {
    if (q.id == 'html') {
      htmlCount++;
    }
    if (q.id == 'css') {
      cssCount++;
    }
    if (q.id == 'js') {
      jsCount++;
    }

  })
  const dummyExams = [
    { id: "html", title: "HTML Basics", totalQ: htmlCount },
    { id: "css", title: "CSS Fundamentals", totalQ: cssCount },
    { id: "js", title: "JavaScript Advanced", totalQ: jsCount },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Available Exams</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyExams.map((exam) => (
          <div key={exam.id} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all">
            <h2 className="text-xl font-semibold">{exam.title}</h2>
            <p className="text-gray-500 mb-4">{exam.totalQ} Questions</p>
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
