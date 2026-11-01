'use strict';

describe('MyBike landing page', () => {
  it('should open the page successfully', () => {
    cy.visit('/');

    cy.title().should('eq', 'MyBike');

    cy.get('body').should('be.visible');
  });
});
