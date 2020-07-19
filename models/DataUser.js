const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  name: { type: String },
  city: { type: String },
  user: { type: Types.ObjectId, ref: 'User' },
});

module.exports = model('DataUser', schema);
