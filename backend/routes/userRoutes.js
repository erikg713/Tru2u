const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);

module.exports = router;
const express = require('express');
const {
  createUser,
  getUserByUid,
  updateUserRoles,
  deleteUser,
} = require('../controllers/userController');

const router = express.Router();

// CRUD Endpoints
router.post('/', createUser); // Create user
router.get('/:uid', getUserByUid); // Read user by UID
router.put('/:uid', updateUserRoles); // Update user roles
router.delete('/:uid', deleteUser); // Delete user

module.exports = router;
const { loginUser, refreshToken } = require('../controllers/userController');
router.post('/login', loginUser);
router.get('/refresh-token', refreshToken);
const { getAllUsers } = require('../controllers/userController');
router.get('/admin/all', getAllUsers);
