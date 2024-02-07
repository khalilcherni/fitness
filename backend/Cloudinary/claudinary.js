// const express = require('express');
// const cloudinary = require('cloudinary').v2;
// const multer = require('multer');
// const { CloudinaryStorage } = require('multer-storage-cloudinary');

// const app = express();

// // Configure Cloudinary
// cloudinary.config({
//   cloud_name: 'dsrcopz7v',
//   api_key: '967411671937849',
//   api_secret: 'WV8xk7fnQKi357m-gkJv4MVesY8'
// });

// // Configure multer storage for Cloudinary
// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: 'your_folder_name', // Optional folder in Cloudinary
//     allowed_formats: ['jpg', 'png'],
//     // Add more configuration options as needed
//   },
// });

// // Set up multer to handle multipart/form-data
// const parser = multer({ storage: storage });

// // Define a POST route to handle image uploads
// app.post('/upload', parser.single('image'), (req, res) => {
//   // Check if file is present in the request
//   if (!req.file) {
//     return res.status(400).json({ message: 'No file uploaded' });
//   }

//   // Return the uploaded image URL from Cloudinary
//   res.json({ imageUrl: req.file.path });
// });


