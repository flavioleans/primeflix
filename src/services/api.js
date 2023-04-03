// Base url https://api.themoviedb.org/3/
//url da APImovie/now_playing?api_key=1b0948c4891ead7de0327d4f1436e22a&language=pt-BR

import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
