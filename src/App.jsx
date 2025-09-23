import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/users/Home"
import Instructions from "./pages/users/Instructions"
import TakeExam from "./pages/users/TakeExam"
import Results from "./pages/users/Results"
import AssignExam from "./pages/admin/AssignExam"
import UserInfo from "./pages/admin/UserInfo"
import Header from "./components/Header"
import Exams from "./pages/users/Exams"
import EditExam from "./pages/admin/EditExam"
import AdminLogin from "./pages/admin/AdminLogin"
import ProtectedRoutes from "./components/ProtectedRoutes"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exam/:examId" element={<Instructions />} />
          <Route path="/exam/:examId/start/:userId" element={<TakeExam />} />
          <Route path="/exam/:examId/result/:userId" element={<Results />} />
          <Route path="/admin" element={<ProtectedRoutes Component={UserInfo} />} />
          <Route path="/assign" element={<ProtectedRoutes Component={AssignExam} />} />
          <Route path="/edit-exam/:examId" element={<ProtectedRoutes Component={EditExam} />} />
          <Route path="/all-exam" element={<Exams />} />
          <Route path="/login" element={<AdminLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App