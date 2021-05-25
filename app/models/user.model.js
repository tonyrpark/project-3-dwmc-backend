<<<<<<< HEAD
const mongoose = require('mongoose');

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        firstName:String,
        lastName:String,
        email:String,
        password:String,
    })
)

=======
const mongoose = require('mongoose');

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        firstName:String,
        lastName:String,
        email:String,
        password:String,
    })
)

>>>>>>> 3dd159bd1dac7483a22fe7d5ff9796751335d4b8
module.exports = User