module.exports = {
    preset: 'jest-expo',
    setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
    transformIgnorePatterns: [
      'node_modules/(?!(react-native|@react-native|@react-navigation|@ui-kitten|@eva-design|@babel|react-navigation|react-navigation-stack)/)',
    ],
    testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
    cacheDirectory: '.jest/cache',
    watchPlugins: [
      'jest-watch-typeahead/filename',
      'jest-watch-typeahead/testname',
    ],
  };

