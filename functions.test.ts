const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('returns an array of the same length',() => {
        let arr = [1,2,3]
        let result = shuffleArray(arr)
        expect(result.length).toHaveProperty('arr.length')
    })
    test('returns an array with all the same items',() => {
        let arr = [1,2,3]
        let result = shuffleArray(arr)
        expect(result).toEqual(arr)
    })
        test('items have been shuffled around',() => {
            let arr = [1,2,3]
            let result = shuffleArray(arr)
            expect(result).not.toEqual(arr)
    
    })
})