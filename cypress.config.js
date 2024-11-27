const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    baseUrl: baseUrl: "https://QuantumCoder228.github.io/layout_landing-page/src",
    setupNodeEvents(on, config) {
      // implement node event listeners if needed
    },
  },
});
