const express = require('express');
const cors = require('cors');
const usersRoutes = require('./routes/usersRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/user', usersRoutes);

module.exports = app;