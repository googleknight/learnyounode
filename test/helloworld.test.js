const hello = require('../source/helloworld');

test('Function should return hello world', () => {
  expect(hello()).toBe('HELLO WORLD');
});

