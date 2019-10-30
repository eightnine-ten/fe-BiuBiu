/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const obj = {}
let i = 0
let j = 0

const uniquePaths = function(m, n) {
  i++
  const num = obj[`${m},${n}`]
  if (typeof num !== 'undefined') {
    j++
    return num
  }
  if (m === 2 && n === 2) { // 边界: 两行两列
    obj[`${m},${n}`] = 2
    return 2
  } else if (m === 1 || n === 1) { // 边界： 一行或者一列
    obj[`${m},${n}`] = 1
    return 1
  }
  const result = uniquePaths(m, n - 1) + uniquePaths(m - 1, n)
  obj[`${m},${n}`] = result
  return result
}
console.time('s')
console.log(uniquePaths(20, 10))
console.timeEnd('s')

console.log('JSLog: i(总共递归次数)', i)
console.log('JSLog: j(节省了多少次)', j)
