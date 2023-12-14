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
  
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'Arquivo não enviado.' });
        }

        
        const fileName = req.file.originalname;
        const userId = req.body.id; 

        await userDB.insertUserImage(fileName, userId);

       res.status(200).json({ message: 'Arquivo enviado com sucesso!' });
    } catch (error) {
        console.error("Erro no upload do arquivo:", error);
        res.status(500).json({ error: 'Ocorreu um erro durante o upload.' });
    }
});

module.exports = router;
