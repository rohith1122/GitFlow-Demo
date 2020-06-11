const calc = require('./calculator');
describe('Calculator Tests', () => {

    test('Add 3 and 4  should give 7', () => {
        const result = calc.add(3,4)
        expect(result).toEqual(7);
      });
      
})
