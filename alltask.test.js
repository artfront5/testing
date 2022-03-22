const {
  positiveSum,
  opposite,
  removeChar,
  repeatStr
} = require('./alltask')

describe('Sum of positive', () => {
  test('Summary array of elements', () => {
    expect(positiveSum([1, 2])).toBe(3)
    expect(positiveSum([2, 2])).toBe(4)
  })
  test('Sum of fractional numbers', () => {
    expect(positiveSum([0.2, 0.3])).toBeCloseTo(0.5)
  })
})

describe('Num', () => {
  test('num = - num', () => {
    expect(opposite(1)).toBe(-1)
  })
})

describe('Remove', () => {
  test('Remove First and Last Character', () => {
    expect(removeChar('eloquent')).toBe('loquen')
  })
})

describe('String repeat', () => {
  test('Repeat', () => {
    expect(repeatStr(3, "*")).toBe('***')
  })
})
