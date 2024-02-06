const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3005;
const accRouter = require('./Routes/MenRoute')
const UserRoutes=require("./Routes/userRoutes")
app.use(cors());
// app.use(cors({ origin: 'http://localhost:3005', credentials: true }));
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));
app.use('/api',accRouter)
app.use('/api',UserRoutes)
// Use the routers corr

app.get('/api', (req, res) => {
  res.send('Hello from the server!');
});

// Your database connection code goes here

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
