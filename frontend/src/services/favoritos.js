import axios from "axios";

const apiBaseURL = import.meta.env.VITE_API_URL || 'http://localhost:3001'
const favoritosAPI = axios.create({ baseURL: apiBaseURL })

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
