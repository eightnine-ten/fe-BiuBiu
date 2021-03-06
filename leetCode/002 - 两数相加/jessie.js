/**
 * 给出两个非空的链表用来表示两个非负的整数。其中，它们各自的位数是按照逆序的方式存储的，并且它们的每个节点只能存储一位数字。
    如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
    您可以假设除了数字 0 之外，这两个数都不会以0开头。

    示例：

    输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
    输出：7 -> 0 -> 8
    原因：342 + 465 = 807

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/add-two-numbers
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
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

function list2array(list) {
  if (!list) {
    return []
  }
  const result = [list.val]
  const restValues = list2array(list.next)
  return result.concat(restValues)
}

const getListNode = (number) => {
  const arr = String(number).split('').reverse()
  return array2list(arr)
}

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

const addTwoNumbers = function(l1, l2) {
  const num1 = list2array(l1).reverse().join('')
  const num2 = list2array(l2).reverse().join('')
  const result = towBigNumberSum(num1, num2)
  return getListNode(result)
}

module.exports = {
  addTwoNumbers,
  getListNode,
  array2list,
  list2array,
}
