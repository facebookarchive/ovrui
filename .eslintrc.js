module.exports = {
  extends: [
    'fbjs',
    'prettier'
  ],

  plugins: [
    "prettier",
  ],

  rules: {
    'consistent-return': 'off',
    'key-spacing': ['warn', {beforeColon: false, afterColon: true}],
    'no-bitwise': 'off',
    'no-var': 'warn',
    'object-curly-spacing': ['warn', 'never'],
    'space-in-parens': 'warn',

    // Prettier
    "prettier/prettier": [
      "error",
      {
        "bracketSpacing": false,
        "jsxBracketSameLine": true,
        "singleQuote": true,
        "trailingComma": "es5",
        "printWidth": 100,
      }
    ]
  },
  globals: {
    'msLaunchUri': true,
    'VRFrameData': true,
  }
}
