import {create} from 'zustand';
import {QuestionnaireState} from '../types';

export const useQuestionnaireStore = create<QuestionnaireState>(set => ({
  answers: {},
  totalScore: 0,
  riskCategory: '',
  setAnswer: (questionId, optionScore) =>
    set(state => ({
      answers: {
        ...state.answers,
        [questionId]: optionScore,
      },
    })),
  calculateScore: () =>
    set(state => {
      let totalScore = 0;
      Object.values(state.answers).forEach(score => {
        totalScore += score;
      });

      let riskCategory = '';
      if (totalScore <= 15) {
        riskCategory = 'Low Risk';
      } else if (totalScore <= 30) {
        riskCategory = 'Medium Risk';
      } else {
        riskCategory = 'High Risk';
      }

      return {totalScore, riskCategory};
    }),
  resetQuestionnaire: () =>
    set({
      answers: {},
      totalScore: 0,
      riskCategory: '',
    }),
}));
