var express = require('express');
var router = express.Router();
const controller = require('../controller/auth')
const { check } = require("express-validator")
const roleMiddleware = require('../middleware/role')

router.post('/registration', [
    check('username', 'Username can not be empty').notEmpty(),
    check('password', 'Password length should be betwee 4 and 10').isLength({ min: 4, max: 10 }),
], controller.registration)

router.post('/login', controller.login)
router.get('/users', roleMiddleware(["ADMIN"]), controller.getUsers)

module.exports = router;