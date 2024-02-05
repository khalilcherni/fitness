// userController.js
const User =require ("../Models/userModel")
const jwt = require('jsonwebtoken');

// Function to generate a JWT token
const generateToken = (userId) => {
  const token = jwt.sign({ userId }, 'yourSecretKey', { expiresIn: '1h' });
  return token;
};

// Register a new user
exports.registerUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Log in user and generate JWT token
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Replace this with your actual authentication logic (e.g., verify credentials)
    // For simplicity, assuming a simple email/password check
    const user = await User.getByCredentials(email, password);

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = generateToken(user._id);

    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Middleware to check for a valid token
exports.authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Authorization token is missing' });
  }

  try {
    const decoded = jwt.verify(token, 'yourSecretKey');
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

// Get user profile with JWT authentication
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.getById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update user profile with JWT authentication
exports.updateUserProfile = async (req, res) => {
  try {
    const user = await User.update(req.user.userId, req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete user account with JWT authentication
exports.deleteUser = async (req, res) => {
  try {
    await User.delete(req.user.userId);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};