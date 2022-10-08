const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config()

const mongoConnectionString = "mongodb://localhost:27017/<your-db-name>" // Your mongodb connection string goes here

mongoose.connect(mongoConnectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4,
}).then(() => {
    console.log('Database connected')
});

const app = express();

app.use(express.json());

const routes = require('./routes/router');

app.use('/api', routes)

app.listen(3000, () => {
    console.log(`Listening on http://localhost:${3000}`);
});
