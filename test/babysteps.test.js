const babysteps = require('../source/babysteps');

describe('Basic test cases to check summation using arguments', () => {
  it('Adding 10,20,30 should return 60', () => {
    expect(babysteps([10, 20, 30])).toBe(60);
  });
  it('Calling method without any arguments should return 0', () => {
    expect(babysteps()).toBe(0);
  });
  it('Calling method with empty array should return 0', () => {
    expect(babysteps()).toBe(0);
  });
  it('Calling for negative values(-1,-2,4) should return 1', () => {
    expect(babysteps([-1, -2, 4])).toBe(1);
  });
});
