import { createSlice } from "@reduxjs/toolkit";
let data = JSON.parse(localStorage.getItem("users")) || []
let questionsData = JSON.parse(localStorage.getItem("allQuestions")) || []

const examSlice = createSlice({
  name: "exam",
  initialState: {
    exams: data,
    allQuestions: questionsData
  },
  reducers: {
    addUserInfo: (state, action) => {
      state.exams.push(action.payload)
      localStorage.setItem("users", JSON.stringify(state.exams))

    },
    addScore: (state, action) => {
      const { id, marks, examId, time } = action.payload;
      let user = state.exams.find((u) => {
        return u.id == id;
      })
      user.marks = marks;
      user.isSubmitted = true;
      user.examName = examId;
      user.timeTaken = time
      localStorage.setItem("users", JSON.stringify(state.exams))
    },
    clearUser: (state) => {
      state.exams = state.exams.filter((u) => {
        return u.isSubmitted
      })
      localStorage.setItem("users", JSON.stringify(state.exams))

    },
    deleteUser: (state, action) => {
      state.exams = state.exams.filter((item) => {
        return item.id !== action.payload;
      })
      localStorage.setItem("users", JSON.stringify(state.exams))
    },
    assignExam: (state, action) => {
      let idx = state.allQuestions.findIndex((item) => {
        return item.id == action.payload.id
      })
      if (idx == -1) {
        let { id, title, questions } = action.payload
        state.allQuestions.push({ id, title, questions })
        localStorage.setItem("allQuestions", JSON.stringify(state.allQuestions))
      }
    },
    addQuestion: () => {

    },

    deleteExam: (state, action) => {
      state.allQuestions = state.allQuestions.filter((item) => {
        return item.id !== action.payload;
      })
      localStorage.setItem("allQuestions", JSON.stringify(state.allQuestions))
    }

  },
});

export const { addUserInfo, addScore, clearUser, deleteUser, assignExam, deleteExam } = examSlice.actions;
export default examSlice.reducer;
