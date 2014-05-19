var should = require('should')
  , request = require('supertest')
  , server = require('../app')
;

describe('GET /', function () {
  it('should return status 200', function (done) {
    request(server)
      .get('/')
      .expect(200, done)
    ;
  });
});

describe('GET /foo', function () {
  it('should return a 404 error', function (done) {
    request(server)
      .get('/foo')
      .expect(404, done)
    ;
  });
});
