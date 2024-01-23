import type { Plugin, Options as PrettierOptions } from 'prettier'

export type AwaitAble<T> = T | Promise<T>

export type Plugins = Array<string | Plugin>

export interface AdditionalOptions {
  /**
   * Sort the keys of a package.json
   * @default false
   */
  sortPackageJson?: boolean
  /**
   * Make sure that your import statements stay consistent no matter who writes them and what their preferences are
   *
   * @see https://www.npmjs.com/package/prettier-plugin-organize-imports
   * @default false
   */
  organizeImports?: boolean
}

export interface RequiredOptions extends PrettierOptions, AdditionalOptions {}

export interface OverrideOptions {
  files: string | string[]
  excludeFiles?: string | string[]
  options?: RequiredOptions
}

export interface Options extends RequiredOptions {
  overrides?: OverrideOptions
}

export interface PrettierConfigs extends Options {}
