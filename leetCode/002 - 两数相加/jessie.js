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
const nodeArray = (str)=> {
  if (typeof str === 'undefined') {
    return 'error'
  }
  const numberArray = String(str).split('').reverse()
  return numberArray
}

const array2list = (ary, start = 0) =>{
  if (start === ary.length) {
    return null
  }

  const node = {
    val: ary[start],
    next: null,
  }

  const rest = array2list(ary, start + 1)
  node.next = rest
  return node
}

const list2array = (head) =>{
  if (!head) {
    return []
  }
  const result = [head.val]
  const restValues = list2array(head.next)
  return result.concat(restValues)
}

const addTwoNumbers = (l1, l2)=> {
  const num1 = parseInt(list2array(l1).join(''))
  const num2 = parseInt(list2array(l2).join(''))
  const sum = num1 + num2
  return array2list(nodeArray(sum))
}

console.log(addTwoNumbers(array2list(nodeArray(18)), array2list(nodeArray(0))))

module.exports = {
  addTwoNumbers,
  nodeArray,
  array2list,
  list2array,
}
