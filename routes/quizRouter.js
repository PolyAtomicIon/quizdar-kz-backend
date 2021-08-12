var express = require('express');
var router = express.Router();
const controller = require('../controller/quizController')
const authMiddleware = require('../middleware/authMiddleware')
const roleMiddleware = require('../middleware/roleMiddleware')
const quizMiddleware = require('../middleware/quizMiddleware')

router.get('/', controller.getAllQuizzes);
router.get('/:id', controller.getQuizById);
router.post('/', [authMiddleware, quizMiddleware], controller.saveQuiz);
router.put('/:id', authMiddleware, controller.updateQuizById);
router.delete('/:id', authMiddleware, controller.deleteQuizById);

module.exports = router;