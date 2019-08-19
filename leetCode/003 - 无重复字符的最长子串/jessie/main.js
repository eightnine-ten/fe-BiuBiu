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

const lengthOfLongestSubstring = (s)=>{
  let maxLength = 0
  let mark = 0
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === undefined) {
      map.set(s[i], i)
      maxLength = maxLength > map.size ? maxLength : map.size
    } else {
      map.clear()
      i = mark
      mark += 1
    }
  }
  return maxLength
}

module.exports = {
  lengthOfLongestSubstring,
}
