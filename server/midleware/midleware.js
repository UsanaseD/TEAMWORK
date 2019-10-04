import jsonwebtoken from 'jsonwebtoken';
import secretkey from '../config/config';


export default (req, res, next) => {
  if (!req.headers.authorization) return res.status(401).json({ error: 'You are unauthorized user' });
  const token = req.headers.authorization.split(' ')[1];
  let userData;
  jsonwebtoken.verify(token, secretkey.SECRETKEY, (err, data) => {
    if (err) return res.status(403).send('invalid token');
    userData = data;
  });
  req.authUser = userData;
  next();
};
