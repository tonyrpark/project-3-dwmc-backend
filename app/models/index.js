<<<<<<< HEAD
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db= {};
db.mongoose = mongoose;

db.user = require('./user.model');
db.wallet = require('./wallet.model');
module.exports = db;  
=======
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db= {};
db.mongoose = mongoose;

db.user = require('./user.model');
db.wallet = require('./wallet.model');
module.exports = db;  
>>>>>>> 3dd159bd1dac7483a22fe7d5ff9796751335d4b8
