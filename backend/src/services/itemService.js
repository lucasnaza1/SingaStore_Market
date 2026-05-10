const pool = require('../config/database');

const mockItens = [
    { id: 1, nome: 'Frasco de Cintila Pura', quantidade: 50, tipo: 'berserk', preco: 150.0, src: 'pocao-hibrida.png', descricao: 'Uma dose concentrada de Shimmer. Aumenta drasticamente a força física, ao custo da sanidade.' },
    { id: 2, nome: 'Tônico de Regeneração Quimtec', quantidade: 100, tipo: 'cura', preco: 75.5, src: 'pocao-vida.png', descricao: 'Acelera a reconstrução celular através de mutações controladas.' },
    { id: 3, nome: 'Inalador de Emergência de Zaun', quantidade: 30, tipo: 'imunidade', preco: 200.0, src: 'pocao-mana.png', descricao: 'Filtra toxinas ambientais e estabiliza os sinais vitais instantaneamente.' },
    { id: 4, nome: 'Soro da Fúria de Warwick', quantidade: 15, tipo: 'berserk', preco: 500.0, src: 'pocao-hibrida.png', descricao: 'Extrato derivado de tecidos mutantes. Desperta instintos predatórios incontroláveis.' },
    { id: 5, nome: 'Bandagens Impregnadas de Ervas', quantidade: 200, tipo: 'cura', preco: 25.0, src: 'pocao-vida.png', descricao: 'Tratamento básico para cortes e queimaduras ácidas.' },
    { id: 6, nome: 'Filtro de Ar de Piltover (Contaminado)', quantidade: 40, tipo: 'imunidade', preco: 120.0, src: 'pocao-mana.png', descricao: 'Tecnologia de Piltover "reaproveitada" para as condições de Zaun.' },
    { id: 7, nome: 'Elixir do Químico Louco', quantidade: 10, tipo: 'berserk', preco: 800.0, src: 'pocao-hibrida.png', descricao: 'A obra-prima de Singed. Não nos responsabilizamos por efeitos colaterais permanentes.' },
    { id: 8, nome: 'Gel de Cicatrização Rápida', quantidade: 150, tipo: 'cura', preco: 45.0, src: 'pocao-vida.png', descricao: 'Gel viscoso que sela feridas abertas em segundos.' },
    { id: 9, nome: 'Barreira Cinética Miniaturizada', quantidade: 25, tipo: 'imunidade', preco: 350.0, src: 'pocao-mana.png', descricao: 'Gera um campo de força instável contra projéteis.' },
    { id: 10, nome: 'Extrato de Cogumelo de Teemo', quantidade: 60, tipo: 'berserk', preco: 95.0, src: 'pocao-hibrida.png', descricao: 'Neurotoxina potente que causa alucinações e frenesi.' },
    { id: 11, nome: 'Infusão de Melancia de Ionia', quantidade: 80, tipo: 'cura', preco: 60.0, src: 'pocao-vida.png', descricao: 'Um gosto suave de terras distantes para acalmar o sistema nervoso.' },
    { id: 12, nome: 'Cápsula de Estase Estelar', quantidade: 5, tipo: 'imunidade', preco: 1200.0, src: 'pocao-mana.png', descricao: 'Congela o tempo ao redor do usuário por alguns segundos.' },
    { id: 13, nome: 'Óleo de Ignição Quimtec', quantidade: 100, tipo: 'berserk', preco: 55.0, src: 'pocao-hibrida.png', descricao: 'Aumenta a combustão interna do organismo.' },
    { id: 14, nome: 'Antídoto Universal de Singed', quantidade: 45, tipo: 'cura', preco: 180.0, src: 'pocao-vida.png', descricao: 'Capaz de neutralizar 99% das toxinas conhecidas em Runeterra.' },
    { id: 15, nome: 'Manto de Névoa Cinzenta', quantidade: 20, tipo: 'imunidade', preco: 420.0, src: 'pocao-mana.png', descricao: 'Torna o usuário parcialmente intangível por curtos períodos.' },
    { id: 16, nome: 'Estimulante de Adrenalina Quimtec', quantidade: 70, tipo: 'berserk', preco: 110.0, src: 'pocao-hibrida.png', descricao: 'Sobrecarga adrenal para situações de vida ou morte.' },
    { id: 17, nome: 'Bálsamo de Alívio de Silco', quantidade: 35, tipo: 'cura', preco: 250.0, src: 'pocao-vida.png', descricao: 'Estabiliza mutações agressivas de Cintila.' },
    { id: 18, nome: 'Placa de Peito Reforçada (Descartável)', quantidade: 15, tipo: 'imunidade', preco: 600.0, src: 'pocao-mana.png', descricao: 'Proteção bruta contra impactos físicos.' },
    { id: 19, nome: 'Destilado de Fogo de Bantam', quantidade: 90, tipo: 'berserk', preco: 85.0, src: 'pocao-hibrida.png', descricao: 'Bebida forte que aquece o sangue e os punhos.' },
    { id: 20, nome: 'Poção Corrupta', quantidade: 120, tipo: 'cura', preco: 150.0, src: 'pocao-vida.png', descricao: 'Recupera energia enquanto queima quem ousa te tocar.' },
    { id: 21, nome: 'Amuleto de Proteção Hextec (Instável)', quantidade: 12, tipo: 'imunidade', preco: 550.0, src: 'pocao-mana.png', descricao: 'Tecnologia roubada que ainda emite pulsações de energia.' },
    { id: 22, nome: 'Essência de Fúria Dracônica', quantidade: 8, tipo: 'berserk', preco: 1500.0, src: 'pocao-hibrida.png', descricao: 'O auge da experimentação. Poder destrutivo absoluto.' },
    { id: 23, nome: 'Unguento de Lótus Negra', quantidade: 55, tipo: 'cura', preco: 130.0, src: 'pocao-vida.png', descricao: 'Ervas raras tratadas quimicamente para cura profunda.' },
    { id: 24, nome: 'Escudo de Gás Denso', quantidade: 30, tipo: 'imunidade', preco: 280.0, src: 'pocao-mana.png', descricao: 'Cria uma nuvem protetora que obscurece a visão do inimigo.' },
    { id: 25, nome: 'Vaporizador de Cintila V2', quantidade: 40, tipo: 'berserk', preco: 190.0, src: 'pocao-hibrida.png', descricao: 'Versão otimizada para absorção via aérea.' },
    { id: 26, nome: 'Kit de Primeiros Socorros de Zaun', quantidade: 65, tipo: 'cura', preco: 90.0, src: 'pocao-vida.png', descricao: 'Ferramentas de sutura e desinfetantes industriais.' },
    { id: 27, nome: 'Inibidor de Dor Neurológico', quantidade: 22, tipo: 'imunidade', preco: 480.0, src: 'pocao-mana.png', descricao: 'Desliga os receptores de dor do cérebro temporariamente.' },
    { id: 28, nome: 'Sorriso do Coringa (Gás do Riso)', quantidade: 50, tipo: 'berserk', preco: 140.0, src: 'pocao-hibrida.png', descricao: 'Gás que causa espasmos musculares e euforia maníaca.' },
    { id: 29, nome: 'Água Rejuvenescendo do Poço', quantidade: 200, tipo: 'cura', preco: 20.0, src: 'pocao-vida.png', descricao: 'Água "limpa" (para os padrões de Zaun).' },
    { id: 30, nome: 'Casulo de Quimtanque Turbinado', quantidade: 10, tipo: 'imunidade', preco: 750.0, src: 'pocao-mana.png', descricao: 'Proteção máxima contra a degradação física.' }
];

