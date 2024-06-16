/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "node",
  testMatch: ["**/*.test.js"],
  moduleNameMapper: {
    "^@controllers/(.*)$": "<rootDir>/src/controllers/$1",
    "^@routes/(.*)$": "<rootDir>/src/routes/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@middlewares/(.*)$": "<rootDir>/src/middlewares/$1",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
