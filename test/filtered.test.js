const fileFilter = require('../source/filtered');

const directoryPath = 'test';
const expectedFile = ['testfile.txt'];
const skippedFile = ['firstio.test.js'];
describe('Reading directory to display and count number of files of .txt type', () => {
  // it('It should count number of .txt files to be 4', () => {
  //   expect(filtered(directorypath, 'txt').length).toBe(4);
  // });
  // it('Matching name of .txt files found ', () => {
  //   const output = ['testfile1.txt', 'testfile1.txt', 'testfile1.txt', 'testfile.txt'];
  //   expect(filtered(directorypath, 'txt')).toBe(output);
  // });
  it('It should return null for null directory path', () => {
    expect(fileFilter(null, 'txt')).toBeNull();
  });
  it('It should return null for null directory path', () => {
    expect(fileFilter(null, 'txt')).toBeNull();
  });
  it('It should return null for null or no filetype', () => {
    expect(fileFilter(directoryPath)).toBeNull();
  });
});

// describe('Reading directory to filter files of .txt type', () => {
//   it('Checking a paritcular file is included in list of files', () => {
//     expect(fileFilter(directoryPath, 'txt')).toEqual(expect.arrayContaining(expectedFile));
//   });
//   it('Checking a paritcular file is excluded in list of files', () => {
//     expect(fileFilter(directoryPath, 'txt')).not.toEqual(expect.arrayContaining(skippedFile));
//   });
// });
