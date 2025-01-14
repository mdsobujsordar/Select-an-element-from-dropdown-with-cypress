const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require("cypress-mochawesome-reporter/lib");
const { Client } = require("pg");
const { runPythonScript } = require("./cypress/plugin/google-sheet.plugin");
const installLogsPrinter = require("cypress-terminal-report/src/installLogsPrinter");

module.exports = defineConfig({
  viewportWidth: 1000,
  viewportHeight: 660,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    html: true,
    overwrite: true,
    json: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // Cypress Mochawesome Reporter Plugin
      require("cypress-mochawesome-reporter/plugin")(on);

      // Cypress Terminal Report Plugin
      installLogsPrinter(on);

      // Before and After Hooks for the Reporter
      on("before:run", async (details) => {
        console.log("override before:run");
        await beforeRunHook(details);
      });

      on("after:run", async () => {
        console.log("override after:run");
        await afterRunHook();
      });

      // Custom Tasks
      on("task", {
        log(message) {
          console.log(message); // Logs to terminal
          return null;
        },
        stopExecution() {
          return process.kill(process.pid, 'SIGTERM'); // Kills the Cypress runner
        }
      });

      return config; // Return the updated configuration
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    experimentalRunAllSpecs: false,
    testIsolation: false,
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 5,
  },

  chromeWebSecurity: false,
  screenshotOnRunFailure: true,
  video: false,
  redirectionLimit: 20,
  pageLoadTimeout: 60000,
  requestTimeout: 5000,
  responseTimeout: 3000,
  execTimeout: 60000,
  defaultCommandTimeout: 20000,

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
