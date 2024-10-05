
# Risk Profile Questionnaire Mobile App

## Description

This mobile application is designed to assist users in determining their risk profile while opening a bank account. By guiding users through a series of questions related to their investment preferences, the app calculates a risk profile score and categorizes the user as Low, Medium, or High risk. 

The app ensures an intuitive user experience with a clean, user-friendly interface and uses **Zustand** for state management. It also ensures high code quality with **at least 80% code coverage** through unit testing.

---

## Features

- **Interactive Questionnaire**: Guides users through a series of questions about investment preferences.
- **Score Calculation**: Automatically calculates a risk profile score based on user responses.
- **Risk Category Assignment**: Assigns users a risk category based on their score (Low, Medium, High).
- **Batch Question Loading**: Displays questions in batches to enhance the user experience.
- **State Management**: Uses **Zustand** for managing user answers and questionnaire state.
- **Code Coverage**: Ensures over 80% test coverage for important functionalities.
- **Responsive UI**: Mobile-optimized, user-friendly interface.

---



---

## Installation

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine. You can download it [here](https://nodejs.org/en/).
- **React Native CLI**: For developing and running the React Native application.
- **Zustand**: The state management solution used for this project.
- **Jest/React Native Testing Library**: Used for writing test cases and ensuring high code coverage.

### Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/risk-profile-app.git
   cd risk-profile-app
   ```

2. **Install Dependencies**
   Run the following command to install all required dependencies:
   ```bash
   npm install
   ```

3. **Run the Application**
   To start the app in a simulator or connected device, run:
   ```bash
   npx react-native run-android   # For Android
   npx react-native run-ios       # For iOS
   ```

4. **Run Unit Tests**
   Ensure that the app has at least 80% code coverage:
   ```bash
   npm run test
   ```

---

## How to Use

1. **Start the App**: Upon launching the app, you will be presented with an introductory screen explaining the process.
2. **Questionnaire**: Answer the questions about your investment preferences. Questions will be displayed in batches of 3.
3. **Track Progress**: A progress bar at the top shows how much of the questionnaire is completed.
4. **Submit**: Once all the questions are answered, the "Submit" button will become enabled.
5. **Results**: After submission, the app will display your risk category (Low, Medium, High).

---

## State Management

This app uses **Zustand** for managing state. The store (`useQuestionnaireStore`) is responsible for:
- Managing the user’s answers.
- Calculating the total score.
- Assigning a risk profile based on the score.

---

## File Structure

```
root
│
├── android                       # Android native code
├── ios                           # iOS native code
├── src
│   ├── components                # Reusable components
        ├── file
        ├── styles
│   ├── screens                   # Screen components
        ├── file
        ├── style
│   ├── store                     # Zustand store for state management
│   ├── utils                     # Utility functions
│   └── types                     # TypeScript types and interfaces
├── App.tsx                       # Main app file
├── README.md                     # Project documentation
└── package.json                  # Project dependencies and scripts
```

---

## Technologies Used

- **React Native**: For building cross-platform mobile apps.
- **TypeScript**: For static typing and ensuring code robustness.
- **Zustand**: Lightweight state management library for React.
- **Jest & React Native Testing Library**: For writing unit tests.
- **React Navigation**: For handling navigation between different screens.

---

The coverage report will be generated, ensuring all critical parts of the app are tested.

---

## Code Coverage

We aim to maintain a test coverage of at least **80%**. The tests cover:
- State management logic.
- Rendering of components.
- Progress bar and buttons based on user interaction.

---



