const {
  addTwoNumbers: addTwoNumbers,
  nodeArray: nodeArray,
  array2list: array2list } = require('./../jessie')

test('addTwoNumbers((2 -> 4 -> 3) + (5 -> 6 -> 4)) => (7 -> 0 -> 8)', () => {
  expect(
      addTwoNumbers(
          array2list(nodeArray(243)),
          array2list(nodeArray(564)))
  ).toMatchObject(array2list(nodeArray(807)))
})

test('addTwoNumbers((1 -> 8) + (0)) => (1 -> 8)', () => {
  expect(
      addTwoNumbers(
          array2list(nodeArray(18)),
          array2list(nodeArray(0)))
  ).toMatchObject(array2list(nodeArray(18)))
})
