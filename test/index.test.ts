import { expect, test } from 'vitest'
import { a, b, sum } from '../src'

test('define', async () => {
  expect(sum(a, b)).toBe(3)
})
