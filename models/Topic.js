const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: String
});

module.exports = mongoose.model('Topic', TopicSchema);