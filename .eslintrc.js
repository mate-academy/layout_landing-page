module.exports = {
  extends: '@mate-academy/eslint-config',
  overrides: [
    {
      files: ['*.html'],
      parser: 'html',
      plugins: ['html'],
      env: {
        browser: true,
      },
    },
  ],
};
