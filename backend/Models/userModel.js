// models/userModel.js
const db = require('../Database/index');
const jwt = require('jsonwebtoken');

// Create a new user
exports.create = async (userData) => {
  const [result] = await db.query('INSERT INTO user SET ?', userData);
  const user = { id: result.insertId, ...userData };
  const token = generateToken(user.id);
  return { user, token };
};

// Get user by credentials (for login)
exports.getByCredentials = async (email, password) => {
  const [rows] = await db.query('SELECT * FROM user WHERE email = ? AND password = ?', [email, password]);
  return rows[0];
};

// Get user by ID
exports.getById = async (userId) => {
  const [rows] = await db.query('SELECT * FROM user WHERE id = ?', [userId]);
  return rows[0];
};

// Update user
exports.update = async (userId, userData) => {
  await db.query('UPDATE user SET ? WHERE id = ?', [userData, userId]);
  return { id: userId, ...userData };
};

// Delete user
exports.delete = async (userId) => {
  await db.query('DELETE FROM user WHERE id = ?', [userId]);
};

// Function to generate a JWT token
const generateToken = (userId) => {
  const token = jwt.sign({ userId }, 'yourSecretKey', { expiresIn: '1h' });
  return token;
};