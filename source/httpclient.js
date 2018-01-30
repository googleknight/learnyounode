const http = require('http');

function gettingresponse(url = process.argv[2], callback = console.log) {
  http.get(url, (response) => {
    response.setEncoding('utf8');
    response.on('data', (line) => {
      callback(line);
    });
  });
}

module.exports = gettingresponse;
