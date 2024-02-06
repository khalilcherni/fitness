const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

const accRouter = require('./Routes/MenRoute')

const menRouter = require('./Routes/MenRoute')
const womenRouter= require ('./Routes/WomenRoute')
const proteinRouter =require ('./Routes/proteinRouter')
const productsRouter = require ('./Routes/productsRouter')
app.use(express.static(__dirname + '/../client/dist'));
app.use(cors());
app.use(express.json());
app.use('/api',menRouter)
app.use('/api',womenRouter)
app.use('/api',proteinRouter)
app.use('/api',productsRouter)

// Use the routers corr

app.get('/api', (req, res) => {
  res.send('Hello from the server!');
});

// Your database connection code goes here

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
