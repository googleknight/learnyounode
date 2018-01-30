const http = require('http');

function httpcollect(url = process.argv[2], callback) {
  http.get(url, (response) => {
    let fullLine = '';
    response.setEncoding('utf8');
    response.on('data', (line) => {
      fullLine += line;
    });
    response.on('end', () => {
      console.log(fullLine.length);
      console.log(fullLine);
      return callback('RECEIVED');
    });
    response.on('error', () => callback('NO DATA'));
  });
}
module.exports = httpcollect;
