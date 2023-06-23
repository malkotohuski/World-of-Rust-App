module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/ignore': ['react-native'],
  },
  rules: {
    'import/no-unresolved': [2, {commonjs: true, amd: true}],
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'prettier/prettier': [2, {endOfLine: 'auto'}],
    'no-continue': 0,
    'no-console': 1,
    'linebreak-style': 0,
    'valid-typeof': 2,
    'no-var': 2,
    'one-var': 0,
    'react-hooks/exhaustive-deps': 0,
    curly: [2, 'multi-or-nest'],
  },
};
