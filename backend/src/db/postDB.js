const conn = require('./connection');

async function getPosts(id) {
 try {
  if (id) {
    const sql = `
    SELECT post.content as 'content', post.create_time as create_at, user_data.first_name as 'user_name', user_data.last_name as 'last_name',user_data.photo as 'photo', user.id as 'user_id', post.post_id as 'post_id'
    FROM post
    INNER JOIN user ON post.user_id = user.id
    INNER JOIN user_data ON user.id = user_data.user_id
    WHERE post.user_id = ?
    `;
    const [posts] = await conn.query(sql, [id]);
    if (posts.length === 0) {
      return ["Ops! Ainda não há postagens na rede!"];
    }
    return posts;
  }
  if (!id) {
    const sql = `
    SELECT post.content as 'content', post.create_time, user_data.first_name as 'user_name', user_data.last_name as 'last_name',user_data.photo as 'photo', user.id as 'user_id', post.post_id as 'post_id'
    FROM post
    INNER JOIN user ON post.user_id = user.id
    INNER JOIN user_data ON user.id = user_data.user_id
    `;
    const [posts] = await conn.query(sql);

    if (posts.length === 0) {
      return ["Ops! Ainda não há postagens na rede!"];
    }

  return posts;
  }
 } catch (err) {
  throw new Error("Erro ao buscar posts");
  return null;
 }
}
const insertPost = async (content, user_id) => {
  try {
    const sql = `
    INSERT INTO post (content, user_id, create_time)
    VALUES (?, ?, NOW())
    `;
    const [result] = await conn.query(sql, [content, user_id]);
    return result;
  } catch (err) {
    throw new Error("Erro ao inserir post");
  }
}

const updatePost = async (content, id) => {
  try {
    const sql = `
    UPDATE post
    SET content = ?
    WHERE post_id = ?
    `;
    const [result] = await conn.query(sql, [content, id]);
    return result;
  } catch (err) {
    throw new Error("Erro ao atualizar post");
  }
}

const deletePost = async (id) => {
  try {
    const sql = `
    DELETE FROM post
    WHERE post_id = ?
    `;
    const [result] = await conn.query(sql, [id]);
    return result;
  } catch (err) {
    throw new Error("Erro ao deletar post");
  }
}

module.exports = {
  getPosts,
  insertPost,
  deletePost,
  updatePost,
};