const { defineConfig } = require("cypress");
const testomatioCypress = require("testomatio-cypress/plugin");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: false,
  e2e: {
    baseUrl: "https://automationteststore.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      testomatioCypress(on, config);
      require("@testomatio/reporter/lib/adapter/cypress-plugin")(on, config);
      return config;
    },
  },
  testomatio: {
    apiKey: "tstmt_M3bGQVXJomqq_J3TVLnhpNezDL6MYqzSfA1709726754",
  },
});
