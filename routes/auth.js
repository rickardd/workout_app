var express = require('express');
var router = express.Router();
var queries = require('../services/db');

// POST /
router.post('/login', function( req, res ) {
  const { username, password } = req.body;
  console.log('LOGIN', username, password, req.body)
  queries.login(username, password, function( user ) {

    console.log(user)
    if (!user) {
      res.status(403).send({
        error: 'The login information was incorrect (username)'
      })
      return
    }
    const isPasswordValid = password === user.password
    if (!isPasswordValid) {
      res.status(403).send({
        error: 'The login information was incorrect (password)'
      })
      return
    }
    res.send( user )
  });
});

module.exports = router;
