/**
 * 得到一个两数之间的随机整数，包括两个数在内
 */

const getRandomIntInclusive = (min, max)=>{
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min // 含最大值，含最小值
}

getRandomIntInclusive(3.5, 9.9)
