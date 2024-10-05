import {
  render,
  fireEvent,
  waitFor,
  screen,
} from '@testing-library/react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import QuestionnaireScreen from '.'; // Adjust the path if necessary
import {useQuestionnaireStore} from '../../store/zustand'; // Mock Zustand store
import {questions} from '../../utils/questions'; // Adjust the path if necessary

// Mock Zustand store
jest.mock('../../store/zustand', () => ({
  useQuestionnaireStore: jest.fn(),
}));

beforeEach(() => {
  // Reset the Zustand mock before each test
  useQuestionnaireStore.mockReturnValue({
    answers: {},
    setAnswer: jest.fn(),
    calculateScore: jest.fn(),
  });
});

describe('QuestionnaireScreen', () => {
  it('renders the initial screen with questions', async () => {
    render(
      <NavigationContainer>
        <QuestionnaireScreen />
      </NavigationContainer>,
    );

    // Check that the first question is rendered
    expect(await screen.findByText(questions[0].question)).toBeTruthy();
    expect(await screen.findByText(questions[1].question)).toBeTruthy();
    expect(await screen.findByText(questions[2].question)).toBeTruthy();
  });

  it('loads more questions when "Load More Questions" is pressed', async () => {
    render(
      <NavigationContainer>
        <QuestionnaireScreen />
      </NavigationContainer>,
    );

    // Simulate answering the first batch of questions
    questions.slice(0, 3).forEach(question => {
      fireEvent.press(screen.getByText(question.options[0].text));
    });

    // Press the load more button
    fireEvent.press(screen.getByText('Load More Questions'));

    // Check that the next set of questions is rendered
    expect(await screen.findByText(questions[3].question)).toBeTruthy();
    expect(await screen.findByText(questions[4].question)).toBeTruthy();
  });

  it('selects an answer and updates state correctly', async () => {
    const setAnswerMock = jest.fn();
    useQuestionnaireStore.mockReturnValue({
      answers: {},
      setAnswer: setAnswerMock,
      calculateScore: jest.fn(),
    });

    render(
      <NavigationContainer>
        <QuestionnaireScreen />
      </NavigationContainer>,
    );

    // Simulate answering the first question
    fireEvent.press(screen.getByText(questions[0].options[0].text));

    // Ensure setAnswer is called with the correct parameters
    expect(setAnswerMock).toHaveBeenCalledWith(
      questions[0].id,
      questions[0].options[0].id,
    );
  });

  it('initially disables the Calculate Risk button', async () => {
    render(
      <NavigationContainer>
        <QuestionnaireScreen />
      </NavigationContainer>,
    );

    const calculateButton = screen.getByText('Calculate Risk');
    expect(calculateButton).toBeDisabled(); // Button should be disabled initially
  });
});
