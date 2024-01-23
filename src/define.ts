import type { Options, Plugins, PrettierConfigs } from './types'
import { isArray, isObjectEmpty, mergeConfigs } from './utils'

export function definePlugins(options: Options): Plugins {
  const plugins = isArray(options.plugins) ? options.plugins : []

  if (plugins === undefined) return []

  if (options.sortPackageJson) {
    plugins.push('prettier-plugin-packagejson')
  }
  if (options.organizeImports) {
    plugins.push('prettier-plugin-organize-imports')
  }

  return plugins
}

export default function definePrettierConfigs(
  options: Options = {}
): PrettierConfigs {
  const { overrides, ...userConfigs } = options

  const baseConfigs: Options = isObjectEmpty(userConfigs)
    ? {
        tabWidth: 2,
        useTabs: false,
        semi: false,
        singleQuote: true,
        trailingComma: 'none',
        arrowParens: 'avoid',
        endOfLine: 'lf',
        sortPackageJson: true,
        organizeImports: true
      }
    : userConfigs

  const plugins = definePlugins(baseConfigs)
  baseConfigs.plugins = plugins

  const merged = mergeConfigs(baseConfigs, overrides)

  return merged
}

export function prettierConfigs(options?: Options): PrettierConfigs {
  return definePrettierConfigs(options)
}
