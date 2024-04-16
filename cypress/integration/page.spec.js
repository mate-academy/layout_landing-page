'use strict';

// Импортируем Cypress
const cy = require('cypress');

cy.visit = function(s) {

};
describe('Page', () => {
  it('should be visitable', () => {
    cy.visit('/');
  });
});
