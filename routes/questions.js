const express = require('express');
const router = express.Router();
const {getTopics,getQuestionsByTopic,addQuestion} = require('../controllers/questionController');

// routes.get(/)
router.get('/topics', getTopics);
router.get('/question/:topicName', getQuestionsByTopic);
router.post('/question', addQuestion);

module.exports = router;
