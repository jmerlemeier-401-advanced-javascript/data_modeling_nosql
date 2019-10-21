'use strict';

const mongoose = require('mongoose');

// Require your model

// Mongoose Server URI
const MONGOOSE_URI = 'mongodb://localhost:27017/class05';//use name of mongo DB

// Connect
//Takes 2 arguments
// 1. URI
// 2. An Options object
mongoose.connect(...);

// Do some work

// Disconnect
mongoose.disconnect();