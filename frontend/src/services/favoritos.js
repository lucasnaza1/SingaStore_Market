import axios from "axios";

const favoritosAPI = axios.create({ baseURL: `${process.env.REACT_APP_API_URL || 'http://localhost:3001'}` })

async function getFavoritos() {
    const response = await favoritosAPI.get('/favoritos')

    return response.data
}

async function postFavoritos(id) {
    await favoritosAPI.post(`/favoritos/${id}`)
}

async function deleteFavoritos(id) {
    await favoritosAPI.delete(`/favoritos/${id}`)
}

export {
    getFavoritos,
    postFavoritos,
    deleteFavoritos
}   