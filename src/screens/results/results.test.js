import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {useQuestionnaireStore} from '../../store/zustand';
import ResultsScreen from '.';

jest.mock('@react-navigation/native');
jest.mock('../../store/zustand.ts');

describe('ResultsScreen', () => {
  let mockNavigate;

  beforeEach(() => {
    mockNavigate = jest.fn();
    useNavigation.mockReturnValue({navigate: mockNavigate});

    useQuestionnaireStore.mockReturnValue({
      totalScore: 75,
      riskCategory: 'Medium',
      resetQuestionnaire: jest.fn(),
    });
  });

  it('renders total score and risk category', () => {
    const {getByText} = render(<ResultsScreen />);

    expect(getByText('Total Score: 75')).toBeTruthy();
    expect(getByText('Risk Category: Medium')).toBeTruthy();
  });

  it('renders without crashing', () => {
    render(<ResultsScreen />);
  });

  it('displays the correct total score', () => {
    useQuestionnaireStore.mockReturnValue({
      totalScore: 85,
      riskCategory: 'High Risk',
      resetQuestionnaire: jest.fn(),
    });

    const {getByText} = render(<ResultsScreen />);

    expect(getByText('Total Score: 85')).toBeTruthy();
  });
  it('displays the correct risk category', () => {
    useQuestionnaireStore.mockReturnValue({
      totalScore: 85,
      riskCategory: 'High Risk',
      resetQuestionnaire: jest.fn(),
    });

    const {getByText} = render(<ResultsScreen />);

    expect(getByText('Risk Category: High Risk')).toBeTruthy();
  });
});
