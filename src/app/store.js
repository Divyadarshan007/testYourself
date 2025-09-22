import { configureStore } from "@reduxjs/toolkit";
import examReducer from "../features/exam/examSlice";


const store = configureStore({
    reducer: {
        exam: examReducer,
        
    }
})

export default store