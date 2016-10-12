import http from 'http';
import assert from 'assert';

//This test doesn't actually work for our case but its here just to show we can test these scripts.
describe('Node Server', () => {

  it('should be running graphiql', done => {
    http.get('http://127.0.0.1:4000/graphiql', res => {
      assert.equal(200, res.statusCode);
      done();
    });
  });

  it('should 405 on get request', done => {
    http.get('http://127.0.0.1:4000/graphql', res => {
      assert.equal(405, res.statusCode);
      done();
    })
  });

});
