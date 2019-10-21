/**
 * 给定一个包含n个整数的数组nums,判断nums中是否存在三个元素 a，b，c ，
 * 使得a + b + c = 0 ？找出所有满足条件且不重复的三元组。
  注意：答案中不可以包含重复的三元组。

例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function threeSum(nums) {
  const newNums = nums.sort((a, b) => a > b)
  const result = []
  for (let i = 0; i < newNums.length; i++) {
    // 跳过重复数字
    if (i && nums[i] === nums[i - 1]) {
      continue
    }
    let left = i++
    let right = newNums.length
    const sum = newNums[i] + newNums[left] + newNums[right]
    while (left < right) {
      if (sum < 0) {
        left++
      } else if (sum > 0) {
        right--
      } else {
        result.push(newNums[i], newNums[left++], newNums[right--])
        // 跳过重复数字
        while (nums[left] === nums[left - 1]) {
          left++
        }
        // 跳过重复数字
        while (nums[right] === nums[right + 1]) {
          right--
        }
      }
    }
  }
  return result
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))

// 二维数组去重

// const arr = [[-1, 0, 1], [-1, -1, 0], [-1, 0, 1]]
// const result = []
// const hash = {}
// for (let i = 0, len = arr.length; i < len; i++) {
//   if (!hash[arr[i]]) {
//     result.push(arr[i])
//     hash[arr[i]] = true
//   }
// }
// console.log(result)
