/**
 * 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,
 * 并返回它的位置, 如果没有则返回-1（需要区分大小写）。
 */

const firstNotRepeatingChar = (str) => {
  if (str.length < 0 || str.length > 1000) {
    return
  }
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return i
    }
  }
  return -1
}
console.log(firstNotRepeatingChar('asdfghjklclkjhgfddeewaaasa'))
