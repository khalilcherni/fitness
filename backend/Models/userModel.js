// userModel.js

const { query } = require('../Database/');
const jwt = require('jsonwebtoken');
const connection = require("../Database/");

// Function to generate a JWT token
const generateToken = (userId) => {
  const token = jwt.sign({ userId }, 'yourSecretKey', { expiresIn: '1h' });
  return token;
};

// Create a new user
exports.create = async (userData) => {
  try {
    const { email, password } = userData;
    console.log("Inserting user:", email, password);
    const result = await connection.query('INSERT INTO user (email, password) VALUES (?, ?)', [email, password]);
    console.log("Insert result:", result);
    
    if (!result || result.affectedRows !== 1 || !result.insertId) {
      throw new Error("Failed to insert user");
    }
    
    const insertId = result.insertId;
    const token = generateToken(insertId);
    return { userId: insertId, token };
  } catch (error) {
    throw error;
  }
};

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
