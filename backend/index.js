const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

const accRouter = require('./Routes/MenRoute')

const menRouter = require('./Routes/MenRoute')
const womenRouter= require ('./Routes/WomenRoute')

const gainRoutes = require("./Routes/gainRoutes");
const loseRoutes = require("./Routes/loseRoutes");

app.use(cors());
app.use(express.json());
app.use('/api',menRouter)
app.use('/api',womenRouter)

// Use the routers correctly
app.use("/api", gainRoutes);
app.use("/lose", loseRoutes);

// Serve your React app or other static assets
app.use(express.static('public')); // Assuming your static files are in the 'public' directory

app.get('/api', (req, res) => {
  res.send('Hello from the server!');
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
