/**
 * 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。

    例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。

    学习参考：http://www.conardli.top/docs/dataStructure/%E6%95%B0%E7%BB%84/%E6%8A%8A%E6%95%B0%E7%BB%84%E6%8E%92%E6%88%90%E6%9C%80%E5%B0%8F%E7%9A%84%E6%95%B0.html
 */
const compare = (a, b)=>{
  const front = '' + a + b
  const behind = '' + b + a
  console.log('TCL: compare -> front', front)
  console.log('TCL: compare -> behind', behind)
  return front - behind
}
const printMinNumber = (numberArr)=>{
  if (!numberArr || numberArr.length === 0) {
    return ''
  }
  console.log(numberArr.sort(compare).join(''))
}
printMinNumber([3, 32, 321])
