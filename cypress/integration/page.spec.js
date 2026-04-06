'use strict';

const fs = require('fs');
const path = require('path');

describe('Page', () => {
  it('should be visitable', () => {
    const pagePath = path.join(__dirname, '..', '..', 'index.html');
    const html = fs.readFileSync(pagePath, 'utf8');

    expect(fs.existsSync(pagePath)).toBe(true);
    expect(html).toContain('<title>MYBIKE</title>');
    expect(html).toContain('Take the Streets');
    expect(html).toContain('Compare Bikes');
    expect(html).toContain('The Details');
    expect(html).toContain('Contact us');
  });
});
