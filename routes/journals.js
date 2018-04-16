var express = require('express');
var router = express.Router();
var queries = require('../services/db');

// POST /
router.post('/', function( req, res ) {
  const workoutId = req.body.workoutId;
  const doc = req.body;
  queries.createJournal(workoutId, doc, function( doc ) {
    console.log(doc)
    res.send( doc )
  });
});

module.exports = router;
