"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  PORT: 5000,
  SECRETKEY: '0EDB8D524C2A504D7BD83F9FD7349178'
};
exports["default"] = _default;    require('babel-register')({
  presets: [ 'env' ]
})
// Import the rest of our application.
module.exports = require('./server.js')