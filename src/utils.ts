import type { Options, OverrideOptions, PrettierConfigs } from './types'

export function isArray<T>(value: T | T[]): boolean {
  return Array.isArray(value)
}

export function mergeConfigs(
  baseConfigs: Options,
  overrides?: OverrideOptions
): PrettierConfigs {
  if (overrides) {
    return Object.assign({}, baseConfigs, overrides)
  }
  return baseConfigs
}

export function isObjectEmpty(obj: Record<string, any>): boolean {
  return Object.entries(obj).length === 0
}
