var express = require('express');
var router = express.Router();
var queries = require('../services/db');

// POST /
router.post('/', function( req, res ) {
  const workoutId = req.body.workoutId;
  const doc = req.body.set;
  queries.createSet(workoutId, doc, function( doc ) {
    res.send( doc )
  });
});

// GET /:id
router.get('/:id', function( req, res ) {
  const id = req.params.id;
  queries.findSet( id, function ( doc ) {
    res.send( doc )
  });
});

module.exports = router;
