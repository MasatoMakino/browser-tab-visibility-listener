/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  collectCoverageFrom: ["src/**/*.ts"],
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/__test__/global.ts"],
};
