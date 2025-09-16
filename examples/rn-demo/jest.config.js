export default {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community)',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
};
