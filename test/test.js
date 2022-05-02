/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

// Assertion style

chai.should();

chai.use(chaiHttp);

describe('candidate Api', () => {
  // Testing Get

  describe('GET /candidate', () => {
    it('It should get all the candidates', (done) => {
      chai.request(app)
        .get('/candidate')
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('array');
          done();
        });
    });
  });

  // testing get by id
  describe('GET /candidate/:id', () => {
    it('It should the specific candidates', (done) => {
      const candidateId = 5;
      chai.request(app)
        .get(`/candidate/${candidateId}`)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('array');
          done();
        });
    });
  });

  // testing POST route
  describe('POST /candidate/add', () => {
    it('It should create a candidate', (done) => {
      const candidate = {
        userId: '8',
        firstName: 'Ayush',
        lastName: 'Kumar',
        email: 'ayush@154.com',
      };
      chai.request(app)
        .post('/candidate/add')
        .send(candidate)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('object');
          done();
        });
    });
  });
});
