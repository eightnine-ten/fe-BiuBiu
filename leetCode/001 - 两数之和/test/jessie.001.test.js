const { twoSumA: twoSum } = require('./../jessie')

test('twoSum([5, 75, 25], 100) => [1, 2]', () => {
  expect(twoSum([5, 75, 25], 100)).toEqual([1, 2])
})

test('twoSum([-5, 10, 25], 20) => [0, 2]', () => {
  expect(twoSum([-5, 10, 25], 20)).toEqual([0, 2])
})
