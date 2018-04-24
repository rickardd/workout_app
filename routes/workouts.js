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
  // let workout = req.body.workout
  // workout.userRef = DBRef("users", req.body.currentUserIdTemp)
  // workout.userRef = DBRef("users", "5adc40011460df075d84b1e5")
  // workout.userRef =  {"$ref" : "users", "$id" : "5adc40011460df075d84b1e5"} // mongo detects and creates a DBRef... DBRef("users", "5adc40011460df075d84b1e5")
  const doc = { workout: req.body.workout };
  console.log('----REF----', doc )
  queries.createWorkout(doc, req.body.currentUserIdTemp, function( doc ) {
    console.log('-- workout created :', doc.insertedIds[0])
    res.send( doc.insertedIds[0] )
  });
});

module.exports = router;
