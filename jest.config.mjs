export default {
      testEnvironment: "node",
      transform: {}, // No need for Babel or TypeScript transforms if using pure ESM
      testMatch: ["<rootDir>/test/**/*.test.mjs"], // Ensure Jest finds your tests
};
