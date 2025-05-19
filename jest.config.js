module.exports = {
  projects: [
    {
      displayName: "duco-server",
      preset: "ts-jest/presets/js-with-ts",
      testEnvironment: "node",
      roots: ["<rootDir>/duco-server/src"],
      setupFiles: ["<rootDir>/duco-server/jest.setup.js"],
    },
    {
      displayName: "duco-server system",
      preset: "ts-jest/presets/js-with-ts",
      testEnvironment: "node",
      roots: ["<rootDir>/duco-server/test"],
      globalSetup: "<rootDir>/duco-server/test/test-setup.js",
    },
  ],
};
