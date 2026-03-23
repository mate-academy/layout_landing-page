'use strict';

const fs = require('fs');
const path = require('path');

describe('MYBIKE landing', () => {
  let html;

  beforeAll(() => {
    html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');
  });

  it('should be visitable', () => {
    expect(html).toContain('Take the Streets');
    expect(html).toContain('Compare Bikes');
    expect(html).toContain('Contact us');
  });

  it('should have the correct page title', () => {
    expect(html).toMatch(/<title>\s*MYBIKE\s*<\/title>/i);
  });
});
