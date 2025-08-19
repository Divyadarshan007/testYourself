// src/redux/slices/questionSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { questionArray } from '../../data/questionsArray';


const questionSlice = createSlice({
    name: 'question',
    initialState:{
        question: questionArray,
    },
    reducers: {
      
    
      
     
}});

export const {
    loadQuestions,
    selectAnswer,
    nextQuestion,
    prevQuestion,
    submitExam,
    resetExam
} = questionSlice.actions;

export default questionSlice.reducer;
