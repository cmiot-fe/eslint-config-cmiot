module.exports = {
  root: true,
  extends: [
    'airbnb',
  ],
  parser: 'babel-eslint',
  settings: {
    'import/resolver': 'webpack',
  },
  plugins: [
    'react-hooks',
    'filenames',
  ],
  rules: {
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
    }],
    'no-unused-vars': ['error', {
      args: 'none',
      caughtErrors: 'none',
      ignoreRestSiblings: true,
    }],
    'no-bitwise': ['error', {
      int32Hint: true,
    }],
    'no-throw-literal': 'off',
    'no-underscore-dangle': 'off',
    'global-require': 'off',
    'class-methods-use-this': 'off',
    'max-len': ['warn', 120],
    'lines-between-class-members': 'off',
    'object-curly-newline': 'off',
    'import/no-dynamic-require': 'off',
    'import/extensions': ['error', 'always', {
      js: 'ignorePackages',
      jsx: 'ignorePackages',
    }],
    'react/jsx-filename-extension': ['error', {
      extensions: ['.js', '.jsx'],
    }],
    'react/destructuring-assignment': 'warn',
    'react/no-multi-comp': 'off',
    'react/forbid-prop-types': 'off',
    'react/prop-types': 'off',
    'react/no-array-index-key': 'warn',
    'react/no-did-mount-set-state': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 'off',
    'jsx-a11y/label-has-for': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'filenames/match-regex': ['error', '^[a-z0-9_.-]+$', true],
    'filenames/match-exported': ['error', 'kebab'],
  },
};
