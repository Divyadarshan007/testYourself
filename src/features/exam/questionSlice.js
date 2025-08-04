// src/redux/slices/questionSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    questions: [
     

    ],     // All questions of the current exam
    currentIndex: 0,   // To track which question user is on
    answers: [],       // User's selected answers (array of { qid, selectedOption })
    score: 0,          // Final score (after submission)
    status: 'not-started' // 'not-started' | 'in-progress' | 'submitted'
};

const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {
        loadQuestions: (state, action) => {
            state.questions = action.payload;
            state.currentIndex = 0;
            state.answers = [];
            state.score = 0;
            state.status = 'in-progress';
        },
        selectAnswer: (state, action) => {
            const { questionId, selectedOption } = action.payload;
            const existing = state.answers.find(a => a.qid === questionId);
            if (existing) {
                existing.selectedOption = selectedOption;
            } else {
                state.answers.push({ qid: questionId, selectedOption });
            }
        },
        nextQuestion: (state) => {
            if (state.currentIndex < state.questions.length - 1) {
                state.currentIndex += 1;
            }
        },
        prevQuestion: (state) => {
            if (state.currentIndex > 0) {
                state.currentIndex -= 1;
            }
        },
        submitExam: (state) => {
            let score = 0;
            for (let question of state.questions) {
                const userAnswer = state.answers.find(ans => ans.qid === question.id);
                if (userAnswer && userAnswer.selectedOption === question.correctOption) {
                    score += 1;
                }
            }
            state.score = score;
            state.status = 'submitted';
        },
        resetExam: () => initialState
    }
});

export const {
    loadQuestions,
    selectAnswer,
    nextQuestion,
    prevQuestion,
    submitExam,
    resetExam
} = questionSlice.actions;

export default questionSlice.reducer;
