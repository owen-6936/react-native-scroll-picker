export default {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['node_modules/(?!(jest-)?react-native|@react-native)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
