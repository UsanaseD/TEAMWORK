import joi from '@hapi/joi';
import { sign } from 'jsonwebtoken';
import bycript from 'bcrypt';
import { users } from '../model/model';
import { loginschema, signupschema } from '../helpers/schema';
import userResponse from '../helpers/userReturn';


class userController {
  // function to create login feature

  static loginPost(req, res) {
    joi.validate(req.body, loginschema, (err, value) => {
      if (err) return res.send(err.details[0].message);
      const foundUser = users.find((user) => user.email === value.email);
      if (!foundUser) return res.status(405).send('email does not exist');
      bycript.compare(value.password, foundUser.password, (err, result) => {
        if (!result) return res.send('password doesnt match');
        sign({
          id: foundUser.id,
          email: foundUser.email,
          admin: foundUser.admin,
        },
        process.env.SECRETKEY, (err, data) => {
          foundUser.token = data;
          res.status(200).json({ status: 200, message: 'User succefully Logged In', data: userResponse(foundUser) });
        });
      });
    });
  }


  // function to create signup feature
  static signupPost(req, res) {
    joi.validate(req.body, signupschema, (err, value) => {
      if (err) return res.send(err.details[0].message);
      bycript.hash(value.password, 9, (err, hashdpsswd) => {
        if (err) return res.send('sorry reenter your password');
        const foundUser = users.find((user) => user.email === value.email);
        if (foundUser) return res.status('409').send('email already exists');
        const Newuser = {
          id: users.length + 1,
          firstname: value.firstname,
          lastname: value.lastname,
          gender: value.gender,
          jobtitle: value.jobtitle,
          depart: value.depart,
          address: value.address,
          admin: value.admin,
          email: value.email,
          password: hashdpsswd,
        };
        users.push(Newuser);
        sign({
          email: Newuser.email,
          password: Newuser.password,
          admin: Newuser.admin,
        },

        process.env.SECRETKEY, (err, data) => {
          Newuser.token = data;
          res.status(201).json({ status: 201, message: 'User succefully Signed up', data: userResponse(Newuser) });
        });
      });
    });
  }
}
export default userController;
