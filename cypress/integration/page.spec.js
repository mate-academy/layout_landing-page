'use strict';

const fs = require('fs');
const path = require('path');

describe('Landing page', () => {
  it('should include the main hero content and contact form', () => {
    const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');

    expect(html).toContain('Elevate your everyday journey');
    expect(html).toContain('About');
    expect(html).toContain('Name');
    expect(html).toContain('onsubmit="this.reset(); return false;"');
  });
});
