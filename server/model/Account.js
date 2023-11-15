const mongoose = require('mongoose');
const schema = mongoose.Schema;

const clientAccount = new schema({
  id: {type: mongoose.Types.ObjectId},
  fullname: {type: String},
  email: {type: String},
  username: {type: String},
  password: {type: String},
  role: {type: String}

}, {timestamps: true});

const account = mongoose.model('accountclients', clientAccount);
module.exports = account;