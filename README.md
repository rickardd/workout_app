# Work out App

## SETUP UP VUE

> A Vue.js project

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

