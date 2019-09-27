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
    key: "getallreparticles",
    // function to select all reported articles
    value: function getallreparticles(req, res) {
      res.status(200).json({
        status: 200,
        message: 'claims successfully selected',
        data: _model.articleflags
      });
    } // function to select all articles

  }, {
    key: "getallarticles",
    value: function getallarticles(req, res) {
      res.status(200).json({
        status: 200,
        message: 'article successfully selected',
        data: _model.articles.reverse()
      });
    } // function to select an article

  }, {
    key: "specifedarticle",
    value: function specifedarticle(req, res) {
      var article = _model.articles.find(function (article) {
        return article.id == req.params.id;
      });

      if (!article) return res.send('there is no artile with this Id');
      var data = {
        article: article
      };

      var comment = _model.comments.filter(function (comment) {
        return comment.article_id == article.id;
      });

      res.status(200).json({
        status: 200,
        message: 'article successfully selected',
        data: data,
        comment: comment
      });
    } // function to to delete a specified article

  }, {
    key: "deleteArticle",
    value: function deleteArticle(req, res) {
      _joi["default"].validate(req.body, _schema.articleschema, function (err, value) {
        if (err) return res.send(err.details[0].message);

        var article = _model.articles.find(function (article) {
          return article.id == parseInt(req.params.id, 10);
        });

        if (!article) return res.status(404).send('the id provided does not exist');

        var index = _model.articles.indexOf(article);

        _model.articles.splice(index, 1);

        res.json({
          status: 200,
          message: 'article successfully deleted',
          data: article
        });
      });
    } // function to update an article

  }, {
    key: "articlePatch",
    value: function articlePatch(req, res) {
      _joi["default"].validate(req.body, _schema.articlepatchschema, function (err, value) {
        if (err) return res.send(err.details[0].message);

        var art = _model.articles.find(function (art) {
          return art.id == parseInt(req.params.id, 10);
        });

        if (!art) return res.send('the stated id doesnt exist ');
        art.title = value.title;
        art.category = value.category;
        art.body = value.body;
        return res.json({
          status: 200,
          message: 'article successfully updated',
          data: art
        });
      });
    } // function to create a comment

  }, {
    key: "commentPost",
    value: function commentPost(req, res) {
      _joi["default"].validate(req.body, _schema.commentschema, function (err, value) {
        if (err) return res.send(err.details[0].message);

        var cmtart = _model.articles.find(function (cmtart) {
          return cmtart.id == value.article_id;
        });

        var cmtauth = _model.users.find(function (cmtauth) {
          return cmtauth.id == value.auth_id;
        });

        if (!cmtauth) return res.send('the stated user id doesnt exist');
        if (!cmtart) return res.send('the stated article id doesnt exist ');
        var cmnt = {
          id: _model.comments.length + 1,
          auth_id: value.auth_id,
          article_id: value.article_id,
          comment: value.comment,
          createdOn: new Date()
        };

        _model.comments.push(cmnt);

        res.status(201).json({
          status: 201,
          message: 'comment successfully created',
          data: cmnt
        });
      });
    } // function to create an article

  }, {
    key: "articlePost",
    value: function articlePost(req, res) {
      _joi["default"].validate(req.body, _schema.articleschema, function (err, value) {
        if (err) return res.send(err.details[0].message);

        var user = _model.users.find(function (user) {
          return user.id === value.auth_id;
        });

        if (!user) return res.send('the stated user id doesnt exist ');
        var story = {
          id: _model.articles.length + 1,
          auth_id: user.id,
          author: user.email,
          category: value.category,
          title: value.title,
          body: value.body,
          date: new Date()
        };

        _model.articles.push(story);

        res.status(201).json({
          status: 201,
          message: 'article successfully created',
          data: story
        });
      });
    } // function to create articleflag

  }, {
    key: "articleflag",
    value: function articleflag(req, res) {
      _joi["default"].validate(req.body, _schema.articleflagschema, function (err, value) {
        if (err) return res.send(err.details[0].message);

        var art = _model.articles.find(function (art) {
          return art.id === value.article_id;
        });

        if (!art) return res.send('the stated article id doesnt exist ');
        var flg = {
          id: _model.articleflags.length + 1,
          article_id: value.article_id,
          reason: value.reason,
          description: value.description
        };

        _model.articleflags.push(flg);

        return res.status(200).json({
          status: 200,
          message: 'claim successfully posted',
          data: flg
        });
      });
    } // function to create commentflag

  }, {
    key: "commentflag",
    value: function commentflag(req, res) {
      _joi["default"].validate(req.body, _schema.commentflagschema, function (err, value) {
        if (err) return res.send(err.details[0].message);

        var cmt = _model.comments.find(function (cmt) {
          return cmt.id === value.comment_id;
        });

        if (!cmt) return res.send('the stated comment id doesnt exist ');
        var flg = {
          id: _model.commentflags.length + 1,
          comment_id: value.comment_id,
          reason: value.reason,
          description: value.description
        };

        _model.commentflags.push(flg);

        return res.status(200).json({
          status: 200,
          message: 'claim successfully posted',
          data: flg
        });
      });
    }
  }]);

  return articleController;
}();

var _default = new articleController();

exports["default"] = _default;