const subtract=require('./subtract')

test('Subtract two values',()=>{
    expect(subtract(3,4)).toBe(-1)
})