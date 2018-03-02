var express = require('express');
var router = express.Router();
var queries = require('../services/db');

// POST /
router.get('/', function( req, res ) {
  // const doc = { workout: req.body.name };
  const doc = { workout: 'test-workout' };
  queries.createWorkout(doc, function( doc ) {
    console.log(doc)
    res.send( doc )
  });
});


module.exports = router;
