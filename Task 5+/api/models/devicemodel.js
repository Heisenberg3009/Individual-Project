const mongoose = require('mongoose');

//Schema representing the Devices document in the DB.
module.exports = mongoose.model('Devices', new mongoose.Schema({
  devicename: String,
  devicetype: String,
  devicenumber: Number
}, { collection : 'Devices' }));