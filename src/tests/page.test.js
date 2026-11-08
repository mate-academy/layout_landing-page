/* eslint-env jest */
/**
 * @jest-environment jsdom
 */

'use strict';

const nodeUtils = require('util');

global.TextEncoder = nodeUtils.TextEncoder;
global.TextDecoder = nodeUtils.TextDecoder;

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const pageHtml = fs.readFileSync(
  path.join(__dirname, '..', '..', 'index.html'),
  'utf-8',
);
const dom = new JSDOM(pageHtml);
const doc = dom.window.document;

const queryAll = (selector) => Array.from(doc.querySelectorAll(selector));
const query = (selector) => doc.querySelector(selector);

describe('index.html static checks', () => {
  it('should have the landing name as the page title', () => {
    expect(doc.title).toBe('MyBiKE');
  });

  it('should use the logo as a favicon', () => {
    const favicon = query('link[rel="icon"]');

    expect(favicon).not.toBeNull();
    expect(favicon.getAttribute('href')).toMatch(/\.svg$/);
  });

  it('should render the hero with the main headline', () => {
    expect(query('.header')).not.toBeNull();

    expect(query('.header__title').textContent.trim()).toBe(
      'Take the Streets',
    );
  });

  it('should link every logo to the top of the page', () => {
    const logos = queryAll('.top-bar__logo-link');

    expect(logos.length).toBe(2);

    logos.forEach((logo) => {
      expect(logo.getAttribute('href')).toBe('#top');
    });
  });

  it('should render all content sections with ids used by nav', () => {
    const sectionIds = ['move-free', 'compare-bikes', 'details', 'contact-us'];

    sectionIds.forEach((id) => {
      expect(doc.getElementById(id)).not.toBeNull();
    });
    expect(query('footer.footer')).not.toBeNull();
  });

  it('should have nav links pointing to existing anchors', () => {
    const links = queryAll('.nav__link');

    expect(links.length).toBe(5);

    links.forEach((link) => {
      const id = link.getAttribute('href').slice(1);

      expect(doc.getElementById(id)).not.toBeNull();
    });
  });

  it('should use real tel: links for the phone icon and numbers', () => {
    const telLinks = queryAll('a[href^="tel:"]');

    expect(telLinks.length).toBeGreaterThanOrEqual(3);
    expect(query('.icon--phone').getAttribute('href')).toMatch(/^tel:/);
    expect(query('.menu__phone-number').getAttribute('href')).toMatch(/^tel:/);
  });

  it('should use a mailto: link for the email', () => {
    expect(query('.contact-us__value[href^="mailto:"]')).not.toBeNull();
  });

  it('should open the address in Google Maps in a new tab safely', () => {
    const mapsLink = query('a[href^="https://www.google.com/maps"]');

    expect(mapsLink).not.toBeNull();
    expect(mapsLink.getAttribute('target')).toBe('_blank');
    expect(mapsLink.getAttribute('rel')).toContain('noopener');
  });

  it('should provide alt text for every image', () => {
    const images = queryAll('img');

    expect(images.length).toBe(11);

    images.forEach((img) => {
      expect(img.hasAttribute('alt')).toBe(true);
    });
  });

  it('should point every local asset to an existing file', () => {
    const refs = [
      ...queryAll('img[src]').map((el) => el.getAttribute('src')),
      ...queryAll('link[href]:not([href^="http"])').map((el) =>
        el.getAttribute('href')),
    ];

    refs.forEach((ref) => {
      const clean = ref.replace(/^\.?\//, '');

      expect(fs.existsSync(path.join(__dirname, '..', '..', clean))).toBe(true);
    });
  });

  it('should make all form fields required with correct types', () => {
    const name = query('input[name="name"]');
    const email = query('input[name="email"]');
    const message = query('textarea[name="message"]');

    expect(name.getAttribute('type')).toBe('text');
    expect(name.hasAttribute('required')).toBe(true);
    expect(email.getAttribute('type')).toBe('email');
    expect(email.hasAttribute('required')).toBe(true);
    expect(message.hasAttribute('required')).toBe(true);
  });

  it('should use example placeholders', () => {
    expect(query('input[name="name"]').getAttribute('placeholder')).toMatch(
      /e\.g\./,
    );

    expect(query('input[name="email"]').getAttribute('placeholder')).toMatch(
      /e\.g\./,
    );

    expect(query('textarea[name="message"]').getAttribute('placeholder')).not
      .toBe('');
  });

  it('should reset the form without reloading on submit', () => {
    const form = query('.contact-us__form');

    expect(form.getAttribute('onsubmit')).toContain('this.reset()');
    expect(form.getAttribute('onsubmit')).toContain('return false');
  });

  it('should show three bike products and three detail blocks', () => {
    expect(queryAll('.product')).toHaveLength(3);
    expect(queryAll('.product__price')).toHaveLength(3);
    expect(queryAll('.detail')).toHaveLength(3);
    expect(queryAll('.detail__photo')).toHaveLength(6);
  });

  it('should wrap every product photo in a link for hover effects', () => {
    const photoLinks = queryAll('.product__link');

    expect(photoLinks).toHaveLength(3);

    photoLinks.forEach((link) => {
      expect(link.querySelector('.product__photo')).not.toBeNull();
      expect(link.getAttribute('href')).toBe('#');
    });
  });
});
