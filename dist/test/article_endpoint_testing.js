"use strict";

var _chai = require("chai");

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _server = _interopRequireDefault(require("../server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-undef */

/* eslint-disable no-console */

/* eslint-disable linebreak-style */
(0, _chai.should)();
(0, _chai.use)(_chaiHttp["default"]);
describe('article endpoint testing', function () {
  // test case
  before(function (done) {
    (0, _chai.request)(_server["default"]).post('/api/v1/auth/signup').send({
      firstname: 'Didier',
      lastname: 'Usanase',
      gender: 'male',
      jobtitle: 'MD',
      depart: 'IT',
      email: 'todiddy@gmail.com',
      password: 'usanase10',
      admin: true,
      address: 'kk199st'
    }).end(function (err, data) {
      var token = data.body.data.token;
      global.myToken = token;
      done();
    });
  }); // test to post an article

  it('test to post article', function (done) {
    (0, _chai.request)(_server["default"]).post('/api/v1/article').set({
      Authorization: "Bearer ".concat(global.myToken)
    }).send({
      auth_id: 3,
      category: 'valuecategory',
      title: 'valuetitle',
      body: 'valuebody'
    }).end(function (err, response) {
      response.should.have.status(200);
      done();
    });
  }); // test to display all articles

  it('test to get all articles', function (done) {
    (0, _chai.request)(_server["default"]).get('/api/v1/article').set({
      Authorization: "Bearer ".concat(global.myToken)
    }).end(function (err, data) {
      (0, _chai.expect)(data.body).to.be.a('object');
      data.should.have.status(200);
      done();
    });
  }); // test to create a comment

  it('test to create an comment', function (done) {
    (0, _chai.request)(_server["default"]).post('/api/v1/comment').set({
      Authorization: "Bearer ".concat(global.myToken)
    }).send({
      auth_id: 1,
      article_id: 1,
      comment: 'valuecomfds2210u9ur1jment'
    }).end(function (err, data) {
      data.should.have.status(200);
      done();
    });
  }); // test  to select a spesific article

  it('test to select a spesific article', function (done) {
    (0, _chai.request)(_server["default"]).get('/api/v1/article/1').set({
      Authorization: "Bearer ".concat(global.myToken)
    }).end(function (err, response) {
      response.body.should.be.a('object');
      done();
    });
  }); // testing of articleflag

  it('testing of articleflag', function (done) {
    (0, _chai.request)(_server["default"]).post('/api/v1/articleflag').set({
      Authorization: "Bearer ".concat(global.myToken)
    }).send({
      article_id: 11,
      reason: 'reason',
      description: 'vption'
    }).end(function (err, data) {
      data.should.have.status(200);
      done();
    });
  }); // testing of commentflag

  it('testing of commentflag', function (done) {
    (0, _chai.request)(_server["default"]).post('/api/v1/commentflag').set({
      Authorization: "Bearer ".concat(global.myToken)
    }).send({
      comment_id: 11,
      reason: 'reason',
      description: 'vption'
    }).end(function (err, data) {
      data.should.have.status(200);
      done();
    });
  }); // test to delete a spesific article

  it('test to delete a spesific article', function (done) {
    (0, _chai.request)(_server["default"])["delete"]('/api/v1/article/1').set({
      Authorization: "Bearer ".concat(global.myToken)
    }).end(function (err, response) {
      response.body.should.be.a('object');
      done();
    });
  }); // test to update an article

  it('test to update an article', function (done) {
    (0, _chai.request)(_server["default"]).patch('/api/v1/article/1').set({
      Authorization: "Bearer ".concat(global.myToken)
    }).send({
      title: 'valuetitle',
      category: 'vcategory',
      body: 'value.bodojihiy'
    }).end(function (err, response) {
      response.should.be.a('object');
      response.should.have.status(200);
      done();
    });
  }); // test to display all reportedArticles

  it('test to get all reportedArticles', function (done) {
    (0, _chai.request)(_server["default"]).get('/api/v1/reparticle').set({
      Authorization: "Bearer ".concat(global.myToken)
    }).end(function (err, data) {
      (0, _chai.expect)(data.body).to.be.a('object');
      data.should.have.status(200);
      done();
    });
  });
});