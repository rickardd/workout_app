var express = require('express');
var router = express.Router();
var queries = require('../services/db');

// POST /
router.post('/', function( req, res ) {
  const workoutId = req.body.workoutId;
  const doc = req.body;
  queries.addJournal(workoutId, doc, function( doc ) {
    res.send( doc )
  });
});

router.post('/exercise', function( req, res ) {
  const workoutId = req.body.workoutId;
  const sessionId = req.body.sessionId;
  const doc = req.body;
  queries.addExerciseToJournal(workoutId, sessionId, doc, function( doc ) {
    res.send( doc )
  });
});

router.put('/close', function( req, res ) {
  const journalId = req.body.journalId;
  const doc = req.body;
  console.log("CLOSE PUT")
  queries.closeJournal(journalId, function( doc ) {
    res.send( doc )
  });
});

module.exports = router;
