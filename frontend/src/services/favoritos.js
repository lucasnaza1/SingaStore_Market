import axios from "axios";

const favoritosAPI = axios.create({ baseURL: `${process.env.REACT_APP_API_URL || 'http://localhost:3001'}` })

async function getFavoritos() {
    try {
        const response = await favoritosAPI.get('/favoritos')
        return response.data
    } catch (error) {
        console.error('Erro ao buscar favoritos:', error)
        return []
    }
}

async function postFavoritos(id) {
    try {
        await favoritosAPI.post(`/favoritos/${id}`)
    } catch (error) {
        console.error('Erro ao adicionar favorito:', error)
    }
}

async function deleteFavoritos(id) {
    try {
        await favoritosAPI.delete(`/favoritos/${id}`)
    } catch (error) {
        console.error('Erro ao remover favorito:', error)
    }
}

export {
    getFavoritos,
    postFavoritos,
    deleteFavoritos
}   