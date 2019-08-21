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
  let result = null
  const arr = String(Math.abs(x)).split('')
  result = Number(arr.reverse().join(''))
  result = x > 0 ? result : -result
  //  超 [-Math.pow(2, 31), Math.pow(2, 31) - 1] 判断
  if (result > Math.pow(2, 31) - 1 || result < - Math.pow(2, 31)) {
    result = 0
  }
  return result
}
module.exports = {
  reverse,
}
