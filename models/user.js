var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = new Schema({
    _id: String,
    email: String,
    username: String,
    type: number

});

module.exports = mongoose.model('users', userSchema);


