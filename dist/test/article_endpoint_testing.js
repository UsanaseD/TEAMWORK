"use strict";

var _chai = require("chai");

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _server = _interopRequireDefault(require("../server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _chai.should)();
(0, _chai.use)(_chaiHttp["default"]);
describe('article endpoint testing', function () {
  // test case
  before(function (done) {
    (0, _chai.request)(_server["default"]).post('/api/v1/auth/signup').send({
      firstname: 'Didier',
    lastname: 'Usanase',
    email: 'todiddy30@gmail.com',
    password: 'usanase10',
    admin: false,
    address: 'kk199st',
    gender: 'male',
    jobtitle: 'MD',
    depart: 'IT',
    }).end(function (err, userData) {
      var token = userData.body.token;
      global.myToken = token;
      done();
    });
  }); // test for deleting an article  

  it('place author to post an article', function (done) {
    (0, _chai.request)(_server["default"]).post('/api/v1/article').set({
      Authorization: "Bearer ".concat(global.myToken)
    }).send([
      {
        auth_id: 1,
        category: "sport",
        title: "football",
        body: "arsenal is the first team in england",
    }]).end(function (err, response) {
      response.should.have.status(201);
      done();
    });
  });
});