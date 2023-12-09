const express = require('express');
const usersRoutes = require('./routes/usersRoutes');

const app = express();

app.use(express.json());

app.use('/user', usersRoutes);

module.exports = app;