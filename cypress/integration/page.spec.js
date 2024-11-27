const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },
  module.exports = {
    e2e: {
      baseUrl: "https://QuantumCoder228.github.io/layout_landing-page/src", // Deployed URL
    },
  };

});
