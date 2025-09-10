const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const authMiddleware = require('../middleware/authMiddleware');

// Middleware to check admin role
function adminOnly(req, res, next) {
  if (req.user.role !== 'admin') return res.status(403).json({ message: 'Admins only' });
  next();
}

// Get all students
router.get('/', authMiddleware, adminOnly, async (req, res) => {
  const students = await User.find({ role: 'student' }).select('-password');
  res.json(students);
});

// Add a student
router.post('/', authMiddleware, adminOnly, async (req, res) => {
  const { name, email, password, course } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ message: 'Email already exists' });
  const bcrypt = require('bcryptjs');
  const hashedPassword = await bcrypt.hash(password, 10);
  const student = new User({ name, email, password: hashedPassword, role: 'student', course });
  await student.save();
  res.status(201).json(student);
});

// Edit a student
router.put('/:id', authMiddleware, adminOnly, async (req, res) => {
  const { name, email, course } = req.body;
  const student = await User.findByIdAndUpdate(
    req.params.id,
    { name, email, course },
    { new: true }
  ).select('-password');
  res.json(student);
});

// Delete a student
router.delete('/:id', authMiddleware, adminOnly, async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'Student deleted' });
});

module.exports = router;