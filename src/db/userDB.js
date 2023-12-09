const conn = require('./connection');

const insert = (user) => conn.execute(
  'INSERT INTO users (username, password, email, created_at) VALUES (?, ?, ?, ?)',
  [user.username, user.password, user.email, user.created_at]
);

module.exports = {
  insert,
};
