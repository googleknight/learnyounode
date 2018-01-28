const asyncio = require('../source/asyncio');

const filepath = 'testfile.txt';
describe('Reading file to count number of lines', () => {
  // it('It should count number of lines and return 21', () => {
  //   expect(asyncio(filepath)).toBe(21);
  // });
  it('Calling method without any arguments should return 0', () => {
    expect(asyncio()).toBe(0);
  });
  it('Its return type should be number', () => {
    expect(typeof asyncio(filepath)).toBe('number');
  });
});
