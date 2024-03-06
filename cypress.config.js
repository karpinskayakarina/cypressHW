module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("@testomatio/reporter/lib/adapter/cypress-plugin")(on, config);
    },
  },
};
