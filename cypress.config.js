const { defineConfig } = require("cypress")
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({

  // reporter Mochawesome
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: false,
    json: true
  },
  // plugin allure
  env: {
  allure: true,
  allureResultsPath: 'allure-results',
  allureReuseAfterSpec: true,

  // Environnements
    recette: "https://www.saucedemo.com/",
    integration: "https://www.saucedemo1.com/", 
    preprod: "https://www.saucedemo2.com/", 
    prod: "https://www.saucedemo.com/"
},

  e2e: {
     includeShadowDom: true,
    // Environnement par défaut
   baseUrl: "https://www.saucedemo.com/",
    
   video: true,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",

    setupNodeEvents(on, config) {

      // plugin tags
      const { plugin: cypressGrepPlugin } = require("@cypress/grep/plugin")
      cypressGrepPlugin(config)

      // plugin allure
      allureWriter(on, config);

      return config
    },
  },
})