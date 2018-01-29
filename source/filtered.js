const fs = require('fs');
const path = require('path');

function checkFileType(fileName, filterFileType) {
  return path.extname(fileName) === `.${filterFileType}`;
}
function printFileNames(filesList) {
  filesList.forEach((filename) => { console.log(filename); });
}
function fileFilter(directoryPath, filterFileType, callback = printFileNames) {
  fs.readdir(directoryPath, (err, filepaths) => {
    if (err) {
      return callback(err.code);
    }
    if (filterFileType === null || filterFileType.length < 1) {
      return callback('No file type specified.');
    }
    const filteredFiles = filepaths.filter(fileName => checkFileType(fileName, filterFileType));
    callback(filteredFiles);
  });
}

// filterFiles(process.argv[2], process.argv[3]);
module.exports = { fileFilter, checkFileType };
