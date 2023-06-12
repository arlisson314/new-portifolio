export default {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
  transformIgnorePatterns: [
    '/new-portifolio/src/images/curriculo\\.pdf$',
  ],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/.jest/mocks/fileMock.js',
    '\\.(css|less|sass|scss|pdf)$': 'identity-obj-proxy',
  },
};
