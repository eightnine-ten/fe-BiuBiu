module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
  },
  'extends': [
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
    "test": 'readonly',
    "expect": 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
  },
  'rules': {
    "no-console": 0,
    "semi": ["error", "never"],
    "import/prefer-default-export": 0,
    "no-unused-vars": 0,
    "valid-jsdoc": 0,
    "object-curly-spacing": ["error", "always"],
    "space-infix-ops": ["error", {"int32Hint": false}] ,
    "require-jsdoc":0,
    "max-len":0
  },
};
