import swaggerUi from 'swagger-ui-express';
import routUserController from '../controllers/userControllerClass';
import authMidleware from '../midleware/midleware';
import adminMidware from '../midleware/adminmware';
import articleControllerClass from '../controllers/articleControllerClass';
import swaggerific from '../../swagger.json';
import {articleMidleware,commentMidleware,AuthArtMidleware,
  PatchArtMidleware,deleteArticleMidleware,getSingleArtMidleware,
  artFlagMidleware,cmtFlagMidleware
} from '../midleware/helperarticle';


export default (app) => {
  app.post('/api/v1/auth/signup', routUserController.signupPost);
  app.post('/api/v1/auth/login', routUserController.loginPost);
  app.post('/api/v1/article', authMidleware,articleMidleware, articleControllerClass.articlePost);
  app.post('/api/v1/comment', authMidleware,commentMidleware, articleControllerClass.commentPost);
  app.post('/api/v1/articleflag', authMidleware,artFlagMidleware, articleControllerClass.articleflag);
  app.post('/api/v1/commentflag', authMidleware,cmtFlagMidleware, articleControllerClass.commentflag);

  app.patch('/api/v1/article/:id', authMidleware,PatchArtMidleware, articleControllerClass.articlePatch);


  app.get('/api/v1/reparticle', adminMidware, articleControllerClass.getallreparticles);
  app.get('/api/v1/article/:id', authMidleware, getSingleArtMidleware,articleControllerClass.specifedarticle);
  app.get('/api/v1/article', authMidleware, articleControllerClass.getallarticles);
  app.get('/api/v1/author/article/:id', authMidleware,AuthArtMidleware,articleControllerClass.authorArticles);

  app.delete('/api/v1/article/:id', authMidleware, deleteArticleMidleware ,articleControllerClass.deleteArticle);


  app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerific));
};
