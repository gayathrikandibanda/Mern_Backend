const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const User = require('../models/userModel');

// Register route
router.post('/register', register);

// Login route
router.post('/login', login);

// Update student profile (only for logged-in student)
router.put('/me', authMiddleware, async (req, res) => {
  const { name, email, course } = req.body;
  const user = await User.findByIdAndUpdate(
    req.user._id,
    { name, email, course },
    { new: true }
  ).select('-password');
  res.json({ user });
});

module.exports = router;