module.exports = {
  env: {
    browser: true,
    es2023: true,
    amd: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['vue', 'prettier', 'simple-import-sort', 'import'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off',
    'no-unused-vars': ['warn'],
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto'
      }
    ],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'vue/max-attributes-per-line': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/component-tags-order': 'off',
    'vue/html-indent': 'off',
    'vue/attributes-order': 'off',
    // sort imported modules inside groups
    'simple-import-sort/imports': 'warn',
    // sort import members
    'simple-import-sort/exports': 'warn',
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/no-default-export': 'off',
    'import/newline-after-import': 'error',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    // enforce kebab-case for component names in templates
    'vue/component-name-in-template-casing': ['warn', 'kebab-case'],
    'import/prefer-default-export': 'off'
  }
};
