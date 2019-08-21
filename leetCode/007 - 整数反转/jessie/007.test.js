const { reverse } = require('./main')

describe('reverse', ()=>{
  test('123=>321', ()=>{
    expect(reverse(123)).toEqual(321)
  })

  test('-123=>-321', ()=>{
    expect(reverse(-123)).toEqual(-321)
  })

  test('120=>21', ()=>{
    expect(reverse(120)).toEqual(21)
  })
})
