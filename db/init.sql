CREATE DATABASE IF NOT EXISTS singastore;
USE singastore;

CREATE TABLE IF NOT EXISTS itens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    src VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS favoritos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item_id INT,
    FOREIGN KEY (item_id) REFERENCES itens(id)
);

INSERT INTO itens (nome, src) VALUES ('vida', 'pocao-vida.png');
INSERT INTO itens (nome, src) VALUES ('mana', 'pocao-mana.png');
INSERT INTO itens (nome, src) VALUES ('hibrida', 'pocao-hibrida.png');
INSERT INTO itens (nome, src) VALUES ('solas simbioticas', 'solas-simbioticas.png');
