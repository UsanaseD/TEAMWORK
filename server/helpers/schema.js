import joi from '@hapi/joi';


export const articleschema = joi.object().keys({
  auth_id: joi.number().integer(),
  author: joi.string().email({ minDomainSegments: 2 }),
  category: joi.string().regex(/^[a-zA-Z]{3,30}$/),
  title: joi.string(),
  body: joi.string(),
});
export const commentschema = joi.object().keys({
  article_id: joi.number().integer(),
  auth_id: joi.number().integer(),
  comment: joi.string(),
});

export const articleflagschema = joi.object().keys({
  article_id: joi.number().integer(),
  reason: joi.string(),
  description: joi.string(),
});
export const commentflagschema = joi.object().keys({
  comment_id: joi.number().integer(),
  reason: joi.string(),
  description: joi.string(),
});
export const loginschema = joi.object().keys({
  email: joi.string().email({ minDomainSegments: 2 }).required(),
  password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
});
export const signupschema = joi.object().keys({
  email: joi.string().email({ minDomainSegments: 2 }).required(),
  firstname: joi.string().regex(/^[a-zA-Z]{3,30}$/),
  lastname: joi.string().regex(/^[a-zA-Z]{3,30}$/),
  address: joi.string().alphanum().min(5).max(20),
  gender: joi.string().regex(/^['male','female']{4,6}$/),
  jobtitle: joi.string().regex(/^[a-zA-Z]{2,30}$/),
  depart: joi.string().regex(/^[a-zA-Z]{2,30}$/),
  admin: joi.boolean(),
  password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
});
export const articlepatchschema = joi.object().keys({
  category: joi.string().regex(/^[a-zA-Z]{3,30}$/),
  title: joi.string(),
  body: joi.string(),
});
