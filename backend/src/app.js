const express = require('express');
const cors = require('cors');
const usersRoutes = require('./routes/usersRoutes');
const userPhotosRoutes = require('./routes/userPhotosRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/photo', userPhotosRoutes);
app.use('/user', usersRoutes);

module.exports = app;