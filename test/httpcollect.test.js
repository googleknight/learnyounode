const httpcollect = require('../source/httpcollect');


describe('Checking the response', () => {
  it('Response received must be in string', (done) => {
    const url = 'http://www.google.com';
    function callback(response) {
      expect(typeof response).toBe('string');
      done();
    }
    httpcollect(url, callback);
  });
  it('For succesful transmisson', (done) => {
    const url = 'http://www.google.com';
    function callback(response) {
      expect(response).toBe('RECEIVED');
      done();
    }
    httpcollect(url, callback);
  });
//   it('For failed transmisson', (done) => {
//     const url = 'http://temp.xyz';
//     function callback(response) {
//       expect(response).toBe('NO DATA');
//       done();
//     }
//     httpcollect(url, callback);
//   });
});
