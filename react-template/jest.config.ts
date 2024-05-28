import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    html: '<html lang="zh-cmn-Hant"></html>',
    url: "https://jestjs.io/",
    userAgent: "Agent/007",
  },
  setupFilesAfterEnv: ["./src/setupTests.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    "@fontsource/poppins": "<rootDir>/__mocks__/styleMock.js",
    "@fontsource/mulish*": "<rootDir>/__mocks__/styleMock.js",
  },
  testPathIgnorePatterns: ["versionedComponents/*"],
  moduleDirectories: ["node_modules", "src"],
};

export default config;
