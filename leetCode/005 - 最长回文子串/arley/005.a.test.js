const { longestPalindrome } = require('./main')

describe('lengthOfLongestSubstring', () => {
  test('babad => bab', () => {
    expect(longestPalindrome('babad')).toBe('bab')
  })
  test('cbbd => bb', () => {
    expect(longestPalindrome('cbbd')).toBe('bb')
  })
})


