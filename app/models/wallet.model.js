<<<<<<< HEAD
const mongoose = require('mongoose');

const Wallet = new mongoose.model(
    "Wallet",
    new mongoose.Schema({
        currency:"String",
        privateKey:"String",
        address:"String",
        owner:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
})
)
=======
const mongoose = require('mongoose');

const Wallet = new mongoose.model(
    "Wallet",
    new mongoose.Schema({
        currency:"String",
        privateKey:"String",
        address:"String",
        owner:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
})
)
>>>>>>> 3dd159bd1dac7483a22fe7d5ff9796751335d4b8
module.exports = Wallet;