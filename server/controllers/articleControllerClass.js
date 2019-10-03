/* eslint-disable linebreak-style */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* eslint-disable class-methods-use-this */
import joi from '@hapi/joi';
import {
  articles, articleflags, commentflags, comments, users,
} from '../model/model';
import {
  articleschema, commentflagschema,
  articleflagschema, commentschema, articlepatchschema,
} from '../helpers/schema';

class articleController {
// function to select all reported articles
  getallreparticles(req, res) {
    res.status(200).json({ status: 200, message: 'claims successfully selected', data: articleflags });
  }

  // function to select all articles
  getallarticles(req, res) { res.status(200).json({ status: 200, message: 'article successfully selected', data: articles.reverse() }); }

  // function to select an article

  specifedarticle(req, res) {
    const article = articles.find((article) => article.id == req.params.id);
    if (!article) return res.send('there is no artile with this Id');
    const comment = comments.filter((comment) => comment.article_id == article.id);
    res.status(200).json({ status: 200, message: 'article successfully selected', article, comment });
  }

  // function to to delete a specified article

  deleteArticle(req, res) {
    joi.validate(req.body, articleschema, (err, value) => {
      if (err) return res.send(err.details[0].message);
      const article = articles.find((article) => article.id === parseInt(req.params.id, 10));
      if (!article) return res.status(404).send('the id provided does not exist');
      const index = articles.indexOf(article);
      articles.splice(index, 1);
      res.json({ status: 200, message: 'article successfully deleted', data: article });
    });
  }


  // function to update an article
  articlePatch(req, res) {
    joi.validate(req.body, articlepatchschema, (err, value) => {
      if (err) return res.send(err.details[0].message);
      console.log(req.authUser);
      const art = articles.find((art) => art.id === parseInt(req.params.id, 10) && art.auth_id === req.authUser.id);
      if (!art) return res.send('the stated article doesnt exist or you are not the author ');
      art.title = value.title;
      art.category = value.category;
      art.body = value.body;
      return res.json({ status: 200, message: 'article successfully updated', data: art });
    });
  }

  // function to create a comment
  commentPost(req, res) {
    joi.validate(req.body, commentschema, (err, value) => {
      if (err) return res.send(err.details[0].message);
      const cmtart = articles.find((cmtart) => cmtart.id === value.article_id);
      const cmtauth = users.find((cmtauth) => cmtauth.id === value.auth_id);
      if (!cmtauth) return res.send('the stated user id doesnt exist');
      if (!cmtart) return res.send('the stated article id doesnt exist ');
      const cmnt = {
        id: comments.length + 1,
        auth_id: value.auth_id,
        article_id: value.article_id,
        comment: value.comment,
        createdOn: new Date(),
      };
      comments.push(cmnt);
      res.status(201).json({ status: 201, message: 'comment successfully created', data: cmnt });
    });
  }

  // function to create an article
  articlePost(req, res) {
    joi.validate(req.body, articleschema, (err, value) => {
      if (err) return res.send(err.details[0].message);
      const user = users.find((userId) => userId.auth_id === req.authUser.id);
      if (!user) return res.send('the stated user id doesnt exist ');
      const story = {
        id: articles.length + 1,
        author: user.email,
        category: value.category,
        title: value.title,
        body: value.body,
        date: new Date(),
      };
      articles.push(story);
      res.status(201).json({ status: 201, message: 'article successfully created', data: story });
    });
  }

  // function to create articleflag
  articleflag(req, res) {
    joi.validate(req.body, articleflagschema, (err, value) => {
      if (err) return res.send(err.details[0].message);
      const art = articles.find((art) => art.id === value.article_id);
      if (!art) return res.send('the stated article id doesnt exist ');
      const flg = {
        id: articleflags.length + 1,
        article_id: value.article_id,
        reason: value.reason,
        description: value.description,
      };
      articleflags.push(flg);
      return res.status(200).json({ status: 200, message: 'claim successfully posted', data: flg });
    });
  }

  // function to create commentflag
  commentflag(req, res) {
    joi.validate(req.body, commentflagschema, (err, value) => {
      if (err) return res.send(err.details[0].message);
      const cmt = comments.find((cmt) => cmt.id === value.comment_id);
      if (!cmt) return res.send('the stated comment id doesnt exist ');
      const flg = {
        id: commentflags.length + 1,
        comment_id: value.comment_id,
        reason: value.reason,
        description: value.description,
      };
      commentflags.push(flg);
      return res.status(200).json({ status: 200, message: 'claim successfully posted', data: flg });
    });
  }
}

export default new articleController();
