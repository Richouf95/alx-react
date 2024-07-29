module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest"
    },
    testEnvironment: "node",
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"]
  };
  