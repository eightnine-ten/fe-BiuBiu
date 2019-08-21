/**
 *
 *
 * @param {Array} nums
 * @param {Number} target
 * @returns
 */
const methods1 = function(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i]
    } else {
      map.set(target - nums[i], i)
    }
  }
}

const methods2 = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === target - nums[j]) {
        return [i, j]
      }
    }
  }
}

const methods3 = function(nums, target) {
  let result = []
  nums.map((element, index) => {
    if (nums.indexOf(target - element) > -1 && nums.indexOf(target - element) !== index) {
      result = [index, nums.indexOf(target - element)].sort((a, b)=>a > b)
    }
  })
  return result
}

module.exports = {
  methods1,
  methods2,
  methods3,
}
