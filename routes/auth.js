const express = require('express')
const router = express.Router()
const queries = require('../services/db')
const bcrypt = require('bcrypt-nodejs')

// POST /
router.post('/login', function( req, res ) {
  const { username, password } = req.body;
  queries.login(username, password, function( user ) {
    if (!user) {
      res.status(403).send({
        error: 'The login information was incorrect (username)'
      })
      return
    }
    const isPasswordValid = bcrypt.compareSync(password, user.hash)
    if (!isPasswordValid) {
      res.status(403).send({
        error: 'The login information was incorrect (password)'
      })
      return
    }
    delete user.hash
    res.send( user )
  });
});

module.exports = router;
