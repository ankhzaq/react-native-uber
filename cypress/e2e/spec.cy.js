/// <reference types="cypress" />

it('works', () => {
  cy.visit('/')

  // logo
  cy.get('*[class^="css-accessibilityImage-9pa8cd"]')

  // two fix sites
  cy.contains('Home').should('be.visible')
  cy.contains('Work').should('be.visible')
});
