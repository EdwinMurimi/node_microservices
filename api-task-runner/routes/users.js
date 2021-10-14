const express = require('express');

const router = express.Router();

const verifyToken = require('../middleware/auth');
const isAdmin = require('../middleware/admin');

const { signInHandler, signUpHandler, putUsersHandler, forgotPasswordHandler, getUsersHandler, normalToSupervisorHandler, supervisorToAdminHandler, adminToSupervisorHandler, supervisorToNormalHandler } = require('../controllers/userController');

router.post('/signin', signInHandler);
router.post('/signup', signUpHandler);

module.exports = router;