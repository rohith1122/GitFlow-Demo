const calc = require('./calculator');
describe('Calculator Tests', () => {

  test('Add 3 and 4  should give 7', () => {
    const result = calc.add(3, 4)
    expect(result).toEqual(7);
  });
  test('Subtract 2 from 10  should give 8', () => {
    const result = calc.subtract(10, 2)
    expect(result).toEqual(8);
  });
  test('Divide 10 by 2  should give 5', () => {
    const result = calc.divide(10, 2)
    expect(result).toEqual(5);
  });


})
