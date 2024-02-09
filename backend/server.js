// backend/server.js

const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;

const app = express();
const PORT = process.env.PORT || 5000;

// Configuration for Cloudinary
cloudinary.config({
  cloud_name: 'dsrcopz7v',
  api_key: '967411671937849',
  api_secret: 'WV8xk7fnQKi357m-gkJv4MVesY8'
});

// Multer configuration
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Upload route
app.post('/upload', upload.single('File'), async (req, res) => {
  try {
    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.buffer, {
      upload_preset: 'hibahiba11'
    });

    res.json({ secure_url: result.secure_url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
