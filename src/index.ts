import type { Config, Plugin } from 'prettier'

export type { Config, Plugin }

export default function prettierConfigs(): Config {
  const _plugins: (string | Plugin<any>)[] = [
    'prettier-plugin-packagejson',
    'prettier-plugin-organize-imports'
  ]

  //to-do
  //ignore

  return {
    tabWidth: 2,
    useTabs: false,
    semi: false,
    singleQuote: true,
    trailingComma: 'none',
    arrowParens: 'avoid',
    endOfLine: 'lf',
    plugins: _plugins
    // ignorePath: '.prettierignore'
  }
}
