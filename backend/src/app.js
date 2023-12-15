const express = require('express');
const cors = require('cors');
const usersRoutes = require('./routes/usersRoutes');
const userPhotosRoutes = require('./routes/userPhotosRoutes');
const path = require('path');

const app = express();
app.use('/profilePhotos', express.static('backend/uploads/profilePhotos'));
app.use('/banners', express.static('backend/uploads/profileBanners'));

app.use(cors());
app.use(express.json());

app.use('/photo', userPhotosRoutes);
app.use('/user', usersRoutes);

module.exports = app;