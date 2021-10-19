const mongoose = require('mongoose');

//Schema representing the Devices document in the DB.
module.exports = mongoose.model('Users', new mongoose.Schema({
    id: String,
    name: String,
    age: String,
    city: String,
    phone: String,
    occupation: String,
    song: String,
    email: String,
    password:String
}, { collection : 'Users' }));