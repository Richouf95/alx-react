module.exports = {
    setupFilesAfterEnv: ["<rootDir>/config/setupTests.js"],
    moduleNameMapper: {
      "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    },
    transform: {
      "\\.js$": "<rootDir>/node_modules/babel-jest",
    },
  };
  