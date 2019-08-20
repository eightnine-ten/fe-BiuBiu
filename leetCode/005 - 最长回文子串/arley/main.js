/**
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

    输入: "babad"
    输出: "bab"
    注意: "aba" 也是一个有效答案。

    示例 2：
    输入: "cbbd"
    输出: "bb"

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/longest-palindromic-substring/
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
  const n = s.length
  if (n <= 1) {
    return s
  }

  const dp = new Array(n).fill(new Array(n).fill(undefined))
  let res = ''
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j ++) {
      if (s.charAt(i) === s.charAt(j) && ( i - j <= 2 || dp[j + 1][i - 1])) {
        dp[j][i] = true
      }
      if (dp[j][i] && (i - j + 1 > res.length)) {
        res = s.substring(j, i + 1)
      }
    }
  }
  return res
}

console.log(longestPalindrome('babad'))

module.exports = {
  longestPalindrome,
}
