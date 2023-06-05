const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'integration/**/*.cy.js',
    appUrl: 'http://localhost:3000',
  },
});
