const http = require('http');
const fs = require('fs');

function fileServer(portNo = process.argv[2], filePath = process.argv[3]) {
  const server = http.createServer((request, response) => {
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(response);
  });
  server.listen(portNo);
}
fileServer();
module.exports = fileServer;
