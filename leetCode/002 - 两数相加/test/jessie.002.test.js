const {
  addTwoNumbers: addTwoNumbers,
  getListNode: getListNode,
  array2list: array2list } = require('./../jessie')

test('243 + 564 = 807', () => {
  expect(addTwoNumbers(getListNode('243'), getListNode('564')))
      .toMatchObject(getListNode('807'))
})

test('18 + 0 = 18', () => {
  expect(addTwoNumbers(getListNode('18'), getListNode('0')))
      .toMatchObject(getListNode('18'))
})

test('1000000000000000000000000000001 + 564 = 1000000000000000000000000000565', () => {
  expect(addTwoNumbers(getListNode('1000000000000000000000000000001'),
      getListNode('564')))
      .toMatchObject(getListNode('1000000000000000000000000000565'))
})
