const conn = require('./connection');

const insertNewUser = (user) => conn.execute(
  'INSERT INTO user (username, password, email) VALUES (?, ?, ?)',
  [user.username, user.password, user.email]
);

const insertUserData = (data, id) => conn.execute(
  'INSERT INTO user_data (first_name, last_name, birth_day, user_id, country, ct_email, ct_phone, ct_whatsapp, phone, notification, address, city, state) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
  [data.first_name, data.last_name, data.birth_day, id, data.country, data.ct_email, data.ct_phone, data.ct_whatsapp, data.phone, data.notification, data.address, data.city, data.state]
);


const insertUserImage = (image, id) => conn.execute(
  'UPDATE user_data SET photo = ? WHERE user_id = ?',
  [image, id]
);

const insertUserBanner = (banner, id) => conn.execute(
  'UPDATE user_data SET banner = ? WHERE user_id = ?',
  [banner, id]
);

const findAllUsers = () => conn.execute(
  'SELECT * FROM user'
);

const findUser = (id) => conn.execute(
  'SELECT * FROM user WHERE id = ?',
  [id]
);

const findUserData = (id) => conn.execute(
  'SELECT * FROM user_data WHERE user_id = ?',
  [id]
);

const updateUser = (user, id) => {
  const columns = [];
  const values = [];

  if (user.username) {
    columns.push('username = ?');
    values.push(user.username);
  }
  if (user.password) {
    columns.push('password = ?');
    values.push(user.password);
  }
  if (user.email) {
    columns.push('email = ?');
    values.push(user.email);
  }
  if (columns.length === 0) {
    return Promise.resolve();
  }
  const updateQuery = `UPDATE user SET ${columns.join(', ')} WHERE id = ?`;
  values.push(id);

  return conn.execute(updateQuery, values);
};


const updateUserData = (data, id) => {
  const columns = [];
  const values = [];

  if (data.first_name) {
    columns.push('first_name = ?');
    values.push(data.first_name);
  }
  if (data.last_name) {
    columns.push('last_name = ?');
    values.push(data.last_name);
  }
  if (data.age) {
    columns.push('age = ?');
    values.push(data.age);
  }
  if (data.birth_day) {
    columns.push('birth_day = ?');
    values.push(data.birth_day);
  }
  if (columns.length === 0) {
    return Promise.resolve(); // Ou lance um erro, dependendo do caso
  }
  const updateQuery = `UPDATE user_data SET ${columns.join(', ')} WHERE user_id = ?`;
  values.push(id);

  return conn.execute(updateQuery, values);
};


const deleteUser = (id) => conn.execute(
  'DELETE FROM user WHERE id = ?',
  [id]
);

const deleteUserData = (id) => conn.execute(
  'DELETE FROM user_data WHERE user_id = ?',
  [id]
);

module.exports = {
  insertNewUser,
  insertUserData,
  findAllUsers,
  findUser,
  findUserData,
  updateUser,
  updateUserData,
  deleteUser,
  deleteUserData,
  insertUserImage,
  insertUserBanner,
};
