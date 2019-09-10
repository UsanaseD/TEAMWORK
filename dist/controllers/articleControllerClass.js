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

  _createClass(articleController, [{// function to select a specified article
    key: "specifedarticle",
    value: function specifedarticle(req, res) {
      var slctdart = _model.articles.find(function (slctdart) {
        return slctdart.id == req.params.id;
      });
      
      if (!slctdart) return res.send('there is no article with this Id');

      var slctdcmt = _model.comments.find(function (slctdcmt) {
        return slctdcmt.article_id === slctdart.id && slctdcmt.comment;
      });
      var i;
      var comment = {

        article_id: slctdart.id,
        comment: slctdcmt.comment,
      };
 for(i=0;i>=comment.length;i++){

      _model.comments.push(comment);
 }
      res.status(200).json({status:200, message:'article successfully selected', data: slctdart,comment});
    } 

  }, 
  {//function to delete an article
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

        res.status(200).json({status:200, message:'article successfully deleted', data:article});
      });
    } 

  },
  
  { //function to create a comment flag 
    key: "commentflag",
    value: function articleflag(req, res) {
      _joi["default"].validate(req.body, _schema.commentflagschema, function (err, value) {
        if (err) return res.send(err.details[0].message);
        var xstcmnt = _model.comments.find(function (xstcmnt ) {
          return xstcmnt.id === value.comment_id;
        });

        if (!xstcmnt ) return res.status(405).send('comment id does not exist');
        var flga = {
          id: _model.commentflags.length + 1,
          comment_id: value.comment_id,
          reason: value.reason,
          description: value.description
        };

        _model.commentflags.push(flga);

        return res.status(200).json({status:200, message:'claim successfully posted', data:flga});
      });
    }
  },
{ //function to create an article flag 
    key: "articleflag",
    value: function articleflag(req, res) {
      _joi["default"].validate(req.body, _schema.articleflagschema, function (err, value) {
        if (err) return res.send(err.details[0].message);
        var xstdart = _model.articles.find(function (xstdart) {
          return xstdart.id === value.article_id;
        });

        if (!xstdart) return res.status(405).send('artical id does not exist');
        var flg = {
          id: _model.articleflags.length + 1,
          article_id: value.article_id,
          reason: value.reason,
          description: value.description
        };

        _model.articleflags.push(flg);

        return res.status(200).json({status:200, message:'claim successfully posted', data:flg});
      });
    }
  },
  
  {//function to create a comment route
    key: "commentPost",
    value: function commentPost(req, res) {
      _joi["default"].validate(req.body, _schema.commentschema, function (err, value) {
        if (err) return res.send(err.details[0].message);
        var cmntdart = _model.articles.find(function (cmntdart) {
          return cmntdart.id === value.article_id && cmntdart.body && cmntdart.title;
        });

        if (!cmntdart) return res.status(405).send('artical id does not exist');
        var cmnt = {
          id: _model.comments.length + 1,
          article_id: value.article_id,
          articleTitle: cmntdart.title,
          article: cmntdart.body,
          comment: value.comment,
          createdOn: new Date(),
        };

        _model.comments.push(cmnt);

        res.status(200).json({status:200, message:'comment successfully posted', data:cmnt});
      });
    } 

  },
  
  {// function to post an article
    key: "articlePost",
    value: function articlePost(req, res) {
      _joi["default"].validate(req.body, _schema.articleschema, function (err, value) {
        if (err) return res.send(err.details[0].message);
        var story = {
          id: _model.articles.length + 1,
          auth_id: value.artauth_id,
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