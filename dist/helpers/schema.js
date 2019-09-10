"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commentschema = exports.signupschema = exports.loginschema = exports.flagschema = exports.commentflagschema = exports.articleschema = exports.articleflagschema = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }


var articleschema = _joi["default"].object().keys({
  author: _joi["default"].string().email({
    minDomainSegments: 2
  }),
  category: _joi["default"].string().regex(/^[a-zA-Z]{3,30}$/),
  title: _joi["default"].string(),
  body: _joi["default"].string(),
});

exports.articleschema = articleschema;

var commentschema = _joi["default"].object().keys({
  article_id: _joi["default"].number().integer(),
  articleTitle:_joi["default"].string(),
  article: _joi["default"].string(),
  comment: _joi["default"].string(),
});

exports.commentschema = commentschema;

var articleflagschema = _joi["default"].object().keys({
  article_id: _joi["default"].number().integer(),
  reason: _joi["default"].string(),
  description: _joi["default"].string()
});

exports.articleflagschema = articleflagschema;

var commentflagschema = _joi["default"].object().keys({
  comment_id: _joi["default"].number().integer(),
  reason: _joi["default"].string(),
  description: _joi["default"].string()
});

exports.commentflagschema = commentflagschema;

var loginschema = _joi["default"].object().keys({
  email: _joi["default"].string().email({
    minDomainSegments: 2
  }).required(),
  password: _joi["default"].string().regex(/^['a-zA-Z0-9']{3,30}$/).required()
});

exports.loginschema = loginschema;

var signupschema = _joi["default"].object().keys({
  email: _joi["default"].string().email({
    minDomainSegments: 2
  }).required(),
  firstname: _joi["default"].string().regex(/^[a-zA-Z]{3,30}$/),
  lastname: _joi["default"].string().regex(/^[a-zA-Z]{3,30}$/),
  address: _joi["default"].string().alphanum().min(5).max(20).required(),
  gender:_joi["default"].string().regex(/^['male','female']{4,6}$/),
  jobtitle:_joi["default"].string().regex(/^[a-zA-Z]{2,30}$/),
  depart: _joi["default"].string().regex(/^[a-zA-Z]{2,30}$/),
  admin: _joi["default"]["boolean"](),
  password: _joi["default"].string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
});

exports.signupschema = signupschema;


var articlepatchschema = _joi["default"].object().keys({
  body:_joi["default"].string().regex(/^[a-zA-Z]$/),
});

exports.articlepatchschema = articlepatchschema;