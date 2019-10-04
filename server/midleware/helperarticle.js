import joi from '@hapi/joi';
import {
  articles, articleflags, commentflags, comments, users,
} from '../model/model';
import {
  articleschema, commentflagschema,
  articleflagschema, commentschema, articlepatchschema,
} from '../helpers/schema';

//validation for article post 
export const articleMidleware = (req, res, next)=>{
  let story;
    joi.validate(req.body, articleschema, (err, value) => {
        if (err) return res.send(err.details[0].message);
        const user = users.find((userId) => userId.email === req.authUser.email);
        if (!user) return res.status(404).send('the stated user id doesnt exist ');
         story = {
          id: articles.length + 1,
          author: user.email,
          category: value.category,
          title: value.title,
          body: value.body,
          date: new Date(),
        };
        articles.push(story);  
      });

      req.newStory = story;
        next();
}
//validation for article flag controller
export const artFlagMidleware = (req,res,next)=>{
  let flg
joi.validate(req.body, articleflagschema, (err, value) => {
  if (err) return res.send(err.details[0].message);
  const art = articles.find((art) => art.id === value.article_id);
  if (!art) return res.status(404).json('the stated article id doesnt exist ');
  flg = {
    id: articleflags.length + 1,
    article_id: value.article_id,
    reason: value.reason,
    description: value.description,
  };
  articleflags.push(flg);
});
req.artFlag= flg;
next();
}
//validation for comment flag controller
export const cmtFlagMidleware = (req,res,next)=>{
  let flg
joi.validate(req.body, commentflagschema, (err, value) => {
  if (err) return res.send(err.details[0].message);
  const cmt = comments.find((cmt) => cmt.id === value.comment_id);
  if (!cmt) return res.status(404).json('the stated comment id doesnt exist ');
   flg = {
    id: commentflags.length + 1,
    comment_id: value.comment_id,
    reason: value.reason,
    description: value.description,
  };
  commentflags.push(flg);
});
req.cmtFlag= flg;
next();
}

//validation for comment post 
export const commentMidleware = (req, res, next)=>{
  let cmnt
joi.validate(req.body, commentschema, (err, value) => {
  if (err) return res.send(err.details[0].message);
  const cmtart = articles.find((cmtart) => cmtart.id === value.article_id);
  if (!cmtart) return res.status(404).json('the stated article id doesnt exist ');
cmnt = {
    id: comments.length + 1,
    auth_email: req.authUser.email,
    article_id: value.article_id,
    comment: value.comment,
    createdOn: new Date(),
  };
  comments.push(cmnt);
});

req.newComment = cmnt;
next();

}

//validation for articles that belongs to the same author
export const AuthArtMidleware = (req, res, next)=>{
let art
joi.validate(req.body, articlepatchschema, (err, value) => {
  if (err) return res.send(err.details[0].message);
  const user = users.find((user) => user.id === parseInt(req.params.id, 10));
  if (!user) return res.status(404).json({ message: 'the id provided does not exist or you are not the author' });
   art = articles.filter((art) => art.author === user.email);
});
req.allArt = art;
next();
}

//validation for patching an article
export const PatchArtMidleware = (req,res,next)=>{
  let art
  joi.validate(req.body, articlepatchschema, (err, value) => {
    if (err) return res.send(err.details[0].message);
    const art = articles.find((art) => art.id === parseInt(req.params.id, 10) && art.author === req.authUser.email);
    if (!art) return res.status(404).json('the stated article doesnt exist or you are not the author ');
    art.title = value.title;
    art.category = value.category;
    art.body = value.body;;
  });
  req.editArt = art ;
  next();
}

//validation for deleting an article
export const deleteArticleMidleware = (req,res,next)=>{
  let article
  joi.validate(req.body, articleschema, (err, value) => {
    if (err) return res.send(err.details[0].message);
     article = articles.find((article) => article.id === parseInt(req.params.id, 10) && article.author === req.authUser.email);
    if (!article) return res.status(404).json({ message: 'the id provided does not exist or you are not the author' });
    const index = articles.indexOf(article);
    articles.splice(index, 1);
  });
  req.delArt= article;
  next();
}

//validation for getting a single article
export const getSingleArtMidleware = (req,res,next)=>{
  let comment
const article = articles.find((article) => article.id == req.params.id);
if (!article) return res.status(404).json('there is no artile with this Id');
comment = comments.filter((comment) => comment.article_id == article.id);
});
req.getArt=article,comment;
next();
}