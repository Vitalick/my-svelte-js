module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    extraFileExtensions: ['.svelte'],
  },
  plugins: ['import', 'svelte3'],
  extends: [
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    // 'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
    //        {
    //            "files": ["*.svelte"],
    //            "processor": "svelte3/ignore-styles"
    //        }
  ],
  settings: {
    'svelte3/ignore-styles': () => true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
        semi: false,
        quoteProps: 'as-needed',
        jsxSingleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        arrowParens: 'always',
        proseWrap: 'never',
        htmlWhitespaceSensitivity: 'css',
        endOfLine: 'lf',
        embeddedLanguageFormatting: 'auto',

        plugins: ['prettier-plugin-svelte'],
        svelteStrictMode: true,
        svelteAllowShorthand: true,
        svelteBracketNewLine: true,
        svelteIndentScriptAndStyle: true,
      },
    ],
  },
}
