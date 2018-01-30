const net = require('net');

function padding(n) { return n < 10 ? `0${n}` : n; }

function getFullDate() {
  const date = new Date();
  return `${date.getFullYear()}-${
    padding(date.getMonth() + 1)}-${
    padding(date.getDate())} ${
    padding(date.getHours())}:${
    padding(date.getMinutes())}\n`;
}

function timeServer(portno = process.argv[2]) {
  const server = net.createServer((socket) => {
    socket.end(getFullDate());
  });
  server.listen(portno);
}

module.exports = { padding, getFullDate, timeServer };
