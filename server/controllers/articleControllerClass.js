
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
    if (!article) return res.status(404).json('there is no artile with this Id');
    const comment = comments.filter((comment) => comment.article_id == article.id);
    res.status(200).json({
      status: 200, message: 'article successfully selected', article, comment,
    });
  }

  // function to to delete a specified article

  deleteArticle(req, res) {
    joi.validate(req.body, articleschema, (err, value) => {
      if (err) return res.send(err.details[0].message);
      const article = articles.find((article) => article.id === parseInt(req.params.id, 10) && article.author === req.authUser.email);
      if (!article) return res.status(404).json({ message: 'the id provided does not exist or you are not the author' });
      const index = articles.indexOf(article);
      articles.splice(index, 1);
      res.status(200).json({ status: 200, message: 'article successfully deleted', data: article });
    });
  }


  // function to update an article
  articlePatch(req, res) {
    joi.validate(req.body, articlepatchschema, (err, value) => {
      if (err) return res.send(err.details[0].message);
      const art = articles.find((art) => art.id === parseInt(req.params.id, 10) && art.author === req.authUser.email);
      if (!art) return res.status(404).json('the stated article doesnt exist or you are not the author ');
      art.title = value.title;
      art.category = value.category;
      art.body = value.body;
      return res.status(200).json({ status: 200, message: 'article successfully updated', data: art });
    });
  }

    // function to display articles of a same author
    authorArticles(req, res) {
      joi.validate(req.body, articlepatchschema, (err, value) => {
        if (err) return res.send(err.details[0].message);
        const user = users.find((user) => user.id === parseInt(req.params.id, 10));
        if (!user) return res.status(404).json({ message: 'the id provided does not exist or you are not the author' });
        const art = articles.filter((art) => art.author === user.email);
        return res.status(200).json({ status: 200, message: 'articles successfully retrieved', data: art.reverse() });
      });
    }

  // function to create a comment
  commentPost(req, res) {
    joi.validate(req.body, commentschema, (err, value) => {
      if (err) return res.send(err.details[0].message);
      const cmtart = articles.find((cmtart) => cmtart.id === value.article_id);
      if (!cmtart) return res.status(404).json('the stated article id doesnt exist ');
      const cmnt = {
        id: comments.length + 1,
        auth_email: req.authUser.email,
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
      const user = users.find((userId) => userId.email === req.authUser.email);
      if (!user) return res.status(404).send('the stated user id doesnt exist ');
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
      if (!art) return res.status(404).json('the stated article id doesnt exist ');
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
      if (!cmt) return res.status(404).json('the stated comment id doesnt exist ');
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
