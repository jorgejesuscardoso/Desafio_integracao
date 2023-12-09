USE socialbush;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(20) NOT NULL,
    password VARCHAR(16) NOT NULL,
    email VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE(username, email)
);
CREATE TABLE users_data (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(100),
    `age` INT NOT NULL,
    birth_day TIMESTAMP,
    users_id INT NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_user_data_users_id FOREIGN KEY (users_id) REFERENCES users(id)
);
