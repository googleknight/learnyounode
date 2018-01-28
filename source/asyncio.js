const fs = require('fs');

function calculateNumberOfLines(filePath) {
  if (filePath) {
    fs.readFile(filePath, (err, content) => {
      const noOfLines = content.toString().split('\n').length - 1;
      console.log(noOfLines);
    });
  }
  return 0;
}
calculateNumberOfLines(process.argv[2]);
module.exports = calculateNumberOfLines;
