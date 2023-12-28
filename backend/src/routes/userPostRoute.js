const express = require('express');
const { getPosts, insertPost } = require('../db/postDB');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const getPost = await getPosts();

    const postWithUrl = getPost.map((post) => {
      const photoUrl = `http://localhost:3001/profilePhotos/${post.photo}`;
      return { ...post, photoUrl };
    }); 

    res.status(200).json(postWithUrl);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Erro ao buscar posts',
    });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const getPost = await getPosts(id);

    const postWithUrl = getPost.map((post) => {
      const photoUrl = `http://localhost:3001/profilePhotos/${post.photo}`;
      return { ...post, photoUrl };
    }); 

    res.status(200).json(postWithUrl);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Erro ao buscar posts',
    });
  }
});

router.post('/', async (req, res) => {
  const { content, user_id } = req.body;
  try {
    if (!content || !user_id) {
      return res.status(400).json({
        message: 'Os campos "conteúdo" e "id do usuário" são obrigatórios',
      });
    }
    const result = await insertPost(content, user_id);
    res.status(201).json({ message: "Post criado com sucesso", post_id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Erro ao criar post',
    });
  }
});

module.exports = router;