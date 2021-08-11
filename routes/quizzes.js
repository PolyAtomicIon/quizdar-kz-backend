var express = require('express');
var router = express.Router();
const controller = require('../controller/quiz')
const authMiddleware = require('../middleware/auth')
const roleMiddleware = require('../middleware/role')

router.get('/', controller.getAllQuizzes);
router.get('/:id', controller.getQuizById);
router.post('/', authMiddleware, controller.saveQuiz);
router.put('/:id', authMiddleware, controller.updateQuizById);
router.delete('/:id', authMiddleware, controller.deleteQuizById);

module.exports = router;