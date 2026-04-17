const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  screenshotsFolder: 'spec/end_to_end_tests/reports/screenshots',
  watchForFileChanges: false,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 60000,
  viewportHeight: 900,
  viewportWidth: 1440,
  e2e: {
    specPattern: 'spec/end_to_end_tests/specs/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
  },
  video: false,
})
