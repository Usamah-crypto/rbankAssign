import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import QuestionnaireScreen from '.';
import { useQuestionnaireStore } from '../../store/zustand';
import { questions } from '../../utils/questions';

// Mock navigation
const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

// Mock Zustand store
jest.mock('../../store/zustand', () => ({
  useQuestionnaireStore: jest.fn(),
}));

describe('QuestionnaireScreen', () => {
  const setAnswerMock = jest.fn();
  const calculateScoreMock = jest.fn();

  beforeEach(() => {
    useQuestionnaireStore.mockReturnValue({
      answers: {},
      setAnswer: setAnswerMock,
      calculateScore: calculateScoreMock,
    });
  });

  it('renders the first batch of questions', () => {
    const { getByText } = render(<QuestionnaireScreen />);
    // Check that the first few questions are rendered
    questions.slice(0, 3).forEach(question => {
      expect(getByText(question.question)).toBeTruthy();
    });
  });

  it('loads more questions when the "Load More Questions" button is pressed', () => {
    const { getByText, queryByText } = render(<QuestionnaireScreen />);
    // Check that next question is not in the initial batch
    const nextQuestion = questions[3].question;
    expect(queryByText(nextQuestion)).toBeNull();

    // Press the "Load More Questions" button
    fireEvent.press(getByText('Load More Questions'));

    // Check that next question is now rendered
    expect(getByText(nextQuestion)).toBeTruthy();
  });

  it('disables the calculate button when not all questions are answered', () => {
    const { getByTestId } = render(<QuestionnaireScreen />);
    const calculateButton = getByTestId('CalculateRisk');
    expect(calculateButton).toBeDisabled();
  });

  it('enables the calculate button when all questions are answered', () => {
    // Mock all questions being answered
    useQuestionnaireStore.mockReturnValue({
      answers: questions.reduce((acc, question) => {
        acc[question.id] = question.options[0].id; // Assume first option is selected for all questions
        return acc;
      }, {}),
      setAnswer: setAnswerMock,
      calculateScore: calculateScoreMock,
    });

    const { getByTestId } = render(<QuestionnaireScreen />);
    const calculateButton = getByTestId('CalculateRisk');
    expect(calculateButton).not.toBeDisabled();
  });

  it('calls calculateScore and navigates to Results when calculate button is pressed', () => {
    // Mock all questions being answered
    useQuestionnaireStore.mockReturnValue({
      answers: questions.reduce((acc, question) => {
        acc[question.id] = question.options[0].id;
        return acc;
      }, {}),
      setAnswer: setAnswerMock,
      calculateScore: calculateScoreMock,
    });

    const { getByTestId } = render(<QuestionnaireScreen />);
    const calculateButton = getByTestId('CalculateRisk');

    // Press the button
    fireEvent.press(calculateButton);

    expect(calculateScoreMock).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith('Results');
  });

  it('updates the answer when an option is selected', () => {
    const { getByText } = render(<QuestionnaireScreen />);
    const question = questions[0];
    const option = question.options[0];

    fireEvent.press(getByText(option.text));
    expect(setAnswerMock).toHaveBeenCalledWith(question.id, option.id);
  });

  it('handles onValueChange when a checkbox is pressed', () => {
    const mockQuestions = [
      {
        id: 1,
        question: 'How would you describe your investment knowledge?',
        options: [
          { id: 1, text: 'Novice' },
          { id: 2, text: 'Intermediate' },
        ],
      },
    ];

    const { getByText, getByTestId } = render(<QuestionnaireScreen />);

    // Simulate pressing the first option's checkbox
    const optionText = getByText('Novice');
    fireEvent.press(optionText);

    // You should check that setAnswer was called correctly
    expect(setAnswerMock).toHaveBeenCalledWith(1, 1);
  });

  it('renders the questionnaire and allows selecting an option', () => {
    const { getByText, getByTestId } = render(<QuestionnaireScreen />);

    // Check if the first question and its options are rendered
    const firstQuestion = questions[0];
    expect(getByText(firstQuestion.question)).toBeTruthy();

    // Get the first option's checkbox
    const firstOption = firstQuestion.options[0];
    const checkbox = getByTestId(
      `checkbox-${firstQuestion.id}-${firstOption.id}`,
    );

    // Simulate checking the first option
    fireEvent(checkbox, 'onValueChange', true);

    // Ensure setAnswer is called correctly
    expect(setAnswerMock).toHaveBeenCalledWith(
      firstQuestion.id,
      firstOption.id,
    );
  });
});