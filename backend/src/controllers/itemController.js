const itemService = require('../services/itemService');

async function getItens(req, res) {
    try {
        const itens = await itemService.getAllItens();
        res.json(itens);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar itens' });
    }
}

async function getFavoritos(req, res) {
    try {
        const favoritos = await itemService.getFavoritos();
        res.json(favoritos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar favoritos' });
    }
}

async function postFavorito(req, res) {
    try {
        const { id } = req.params;
        await itemService.addFavorito(id);
        res.status(201).json({ message: 'Favorito adicionado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar favorito' });
    }
}

async function deleteFavorito(req, res) {
    try {
        const { id } = req.params;
        await itemService.removeFavorito(id);
        res.json({ message: 'Favorito removido com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao remover favorito' });
    }
}

module.exports = {
    getItens,
    getFavoritos,
    postFavorito,
    deleteFavorito
};
