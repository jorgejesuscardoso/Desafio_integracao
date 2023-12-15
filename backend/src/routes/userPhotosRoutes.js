const express = require('express');
const multer = require('multer');
const userDB = require('../db/userDB');
const router = express.Router();
const path = require('path');
const fs = require('fs');


const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		let dir = `backend/uploads/profilePhotos`;		
		cb(null, dir);
	},
	filename: (req, file, cb) => {
		const userId = req.body.id;
		let fileType = 'photo';

		if (req.baseUrl === '/banner') {
			fileType = 'banner';
		}

		const extension = path.extname(file.originalname);
		const newFileName = `${fileType}_user_${userId}${extension}` ;
		cb(null, newFileName);
	}
});
const storage2 = multer.diskStorage({
	destination: (req, file, cb) => {
		let dir = `backend/uploads/profilePhotos`;		
		cb(null, dir);
	},
	filename: (req, file, cb) => {
		const userId = req.body.id;

		const extension = path.extname(file.originalname);
		const newFileName = `photo_user_${userId}${extension}` ;
		cb(null, newFileName);
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
		const newFileName = `photo_user_${userId}${path.extname(fileName)}`;
		await userDB.insertUserImage(newFileName, userId);

		res.status(200).json({ message: 'Arquivo enviado com sucesso!' });
	} catch (error) {
		console.error("Erro no upload do arquivo:", error);
		res.status(500).json({ error: 'Ocorreu um erro durante o upload.' });
}
});
 

module.exports = router;
