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
  test('1534236469 => 0', ()=>{
    expect(reverse(1534236469)).toEqual(0)
  })
  test('1563847412 => 0', ()=>{
    expect(reverse(1563847412)).toEqual(0)
  })
})
