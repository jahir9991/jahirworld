var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var guestSchema = new Schema({
    email: String,
    name: String
});

module.exports = mongoose.model('pictures', guestSchema);


