// jest.config.js
module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./jest-setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|@react-navigation|@react-native-community/checkbox)/)',
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{jsx,tsx}', // Specify the files for coverage
    '!src/**/*.test.{,jsx,tsx}', // Exclude test files from coverage
  ],
  coverageDirectory: 'coverage', // Output directory for coverage reports
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
};
