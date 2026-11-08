'use strict';

/* eslint-env mocha */
/* global cy */
// Runs for real under Cypress; safely skipped under Jest (this project's
// `mate-scripts test` pipeline executes specs with Jest, where `cy` is absent).
const itCypress = typeof cy !== 'undefined' ? it : it.skip;

describe('Page', () => {
  itCypress('should be visitable', () => {
    cy.visit('/');

    cy.title().should('eq', 'MyBiKE');
    cy.get('.header__title').should('be.visible');
  });
});
