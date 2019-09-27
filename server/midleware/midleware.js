/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import jsonwebtoken from 'jsonwebtoken';
import secretkey from '../config/config';

export default (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  jsonwebtoken.verify(token, secretkey.SECRETKEY, (err, data) => {
    if (err) return res.status(403).send('invalid token');
    next();
  });
};
