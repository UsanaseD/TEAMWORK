"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _userControllerClass = _interopRequireDefault(require("../controllers/userControllerClass"));

var _midleware = _interopRequireDefault(require("../midleware/midleware"));

var _adminmware = _interopRequireDefault(require("../midleware/adminmware"));

var _articleControllerClass = _interopRequireDefault(require("../controllers/articleControllerClass"));

var _swagger = _interopRequireDefault(require("../../swagger.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-undef */

/* eslint-disable no-unused-vars */

/* eslint-disable consistent-return */
var _default = function _default(app) {
  app.post('/api/v1/auth/signup', _userControllerClass["default"].signupPost);
  app.post('/api/v1/auth/login', _userControllerClass["default"].loginPost);
  app.post('/api/v1/article', _midleware["default"], _articleControllerClass["default"].articlePost);
  app.post('/api/v1/comment', _midleware["default"], _articleControllerClass["default"].commentPost);
  app.post('/api/v1/articleflag', _midleware["default"], _articleControllerClass["default"].articleflag);
  app.post('/api/v1/commentflag', _midleware["default"], _articleControllerClass["default"].commentflag);
  app.patch('/api/v1/article/:id', _midleware["default"], _articleControllerClass["default"].articlePatch);
  app.get('/api/v1/reparticle', _adminmware["default"], _articleControllerClass["default"].getallreparticles);
  app.get('/api/v1/article/:id', _midleware["default"], _articleControllerClass["default"].specifedarticle);
  app.get('/api/v1/article', _midleware["default"], _articleControllerClass["default"].getallarticles);
  app["delete"]('/api/v1/article/:id', _midleware["default"], _articleControllerClass["default"].deleteArticle);
  app.use('/', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(_swagger["default"]));
};

exports["default"] = _default;