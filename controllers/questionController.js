const Question = require('../models/Question');
const Topic = require('../models/Topic');

// const contributeQuestion = async (req, res) => {
//   try {
//     const { topic, text, type, options } = req.body;
    
//     let existingTopic = await Topic.findOne({ name: topic });
//     if (!existingTopic) {
//       existingTopic = new Topic({ name: topic });
//       await existingTopic.save();
//     }

//     const newQuestion = new Question({
//       topic,
//       text,
//       type,
//       options
//     });

//     const savedQuestion = await newQuestion.save();
//     res.status(201).json(savedQuestion);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

const getTopics = async (req, res) => {
  try {
    const topics = await Topic.find();
    res.json(topics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getQuestionsByTopic = async (req, res) => {
  try {
    const topicName = req.params.topicName;
    const questions = await Question.aggregate([
      { $match: { topic: topicName } },
      { $sample: { size: 5 } }
    ]);
    
    if (questions.length === 0) {
      return res.status(404).json({ message: 'No questions found for this topic' });
    }
    
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addQuestion = async (req, res) => {
  try {
    const { topic, text, type, options } = req.body;

    if (!topic || !text || !type || !options || options.length === 0) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    let existingTopic = await Topic.findOne({ name: topic });
    if (!existingTopic) {
      existingTopic = new Topic({ name: topic });
      await existingTopic.save();
    }

    const newQuestion = new Question({
      topic,
      text,
      type,
      options
    });

    const savedQuestion = await newQuestion.save();
    res.status(201).json(savedQuestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {addQuestion,getTopics,getQuestionsByTopic};