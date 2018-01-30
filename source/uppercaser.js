
const map = require('through2-map');
const http = require('http');

function upperCaser(portNo = process.argv[2]) {
  const server = http.createServer((request, response) => {
    if (request.method === 'POST') {
      request.pipe(map(data => data.toString().toUpperCase())).pipe(response);
    }
  });
  server.listen(portNo);
}
module.exports = upperCaser;
