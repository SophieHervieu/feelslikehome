CREATE DATABASE IF NOT EXISTS feelslikehome CHARSET utf8mb4;

USE feelslikehome;

CREATE TABLE IF NOT EXISTS users(
	id_users INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    `password` VARCHAR(100) NOT NULL,
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
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    id_users INT NOT NULL
)ENGINE=innoDB;

CREATE TABLE IF NOT EXISTS forum_thread(
	id_forum_thread INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(50) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    id_users INT NOT NULL
)ENGINE=innoDB;

CREATE TABLE IF NOT EXISTS forum_post(
	id_forum_post INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(50) NOT NULL,
    content TEXT NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    id_forum_thread INT NOT NULL,
    id_users INT NOT NULL
)ENGINE=innoDB;

CREATE TABLE IF NOT EXISTS user_favorite(
	id_user_favorite INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    name VARCHAR(50) NOT NULL
)ENGINE=innoDB;

CREATE TABLE IF NOT EXISTS quizz_question(
	id_quizz_question INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    question_text VARCHAR(100) NOT NULL
)ENGINE=innoDB;

CREATE TABLE IF NOT EXISTS quizz_answer_choice (
    id_quizz_answer_choice INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    id_quizz_question INT NOT NULL,
    id_quizz_result INT NOT NULL
) ENGINE=innoDB;

CREATE TABLE IF NOT EXISTS quizz_result(
	id_quizz_result INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    result_title VARCHAR(50),
    result_text TEXT
)ENGINE=innoDB;

CREATE TABLE IF NOT EXISTS theme(
	id_theme INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(50) NOT NULL
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

ALTER TABLE quizz_answer_choice
ADD CONSTRAINT fk_quizz_question_choice
FOREIGN KEY (id_quizz_question)
REFERENCES quizz_question(id_quizz_question)
ON DELETE CASCADE;

ALTER TABLE quizz_answer_choice
ADD CONSTRAINT fk_quizz_result_choice
FOREIGN KEY (id_quizz_result)
REFERENCES quizz_result(id_quizz_result)
ON DELETE CASCADE;

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

-- INSERT INTO `quizz_question` (`id_quizz_question`, `question_text`) VALUES
-- (1, 'Laquelle de ces photos vous inspire le plus ?'),
-- (2, 'Quelle décoration de salon vous correspond le mieux ?'),
-- (3, 'Quelle décoration de cuisine vous correspond le mieux ?');

-- --
-- -- Déchargement des données de la table `quizz_result`
-- --

-- INSERT INTO `quizz_result` (`id_quizz_result`, `result_title`, `result_text`) VALUES
-- (1, 'Scandinave', 'blablabla'),
-- (2, 'Industriel', 'kdokezfdkezpf'),
-- (3, 'Boho Chic', 'frezoiofi'),
-- (4, 'Transitionnel', 'fvgokhtr'),
-- (5, 'Japandi', 'thrhyhy'),
-- (6, 'Midcentury Modern', 'edzfezr');

-- INSERT INTO `quizz_answer_choice` (`id_quizz_answer_choice`, `image_url`, `id_quizz_question`, `id_quizz_result`) VALUES
-- (13, 'https://www.mydomaine.com/thmb/t6ypIZC0b2B952hHICOUNfiRHaw=/2000x0/filters:no_upscale():strip_icc()/transitional-design-ideas-3-bespoke-only-wilton-a95faa62a93c454583162a94d1f92118.jpeg', 1, 1),
-- (14, 'https://www.mydomaine.com/thmb/t6ypIZC0b2B952hHICOUNfiRHaw=/2000x0/filters:no_upscale():strip_icc()/transitional-design-ideas-3-bespoke-only-wilton-a95faa62a93c454583162a94d1f92118.jpeg', 1, 2),
-- (15, 'https://www.mydomaine.com/thmb/t6ypIZC0b2B952hHICOUNfiRHaw=/2000x0/filters:no_upscale():strip_icc()/transitional-design-ideas-3-bespoke-only-wilton-a95faa62a93c454583162a94d1f92118.jpeg', 1, 3),
-- (16, 'https://www.mydomaine.com/thmb/t6ypIZC0b2B952hHICOUNfiRHaw=/2000x0/filters:no_upscale():strip_icc()/transitional-design-ideas-3-bespoke-only-wilton-a95faa62a93c454583162a94d1f92118.jpeg', 1, 4),
-- (17, 'https://www.mydomaine.com/thmb/t6ypIZC0b2B952hHICOUNfiRHaw=/2000x0/filters:no_upscale():strip_icc()/transitional-design-ideas-3-bespoke-only-wilton-a95faa62a93c454583162a94d1f92118.jpeg', 1, 5),
-- (18, 'https://www.mydomaine.com/thmb/t6ypIZC0b2B952hHICOUNfiRHaw=/2000x0/filters:no_upscale():strip_icc()/transitional-design-ideas-3-bespoke-only-wilton-a95faa62a93c454583162a94d1f92118.jpeg', 1, 6);

