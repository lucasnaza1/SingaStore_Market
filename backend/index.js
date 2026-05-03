const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Configuração da conexão com MySQL usando Pool
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'db',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'singastore',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Teste de conexão
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL (Pool):', err.message);
        return;
    }
    console.log('Conectado ao MySQL via Pool com sucesso!');
    connection.release();
});

app.get('/', (req, res) => {
    res.send('Singastore Backend rodando!');
});

// Exemplo de rota para itens
app.get('/itens', (req, res) => {
    pool.query('SELECT * FROM itens', (err, results) => {
        if (err) {
            console.error('Erro na query /itens:', err.message);
            res.status(500).json({ error: 'Erro ao buscar itens' });
            return;
        }
        res.json(results);
    });
});

// Rotas para favoritos
app.get('/favoritos', (req, res) => {
    const query = `
        SELECT i.* FROM itens i 
        JOIN favoritos f ON i.id = f.item_id
    `;
    pool.query(query, (err, results) => {
        if (err) {
            console.error('Erro na query /favoritos:', err.message);
            res.status(500).json({ error: 'Erro ao buscar favoritos' });
            return;
        }
        res.json(results);
    });
});

app.post('/favoritos/:id', (req, res) => {
    const id = req.params.id;
    pool.query('INSERT INTO favoritos (item_id) VALUES (?)', [id], (err, results) => {
        if (err) {
            console.error('Erro ao inserir favorito:', err.message);
            res.status(500).json({ error: 'Erro ao adicionar favorito' });
            return;
        }
        res.status(201).json({ message: 'Favorito adicionado' });
    });
});

app.delete('/favoritos/:id', (req, res) => {
    const id = req.params.id;
    pool.query('DELETE FROM favoritos WHERE item_id = ?', [id], (err, results) => {
        if (err) {
            console.error('Erro ao deletar favorito:', err.message);
            res.status(500).json({ error: 'Erro ao remover favorito' });
            return;
        }
        res.json({ message: 'Favorito removido' });
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
