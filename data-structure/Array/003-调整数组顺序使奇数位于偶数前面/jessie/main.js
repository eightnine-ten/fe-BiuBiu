/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
 * 使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分
 */

const orderArray = (arr) => {
  const evenArr = []
  const oddArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i])
    } else {
      oddArr.push(arr[i])
    }
  }
  return evenArr.concat(oddArr)
}

console.log(orderArray([2, 5, 7, 8, 9, 23, 22]))
