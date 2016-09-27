var mongoose = require('mongoose');


var Schema = mongoose.Schema;
var userSchema = new Schema({
    id: String,
    username: String,

});


module.exports = mongoose.model('users', userSchema);
