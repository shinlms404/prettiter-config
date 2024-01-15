/** @type {import("prettier").Config} */
const config = {
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  arrowParens: 'avoid',
  endOfLine: 'lf',
  plugins: ['prettier-plugin-packagejson', 'prettier-plugin-organize-imports']
}

export default config
