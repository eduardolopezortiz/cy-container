describe('Mi Primera Prueba en Cypress', () => {
    it('Visita una página y verifica el título', () => {
      cy.visit('https://example.cypress.io')
      cy.title().should('include', 'Cypress');
      cy.wait(1000);
    })
  })