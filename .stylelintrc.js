module.exports = {
  extends: "@mate-academy/stylelint-config",
  plugins: [
    "stylelint-scss"
  ],
  rules: {
    "at-rule-empty-line-before": null,
    "rule-empty-line-before": null,
    "scss/operator-no-unspaced": [true, {
      "ignore": ["/"]
    }]
  }
};
