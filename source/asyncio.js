const fs = require('fs');

function countNumberOfLines(data) {
  return data.toString().split('\n').length - 1;
}
function readFileCountLines(filePath, callback = console.log) {
  fs.readFile(filePath, (err, content) => {
    if (err) {
      return callback(err.code);
    }
    const noOfLines = countNumberOfLines(content);
    callback(noOfLines);
  });
}
// calculateNumberOfLines(process.argv[2]);
module.exports = { readFileCountLines, countNumberOfLines };
