export default {
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./setupTests.js",
    include: [
      "src/**/*.test.{js,jsx,ts,tsx}",
      "src/**/__tests__/**/*.{js,jsx,ts,tsx}"
    ]
  }
}
