import stylelint from 'stylelint';

const { report, ruleMessages } = stylelint.utils;

const ruleName = 'sunlight/at-rule-namespace';

const messages = ruleMessages(ruleName, {
  rejected: (selector) => {
    return `No namespace specified (@use ... as ...) ${selector}`;
  },
});

/** @type {import('stylelint').Rule} */
function ruleFunction() {
  return (root, result) => {
    root.walkAtRules('use', (atRule) => {
      if (atRule.params.includes(' as ')) {
        return;
      }

      report({
        result,
        ruleName,
        message: messages.rejected(atRule.params),
        word: atRule.name,
        node: atRule,
      });
    });
  };
};

ruleFunction.ruleName = ruleName;
ruleFunction.messages = messages;

export default ruleFunction;
