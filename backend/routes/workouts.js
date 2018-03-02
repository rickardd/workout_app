var express = require('express');
var router = express.Router();
var queries = require('../services/db');


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
