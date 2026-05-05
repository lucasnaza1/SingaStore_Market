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

// Dados de fallback caso o banco esteja offline
const mockItens = [
    { id: 1, nome: 'Frasco de Cintila Pura', quantidade: 50, tipo: 'berserk', preco: 150.0, src: 'pocao-hibrida.png' },
    { id: 2, nome: 'Tônico de Regeneração Quimtec', quantidade: 100, tipo: 'cura', preco: 75.5, src: 'pocao-vida.png' },
    { id: 3, nome: 'Inalador de Emergência de Zaun', quantidade: 30, tipo: 'imunidade', preco: 200.0, src: 'pocao-mana.png' },
    { id: 4, nome: 'Soro da Fúria de Warwick', quantidade: 15, tipo: 'berserk', preco: 500.0, src: 'pocao-hibrida.png' },
    { id: 5, nome: 'Bandagens Impregnadas de Ervas', quantidade: 200, tipo: 'cura', preco: 25.0, src: 'pocao-vida.png' },
    { id: 6, nome: 'Filtro de Ar de Piltover (Contaminado)', quantidade: 40, tipo: 'imunidade', preco: 120.0, src: 'pocao-mana.png' },
    { id: 7, nome: 'Elixir do Químico Louco', quantidade: 10, tipo: 'berserk', preco: 800.0, src: 'pocao-hibrida.png' },
    { id: 8, nome: 'Gel de Cicatrização Rápida', quantidade: 150, tipo: 'cura', preco: 45.0, src: 'pocao-vida.png' },
    { id: 9, nome: 'Barreira Cinética Miniaturizada', quantidade: 25, tipo: 'imunidade', preco: 350.0, src: 'pocao-mana.png' },
    { id: 10, nome: 'Extrato de Cogumelo de Teemo', quantidade: 60, tipo: 'berserk', preco: 95.0, src: 'pocao-hibrida.png' },
    { id: 11, nome: 'Infusão de Melancia de Ionia', quantidade: 80, tipo: 'cura', preco: 60.0, src: 'pocao-vida.png' },
    { id: 12, nome: 'Cápsula de Estase Estelar', quantidade: 5, tipo: 'imunidade', preco: 1200.0, src: 'pocao-mana.png' },
    { id: 13, nome: 'Óleo de Ignição Quimtec', quantidade: 100, tipo: 'berserk', preco: 55.0, src: 'pocao-hibrida.png' },
    { id: 14, nome: 'Antídoto Universal de Singed', quantidade: 45, tipo: 'cura', preco: 180.0, src: 'pocao-vida.png' },
    { id: 15, nome: 'Manto de Névoa Cinzenta', quantidade: 20, tipo: 'imunidade', preco: 420.0, src: 'pocao-mana.png' },
    { id: 16, nome: 'Estimulante de Adrenalina Quimtec', quantidade: 70, tipo: 'berserk', preco: 110.0, src: 'pocao-hibrida.png' },
    { id: 17, nome: 'Bálsamo de Alívio de Silco', quantidade: 35, tipo: 'cura', preco: 250.0, src: 'pocao-vida.png' },
    { id: 18, nome: 'Placa de Peito Reforçada (Descartável)', quantidade: 15, tipo: 'imunidade', preco: 600.0, src: 'pocao-mana.png' },
    { id: 19, nome: 'Destilado de Fogo de Bantam', quantidade: 90, tipo: 'berserk', preco: 85.0, src: 'pocao-hibrida.png' },
    { id: 20, nome: 'Poção Corrupta', quantidade: 120, tipo: 'cura', preco: 150.0, src: 'pocao-vida.png' },
    { id: 21, nome: 'Amuleto de Proteção Hextec (Instável)', quantidade: 12, tipo: 'imunidade', preco: 550.0, src: 'pocao-mana.png' },
    { id: 22, nome: 'Essência de Fúria Dracônica', quantidade: 8, tipo: 'berserk', preco: 1500.0, src: 'pocao-hibrida.png' },
    { id: 23, nome: 'Unguento de Lótus Negra', quantidade: 55, tipo: 'cura', preco: 130.0, src: 'pocao-vida.png' },
    { id: 24, nome: 'Escudo de Gás Denso', quantidade: 30, tipo: 'imunidade', preco: 280.0, src: 'pocao-mana.png' },
    { id: 25, nome: 'Vaporizador de Cintila V2', quantidade: 40, tipo: 'berserk', preco: 190.0, src: 'pocao-hibrida.png' },
    { id: 26, nome: 'Kit de Primeiros Socorros de Zaun', quantidade: 65, tipo: 'cura', preco: 90.0, src: 'pocao-vida.png' },
    { id: 27, nome: 'Inibidor de Dor Neurológico', quantidade: 22, tipo: 'imunidade', preco: 480.0, src: 'pocao-mana.png' },
    { id: 28, nome: 'Sorriso do Coringa (Gás do Riso)', quantidade: 50, tipo: 'berserk', preco: 140.0, src: 'pocao-hibrida.png' },
    { id: 29, nome: 'Água Rejuvenescendo do Poço', quantidade: 200, tipo: 'cura', preco: 20.0, src: 'pocao-vida.png' },
    { id: 30, nome: 'Casulo de Quimtanque Turbinado', quantidade: 10, tipo: 'imunidade', preco: 750.0, src: 'pocao-mana.png' }
];

let mockFavoritos = [];

// Exemplo de rota para itens
app.get('/itens', (req, res) => {
    pool.query('SELECT * FROM itens', (err, results) => {
        if (err) {
            console.error('Erro na query /itens (usando fallback):', err.message);
            res.json(mockItens);
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
            console.error('Erro na query /favoritos (usando fallback):', err.message);
            res.json(mockFavoritos);
            return;
        }
        res.json(results);
    });
});

app.post('/favoritos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('INSERT INTO favoritos (item_id) VALUES (?)', [id], (err, results) => {
        if (err) {
            console.error('Erro ao inserir favorito (usando fallback):', err.message);
            const item = mockItens.find(i => i.id === id);
            if (item && !mockFavoritos.find(f => f.id === id)) {
                mockFavoritos.push(item);
            }
            res.status(201).json({ message: 'Favorito adicionado (fallback)' });
            return;
        }
        res.status(201).json({ message: 'Favorito adicionado' });
    });
});

app.delete('/favoritos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('DELETE FROM favoritos WHERE item_id = ?', [id], (err, results) => {
        if (err) {
            console.error('Erro ao deletar favorito (usando fallback):', err.message);
            mockFavoritos = mockFavoritos.filter(f => f.id !== id);
            res.json({ message: 'Favorito removido (fallback)' });
            return;
        }
        res.json({ message: 'Favorito removido' });
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
