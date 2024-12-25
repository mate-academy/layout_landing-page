module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    browser: true,
  },
  plugins: ['html'],
  overrides: [
    {
      files: ['*.html'],
      parser: 'eslint-plugin-html',
      rules: {
        'html/indent': ['error', 2],
      },
    },
  ],
};
