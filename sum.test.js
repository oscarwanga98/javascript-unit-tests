const sum=require('./sum');

test('Properly adding two numbers',()=>{
    expect(sum(1, 2)).toBe(3);
})