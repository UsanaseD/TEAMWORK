"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _model = require("../model/model");

var _schema = require("../helpers/schema");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
var articleController =
/*#__PURE__*/
function () {
  function articleController() {
    _classCallCheck(this, articleController);
  }

  _createClass(articleController, [{
    key: "commentPost",
    value: function commentPost(req, res) {
      _joi["default"].validate(req.body, _schema.commentschema, function (err, value) {
        if (err) return res.send(err.details[0].message);
        var cmnt = {
          id: _model.comments.length + 1,
          article_id: value.article_id,
          body: value.body,
          createdOn: new Date(),
        };

        _model.comments.push(cmnt);

        res.status(200).json({status:200, message:'comment successfully posted', data:cmnt});
      });
    } 

  },
  
  {// function to post a comment
    key: "articlePost",
    value: function articlePost(req, res) {
      _joi["default"].validate(req.body, _schema.articleschema, function (err, value) {
        if (err) return res.send(err.details[0].message);
        var story = {
          id: _model.articles.length + 1,
          author: value.author,
          category: value.category,
          title: value.title,
          body: value.body,
          date: new Date(),
        };
        

        _model.articles.push(story);

        res.status(201).json({status:201, message:'article successfully created', data:story})
      });
    } 

  }]);

  return articleController;
}();

var _default = new articleController();

exports["default"] = _default;