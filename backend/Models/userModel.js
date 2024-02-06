// userModel.js

const { query } = require('../Database/');
const jwt = require('jsonwebtoken');
const connection = require("../Database/");

// Create a new user
// userModel.js

// Create a new user
exports.create = async (userData) => {
  try {
    const { email, password } = userData;
    console.log("Inserting user:", email, password);
    const result = await connection.query('INSERT INTO user (email, password) VALUES (?, ?)', [email, password]);
    console.log("Insert result:", result);
    
    // Correct the conditional check
    if (!result || result.affectedRows !== 1 || !result.insertId) {
      throw new Error("Failed to insert user");
    }
    
    const insertId = result.insertId;
    const user = { id: insertId, email, password };
    const token = generateToken(insertId);
    return { user, token };
  } catch (error) {
    throw error;
  }
};

// Rest of your code...

// Rest of your code...


// Get user by credentials (for login)
exports.getByCredentials = async (email, password) => {
  try {
    const [rows] = await query('SELECT * FROM user WHERE email = ? AND password = ?', [email, password]);
    if (!rows || rows.length === 0) {
      throw new Error('User not found with the provided credentials');
    }
    return rows[0];
  } catch (error) {
    throw error;
  }
};


// Get user by ID
exports.getById = async (userId) => {
  const [rows] = await query('SELECT * FROM user WHERE id = ?', [userId]);
  return rows[0];
};

// Update user
exports.update = async (userId, userData) => {
  await query('UPDATE user SET ? WHERE id = ?', [userData, userId]);
  return { id: userId, ...userData };
};

// Delete user
exports.delete = async (userId) => {
  await query('DELETE FROM user WHERE id = ?', [userId]);
};

// Function to generate a JWT token
const generateToken = (userId) => {
  const token = jwt.sign({ userId }, 'yourSecretKey', { expiresIn: '1h' });
  return token;
};
