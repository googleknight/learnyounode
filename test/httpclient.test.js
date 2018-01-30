const httpclient = require('../source/httpclient');

const url = 'http://www.google.com';
describe('Checking the response', () => {
  it('Response received must be in string', (done) => {
    function callback(response) {
      expect(typeof response).toBe('string');
      done();
    }
    httpclient(url, callback);
  });
});
