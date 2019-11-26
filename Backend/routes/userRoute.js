var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var kafka = require('../kafka/client');
var jwt_decode = require('jwt-decode');

router.post('/register', function(req, res) {
    let request = {
      body: req.body,
      message: 'USER_REGISTRATION'
    }
    kafka.make_request('user', request , res);
});

router.post('/login', function(req, res) {
  
  let request = {
    body: req.body,
    message: 'USER_LOGIN'
  }
  kafka.make_request('user', request , res);
});

router.get('/userProfile', function(req, res) {
  
  let request = {
    body: req.body,
    message: 'USER_PROFILE_GET'
  }
  kafka.make_request('user', request , res);
});

router.post('/userProfile', function(req, res) {
  
  let request = {
    body: req.body,
    message: 'USER_PROFILE_UPDATION'
  }
  kafka.make_request('user', request , res);
});


//GET NEWS FEED 
router.get('/newsfeed', function(req, res) {
  let user_id = jwt_decode(req.headers.authorization).id;
  let request = {
    body: { user_id : user_id },
    message: 'GET_NEWS_FEED'
  }
  kafka.make_request('user', request , res);
})

module.exports = router;