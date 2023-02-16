const cloneArray = require ('./cloneArray')

test('This should clone an array ', () => {
     expect(cloneArray([3,4,5])).toEqual([3,4,5])
     expect(cloneArray([3,4,5])).not.toBe([3,4,5])
 })