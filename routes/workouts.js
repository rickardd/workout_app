var express = require('express');
var router = express.Router();
var queries = require('../services/db');



// GET /
// All workouts
router.get('/', function( req, res ) {
  queries.findWorkouts( function ( doc ) {
  	console.log('NOTE ROUTE ALL WORKOUTS');
    res.send( doc )
  });
});

// GET /:id
router.get('/:id', function( req, res ) {
  const id = req.params.id;
  queries.findWorkout( id, function ( doc ) {
    res.send( doc )
  });
});

// POST /
router.post('/', function( req, res ) {
  const doc = { workout: req.body.workout };
  queries.createWorkout(doc, function( doc ) {
    console.log(doc)
    res.send( doc )
  });
});


module.exports = router;
