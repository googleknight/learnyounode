const timeserverObject = require('../source/timeserver');

const date = new Date();
describe('Function to print date', () => {
  it('Checking for return type', () => {
    expect(typeof timeserverObject.getFullDate()).toBe('string');
  });
  it('Checking year returned', () => {
    expect(Number(timeserverObject.getFullDate().split('-')[0])).toBe(date.getFullYear());
  });
  it('Checking month returned', () => {
    expect(Number(timeserverObject.getFullDate().split('-')[1])).toBe(date.getMonth() + 1);
  });
//   it('Checking date and time returned', () => {
//     const expectedoutput = `${timeserverObject.padding(date.getDate()) + 1}`;
//     expect(Number(timeserverObject.getFullDate().split('-')[2])).toBe();
//   });
});

