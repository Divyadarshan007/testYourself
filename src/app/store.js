import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/userSlice";
import examReducer from "../features/exam/examSlice";
import questionReducer from "../features/exam/questionSlice";

const store = configureStore({
    reducer: {
        users: usersReducer,
        exam: examReducer,
        question:questionReducer
    }
})

export default store