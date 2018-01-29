const asyncFile = require('../source/asyncio');

const filepath = 'testfile.txt';
describe('Reading file to count number of lines', () => {
  it('It should count number of lines and return 21', (done) => {
    function callback(noOfLines) {
      expect(noOfLines).toBe(21);
      done();
    }
    asyncFile.readFileCountLines(filepath, callback);
  });
  it('For invalid path it should throw error', (done) => {
    function callback(noOfLines) {
      expect(noOfLines).toBe('ENOENT');
      done();
    }
    asyncFile.readFileCountLines('', callback);
  });
});

describe('Checking function returned value', () => {
  it('Return type should be a number', () => {
    const inputLines = 'abc\nqwe\nzxc\ndfg\n';
    expect(typeof asyncFile.countNumberOfLines(inputLines)).toBe('number');
  });
  it('It should count number of lines correctly for regular input', () => {
    const inputLines = 'abc\nqwe\nzxc\ndfg\n';
    expect(asyncFile.countNumberOfLines(inputLines)).toBe(4);
  });
  it('It should count number of lines correctly for empty string', () => {
    const inputLines = '';
    expect(asyncFile.countNumberOfLines(inputLines)).toBe(0);
  });
  it('It should count number of lines correctly for only newlines', () => {
    const inputLines = '\n\n\n\n\n';
    expect(asyncFile.countNumberOfLines(inputLines)).toBe(5);
  });
});
