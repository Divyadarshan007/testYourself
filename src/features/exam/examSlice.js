import { createSlice } from "@reduxjs/toolkit";
let data = JSON.parse(localStorage.getItem("users")) || []

const examSlice = createSlice({
  name: "exam",
  initialState: {
    exams: data,
  },
  reducers: {
    addUserInfo: (state, action) => {
      state.exams.push(action.payload)
      localStorage.setItem("users", JSON.stringify(state.exams))
    },
    addScore: (state, action) => {
      const { id, marks, examId } = action.payload;

      let user = state.exams.find((u) => {
        return u.id == id;
      })
      user.marks = marks;
      user.isSubmitted = true;
      user.examName = examId;
      localStorage.setItem("users", JSON.stringify(state.exams))
    },
    clearUser: (state) => {
      state.exams = state.exams.filter((u) => {
        return u.isSubmitted
      })
      localStorage.setItem("users", JSON.stringify(state.exams))
      
    },
    deleteUser: (state, action) => {
      state.exams = state.exams.filter((item)=>{
        return item.id !== action.payload;
      })
      localStorage.setItem("users", JSON.stringify(state.exams))
    }
  },
});

export const { addUserInfo, addScore, clearUser, deleteUser } = examSlice.actions;
export default examSlice.reducer;
