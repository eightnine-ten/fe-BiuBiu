/**
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

  输入: 123
  输出: 321

  输入: -123
  输出: -321

  输入: 120
  输出: 21
 */

/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x)=>{
  let str = x.toString().split('').reverse().join('')
  str = str.charAt(0) === '0' ? str.slice(0) : str
  const number = parseInt(str)
  if (number > 0x7FFFFFFF) {
    return 0
  }
  if ( x < 0) {
    return -number
  }
  return number
}
console.log(reverse((1563847412)))
module.exports = {
  reverse,
}
