// import swaggerUi from 'swagger-ui-express';
import routUserController from '../controllers/userControllerClass';
import authMidleware from '../midleware/midleware';
import adminMidware from '../midleware/adminmware';
import articleControllerClass from '../controllers/articleControllerClass';
// import swaggerific from '../../swagger.json';


export default (app) => {
  app.post('/api/v1/auth/signup', routUserController.signupPost);
  app.post('/api/v1/auth/login', routUserController.loginPost);
  app.post('/api/v1/article', authMidleware, articleControllerClass.articlePost);
  app.post('/api/v1/comment', authMidleware, articleControllerClass.commentPost);
  app.post('/api/v1/articleflag', authMidleware, articleControllerClass.articleflag);
  app.post('/api/v1/commentflag', authMidleware, articleControllerClass.commentflag);

  app.patch('/api/v1/article/:id', authMidleware, articleControllerClass.articlePatch);


  app.get('/api/v1/reparticle', adminMidware, articleControllerClass.getallreparticles);
  app.get('/api/v1/article/:id', authMidleware, articleControllerClass.specifedarticle);
  app.get('/api/v1/article', authMidleware, articleControllerClass.getallarticles);

  app.delete('/api/v1/article/:id', authMidleware, articleControllerClass.deleteArticle);

  // app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerific));
};
