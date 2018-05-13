const MongoClient = require('mongodb').MongoClient;
const mongo = require('mongodb');
const bcrypt = require('bcrypt-nodejs')

var url = process.env.MONGOLAB_URI || 'mongodb://127.0.0.1:27017';
const dbName = 'workout_app';

module.exports.login = function( username, password, callback) {
  MongoClient.connect(url, function(err, client) {
    if(err) throw err;
    const db = client.db(dbName);
    const collection = db.collection('users');

    collection.findOne(
      {name: username},
      function( err, doc ) {
        if(err) throw err;
        callback(doc);
        client.close();
      }
    );
  });
};

module.exports.insertUser = function(doc, callback) {
  MongoClient.connect(url, function(err, client) {
    if(err) throw err;
    const db = client.db(dbName);
    const collection = db.collection('users');

    collection.insert(
      {
        email: doc.email,
        name: doc.name,
        surname: doc.surname,
        hash: bcrypt.hashSync(doc.password),
      }
      , function(err, doc) {
      if(err) throw err;
      callback(doc);
      client.close();
    });
  });
};

module.exports.findUsers = function(callback) {
  MongoClient.connect(url, function(err, client) {
    if(err) throw err;
    const db = client.db(dbName);
    const collection = db.collection('users');

    collection.find().toArray(function(err, docs) {
      if(err) throw err;
      callback(docs);
      client.close();
    });
  });
};

module.exports.findUser = function(id, callback) {
  MongoClient.connect(url, function(err, client) {
    if(err) throw err;
    const db = client.db(dbName);
    const collection = db.collection('users');

    collection.findOne({ _id: new mongo.ObjectId(id) }, (function(err, doc) {
      if(err) throw err;
      callback(doc);
      client.close();
    }));
  });
};

module.exports.updateUser = function(id, doc, callback) {
  MongoClient.connect(url, function(err, client) {
    if(err) throw err;
    const db = client.db(dbName);
    const collection = db.collection('users');

    collection.update(
      { _id: new mongo.ObjectId( id) },
      doc,
      function(err, doc) {
        if(err) throw err;
        callback(doc);
        client.close();
      }
    );
  });
};

module.exports.deleteUser = function(id, callback) {
  MongoClient.connect(url, function(err, client) {
    if(err) throw err;
    const db = client.db(dbName);
    const collection = db.collection('users');

    collection.remove( { _id: new mongo.ObjectId(id) }, function(err, doc) {
        if(err) throw err;
        callback( doc);
        client.close();
    });
  });
};




// WORKOUT

module.exports.createWorkout = function(doc, currentUserIdTemp, callback) {

  // doc.userRef =  DBRef("users", ObjectId("5adc40011460df075d84b1e5"));
  doc.userRef =  {"$ref" : "users", "$id" : currentUserIdTemp} // mongo detects and creates a DBRef... DBRef("users", "5adc40011460df075d84b1e5")
  doc.userId = currentUserIdTemp
  doc.journals = []

  MongoClient.connect(url, function(err, client) {
    if(err) throw err;
    const db = client.db(dbName);
    const collection = db.collection('workouts');

    collection.insert( doc, function(err, doc) {
      if(err) throw err;
      callback(doc);
      client.close();
    });

  });
};

module.exports.findWorkouts = function(callback) {
  MongoClient.connect(url, function(err, client) {
    if(err) throw err;
    const db = client.db(dbName);
    const collection = db.collection('workouts');

    collection.find({}).toArray(function(err, doc) {
      if(err) throw err;
      callback(doc);
      client.close();
    });
  });
};

module.exports.findWorkout = function(id, callback) {
  MongoClient.connect(url, function(err, client) {
    if(err) throw err;
    const db = client.db(dbName);
    const collection = db.collection('workouts');

    collection.findOne({ _id: new mongo.ObjectId(id) }, (function(err, doc) {
      if(err) throw err;
      callback(doc);
      client.close();
    }));
  });
};


