require('jest-preset-angular');

module.exports = {
  preset: 'jest-preset-angular',
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
}
