CREATE DATABASE taskmanagement CHARSET utf8mb4;
use taskmanagement;
CREATE TABLE users(
	userId INT AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    signDate TIMESTAMP default current_timestamp,
    PRIMARY KEY(userId)
);
ALTER TABLE users AUTO_INCREMENT=101000;

CREATE TABLE tasks(
	taskId INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    dueDate timestamp,
    priority BOOL,
    status BOOL DEFAULT 0,
	userId INT,
    PRIMARY KEY(taskId),
    CONSTRAINT FK_usertask FOREIGN KEY (userId)
    REFERENCES users(userId)
);


-- drop table users;
-- drop table tasks;

INSERT INTO users (username, password)
    values ('test1', 'test1');

DROP PROCEDURE IF EXISTS insertUser_data
DELIMITER //
CREATE PROCEDURE insertUser_data()
BEGIN
DECLARE i INT DEFAULT 1;
WHILE (i<=15) DO
	INSERT INTO users (username, password)
    values ( concat('test', i), md5(concat('test', i)));
    SET i= i+1;
END WHILE;
END;
// 
DELIMITER ;

CALL insertUser_data();

SELECT*FROM users;

delete from users where userId <= 200000;
