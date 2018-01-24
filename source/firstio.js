const fs = require('fs');

function calculateNumberOfLines(filePath) {
  if (filePath) {
    const contents = fs.readFileSync(filePath);
    const noOfLines = contents.toString().split('\n').length - 1;
    return noOfLines;
  }
  return 0;
}
// console.log(calculateNumberOfLines(process.argv[2]));
module.exports = calculateNumberOfLines;
