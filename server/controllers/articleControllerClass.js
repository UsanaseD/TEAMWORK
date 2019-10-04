
import {
  articles, articleflags, 
} from '../model/model';

class articleController {
// function to select all reported articles
  getallreparticles(req, res) {
    res.status(200).json( articleflags);
  }

  // function to select all articles
  getallarticles(req, res) 
  { 
    res.status(200).json( articles.reverse() ); 
  }

  // function to select an article

  specifedarticle(req, res) {
res.status(200).json(req.getArt)
  }

  // function to to delete a specified article

  deleteArticle(req, res) {
    res.status(200).json( req.delArt)
  }


  // function to update an article
  articlePatch(req, res) {
    res.status(200).json(req.editArt)
  }

    // function to display articles of a same author
    authorArticles(req, res) {
      res.status(200).json(req.allArt.reverse())
    }

  // function to create a comment
  commentPost(req, res) {
    res.status(200).json(req.newComment)
  }

  // function to create an article
  articlePost(req, res) {
   res.status(201).json(req.newStory)
  }

  // function to create articleflag
  articleflag(req, res) {
res.status(200).json(req.artFlag)
  }
  // function to create commentflag
  commentflag(req, res) {
res.status(200).json(req.cmtFlag)
  }
}

export default new articleController();
