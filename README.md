[![Coverage Status](https://coveralls.io/repos/github/UsanaseD/TEAMWORK/badge.svg?branch=develop)](https://coveralls.io/github/UsanaseD/TEAMWORK?branch=develop)[![Build Status](https://travis-ci.org/UsanaseD/TEAMWORK.svg?branch=develop)](https://travis-ci.org/UsanaseD/TEAMWORK)

## TEAMWORK
Teamwork is an ​internal social network for organizations’ employees. The goal of this application is to facilitate more interaction between colleagues and facilitate team bonding. 

## Install / Getting Started

make sure you have [Node Js](https://nodejs.org/en/download/) running on your system to Install TEAMWORK

## Folder Structure
Project Structure

```bash
Server/
   config/
   controllers/
   helpers/
   middleware/
   model/
   routes/
   test/
   server.js
```
## Developing
To run this Web App follow the following steps

```bash
git clone https://github.com/UsanaseD/TEAMWORK

cd TEAMWORK
 npm install   #'Install dependencies'
 npm run start #'past http://localhost:2000/ in your browser'
```
## Building

```bash
npm run transpile # ' Transpile your ES6 code into ./dist forlder'
npm run test  #'run the test '
```
## Features

* Authentication system
* API endpoints

## EndPoints

To test all these endpoints localally you should use postman chrom.
 check their HTTP Methods (before endpoints)

* article endpoints

```bash
(POST)/api/v1/article #'endpoint to post an article'
(GET)/api/v1/article/:id # 'endpoint to select a specified article'
(GET)/api/v1/reparticle #'endpoint to select all ReportedArticles'
(GET)/api/v1/article #'endpoint to select all articles'
(PATCH)/api/v1/article/:id # 'endpoint to update an article'
(DELETE)/api/v1/article/:id #'endpoint to delete an article'

```

* comment endpoint

```bash
(POST)/api/v1/comment #'endpoint to post a comment'

```

* flagging endpoints

```bash
(POST)/api/v1/articleflag #'endpoint to flag an article'
(POST)/api/v1/commentflag #'endpoint to flag a comment'

```


* Authentication endpoints

```bash
(POST)/api/v1/auth/signup #'endpoint to signup'
(POST)/api/v1/auth/login  #'endpoint to login'
```

