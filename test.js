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

