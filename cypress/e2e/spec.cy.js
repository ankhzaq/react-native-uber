/// <reference types="cypress" />

it('first tests - checking favourites and logo', () => {
  cy.visit('/')

  // logo
  cy.get('*[class^="css-accessibilityImage-9pa8cd"]')

  // two fix sites
  cy.contains('Home').should('be.visible')
  cy.contains('Work').should('be.visible')
});

it('options availables', () => {
  cy.visit('/')

  // option map screen
  cy.contains('Get a ride').should('be.visible')

  // option eats screen
  cy.contains('Order food').should('be.visible')
});
