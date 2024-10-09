const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    supportFile: false,  // Desactiva el archivo de soporte
    specPattern: 'e2e/**/*.cy.js',
    baseUrl: 'https://example.cypress.io'
  }
})
