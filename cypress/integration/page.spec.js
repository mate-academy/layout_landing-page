/// <reference types="cypress" />

describe('Page', () => {
  it('should be visitable', () => {
    cy.visit('/');
    cy.contains('Welcome to Easy Wear').should('be.visible');
  });
});
