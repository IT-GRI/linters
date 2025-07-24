import plugin from './stylelint-plugin-sunlight.js';

export const GRIStylelintConfig = {
  plugins: ['stylelint-prettier'],
  ignoreFiles: ['**/node_modules/**', '**/dist/**', '**/coverage/**'],
  rules: {
    'prettier/prettier': true,
    'at-rule-no-unknown': null,
    'function-url-quotes': null,
    'no-descending-specificity': null,
    'no-invalid-position-at-import-rule': null,
    'selector-class-pattern': '^([a-z][a-z0-9]*)((__|_|-|--)[a-z0-9]+)*$',
    'property-no-unknown': [
      true,
      {
        checkPrefixed: true,
        ignoreProperties: ['text-fill-color', 'box-orient'],
      },
    ],
    'property-no-vendor-prefix': null,
    'value-no-vendor-prefix': [
      true,
      {
        ignoreValues: ['box'],
      },
    ],
    'media-feature-range-notation': ['prefix'],
  },
  overrides: [{
    files: '*.scss',
    plugins: [plugin],
    extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
    rules: {
      'scss/at-rule-no-unknown': true,
      'scss/at-use-no-unnamespaced': true,
      'scss/load-partial-extension': 'always',
      'sunlight/at-rule-namespace': true,
    },
  }],
};
