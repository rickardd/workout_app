const MongoClient = require('mongodb').MongoClient;
const mongo = require('mongodb');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';

// Database Name
const dbName = 'workout_app';

module.exports.insertUser = function(doc, callback) {
  MongoClient.connect(url, function(err, client) {
    if(err) throw err;
    const db = client.db(dbName);
    const collection = db.collection('users');

    collection.insert( doc, function(err, doc) {
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

module.exports.createWorkout = function(doc, callback) {
  console.log( doc );
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


// SETS

module.exports.createSet = function(workoutId, doc, callback) {
  MongoClient.connect(url, function(err, client) {
    if(err) throw err;
    const db = client.db(dbName);
    const collection = db.collection('workouts')

    console.log(workoutId, "---------");

    collection.findOneAndUpdate(
      { _id: new mongo.ObjectId(workoutId) },
      { $push:
        { "sets": 
          { 
            "name" : doc.name,
            "weightGoal" : doc.weightGoal,
            "repsGoal" : doc.repsGoal,
            "timeGoal" : doc.timeGoal,
            "repTime" : doc.repTime,
            "numberOfSets" : doc.numberOfSets,
            "comment" : doc.comment,
            "image" : doc.image,
          }
        }
      },
      {
        // "upsert" : true
        "returnNewDocument" : true
      },
      function(err, doc) {
        if(err) throw err;
        callback(doc);
        client.close();
      }
    );
  });
};

module.exports.findSet = function(id, callback) {
  MongoClient.connect(url, function(err, client) {
    if(err) throw err;
    const db = client.db(dbName);
    const collection = db.collection('sets');

    collection.findOne({ _id: new mongo.ObjectId(id) }, (function(err, doc) {
      if(err) throw err;
      callback(doc);
      client.close();
    }));
  });
};


// JOURNALS

module.exports.createJournal = function(workoutId, doc, callback) {
  MongoClient.connect(url, function(err, client) {
    if(err) throw err;
    const db = client.db(dbName);
    const collection = db.collection('workouts')

    collection.findOneAndUpdate(
      { _id: new mongo.ObjectId(workoutId) },
      { $push:
        { "journals": 
          { 
            "weight" : doc.weight,
            "reps" : doc.reps,
            "elapseTime" : doc.elapsedTime,
          }
        }
      },
      {},
      function(err, doc) {
        if(err) throw err;
        callback(doc);
        client.close();
      }
    );
  });
};

