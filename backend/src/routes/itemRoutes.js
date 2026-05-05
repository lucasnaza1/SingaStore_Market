const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Rota de itens
router.get('/itens', itemController.getItens);

// Rotas de favoritos
router.get('/favoritos', itemController.getFavoritos);
router.post('/favoritos/:id', itemController.postFavorito);
router.delete('/favoritos/:id', itemController.deleteFavorito);

module.exports = router;
