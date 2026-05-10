CREATE DATABASE IF NOT EXISTS singastore;
USE singastore;

CREATE TABLE IF NOT EXISTS itens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    quantidade INT NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    src VARCHAR(255) DEFAULT 'default-potion.png',
    descricao TEXT
);

CREATE TABLE IF NOT EXISTS favoritos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item_id INT,
    FOREIGN KEY (item_id) REFERENCES itens(id) ON DELETE CASCADE
);

INSERT INTO itens (id, nome, quantidade, tipo, preco, src, descricao) VALUES 
(1, 'Frasco de Cintila Pura', 50, 'berserk', 150.0, 'pocao-hibrida.png', 'Uma dose concentrada de Shimmer. Aumenta drasticamente a força física, ao custo da sanidade.'),
(2, 'Tônico de Regeneração Quimtec', 100, 'cura', 75.5, 'pocao-vida.png', 'Acelera a reconstrução celular através de mutações controladas.'),
(3, 'Inalador de Emergência de Zaun', 30, 'imunidade', 200.0, 'pocao-mana.png', 'Filtra toxinas ambientais e estabiliza os sinais vitais instantaneamente.'),
(4, 'Soro da Fúria de Warwick', 15, 'berserk', 500.0, 'pocao-hibrida.png', 'Extrato derivado de tecidos mutantes. Desperta instintos predatórios incontroláveis.'),
(5, 'Bandagens Impregnadas de Ervas', 200, 'cura', 25.0, 'pocao-vida.png', 'Tratamento básico para cortes e queimaduras ácidas.'),
(6, 'Filtro de Ar de Piltover (Contaminado)', 40, 'imunidade', 120.0, 'pocao-mana.png', 'Tecnologia de Piltover "reaproveitada" para as condições de Zaun.'),
(7, 'Elixir do Químico Louco', 10, 'berserk', 800.0, 'pocao-hibrida.png', 'A obra-prima de Singed. Não nos responsabilizamos por efeitos colaterais permanentes.'),
(8, 'Gel de Cicatrização Rápida', 150, 'cura', 45.0, 'pocao-vida.png', 'Gel viscoso que sela feridas abertas em segundos.'),
(9, 'Barreira Cinética Miniaturizada', 25, 'imunidade', 350.0, 'pocao-mana.png', 'Gera um campo de força instável contra projéteis.'),
(10, 'Extrato de Cogumelo de Teemo', 60, 'berserk', 95.0, 'pocao-hibrida.png', 'Neurotoxina potente que causa alucinações e frenesi.'),
(11, 'Infusão de Melancia de Ionia', 80, 'cura', 60.0, 'pocao-vida.png', 'Um gosto suave de terras distantes para acalmar o sistema nervoso.'),
(12, 'Cápsula de Estase Estelar', 5, 'imunidade', 1200.0, 'pocao-mana.png', 'Congela o tempo ao redor do usuário por alguns segundos.'),
(13, 'Óleo de Ignição Quimtec', 100, 'berserk', 55.0, 'pocao-hibrida.png', 'Aumenta a combustão interna do organismo.'),
(14, 'Antídoto Universal de Singed', 45, 'cura', 180.0, 'pocao-vida.png', 'Capaz de neutralizar 99% das toxinas conhecidas em Runeterra.'),
(15, 'Manto de Névoa Cinzenta', 200, 'imunidade', 420.0, 'pocao-mana.png', 'Torna o usuário parcialmente intangível por curtos períodos.'),
(16, 'Estimulante de Adrenalina Quimtec', 70, 'berserk', 110.0, 'pocao-hibrida.png', 'Sobrecarga adrenal para situações de vida ou morte.'),
(17, 'Bálsamo de Alívio de Silco', 35, 'cura', 250.0, 'pocao-vida.png', 'Estabiliza mutações agressivas de Cintila.'),
(18, 'Placa de Peito Reforçada (Descartável)', 15, 'imunidade', 600.0, 'pocao-mana.png', 'Proteção bruta contra impactos físicos.'),
(19, 'Destilado de Fogo de Bantam', 90, 'berserk', 85.0, 'pocao-hibrida.png', 'Bebida forte que aquece o sangue e os punhos.'),
(20, 'Poção Corrupta', 120, 'cura', 150.0, 'pocao-vida.png', 'Recupera energia enquanto queima quem ousa te tocar.'),
(21, 'Amuleto de Proteção Hextec (Instável)', 12, 'imunidade', 550.0, 'pocao-mana.png', 'Tecnologia roubada que ainda emite pulsações de energia.'),
(22, 'Essência de Fúria Dracônica', 8, 'berserk', 1500.0, 'pocao-hibrida.png', 'O auge da experimentação. Poder destrutivo absoluto.'),
(23, 'Unguento de Lótus Negra', 55, 'cura', 130.0, 'pocao-vida.png', 'Ervas raras tratadas quimicamente para cura profunda.'),
(24, 'Escudo de Gás Denso', 30, 'imunidade', 280.0, 'pocao-mana.png', 'Cria uma nuvem protetora que obscurece a visão do inimigo.'),
(25, 'Vaporizador de Cintila V2', 40, 'berserk', 190.0, 'pocao-hibrida.png', 'Versão otimizada para absorção via aérea.'),
(26, 'Kit de Primeiros Socorros de Zaun', 65, 'cura', 90.0, 'pocao-vida.png', 'Ferramentas de sutura e desinfetantes industriais.'),
(27, 'Inibidor de Dor Neurológico', 22, 'imunidade', 480.0, 'pocao-mana.png', 'Desliga os receptores de dor do cérebro temporariamente.'),
(28, 'Sorriso do Coringa (Gás do Riso)', 50, 'berserk', 140.0, 'pocao-hibrida.png', 'Gás que causa espasmos musculares e euforia maníaca.'),
(29, 'Água Rejuvenescendo do Poço', 200, 'cura', 20.0, 'pocao-vida.png', 'Água "limpa" (para os padrões de Zaun).'),
(30, 'Casulo de Quimtanque Turbinado', 10, 'imunidade', 750.0, 'pocao-mana.png', 'Proteção máxima contra a degradação física.');
