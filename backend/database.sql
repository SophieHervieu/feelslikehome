CREATE DATABASE IF NOT EXISTS feelslikehome CHARSET utf8mb4;

USE feelslikehome;

CREATE TABLE IF NOT EXISTS users(
	id_users INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    `password` VARCHAR(100) NOT NULL UNIQUE,
    profile_picture VARCHAR(200),
    quizz_result TEXT,
    created_at DATETIME NOT NULL,
    updated_at DATETIME
)ENGINE=innoDB;

CREATE TABLE IF NOT EXISTS article(
	id_article INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(50) NOT NULL,
    content TEXT,
    image VARCHAR(200),
    affiliate_links TEXT,
    created_at DATETIME NOT NULL,
    updated_at DATETIME,
    id_users INT NOT NULL
)ENGINE=innoDB;

CREATE TABLE IF NOT EXISTS forum_thread(
	id_forum_thread INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(50) NOT NULL,
    created_at DATETIME NOT NULL,
    id_users INT NOT NULL
)ENGINE=innoDB;

CREATE TABLE IF NOT EXISTS forum_post(
	id_forum_post INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(50) NOT NULL,
    content TEXT NOT NULL,
    created_at DATETIME NOT NULL,
    id_forum_thread INT NOT NULL,
    id_users INT NOT NULL
)ENGINE=innoDB;

CREATE TABLE IF NOT EXISTS user_favorite(
	id_user_favorite INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    created_at DATETIME NOT NULL
)ENGINE=innoDB;

CREATE TABLE IF NOT EXISTS quizz_question(
	id_quizz_question INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    question_text VARCHAR(100)
)ENGINE=innoDB;

CREATE TABLE IF NOT EXISTS quizz_result(
	id_quizz_result INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    result_title VARCHAR(50),
    result_text TEXT
)ENGINE=innoDB;

CREATE TABLE IF NOT EXISTS theme(
	id_theme INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(50)
)ENGINE=innoDB;

-- Tables d'association
CREATE TABLE IF NOT EXISTS user_add_favorite(
	id_users INT,
    id_user_favorite INT,
    PRIMARY KEY(id_users, id_user_favorite)
)ENGINE=innoDB;

CREATE TABLE IF NOT EXISTS favorite_article(
	id_article INT,
    id_user_favorite INT,
    PRIMARY KEY(id_article, id_user_favorite)
)ENGINE=innoDB;

CREATE TABLE IF NOT EXISTS answer(
	id_users INT,
    id_quizz_question INT,
    PRIMARY KEY(id_users, id_quizz_question)
)ENGINE=innoDB;

CREATE TABLE IF NOT EXISTS display(
	id_quizz_question INT,
    id_quizz_result INT,
    PRIMARY KEY(id_quizz_question, id_quizz_result)
)ENGINE=innoDB;

CREATE TABLE IF NOT EXISTS results(
	id_quizz_result INT,
    id_theme INT,
    PRIMARY KEY(id_quizz_result, id_theme)
)ENGINE=innoDB;

CREATE TABLE IF NOT EXISTS user_read_result(
	id_users INT,
    id_quizz_result INT,
    PRIMARY KEY(id_users, id_quizz_result)
)ENGINE=innoDB;

-- Ajout des clés étrangères
ALTER TABLE article 
ADD CONSTRAINT fk_user_article
FOREIGN KEY (id_users)
REFERENCES users(id_users)
ON DELETE CASCADE;

ALTER TABLE forum_thread
ADD CONSTRAINT fk_thread_user
FOREIGN KEY (id_users)
REFERENCES users(id_users)
ON DELETE CASCADE;

ALTER TABLE forum_post
ADD CONSTRAINT fk_post_user
FOREIGN KEY (id_users)
REFERENCES users(id_users)
ON DELETE CASCADE;

ALTER TABLE forum_post
ADD CONSTRAINT fk_post_thread
FOREIGN KEY (id_forum_thread)
REFERENCES forum_thread(id_forum_thread)
ON DELETE CASCADE;

ALTER TABLE user_add_favorite
ADD CONSTRAINT fk_users_add
FOREIGN KEY (id_users)
REFERENCES users(id_users);

ALTER TABLE user_add_favorite
ADD CONSTRAINT fk_favorite_add
FOREIGN KEY (id_user_favorite)
REFERENCES user_favorite(id_user_favorite);

ALTER TABLE favorite_article
ADD CONSTRAINT fk_article_add
FOREIGN KEY (id_article)
REFERENCES article(id_article);

ALTER TABLE favorite_article
ADD CONSTRAINT fk_favorite_article_add
FOREIGN KEY (id_user_favorite)
REFERENCES user_favorite(id_user_favorite);

ALTER TABLE answer
ADD CONSTRAINT fk_user_answer
FOREIGN KEY (id_users)
REFERENCES users(id_users);

ALTER TABLE answer
ADD CONSTRAINT fk_answer_question
FOREIGN KEY (id_quizz_question)
REFERENCES quizz_question(id_quizz_question);

ALTER TABLE display
ADD CONSTRAINT fk_quizz_question_display
FOREIGN KEY (id_quizz_question)
REFERENCES quizz_question(id_quizz_question);

ALTER TABLE display
ADD CONSTRAINT fk_quizz_result_display
FOREIGN KEY (id_quizz_result)
REFERENCES quizz_result(id_quizz_result);

ALTER TABLE results
ADD CONSTRAINT fk_quizz_results
FOREIGN KEY (id_quizz_result)
REFERENCES quizz_result(id_quizz_result);

ALTER TABLE results
ADD CONSTRAINT fk_quizz_theme
FOREIGN KEY (id_theme)
REFERENCES theme(id_theme);

ALTER TABLE user_read_result
ADD CONSTRAINT fk_result_read
FOREIGN KEY (id_users)
REFERENCES users(id_users);

ALTER TABLE user_read_result
ADD CONSTRAINT fk_quizz_results_read
FOREIGN KEY (id_quizz_result)
REFERENCES quizz_result(id_quizz_result);