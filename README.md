# Workout App

## RUN Project

./ Root

``npm run start // runs on http://localhost:8080`` 

./backend
``npm run start // runs on http://localhost:3000``

Anywhere
``mongod // start the database``
``mongo // start the shell	``

## Front end Build and Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



## SETUP UP NODE/EXPRESS

``` bash
# get into backend folder
cd backend

# install dependencies
npm install

# Run project
npm run start

# runs on port http://localhost:3000/
```


## MongoDB setup

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition

``brew update``

``brew install mongodb``

***Create folder to write data***

``mkdir -p /data/db // keep this path for easier setup. ``

``chmod 777 // set read and write permission to both data and data/db``

``mongod // run database``


## How this project is set up.

### Vue

Root directory is installed with vue-cli with test, eslint and webpack

### Node/Express

The backend direcorty is installed with express-generator



## Mongo DB shell commands
```
show dbs
use <db>
show collections	// Print a list of all collections for current database
show users	// Print a list of users for current database.
show roles	// Print a list of all roles, both user-defined and built-in, for the current database.
show profile	// Print the five most recent operations that took 1 millisecond or more. See documentation on the database profiler for more information.
show databases	Print a list of all available databases.

db.workouts.find() // shows all records in the collection called workouts

db.workout.insertOne()	Insert a new document into the collection.
db.workout.insertMany()	Insert multiple new documents into the collection.
db.workout.updateOne()	Update a single existing document in the collection.
db.workout.updateMany()	Update multiple existing documents in the collection.
db.workout.save()	Insert either a new document or update an existing document in the collection.
db.workout.deleteOne()	Delete a single document from the collection.
db.workout.deleteMany()	Delete documents from the collection.
db.workout.drop()	Drops or removes completely the collection.
db.workout.createIndex()	Create a new index on the collection if the index does not exist; otherwise, the operation has no effect.
db.getSiblingDB()	Return a reference to another database using this same connection without explicitly switching the current database. This allows for cross database queries.
```