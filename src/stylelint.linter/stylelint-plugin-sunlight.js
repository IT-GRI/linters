import stylelint from 'stylelint';

import rule1 from './stylelint-rule-at-use-as.js';

export default [
  stylelint.createPlugin(rule1.ruleName, rule1),
];
