import http from 'http';
import assert from 'assert';

import '../lib/index.js';

//This test doesn't actually work for our case but its here just to show we can test these scripts.
describe('Example Node Server', () => {
  it('should return 200', done => {
    http.get('http://127.0.0.1:1337', res => {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});
