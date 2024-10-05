export interface QuestionnaireState {
  answers: Record<string, number>;
  totalScore: number;
  riskCategory: string;
  setAnswer: (questionId: number, optionScore: number) => void;
  calculateScore: () => void;
  resetQuestionnaire: () => void;
}

export interface Option {
  id: number;
  text: string;
  score: number;
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
}

export type RootStackParamList = {
  Questionnaire: undefined;
  Results: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export interface ResultsScreenProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

export interface PrimaryButtonProps {
  isButtonDisabled: boolean;
  handleCalculateScore: () => void;
}

export interface SecondaryButtonProps {
  loadMoreQuestions: () => void;
}
