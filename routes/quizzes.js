var express = require('express');
var router = express.Router();
const controller = require('../controller/quiz')

router.get('/', controller.getAllQuizzes);

router.get('/:id', controller.getQuizById);

router.post('/', controller.saveQuiz);

router.put('/:id', controller.updateQuizById);

router.delete('/:id', controller.deleteQuizById);

module.exports = router;