import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
require('sucrase/register')
/** @type {typeof import('./src/index.ts')} */
const { prettierConfigs } = require('./src/index.ts')

export default prettierConfigs()
