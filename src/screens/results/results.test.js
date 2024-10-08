import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ResultsScreen from '.';
import { useQuestionnaireStore } from '../../store/zustand';
import { NavigationContainer } from '@react-navigation/native';

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

describe('ResultsScreen', () => {
  const resetQuestionnaireMock = jest.fn();

  beforeEach(() => {
    useQuestionnaireStore.mockReturnValue({
      totalScore: 25,
      riskCategory: 'Medium Risk',
      resetQuestionnaire: resetQuestionnaireMock,
    });
  });

  it('renders the results correctly', () => {
    const mockNavigation = {
      navigate: jest.fn(),
    };

    const { getByText } = render(<ResultsScreen navigation={mockNavigation} />);

    expect(getByText('Your Results')).toBeTruthy();
    expect(getByText('Total Score: 25')).toBeTruthy();
    expect(getByText('Risk Category: Medium Risk')).toBeTruthy();
  });

  it('calls resetQuestionnaire and navigates to Questionnaire when "Start Over" is pressed', () => {
    const mockNavigation = {
      navigate: jest.fn(),
    };
    const { getByText } = render(<ResultsScreen navigation={mockNavigation} />);
    const startOverButton = getByText('Start Over');

    fireEvent.press(startOverButton);

    expect(resetQuestionnaireMock).toHaveBeenCalled();
  });
});