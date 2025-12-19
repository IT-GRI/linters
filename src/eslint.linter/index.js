import antfu from '@antfu/eslint-config';
import storybook from 'eslint-plugin-storybook';

/**
 *
 * @param {import('@antfu/eslint-config').TypedFlatConfigItem[]} userConfigs
 * @constructor
 */
export function GRIESLint(...userConfigs) {
  return antfu({
    vue: true,
    typescript: true,
    stylistic: {
      indent: 2,
    },
  }, storybook.configs['flat/recommended'], {
    rules: {
      'style/semi': ['error', 'always'],
      'style/brace-style': ['error', '1tbs'],
      'no-undef': ['error'],
      'no-irregular-whitespace': ['off'],
      'vue/attributes-order': ['error', {
        order: [
          'GLOBAL',
          'DEFINITION',
          'CONDITIONALS',
          'LIST_RENDERING',
          'UNIQUE',
          'RENDER_MODIFIERS',
          'SLOT',
          'OTHER_DIRECTIVES',
          'TWO_WAY_BINDING',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
        alphabetical: true,
        sortLineLength: false,
      }],
      'vue/first-attribute-linebreak': ['error'],
      'vue/order-in-components': ['error'],
      'vue/block-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
      'vue/custom-event-name-casing': ['error', 'kebab-case'],
      'vue/v-bind-style': ['error', 'longform'],
      'vue/v-on-style': ['error', 'longform'],
      'vue/v-slot-style': ['error', 'longform'],
      'vue/singleline-html-element-content-newline': ['error'],
      'vue/multiline-html-element-content-newline': ['error'],
      'vue/no-required-prop-with-default': ['error'],
      'vue/v-on-handler-style': ['error', ['method', 'inline']],
      'vue/prefer-separate-static-class': ['error'],
      'vue/no-duplicate-class-names': ['error'],
      'vue/attribute-hyphenation': ['error'],
      'vue/html-self-closing': ['error'],
      'vue/define-macros-order': ['error', {
        order: ['defineOptions', 'defineModel', 'defineProps', 'defineEmits', 'defineSlots'],
        defineExposeLast: true,
      }],
      'vue/define-emits-declaration': ['error', 'type-based'],
      'vue/define-props-declaration': ['error', 'type-based'],
      'vue/define-props-destructuring': ['error', {
        destructure: 'never',
      }],
      'vue/html-button-has-type': ['error'],
      'vue/no-import-compiler-macros': ['error'],
      'vue/no-multiple-objects-in-class': ['error'],
      'vue/no-negated-v-if-condition': ['error'],
      'vue/no-ref-object-reactivity-loss': ['error'],
      'vue/no-static-inline-styles': ['error'],
      'vue/no-undef-properties': ['error'],
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: 1,
          multiline: 1,
        },
      ],
      'vue/html-closing-bracket-newline': ['error'],
      'vue/require-explicit-emits': ['error'],
      'vue/no-unused-emit-declarations': ['error'],
      'vue/no-useless-mustaches': ['error'],
      'vue/prefer-true-attribute-shorthand': ['error'],
      'vue/prefer-use-template-ref': ['error'],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'function', next: '*' },
        { blankLine: 'always', prev: ['const', 'let'], next: '*' },
        { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
        { blankLine: 'always', prev: '*', next: 'return' },
      ],
      'test/no-identical-title': 'error',
      'test/no-disabled-tests': 'error',
      'test/no-focused-tests': 'error',
      'test/prefer-to-have-length': 'error',
      'test/valid-expect': 'error',
    },
  }, ...userConfigs);
};
