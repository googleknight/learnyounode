const fileFilter = require('./fileFilterModule');

function printFileNames(filesList) {
  filesList.forEach((filename) => { console.log(filename); });
}
fileFilter(directoryPath= process.argv[2], fileType=process.argv[3], function(error, files){ //eslint-disable-line
  if (error) { return console.error('Error occured', error); }
  printFileNames(files);
});
