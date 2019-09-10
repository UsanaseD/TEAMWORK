"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(NewUser,res) {
  
  var user = {
    statu: 201,
    message: 'User created Successfully',
    data:{
    id: NewUser.id,
    firstname: NewUser.firstname,
    lastname: NewUser.lastname,
    gender: NewUser.gender,
    jobtitle: NewUser.jobTitle,
    depart: NewUser.depart,
    email: NewUser.email,
    address: NewUser.address,
    admin: NewUser.admin,
    token: NewUser.token
    }
  };
  return user;
};

exports["default"] = _default;