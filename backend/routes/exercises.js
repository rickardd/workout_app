var express = require('express');
var router = express.Router();
var queries = require('../services/db');

// POST /
router.post('/', function( req, res ) {
  const workoutId = req.body.workoutId;
  const doc = req.body.exercises;

  console.log("DOC", req.body);

  queries.createExercises(workoutId, doc, function( doc ) {
    res.send( doc )
  });
});

// GET /:id
router.get('/:id', function( req, res ) {
  const id = req.params.id;
  queries.findExercises( id, function ( doc ) {
    res.send( doc )
  });
});

module.exports = router;
