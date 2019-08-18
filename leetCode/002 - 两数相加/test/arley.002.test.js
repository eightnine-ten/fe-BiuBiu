const { addTwoNumbers: addTwoNumbers } = require('./../arley')
const { getListNode } = require('./../util')

test('243 + 564 = 807', () => {
  expect(addTwoNumbers(getListNode('243'), getListNode('564')))
      .toMatchObject(getListNode('807'))
})


test('1000000000000000000000000000001 + 564 = 1000000000000000000000000000565', () => {
  expect(addTwoNumbers(getListNode('1000000000000000000000000000001'),
      getListNode('564')))
      .toMatchObject(getListNode('1000000000000000000000000000565'))
})

test('123456 + 123456 = 246912', () => {
  expect(addTwoNumbers(getListNode('123456'),
      getListNode('123456')))
      .toMatchObject(getListNode('246912'))
})


test('5 + 5 = 10', () => {
  expect(addTwoNumbers(getListNode('5'),
      getListNode('5')))
      .toMatchObject(getListNode('10'))
})


