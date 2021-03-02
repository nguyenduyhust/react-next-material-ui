module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  setupFilesAfterEnv: ['<rootDir>/jest/jest.setup.js'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!src/(types|enums)/**',
    '!src/redux/(with-redux|type-redux).ts',
    '!src/views/(_app|_document).tsx',
    '!src/i18n/**',
  ],
  moduleNameMapper: {
    '~(.*)': '<rootDir>/src/$1',
    '@(views|i18n|styles|redux|helpers|enums|services|hooks)(.*)': '<rootDir>/src/$1/$2',
  },
};
