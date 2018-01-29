const fs = require('fs');
const path = require('path');

let filteredFiles = null;
function filterFiles(directoryPath, filterFileType) {
  if (directoryPath && filterFileType) {
    fs.readdir(directoryPath, (err, filepaths) => {
      filteredFiles = filepaths.filter(file => path.extname(file) === `.${filterFileType}`);
      filteredFiles.forEach((filename) => { console.log(filename); });
    });
  }
  return filteredFiles;
}
filterFiles(process.argv[2], process.argv[3]);
module.exports = filterFiles;
