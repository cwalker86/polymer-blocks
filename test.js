var request = require('supertest');
var app = require('./app');

describe('Request to the root path', function(){

  it('Returns a 200 status code', function(done){
   //Super Test Runner
    request(app)
      .get('/')
      .expect(200)
      .end(function(error) {
        if(error) throw error;
        // test Mocha tests are done
        done();
      });
 
  });
});

describe('Listing cities on /cities', function(){

  it('Returns 200 status code', function(done){
    request(app)
      .get('/cities')
      .expect(200, done)
  });

  // Test that html is returned
  it('Returns a HTML format', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /html/, done)
  });

  // Test for the body to match a call to /cities/i
  it('Returns an index file with Cities', function(done) {
    request(app)
      .get('/')
      .expect(/cities/i, done);
  });

  it('Returns JSON format', function(done) {
    request(app)
      .get('/cities')
      .expect('Content-Type', /json/, done);
  });

  it('Returns initial cities', function(done){
    request(app)
      .get('/cities')
      .expect(JSON.stringify(['New York','Miami','Denver']), done);
  });
});
