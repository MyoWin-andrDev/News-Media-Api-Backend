const router = require('express').Router();
const UserController = require('../controllers/user.controller');
const { validateBody, UserSchema } = require('../utils/facade');

router.post('/register', validateBody(UserSchema.register),UserController.register);

module.exports = router;