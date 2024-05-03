const { devices } = require('@playwright/test');

module.exports = {
  testMatch: ['**/?(*.)+(spec|test).[jt]s'],
  globalSetup: require.resolve('@playwright/test/jest/global-setup'),
  globalTeardown: require.resolve('@playwright/test/jest/global-teardown'),
  setupFiles: [require.resolve('expect-playwright')],
  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@babel/preset-env'] }],
  },
  testEnvironmentOptions: {
    'jest-playwright': {
      browsers: ['webkit', 'firefox', 'chromium'],
      devices: devices['iPhone 11'],
    },
  },
};
