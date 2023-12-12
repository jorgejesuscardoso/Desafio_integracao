const express = require('express');
const multer = require('multer');
const userDB = require('../db/userDB');
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'backend/uploads/profilePhotos');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

router.post('/upload', upload.single('photo'), async (req, res) => {
  res.status(201).json(`/${req.file.path}`);
});

module.exports = router;
