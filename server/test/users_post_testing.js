import { should, use, request } from 'chai';
import chaihttp from 'chai-http';
import app from '../server';

should();
use(chaihttp);

// testing of signup
it('testing of signup', (done) => {
  request(app)
    .post('/api/v1/auth/signup')
    .send({
      firstname: 'Didier',
      lastname: 'Usanase',
      gender: 'male',
      jobtitle: 'MD',
      depart: 'IT',
      email: 'todidy@gmail.com',
      password: 'usanase10',
      admin: true,
      address: 'kk199st',
    }).end((err, data) => {
      data.should.have.status(201);
      done();
    });
});
describe('testing of users endpoints', () => {
  // testing of login
  it('testing of login', (done) => {
    request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'todidy@gmail.com',
        password: 'usanase10',
      }).end((err, data) => {
        data.should.have.status(200);
        done();
      });
  });
});
