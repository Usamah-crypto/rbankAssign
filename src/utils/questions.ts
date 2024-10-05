import {Question} from '../types';

export const questions: Question[] = [
  {
    id: 1,
    question: 'How would you describe your investment knowledge?',
    options: [
      {id: 1, text: 'Novice', score: 1},
      {id: 2, text: 'Intermediate', score: 3},
      {id: 3, text: 'Advanced', score: 2},
    ],
  },
  {
    id: 2,
    question: 'Investment Duration',
    options: [
      {id: 1, text: 'Short-term (less than 1 year)', score: 2},
      {id: 2, text: 'Medium-term (1-5 years)', score: 3},
      {id: 3, text: 'Long-term (more than 5 years)', score: 1},
    ],
  },
  {
    id: 3,
    question: 'How comfortable are you with taking risks?',
    options: [
      {id: 1, text: 'Very risk-averse', score: 1},
      {id: 2, text: 'Somewhat risk-averse', score: 2},
      {id: 3, text: 'Neutral', score: 3},
      {id: 4, text: 'Somewhat risk-tolerant', score: 4},
      {id: 5, text: 'Very risk-tolerant', score: 2},
    ],
  },
  {
    id: 4,
    question: 'What percentage of your income are you willing to invest?',
    options: [
      {id: 1, text: 'Less than 10%', score: 2},
      {id: 2, text: '10-25%', score: 4},
      {id: 3, text: '25-50%', score: 1},
      {id: 4, text: 'More than 50%', score: 3},
    ],
  },
  {
    id: 5,
    question:
      'How would you react to a sudden drop in the value of your investments?',
    options: [
      {id: 1, text: 'Panic and sell immediately', score: 1},
      {id: 2, text: 'Monitor closely and consider selling', score: 3},
      {id: 3, text: 'Hold and wait for recovery', score: 4},
      {id: 4, text: 'See it as a buying opportunity and invest more', score: 2},
    ],
  },
  {
    id: 6,
    question: 'How often do you review your investment portfolio?',
    options: [
      {id: 1, text: 'Rarely', score: 1},
      {id: 2, text: 'Once a year', score: 4},
      {id: 3, text: 'Every few months', score: 3},
      {id: 4, text: 'Monthly', score: 2},
      {id: 5, text: 'Weekly', score: 2},
    ],
  },
  {
    id: 7,
    question: 'What is your primary investment goal?',
    options: [
      {id: 1, text: 'Preserve capital', score: 1},
      {id: 2, text: 'Generate income', score: 2},
      {id: 3, text: 'Growth', score: 4},
      {id: 4, text: 'Aggressive growth', score: 3},
      {id: 5, text: 'Speculation', score: 2},
    ],
  },
  {
    id: 8,
    question: 'How do you feel about market fluctuations?',
    options: [
      {id: 1, text: 'Very anxious', score: 1},
      {id: 2, text: 'Somewhat anxious', score: 2},
      {id: 3, text: 'Neutral', score: 4},
      {id: 4, text: 'Somewhat comfortable', score: 3},
      {id: 5, text: 'Very comfortable', score: 3},
    ],
  },
  {
    id: 9,
    question: 'Do you have an emergency fund set aside?',
    options: [
      {id: 1, text: 'No, I do not have an emergency fund', score: 1},
      {
        id: 2,
        text: 'Yes, but it covers less than 3 months of expenses',
        score: 2,
      },
      {id: 3, text: 'Yes, it covers 3-6 months of expenses', score: 4},
      {id: 4, text: 'Yes, it covers more than 6 months of expenses', score: 3},
    ],
  },
  {
    id: 10,
    question: 'How would you describe your overall financial literacy?',
    options: [
      {id: 1, text: 'Limited understanding', score: 1},
      {id: 2, text: 'Basic understanding', score: 3},
      {id: 3, text: 'Moderate understanding', score: 2},
      {id: 4, text: 'Good understanding', score: 4},
      {id: 5, text: 'Expert understanding', score: 2},
    ],
  },
];
