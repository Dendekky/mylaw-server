const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Attendees = new Schema({
    name: {
      type: 'String',
      required: true,
      trim: true
    },
    email: {
      type: 'String',
      required: true,
      trim: true,
      unique: true
    },
    category: {
      type: 'String',
      required: true,
      trim: true,
    }
  });

Attendees
.virtual('url')
.get(function () {
  return '/attendees/' + this._id;
});


  module.exports = mongoose.model('Attendees', Attendees);