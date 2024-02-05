const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3005;
const accRouter = require('./Routes/MenRoute')

app.use(cors());

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));
app.use('/api',accRouter)
// Use the routers corr

app.get('/api', (req, res) => {
  res.send('Hello from the server!');
});

// Your database connection code goes here

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
