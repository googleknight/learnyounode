const http = require('http');
const url = require('url');

function jsonServer(portNo = process.argv[2]) {
  const server = http.createServer((request, response) => {
    if (request.method === 'GET') {
      let result = '';
      let date = '';
      const urlObject = url.parse(request.url, true);
      if (urlObject.pathname === '/api/parsetime') {
        date = new Date(urlObject.query.iso);
        result = { hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds() };
      } else if (urlObject.pathname === '/api/unixtime') {
        date = new Date(urlObject.query.iso);
        result = { unixtime: date.getTime() };
      }
      if (result) {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(result));
      } else {
        response.writeHead(404);
        response.end();
      }
    }
  });
  server.listen(portNo);
}
module.exports = jsonServer;
