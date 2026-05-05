const mysql = require('mysql2');
require('dotenv').config();

const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'singastore',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

const pool = mysql.createPool(dbConfig);

// Teste de conexão com log mais descritivo
pool.getConnection((err, connection) => {
    if (err) {
        console.error('--------------------------------------------------');
        console.error('ERRO DE CONEXÃO COM O BANCO DE DADOS:');
        console.error(`Host: ${dbConfig.host}`);
        console.error(`Erro: ${err.message}`);
        console.error('Certifique-se de que o MySQL está rodando.');
        console.error('Se estiver rodando fora do Docker, use DB_HOST=localhost');
        console.error('--------------------------------------------------');
        return;
    }
    console.log(`Conectado ao MySQL com sucesso no host: ${dbConfig.host}`);
    connection.release();
});

module.exports = pool.promise(); // Usando promise para async/await
