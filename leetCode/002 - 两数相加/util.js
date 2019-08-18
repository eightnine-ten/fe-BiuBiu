/**
 *
 * @param {Array} ary 数组
 * @param {Number} start 开始位置
 */
function array2list(ary, start = 0) {
  if (start === ary.length) {
    return null
  }

  const node = {
    val: parseInt(ary[start]),
    next: null,
  }

  const rest = array2list(ary, start + 1)
  node.next = rest
  return node
}

/**
 *
 * @param {Object} list 链表
 */
function list2array(list) {
  if (!list) {
    return []
  }
  const result = [list.val]
  const restValues = list2array(list.next)
  return result.concat(restValues)
}

const getListNode = (number) => {
  const arr = number.split('').reverse()
  return array2list(arr)
}

/**
 * 两个大型整数字符串相加
 * @param {String} number1 数字1
 * @param {String} number2 数字2
 */
function towBigNumberSum(number1, number2) {
  const num1Len = number1.length
  const num2Len = number2.length
  const sumNumLen = Math.max(num1Len, num2Len) + 1
  const result = []
  let carry = 0 // 进位
  for (let i = 0; i < sumNumLen; i++) {
    const a = (i < num1Len) ? parseInt(number1[num1Len - i - 1]) : 0
    const b = (i < num2Len) ? parseInt(number2[num2Len - i - 1]) : 0
    const sum = a + b + carry
    carry = Math.floor(sum / 10)

    /**
     * 不是最高位 || 是最高位, 且进位不等于0
     */
    if ((i !== sumNumLen - 1) || (i === sumNumLen - 1 && (carry !== 0 || sum !== 0))) {
      result.unshift(sum % 10)
    }
  }
  return result.join('')
}

module.exports = {
  getListNode,
  list2array,
  towBigNumberSum,
}