let mockFavoritos = [];

async function getAllItens() {
    try {
        const [rows] = await pool.query('SELECT * FROM itens');
        return rows;
    } catch (error) {
        console.warn('Usando mock de itens (banco offline)');
        return mockItens;
    }
}

async function getFavoritos() {
    try {
        const query = `
            SELECT i.* FROM itens i 
            JOIN favoritos f ON i.id = f.item_id
        `;
        const [rows] = await pool.query(query);
        return rows;
    } catch (error) {
        console.warn('Usando mock de favoritos (banco offline)');
        return mockFavoritos;
    }
}

async function addFavorito(id) {
    try {
        await pool.query('INSERT INTO favoritos (item_id) VALUES (?)', [id]);
    } catch (error) {
        console.warn('Adicionando favorito ao mock (banco offline)');
        const item = mockItens.find(i => i.id === parseInt(id));
        if (item && !mockFavoritos.find(f => f.id === item.id)) {
            mockFavoritos.push(item);
        }
    }
}

async function removeFavorito(id) {
    try {
        await pool.query('DELETE FROM favoritos WHERE item_id = ?', [id]);
    } catch (error) {
        console.warn('Removendo favorito do mock (banco offline)');
        mockFavoritos = mockFavoritos.filter(f => f.id !== parseInt(id));
    }
}

module.exports = {
    getAllItens,
    getFavoritos,
    addFavorito,
    removeFavorito
};
