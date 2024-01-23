import type { PrettierConfigs, PrettierPlugins } from './types'

export default function definePrettierConfigs(): PrettierConfigs {
  const _plugins: (string | PrettierPlugins<any>)[] = [
    'prettier-plugin-packagejson',
    'prettier-plugin-organize-imports'
  ]

  return {
    tabWidth: 2,
    useTabs: false,
    semi: false,
    singleQuote: true,
    trailingComma: 'none',
    arrowParens: 'avoid',
    endOfLine: 'lf',
    plugins: _plugins
  }
}

export function prettierConfigs(): PrettierConfigs {
  return definePrettierConfigs()
}
