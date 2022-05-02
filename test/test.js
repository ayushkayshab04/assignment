/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

// Assertion style

chai.should();

chai.use(chaiHttp);

describe('candidate Api', () => {
  // Testing Get

  describe('GET /candidate', () => {
    it('It should get all the candidates', (done) => {
      chai.request(server)
        .get('/candidate')
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('array');
          done();
        });
    });
  });
});
