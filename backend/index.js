const express = require('express');
const cors = require('cors');
require('dotenv').config();
const itemRoutes = require('./src/routes/itemRoutes');

const app = express();
const port = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Logger Middleware (Estilo Zaun)
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleTimeString()}] REQUISIÇÃO: ${req.method} ${req.url}`);
    next();
});

// Rotas
app.use('/', itemRoutes);

app.get('/', (req, res) => {
    res.json({ 
        status: 'Online', 
        message: 'Singastore API - Laboratório de Zaun',
        version: '1.1.0'
    });
});

app.listen(port, () => {
    console.log('--------------------------------------------------');
    console.log(`SERVIDOR ATIVO NA PORTA: ${port}`);
    console.log('SISTEMAS QUIMTEC INICIALIZADOS');
    console.log('--------------------------------------------------');
});
