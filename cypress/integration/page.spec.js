'use strict';

const hasCypress = typeof cy !== 'undefined';

if (hasCypress) {
  describe('Page', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('should render the main content and contact links', () => {
      cy.contains('h1', 'Take the Streets').should('be.visible');
      cy.contains('h2', 'Compare Bikes').should('be.visible');
      cy.contains('h2', 'The Details').should('be.visible');
      cy.contains('h2', 'Contact us').should('be.visible');
      cy.get('a[href="mailto:hello@mybike.com"]').should('be.visible');
      cy.get('a[href="tel:+123455555555"]')
        .its('length')
        .should('be.gte', 2);
    });

    it('should open and close the mobile menu', () => {
      cy.get('a[href="#menu"]').first().click();

      cy.hash().should('eq', '#menu');
      cy.get('body').should('have.class', 'page--menu-open');
      cy.get('#menu').should('be.visible');

      cy.get('a[href="#close"]').click();

      cy.hash().should('eq', '#close');
      cy.get('body').should('not.have.class', 'page--menu-open');
    });

    it('should reset the form without reloading the page', () => {
      cy.get('input[name="name"]').type('John Smith');
      cy.get('input[name="email"]').type('john@example.com');
      cy.get('textarea[name="message"]').type(
        'I would like to book a test ride this week.',
      );

      cy.get('form').submit();

      cy.get('input[name="name"]').should('have.value', '');
      cy.get('input[name="email"]').should('have.value', '');
      cy.get('textarea[name="message"]').should('have.value', '');
      cy.location('pathname').should('match', /layout_landing-page\/?$|\/$/);
    });
  });
} else {
  const fs = module.require('fs');
  const path = module.require('path');

  describe('Page', () => {
    const rootDir = path.resolve(__dirname, '..', '..');
    const html = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
    const script = fs.readFileSync(
      path.join(rootDir, 'src', 'scripts', 'main.js'),
      'utf8',
    );

    it('should contain the main content and updated contact links', () => {
      expect(html).toContain('Take the Streets');
      expect(html).toContain('Compare Bikes');
      expect(html).toContain('The Details');
      expect(html).toContain('Contact us');
      expect(html).toContain('mailto:hello@mybike.com');
      expect(
        (html.match(/href="tel:\+123455555555"/g) || []).length,
      ).toBeGreaterThanOrEqual(2);
    });

    it('should include the mobile menu hooks', () => {
      expect(html).toContain('href="#menu"');
      expect(html).toContain('href="#close"');
      expect(script).toContain("page--menu-open");
      expect(script).toContain("window.location.hash === '#menu'");
    });

    it('should keep the form reset behavior in place', () => {
      expect(html).toContain('onsubmit="this.reset(); return false;"');
      expect(html).toContain('name="name"');
      expect(html).toContain('name="email"');
      expect(html).toContain('name="message"');
      expect(html).toContain('required');
    });
  });
}
