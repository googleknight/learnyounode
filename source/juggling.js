const http = require('http');

const results = [];
for (let index = 0; index < urls.length; index += 1) {
  results[index] = null;
}
function getDatafromUrl(i, urls) {
  let result = '';
  http.get(urls[i], (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
      result += data;
    });
    response.on('end', () => {
      results[i] = result;
      let resultsCount = 0;
      for (let j = 0; j < urls.length; j += 1) {
        if (results[j] != null) { resultsCount += 1; }
      }
      if (resultsCount === urls.length) {
        for (let j = 0; j < urls.length; j += 1) {
          console.log(results[j]);
        }
      }
    });
  });
}
function juggle(urls = process.argv.slice(2)) {
  for (let i = 0; i < urls.length; i += 1) {
    getDatafromUrl(i, urls);
  }
}
module.exports = juggle;
