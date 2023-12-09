const express = require('express');

const userDB = require('../db/userDB');

const router = express.Router();

router.post('/', async (req, res) => {
  const user = req.body;
  try {
    const [result] = await userDB.insert(user);
    res.status(201).json({
      message: `Novo usuário criado com sucesso!`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Erro ao criar novo usuário',
    });
  }
});

module.exports = router;
