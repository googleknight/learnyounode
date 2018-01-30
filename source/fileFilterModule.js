const fs = require('fs');
const path = require('path');

function checkFileType(fileName, filterFileType) {
  return path.extname(fileName) === `.${filterFileType}`;
}
function fileFilter(directoryPath, fileType, callback) {
  fs.readdir(directoryPath, (error, filePaths) => {//eslint-disable-line
    if (error) {
      return callback(error.code);
    }
    let filteredFiles = [];
    filteredFiles = filePaths.filter(fileName => checkFileType(fileName));
    callback(null, filteredFiles);
  });
}
module.exports = fileFilter;
