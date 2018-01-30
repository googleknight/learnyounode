const filtered = require('../source/modularFilter');
const fileFilterModule = require('../source/fileFilterModule');

const directoryPath = 'test';
const expectedFile = ['testfile.txt'];
const skippedFile = ['firstio.test.js'];
// describe('Reading directory to display and count number of files of .txt type', () => {
//   it('It should count number of .txt files to be 4', (done) => {
//     function callback(filesList) {
//       expect(filesList.length).toBe(4);
//       done();
//     }
//     filtered.fileFilter(directoryPath, 'txt', callback);
//   });

//   it('Matching name of .txt files found ', (done) => {
//     const output = ['testfile.1.txt', 'testfile.2.txt', 'testfile.3.txt', 'testfile.txt'];
//     function callback(filesList) {
//       expect(filesList).toEqual(expect.arrayContaining(output));
//       done();
//     }
//     filtered.fileFilter(directoryPath, 'txt', callback);
//   });

//   it('It should return error for invalid directory path', (done) => {
//     function callback(errorcode) {
//       expect(errorcode).toBe('ENOENT');
//       done();
//     }
//     filtered.fileFilter('', 'txt', callback);
//   });

//   it('It should return error for invalid file type', (done) => {
//     function callback(errormsg) {
//       expect(errormsg).toBe('No file type specified.');
//       done();
//     }
//     filtered.fileFilter(directoryPath, '', callback);
//   });
// });
// describe('Reading directory to filter files of .txt type', () => {
//   it('Checking a paritcular file is included in list of files', (done) => {
//     function callback(filesList) {
//       expect(filesList).toEqual(expect.arrayContaining(expectedFile));
//       done();
//     }
//     filtered.fileFilter(directoryPath, 'txt', callback);
//   });

//   it('Checking a paritcular file is excluded in list of files', () => {
//     function callback(filesList) {
//       expect(filesList).not.toEqual(expect.arrayContaining(skippedFile));
//     }
//     filtered.fileFilter(directoryPath, 'txt', callback);
//   });
// });
// Other testcases could be to check if mdoularfilter invoked filter function or not
const fileName = 'abc.txt';
const filterFileType = 'txt';
describe('Function to check filetype', () => {
  it('Checking for txt file type', () => {
    expect(fileFilterModule.checkFileType(fileName, filterFileType)).toBeTruthy();
  });

  it('Return false for no file type', () => {
    expect(fileFilterModule.checkFileType(fileName)).toBeFalsy();
  });
});