module.exports.findWorkoutForUser = function(userId, callback) {

  MongoClient.connect(url, function(err, client) {
    if(err) throw err;
    const db = client.db(dbName);
    const collection = db.collection('workouts');

    collection.find({ userId: userId }).toArray( (function(err, doc) {
      if(err) throw err;
      callback(doc);
      client.close();
    }));
  });
};

// SETS

module.exports.createExercises = function(workoutId, doc, callback) {
  MongoClient.connect(url, function(err, client) {
    if(err) throw err;
    const db = client.db(dbName);
    const collection = db.collection('workouts')

    collection.findOneAndUpdate(
      { _id: new mongo.ObjectId(workoutId) },
      { $push:
        { "exercises":
          {
            "_exerciseId": new mongo.ObjectId(),
            "name" : doc.name,
            "weightGoal" : doc.weightGoal,
            "repsGoal" : doc.repsGoal,
            "timeGoal" : doc.timeGoal,
            "repTime" : doc.repTime,
            "numberOfSets" : doc.numberOfSets,
            "comment" : doc.comment,
            "breakTimeBetweenSets" : doc.breakTimeBetweenSets,
            "breakTimeAfterExercise" : doc.breakTimeAfterExercise,
            "image" : doc.image,
          }
        }
      },
      {
        // "upsert" : true,
        // "returnNewDocument" : true,
        "returnOriginal" : false, // returns document after update

      },
      function(err, doc) {
        if(err) throw err;
        callback(doc);
        client.close();
      }
    );
  });
};

module.exports.findExercises = function(id, callback) {
  MongoClient.connect(url, function(err, client) {
    if(err) throw err;
    const db = client.db(dbName);
    const collection = db.collection('exercises');

    collection.findOne({ _id: new mongo.ObjectId(id) }, (function(err, doc) {
      if(err) throw err;
      callback(doc);
      client.close();
    }));
  });
};

module.exports.addJournal = function(workoutId, doc, callback) {
  MongoClient.connect(url, function(err, client) {
    if(err) throw err;
    const db = client.db(dbName);
    const collection = db.collection('workouts')

    collection.findAndModify(
      { '_id' : mongo.ObjectId(workoutId) }, // query
      [['_id','asc']], // sort
      { // update object
        $push: {
          journals: {
            _journalId: new mongo.ObjectId(),
            StartDateTime: new Date(),
            FinishDateTime: null,
            exercises: []
          }
        }
      },
      {
        upsert: true,
        new: true
      }

    ).then( (doc) => {
      callback(doc)
    })
    .catch( (error) => {
      console.error(error)
    })

  });
};


module.exports.addExerciseToJournal = function(workoutId, journalId, doc, callback) {
  MongoClient.connect(url, function(err, client) {
    if(err) throw err;
    const db = client.db(dbName);
    const collection = db.collection('workouts')

    collection.findAndModify(
      { 'journals._journalId' : mongo.ObjectId(journalId) }, // query
      [['_journalId','asc']], // sort
      // update object
      {
        $push: {
          'journals.$.exercises': {
            _exerciseId: doc.exerciseId,
            weight: doc.weight,
            timeElapse: doc.elapsedTime,
            reps: doc.reps
          }
        }
      },
      {
        upsert: true,
        new: true
      }
    ).then( (doc) => {
      callback(doc)
    })
    .catch( (error) => {
      console.error(error)
    })

  });
};

module.exports.closeJournal = function(journalId, callback) {
  MongoClient.connect(url, function(err, client) {
    if(err) throw err;
    const db = client.db(dbName);
    const collection = db.collection('workouts')

    console.log('CLOSE DB', journalId)

    collection.findAndModify(
      { 'journals._journalId' : mongo.ObjectId(journalId) }, // query
      [['_journalId','asc']], // sort
      // update object
      {
        $set: {
          'journals.$.FinishDateTime': new Date()
        }
      },
      {
        upsert: false,
        new: true
      }
    ).then( (doc) => {
      callback(doc)
    })
    .catch( (error) => {
      console.error(error)
    })

  });
};

