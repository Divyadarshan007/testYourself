import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/users/Home"
import Instructions from "./pages/users/Instructions"
import TakeExam from "./pages/users/TakeExam"
import Results from "./pages/users/Results"
import UserList from "./pages/admin/userList"
import AssignExam from "./pages/admin/AssignExam"

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exam/:examId" element={<Instructions />} />
          <Route path="/exam/:examId/start/:userId" element={<TakeExam />} />
          <Route path="/exam/:examId/result/:userId" element={<Results />} />
          <Route path="/admin" element={<UserList/>} />
          <Route path="/assign" element={<AssignExam/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App