
import {
  expect, should, use, request,
} from 'chai';
import chaihttp from 'chai-http';
import app from '../server';

should();
use(chaihttp);

describe('article endpoint testing', () => { // test case
  before((done) => {
    request(app)
      .post('/api/v1/auth/signup')
      .send({
        firstname: 'Didier',
        lastname: 'Usanase',
        gender: 'male',
        jobtitle: 'MD',
        depart: 'IT',
        email: 'todiddy@gmail.com',
        password: 'usanase10',
        admin: true,
        address: 'kk199st',
      }).end((err, data) => {
        const { token } = data.body.data;
        global.myToken = token;
        done();
      });
  });
  // test to post an article
  it('test to post article', (done) => {
    request(app)
      .post('/api/v1/article')
      .set({ Authorization: `Bearer ${global.myToken}` })
      .send({
        category: 'Sport',
        title: 'Arsenal',
        body: 'arsenal is a good team',
      })
      .end((err, response) => {
        response.should.have.status(201);
        response.should.be.a('object');
        done();
      });
  });
  // test to display all articles
  it('test to get all articles', (done) => {
    request(app)
      .get('/api/v1/article')
      .set({ Authorization: `Bearer ${global.myToken}` })
      .end((err, data) => {
        data.should.have.status(200);
        done();
      });
  });

  // test to create a comment
  it('test to create an comment', (done) => {
    request(app)
      .post('/api/v1/comment')
      .set({ Authorization: `Bearer ${global.myToken}` })
      .send({
        article_id: 1,
        comment: 'really!',
      })
      .end((err, data) => {
        data.should.have.status(201);
        data.should.be.a('object');
        done();
      });
  });

  // test  to select a spesific article
  it('test to select a spesific article', (done) => {
    request(app)
      .get('/api/v1/article/1')
      .set({ Authorization: `Bearer ${global.myToken}` })
      .end((err, response) => {
        response.should.have.status(200);
        response.should.be.a('object');
        done();
      });
  });

  // testing of articleflag
  it('testing of articleflag', (done) => {
    request(app)
      .post('/api/v1/articleflag')
      .set({ Authorization: `Bearer ${global.myToken}` })
      .send({
        article_id: 1,
        reason: 'no sens',
        description: 'rrgergeg',
      })
      .end((err, data) => {
        data.should.have.status(200);
        data.should.be.a('object');
        done();
      });
  });

  // testing of commentflag
  it('testing of commentflag', (done) => {
    request(app)
      .post('/api/v1/commentflag')
      .set({ Authorization: `Bearer ${global.myToken}` })
      .send({
        category: 'Sport',
        title: 'Arsenal',
        body: 'arsenal is a good team',
      })
      .end((err, data) => {
        data.should.be.a('object');
        data.should.have.status(200);
        done();
      });
  });

  // test to delete a spesific article
  it('test to delete a spesific article', (done) => {
    request(app)
      .delete('/api/v1/article/1')
      .set({ Authorization: `Bearer ${global.myToken}` })
      .end((err, response) => {
        response.body.should.be.a('object');
        response.should.have.status(404);
        done();
      });
  });

  // test to update an article
  it('test to update an article', (done) => {
    request(app)
      .patch('/api/v1/article/1')
      .set({ Authorization: `Bearer ${global.myToken}` })
      .send({
        auth_id: 1,
        title: 'valuetit',
        category: 'vcategory',
        body: 'value.bodojihiy',
      })
      .end((err, response) => {
        response.should.be.a('object');
        response.should.have.status(200);
        done();
      });
  });

  // test to display all reportedArticles
  it('test to get all reportedArticles', (done) => {
    request(app)
      .get('/api/v1/reparticle')
      .set({ Authorization: `Bearer ${global.myToken}` })
      .end((err, data) => {
        data.should.have.status(200);
        done();
      });
  });
});
