const { lengthOfLongestSubstring } = require('./main')

describe('lengthOfLongestSubstring', () => {
  test('abcabcbb => 3', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
  })

  test('bbbbb => 1', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
  })

  test('pwwkew => 3', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
  })
})