const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['single', 'multiple', 'boolean'],
    required: true
  },
  options: [{
    text: String,
    isCorrect: Boolean
  }]
});

module.exports = mongoose.model('Question', QuestionSchema);