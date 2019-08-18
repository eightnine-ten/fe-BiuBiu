/**
 * 给定一个字符串，请你找出其中不含有重复字符的最长子串的长度。

    示例1:
    输入: "abcabcbb"
    输出: 3
    解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

    示例2:
    输入: "bbbbb"
    输出: 1
    解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

    示例 3:
    输入: "pwwkew"
    输出: 3
    解释: 因为无重复字符的最长子串是"wke"，所以其长度为 3。
    请注意，你的答案必须是 子串 的长度，"pwke"是一个子序列，不是子串。

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  const len = s.length
  const hashMap = new Map()
  let ans = 0
  // i-> 循环次数, start -> 起始位置
  for (let i = 0, start = 0; i < len; i++) {
    // 子串中存在下一个字符
    if (hashMap.has(s[i])) {
      // 字符串的起始位置变为 hashMap.get(s[i]) 所重复的第一个字符的位置
      start = Math.max(hashMap.get(s[i]), start)
    }
    // 子串最大长度: 以前的长度和 (i - j + 1)和现在的子串长作比较
    ans = Math.max(ans, i - start + 1)
    hashMap.set(s[i], i + 1) // 进行窗口滑动
  }
  return ans
}

module.exports = {
  lengthOfLongestSubstring,
}
