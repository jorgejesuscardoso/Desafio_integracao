const express = require('express');

const userDB = require('../db/userDB');

const router = express.Router();

router.post('/register', async (req, res) => {
  const newUser = req.body;
  try {
    if (!newUser.username || !newUser.password || !newUser.email) {
      return res.status(400).json({
        message: 'É necessário informar username, password e email',
      });
    }
    const [result] = await userDB.insertNewUser(newUser);
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

router.post('/:id/data', async (req, res) => {
  const user_data = req.body;
  const { id } = req.params;
  const isNumber = /^\d+$/.test(id);
  if (!user_data.first_name || !id || !isNumber) {
    return res.status(400).json({
      message: 'É necessário informar ao menos o nome e o id do usuário é obrigátorio',
    });
  }
  try {
    const [result] = await userDB.insertUserData(user_data, id);
    res.status(201).json({
      message: `Dados do usuário ${user_data.first_name} criados com sucesso!`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Erro ao inserir os dados do usuário',
    });
  }
});

router.post('/login', async (req, res) => {
  const user = req.body;
  try {
    if (!user.username || !user.password) {
      return res.status(400).json({
        message: 'É necessário informar username e password',
      });
    }
    const [result] = await userDB.findAllUsers();
    const userFound = result.find((userDB) => userDB.username === user.username);

    if (userFound.password === user.password) {
      const { password, ...userFoundWithoutPassword } = userFound;
      return res.status(200).json({
        message: 'Login realizado com sucesso!', user: userFoundWithoutPassword, token: userFound.id,
      });
    } else {
      return res.status(401).json({
        message: 'Usuário ou senha incorreta',
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Erro ao fazer login',
    });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await userDB.findAllUsers();
    res.status(200).json(users[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Erro ao buscar usuários',
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userDB.findUser(id);
    res.status(200).json(user[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Erro ao buscar dados do usuário',
    });
  }
});

router.get('/:id/data', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userDB.findUserData(id);

    const photoPath = `http://localhost:3001/profilePhotos/${user[0][0].photo}`;

    const bannerPath = `http://localhost:3001/profileBanners/${user[0][0].banner}`;

    const usarData = photoPath ? { ...user[0][0], photo: photoPath, banner: bannerPath } : user[0][0];

    res.status(200).json(usarData);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Erro ao buscar dados do usuário',
    });
  }
});

router.put('/:id', async (req, res) => {
  const user = req.body;
  const { id } = req.params;
  const isNumber = /^\d+$/.test(id);
  if (!id || !isNumber) {
    return res.status(400).json({
      message: 'É necessário informar username, password, email e id do usuário',
    });
  }
  try {
    const [result] = await userDB.updateUser(user, id);
    res.status(200).json({
      message: `Usuário ${user.username} atualizado com sucesso!`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Erro ao atualizar usuário',
    });
  }
});

router.put('/:id/data', async (req, res) => {
  const user_data = req.body;
  const { id } = req.params;
  const isNumber = /^\d+$/.test(id);
  if (!id || !isNumber) {
    return res.status(400).json({
      message: 'É necessário informar ao menos o nome e o id do usuário é obrigátorio',
    });
  }
  try {
    const [result] = await userDB.updateUserData(user_data, id);
    res.status(200).json({
      message: `Dados atualizados com sucesso!`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Erro ao atualizar dados do usuário',
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const isNumber = /^\d+$/.test(id);
    if (!id || !isNumber) {
      return res.status(400).json({
        message: 'É necessário informar o id do usuário',
      });
    }
    const [result] = await userDB.deleteUser(id);
    res.status(200).json({
      message: `Usuário deletado com sucesso!`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Erro ao deletar usuário',
    });
  }
});

router.delete('/:id/data', async (req, res) => {
  try {
    const { id } = req.params;
    const isNumber = /^\d+$/.test(id);
    if (!id || !isNumber) {
      return res.status(400).json({
        message: 'É necessário informar o id do usuário',
      });
    }
    const [result] = await userDB.deleteUserData(id);
    res.status(200).json({
      message: `Dados do usuário deletados com sucesso!`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Erro ao deletar dados do usuário',
    });
  }
});

module.exports = router;
