const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Your app's test URL
    defaultCommandTimeout: 10000,    // Increase timeouts for network calls
    video: true,                     // Record videos of test runs
    retries: {
      runMode: 2, // Retry failed tests in CI
      openMode: 0 // No retries in local dev mode
    },
    setupNodeEvents(on, config) {
      // Add custom event listeners if needed
    }
  },
});
