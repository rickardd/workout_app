const express = require('express')
const router = express.Router()
const queries = require('../services/db')

// GET /
router.get('/', function( req, res ) {
  queries.findUsers( function( docs ) {
    res.send(docs)
  });
});

// GET /:id
router.get('/:id', function( req, res ) {
  const id = req.params.id;
  queries.findUser( id, function ( doc ) {
    res.send( doc )
  });
});

// GET /:id/workouts
router.get('/:id/workouts', function( req, res ) {
  const id = req.params.id;
  queries.findWorkoutForUser( id, function ( doc ) {
    console.log('GOT DATA', doc)
    res.send( doc )
  });
});

// POST /
router.post('/', function( req, res ) {
  const doc = req.body
  queries.insertUser(doc, function( doc ) {
    console.log(doc)
    res.send( doc )
  });
});

// PUT /:id
router.put('/:id', function( req, res ) {
  const id = req.params.id;
  const doc = { name: req.body.name, surname: req.body.surname };

  queries.updateUser( id, doc, function () {
    res.send(doc);
  });
});

// DELETE /:id
router.delete('/:id', function( req, res ) {
  const id = req.params.id;

  queries.deleteUser( id, function ( doc ) {
    res.send(doc);
  });
});

module.exports = router;
