const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDatabase = require('./db');

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Middleware
// app.use('/employees', () => {
//     console.log('Middleware Running');
// });

// Routes 
app.get('/', (req, res) => {
    res.send('Hello World');
});

//app.get('/employees', (req, res) => {
//     res.send('Employees');
// });

connectDatabase();

const port = process.env.PORT || 3000; // Use the PORT environment variable if available, or default to 3000

const server = app.listen(port, () => {
    console.log(`ShopKart's Server is running on http://localhost:${port}`);
});
